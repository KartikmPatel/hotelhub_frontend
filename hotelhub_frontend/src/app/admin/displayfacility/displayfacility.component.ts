import { Component } from '@angular/core';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';

declare var $: any;

@Component({
  selector: 'app-displayfacility',
  templateUrl: './displayfacility.component.html',
  styleUrls: ['./displayfacility.component.css']
})
export class DisplayfacilityComponent {
  facilities :any[] = [];
  private table:any;

  constructor(private facilityservice:FacilityserviceService){}

  ngOnInit():void{
    this.facilityservice.getFacility().subscribe(data =>{
      this.facilities = data.$values;

      if(this.table)
      {
        this.table.destroy();
      }

      this.initializeDataTable();
    })
  }

  getFacilityafterdelete() {
    this.facilityservice.getFacility().subscribe(data => {
      this.facilities = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  deleteFacility(facilityId: string) {
    this.facilityservice.deleteFacility(facilityId).subscribe(() => {
      this.getFacilityafterdelete();
    })
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
