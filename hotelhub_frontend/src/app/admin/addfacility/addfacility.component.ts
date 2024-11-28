import { Component } from '@angular/core';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})
export class AddfacilityComponent {
  newFacility: any = {};
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(private facilityserviceService: FacilityserviceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newFacility.facilityName) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('facilityName', this.newFacility.facilityName); // Add facility name
      formData.append('image', this.selectedFile);

      this.facilityserviceService.addfacility(formData).subscribe(() => {
        this.router.navigate(['/displayFacility']);

        sessionStorage.setItem("facilitysuccessmsg", "Facility Successfully Inserted");
      }, error => {
        console.error('Error:', error);
      });
    } else {
      this.errorMessage = "No file selected";
    }
  }
}
