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

  constructor(private facilityserviceService: FacilityserviceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('facilityName', this.newFacility.facilityName); // Add facility name
      formData.append('image', this.selectedFile);

      this.facilityserviceService.addfacility(formData).subscribe(() => {
        this.router.navigate(['/displayFacility']);
      }, error => {
        console.error('Error:', error);
      });
    } else {
      console.error('No file selected');
    }
  }
}
