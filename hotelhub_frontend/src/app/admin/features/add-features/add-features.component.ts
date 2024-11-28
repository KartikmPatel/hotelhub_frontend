import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';

@Component({
  selector: 'app-add-features',
  templateUrl: './add-features.component.html',
  styleUrls: ['./add-features.component.css']
})
export class AddFeaturesComponent {
  newFeature: any = {};
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(private featureserviceService: FeatureServiceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newFeature.featureName) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('featureName', this.newFeature.featureName); // Add facility name
      formData.append('image', this.selectedFile);

      this.featureserviceService.addFeature(formData).subscribe(() => {
        this.router.navigate(['/displayFeatures']);

        sessionStorage.setItem("featuresuccessmsg", "Features Successfully Inserted");
      }, error => {
        console.error('Error:', error);
      });
    } else {
      this.errorMessage = "No file selected";
    }
  }
}
