import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  facility: any = {};
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(
    private facilityService: FacilityserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const facId = this.route.snapshot.paramMap.get('id') || '';
    if (facId) {
      this.facilityService.editFacility(facId).subscribe((data) => {
        this.facility = data;
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.facility.facilityName) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    const formData = new FormData();
    formData.append('facilityName', this.facility.facilityName);

    // If a new file is selected, append it to the form data
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // If an id exists, it's an edit operation
    if (this.facility.id) {
      formData.append('id', this.facility.id); // Add the ID for the update
      this.facilityService.updateFacility(this.facility.id, formData).subscribe(
        () => {
          this.router.navigate(['/displayFacility']);

          sessionStorage.setItem("facilitysuccessmsg", "Facility Successfully Edited");
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Facility ID is missing for editing.');
    }
  }
}
