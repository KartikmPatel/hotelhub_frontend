import { Component } from '@angular/core';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';

declare var $: any;

@Component({
  selector: 'app-display-features',
  templateUrl: './display-features.component.html',
  styleUrls: ['./display-features.component.css']
})
export class DisplayFeaturesComponent {
  features: any[] = [];
  successmsg: string = '';

  private table: any;

  constructor(private featureservice: FeatureServiceService) { }

  ngOnInit(): void {
    const featuresuccessmsg = sessionStorage.getItem('featuresuccessmsg');
    if (featuresuccessmsg !== null) {
      this.successmsg = featuresuccessmsg;

      sessionStorage.removeItem('featuresuccessmsg');
      sessionStorage.clear();
    }

    this.featureservice.getFeature().subscribe(data => {
      this.features = data.$values;

      if (this.table) {
        this.table.destroy();
      }

      this.initializeDataTable();
    })
  }

  getFeatureafterdelete() {
    const featuresuccessmsg = sessionStorage.getItem('featuresuccessmsg');
    if (featuresuccessmsg !== null) {
      this.successmsg = featuresuccessmsg;

      sessionStorage.removeItem('featuresuccessmsg');
      sessionStorage.clear();
    }

    this.featureservice.getFeature().subscribe(data => {
      this.features = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  deleteFeature(featureId: string) {
    this.featureservice.deleteFeature(featureId).subscribe(() => {
      sessionStorage.setItem("featuresuccessmsg", "Features Successfully Deleted");
      this.getFeatureafterdelete();
    })
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

  initializeDataTable(): void {
    // Ensure DataTable is initialized after data binding
    setTimeout(() => {
      this.table = $('#example1').DataTable({
        responsive: true,
        lengthChange: false,
        autoWidth: false,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis']
      });
      this.table.buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    }, 0);
  }
}
