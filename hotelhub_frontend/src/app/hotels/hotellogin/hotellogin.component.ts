import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotellogin',
  templateUrl: './hotellogin.component.html',
  styleUrls: ['./hotellogin.component.css']
})
export class HotelloginComponent {

  userdata: any = {}
  errorMessage: string = '';

  constructor(private hotelregisterserviceService: HotelregisterserviceService, private router: Router) { }

  onSubmit() {
    this.errorMessage = ''; // Clear previous errors

    if (!this.userdata.email || !this.userdata.password) {
      this.errorMessage = 'Email and Password are required.';
      return;
    }

    this.hotelregisterserviceService.checkuser(this.userdata).subscribe({
      next: (response) => {
        if (response.message === "Login successful.") {
          this.router.navigate(['/']); // Redirect on success
        }
      },
      error: (err) => {
        console.error('Login failed:', err);

        if (err.error.message === "Invalid email or password.") {
          this.errorMessage = 'Invalid email or password.';
        } else if (err.error.message === "Your account is not approved by the admin.") {
          this.errorMessage = 'Your account is not approved by the admin.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    });
  }

}