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
  loading: boolean = false;

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
      this.errorMessage = 'Invalid session. Please log in again.';
      this.router.navigate(['/userlogin']);
      return;
    }

    this.userregisterserviceService.displayProfile(uid).subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load profile. Please try again later.';
        console.error(err);
      },
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  validateForm(): boolean {
    if (!this.profile.name || !this.profile.mno || !this.profile.city || !this.profile.gender) {
      this.errorMessage = 'All fields are required.';
      return false;
    }

    if (!/^\d{10}$/.test(this.profile.mno)) {
      this.errorMessage = 'Invalid phone number. It must be 10 digits.';
      return false;
    }

    return true;
  }

  onSubmitProfile(): void {
    this.errorMessage = '';
    if (!this.validateForm()) {
      return;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('name', this.profile.name);
    formData.append('email', this.profile.email);
    formData.append('mno', this.profile.mno);
    formData.append('city', this.profile.city);
    formData.append('gender', this.profile.gender);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.userregisterserviceService.updateProfile(this.profile.id, formData).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/userprofile']);
        this.successmsg = 'Profile Successfully Edited';
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to update profile. Please try again later.';
        console.error(err);
      },
    });
  }

  onSubmitPassword(): void {
    this.errorMessage = '';
    if (
      !this.profile.oldpass ||
      !this.profile.newpass ||
      !this.profile.newpasscheck
    ) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.profile.newpass !== this.profile.newpasscheck) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const uid = localStorage.getItem('userid');
    if (!uid) {
      this.errorMessage = 'Invalid session. Please log in again.';
      return;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('password', this.profile.oldpass);
    formData.append('newpassword', this.profile.newpass);

    this.userregisterserviceService.changePassword(uid, formData).subscribe({
      next: () => {
        this.loading = false;
        this.successmsg = 'Password changed successfully.';
        this.profile.oldpass = '';
        this.profile.newpass = '';
        this.profile.newpasscheck = '';
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to change password. Please try again later.';
        console.error(err);
      },
    });
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
