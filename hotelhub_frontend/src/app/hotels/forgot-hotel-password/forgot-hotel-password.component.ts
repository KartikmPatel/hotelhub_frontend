import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-hotel-password',
  templateUrl: './forgot-hotel-password.component.html',
  styleUrls: ['./forgot-hotel-password.component.css']
})
export class ForgotHotelPasswordComponent {
  userdata: any = {};
  errorMessage: string = '';
  successmsg: string = '';
  isLoading = false;

  constructor(private hotelregisterserviceService: HotelregisterserviceService, private router: Router) { }

  onSubmit() {
    this.errorMessage = '';
    this.successmsg = '';
    this.isLoading = true;

    if (!this.userdata.email) {
      this.errorMessage = 'Email is required.';
      this.isLoading = false;
      return;
    }

    this.hotelregisterserviceService.checkuser(this.userdata).subscribe({
      next: (response) => {
        if (response && response.message === "Login successful.") {
          this.hotelregisterserviceService.forgotPassword(this.userdata.email).subscribe({
            next: (data) => {
              this.successmsg = 'Please check your email for the password reset link.';
              this.isLoading = false;
            },
            error: (err) => {
              console.error('Error during email sending:', err);
              this.isLoading = false;
              this.errorMessage = err.error?.message || 'An unexpected error occurred. Please try again later.';
            }
          });
        }
      },
      error: (err) => {
        console.error('Error during user check:', err);
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'An unexpected error occurred. Please try again later.';
      }
    });
  }

  closeSuccessMessage(): void {
    setTimeout(() => {
      this.successmsg = '';
    }, 3000);
  }
}
