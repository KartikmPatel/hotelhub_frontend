import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';

declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-display-roomcategory',
  templateUrl: './display-roomcategory.component.html',
  styleUrls: ['./display-roomcategory.component.css']
})
export class DisplayRoomcategoryComponent implements OnInit, OnDestroy {

  categories: any[] = [];

  // datatable part
  private table: any;

  constructor(private roomcategoryservice: RoomcategoryserviceService) { }

  ngOnInit(): void {
    this.roomcategoryservice.getCategory().subscribe(data => {
      this.categories = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  getCategoryafterdelete() {
    this.roomcategoryservice.getCategory().subscribe(data => {
      this.categories = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  deleteCategory(categoryId: string) {
    this.roomcategoryservice.deleteCategory(categoryId).subscribe(() => {
      this.getCategoryafterdelete();
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

  ngOnDestroy(): void {
    // Destroy the DataTable instance on component destroy to avoid memory leaks
    if (this.table) {
      this.table.destroy();
    }
  }
}
