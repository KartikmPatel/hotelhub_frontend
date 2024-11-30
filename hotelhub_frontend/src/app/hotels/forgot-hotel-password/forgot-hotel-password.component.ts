import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-hotel-password',
  templateUrl: './forgot-hotel-password.component.html',
  styleUrls: ['./forgot-hotel-password.component.css'],
})
export class ForgotHotelPasswordComponent {
  userdata = { email: '' }; // Ensuring consistent data structure
  isLoading = false;
  successmsg = '';
  errormsg = '';

  constructor(private hotelRegisterService: HotelregisterserviceService, private router: Router) {}

  // Method triggered on form submission
  onSubmit() {
    this.errormsg = '';
    this.successmsg = '';
    this.isLoading = true;

    // Input validation
    if (!this.userdata.email) {
      this.errormsg = 'Email is required.';
      this.isLoading = false;
      return;
    }

    console.log('Email:', this.userdata.email);

    // API call for forgot password functionality
    this.hotelRegisterService.forgotPassword(this.userdata.email).subscribe({
      next: (data) => {
        this.successmsg = 'Please check your email for the password reset link.';
        this.isLoading = false;
        this.closeSuccessMessage(); // Automatically close success message
      },
      error: (err) => {
        console.error('Error during email sending:', err);
        this.isLoading = false;
        this.errormsg = err.error?.message || 'An unexpected error occurred. Please try again later.';
      },
    });
  }

  // Automatically close success message after a few seconds
  closeSuccessMessage(): void {
    setTimeout(() => {
      this.successmsg = '';
    }, 3000);
  }
}
