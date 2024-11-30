import { Component, OnInit } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-hotel-password',
  templateUrl: './change-hotel-password.component.html',
  styleUrls: ['./change-hotel-password.component.css']
})
export class ChangeHotelPasswordComponent implements OnInit {
  profile: any = {}; // To hold profile details, including password inputs
  successmsg: string = ''; // For displaying success messages
  errorMessage: string = ''; // For displaying error messages

  constructor(private router: Router, private hotelservice: HotelregisterserviceService) {}

  ngOnInit(): void {
    const hid = localStorage.getItem('hotelid'); // Get hotel ID from local storage
    if (!hid) {
      this.router.navigate(['/hotellogin']); // Redirect if not logged in
      return;
    }

    const profilesuccessmsg = sessionStorage.getItem('profilesuccessmsg');
    if (profilesuccessmsg) {
      this.successmsg = profilesuccessmsg;
      sessionStorage.removeItem('profilesuccessmsg');
    }

    this.loadProfile(hid); // Load the current profile details
  }

  // Load profile information
  loadProfile(hid: string): void {
    this.hotelservice.displayProfile(hid).subscribe(
      (data) => {
        this.profile = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load profile. Please try again.';
        console.error('Error loading profile:', error);
      }
    );
  }

  // Handle form submission
  onSubmit(): void {
    if (!this.profile.oldpass || !this.profile.newpass || !this.profile.newpasscheck) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.profile.newpass !== this.profile.newpasscheck) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const hid = localStorage.getItem('hotelid');
    if (!hid) {
      this.errorMessage = 'Invalid session. Please log in again.';
      return;
    }

    // Prepare FormData for the API call
    const formData = new FormData();
    formData.append('password', this.profile.oldpass);
    formData.append('newpassword', this.profile.newpass);

    // Call the service to change the password
    this.hotelservice.changePassword(hid, formData).subscribe(
      (response) => {
        this.successmsg = 'Password changed successfully.';
        this.errorMessage = '';
        this.profile.oldpass = '';
        this.profile.newpass = '';
        this.profile.newpasscheck = '';
      },
      (error) => {
        if (error.status === 400) {
          this.errorMessage = error.error || 'The old password is incorrect.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
        console.error('Error changing password:', error);
      }
    );
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
