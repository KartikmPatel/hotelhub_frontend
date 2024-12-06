import { Component } from '@angular/core';
import { UserregisterserviceService } from 'src/app/userservices/userregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent {
  profile: any = {};
  selectedFile: File | null = null;
  successmsg: string = '';
  errorMessage: string = '';

  profileFields = [
    { label: 'User Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Mobile', key: 'mno' },
    { label: 'City', key: 'city' },
    { label: 'Gender', key: 'gender' },
  ];

  editableFields = [
    { label: 'User Name', key: 'name', type: 'text' },
    { label: 'Email', key: 'email', type: 'email', readonly: true },
    { label: 'Mobile', key: 'mno', type: 'text' },
    { label: 'City', key: 'city', type: 'text' },
    { label: 'Gender', key: 'gender', type: 'text' },
  ];

  constructor(
    private userregisterserviceService: UserregisterserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const uid = localStorage.getItem('userid');
    if (!uid) {
      this.router.navigate(['/userlogin']);
      return;
    }

    const profilesuccessmsg = sessionStorage.getItem('profilesuccessmsg');
    if (profilesuccessmsg) {
      this.successmsg = profilesuccessmsg;
      sessionStorage.removeItem('profilesuccessmsg');
    }

    this.loadProfile(uid);
  }

  loadProfile(uid: string): void {
    this.userregisterserviceService.displayProfile(uid).subscribe({
      next: (data) => (this.profile = data),
      error: (error) => {
        this.errorMessage = 'Failed to load profile. Please try again.';
        console.error('Error loading profile:', error);
      },
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  validateForm(): boolean {
    if (
      !this.profile.name ||
      !this.profile.email ||
      !this.profile.mno ||
      !this.profile.city ||
      !this.profile.gender
    ) {
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

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.profile.name);
    formData.append('email', this.profile.email);
    formData.append('mno', this.profile.mno);
    formData.append('city', this.profile.city);
    formData.append('gender', this.profile.gender);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.profile.id) {
      this.userregisterserviceService.updateProfile(this.profile.id, formData).subscribe({
        next: () => {
          sessionStorage.setItem('profilesuccessmsg', 'Profile Successfully Edited');
          this.router.navigate(['/userprofile']).then(() => window.location.reload());
        },
        error: (err) => {
          this.errorMessage = 'Failed to update profile. Please try again.';
          console.error('Error updating profile:', err);
        },
      });
    } else {
      this.errorMessage = 'Profile ID is missing. Unable to update.';
    }
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
