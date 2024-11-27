import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent {
  feature: any = {};
  selectedFile: File | null = null;

  constructor(
    private featureservice: FeatureServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const feaId = this.route.snapshot.paramMap.get('id') || '';
    if (feaId) {
      this.featureservice.editFeature(feaId).subscribe((data) => {
        this.feature = data;
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('featureName', this.feature.featureName);

    // If a new file is selected, append it to the form data
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // If an id exists, it's an edit operation
    if (this.feature.id) {
      formData.append('id', this.feature.id); // Add the ID for the update
      this.featureservice.updateFeature(this.feature.id, formData).subscribe(
        () => {
          this.router.navigate(['/displayFeatures']);
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
