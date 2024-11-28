import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.css']
})
export class HotelregisterComponent {

  newHotel: any = {};
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(private hotelregisterserviceService: HotelregisterserviceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newHotel.hname || !this.newHotel.email || !this.newHotel.password || !this.newHotel.city) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('hname',this.newHotel.hname);
      formData.append('email',this.newHotel.email);
      formData.append('password',this.newHotel.password); 
      formData.append('image', this.selectedFile);
      formData.append('city',this.newHotel.city);

      this.hotelregisterserviceService.addnewhotel(formData).subscribe(() => {
        this.router.navigate(['/hotellogin']);
      }, error => {
        console.error('Error:', error);
      });
    } else {
      this.errorMessage = 'Please select an image.';
      return;
    }
  }

}
