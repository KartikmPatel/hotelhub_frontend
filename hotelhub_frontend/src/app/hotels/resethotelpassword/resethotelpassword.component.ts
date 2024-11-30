import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resethotelpassword',
  templateUrl: './resethotelpassword.component.html',
  styleUrls: ['./resethotelpassword.component.css']
})
export class ResethotelpasswordComponent {
  resetpassword: any = {}; // To hold profile details, including password inputs
  successmsg: string = ''; // For displaying success messages
  errorMessage: string = ''; // For displaying error messages
  email: string = '';

  constructor(private hotelRegisterService: HotelregisterserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'] || '';
      if (!this.email) {
        this.errorMessage = 'Invalid or missing email parameter.';
      }
    });
  }

  onSubmit(): void {
    if (!this.resetpassword.newpass || !this.resetpassword.newpasscheck) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.resetpassword.newpass !== this.resetpassword.newpasscheck) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Call the service to reset the password
    this.hotelRegisterService
      .resethotelpassword(this.email, this.resetpassword.newpass)
      .subscribe({
        next: (data) => {
          this.successmsg = 'Password reset successfully. You can now log in.';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/hotellogin']);
          }, 3000); // Redirect to login page after 3 seconds
        },
        error: (err) => {
          console.error('Error during password reset:', err);
          this.errorMessage = err.error?.message || 'An unexpected error occurred.';
        },
      });
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
