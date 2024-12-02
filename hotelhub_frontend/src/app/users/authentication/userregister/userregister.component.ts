import { Component } from '@angular/core';
import { UserregisterserviceService } from 'src/app/userservices/userregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  newUser: any = {};
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(private userregisterserviceService: UserregisterserviceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newUser.name || !this.newUser.email || !this.newUser.mno || !this.newUser.password || !this.newUser.city || !this.newUser.gender) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('name',this.newUser.name);
      formData.append('email',this.newUser.email);
      formData.append('mno',this.newUser.mno);
      formData.append('password',this.newUser.password); 
      formData.append('image', this.selectedFile);
      formData.append('city',this.newUser.city);
      formData.append('gender',this.newUser.gender);

      this.userregisterserviceService.addnewuser(formData).subscribe(() => {
        this.router.navigate(['/userlogin']);
      }, error => {
        console.error('Error:', error);
      });
    } else {
      this.errorMessage = 'Please select an image.';
      return;
    }
  }
}
