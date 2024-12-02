import { Component } from '@angular/core';
import { UserregisterserviceService } from 'src/app/userservices/userregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  userdata: any = {}
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private userregisterserviceService: UserregisterserviceService, private router: Router) { }

  onSubmit() {
    this.errorMessage = ''; // Clear previous errors

    if (!this.userdata.email || !this.userdata.password) {
      this.errorMessage = 'Email and Password are required.';
      return;
    }

    if (this.userdata.email == "admin@gmail.com") {
      this.userregisterserviceService.checkuserlogin(this.userdata).subscribe({
        next: (response) => {
          if (response.message === "Login successful.") {
            this.userregisterserviceService.getuserid(this.userdata.email).subscribe((data) => {
              const aid = data.userId;
              console.log(aid);
              localStorage.setItem("adminid", aid);
              this.router.navigate(['/admindashboard']);
            });
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
    else {
      this.userregisterserviceService.checkuserlogin(this.userdata).subscribe({
        next: (response) => {
          if (response.message === "Login successful.") {
            this.userregisterserviceService.getuserid(this.userdata.email).subscribe((data) => {
              const uid = data.userId;
              console.log(uid);
              localStorage.setItem("userid", uid);
              this.router.navigate(['/']); // Redirect on success
            });
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
}
