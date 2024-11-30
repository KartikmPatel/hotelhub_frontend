import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelprofile',
  templateUrl: './hotelprofile.component.html',
  styleUrls: ['./hotelprofile.component.css']
})
export class HotelprofileComponent {
  profile: any = {};
  selectedFile: File | null = null;
  successmsg: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private hotelservice: HotelregisterserviceService) {}

  ngOnInit(): void {
    const hid = localStorage.getItem('hotelid');
    if (!hid) {
      this.router.navigate(['/hotellogin']);
      return;
    }

    const profilesuccessmsg = sessionStorage.getItem('profilesuccessmsg');
    if (profilesuccessmsg) {
      this.successmsg = profilesuccessmsg;
      sessionStorage.removeItem('profilesuccessmsg');
    }

    this.loadProfile(hid);
  }

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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  validateForm(): boolean {
    if (!this.profile.hname || !this.profile.email || !this.profile.city) {
      this.errorMessage = 'All fields are required.';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.profile.email)) {
      this.errorMessage = 'Invalid email format.';
      return false;
    }
    return true;
  }

  onSubmit() {
    this.errorMessage = '';
  
    // Validation checks
    if (!this.profile.hname || !this.profile.email || !this.profile.city) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }
  
    const formData = new FormData();
    formData.append('hname', this.profile.hname);
    formData.append('email', this.profile.email);
    formData.append('city', this.profile.city);
  
    // If a new file is selected, append it to the form data
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    // If an ID exists, it's an edit operation
    if (this.profile.id) {
      formData.append('id', this.profile.id); // Add the ID for the update
      this.hotelservice.updateProfile(this.profile.id, formData).subscribe(() => {
          // Navigate to profile page
          sessionStorage.setItem("profilesuccessmsg", "Profile Successfully Edited");
          this.router.navigate(['/hotelprofile']);
          window.location.reload();
        });
    } else {
      this.errorMessage = 'Profile ID is missing for editing.';
      console.error('Profile ID is missing for editing.');
    }
  }
  
  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
