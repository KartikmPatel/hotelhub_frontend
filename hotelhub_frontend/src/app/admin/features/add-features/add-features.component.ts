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

  constructor(private featureserviceService:FeatureServiceService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('featureName', this.newFeature.featureName); // Add facility name
      formData.append('image', this.selectedFile);

      this.featureserviceService.addFeature(formData).subscribe(() => {
        this.router.navigate(['/displayFeatures']);
      }, error => {
        console.error('Error:', error);
      });
    } else {
      console.error('No file selected');
    }
  }
}
