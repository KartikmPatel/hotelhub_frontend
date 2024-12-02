import { Component } from '@angular/core';
import { UserregisterserviceService } from 'src/app/userservices/userregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotuserpassword',
  templateUrl: './forgotuserpassword.component.html',
  styleUrls: ['./forgotuserpassword.component.css']
})
export class ForgotuserpasswordComponent {
  userdata = { email: '' }; // Ensuring consistent data structure
  isLoading = false;
  successmsg = '';
  errormsg = '';

  constructor(private userregisterserviceService: UserregisterserviceService, private router: Router) { }

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
    this.userregisterserviceService.forgotPassword(this.userdata.email).subscribe({
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
