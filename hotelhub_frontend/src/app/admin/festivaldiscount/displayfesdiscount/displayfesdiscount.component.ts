import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { FesdiscountserviceService } from 'src/app/adminservices/fesdiscountservice.service';

declare var $: any;

@Component({
  selector: 'app-displayfesdiscount',
  templateUrl: './displayfesdiscount.component.html',
  styleUrls: ['./displayfesdiscount.component.css']
})
export class DisplayfesdiscountComponent {

  fesdiscount: any[] = [];
  successmsg: string = '';

  // datatable part
  private table: any;

  constructor(private fesdiscountserviceService: FesdiscountserviceService) { }

  ngOnInit(): void {
    const discountSuccessMsg = sessionStorage.getItem('fesdissuccessmsg');
    if (discountSuccessMsg !== null) {
      this.successmsg = discountSuccessMsg;

      sessionStorage.removeItem('fesdissuccessmsg');
      sessionStorage.clear();
    }

    this.fesdiscountserviceService.getFesDiscount().subscribe(data => {
      this.fesdiscount = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

  getdiscountafterdelete() {
    const discountSuccessMsg = sessionStorage.getItem('fesdissuccessmsg');
    if (discountSuccessMsg !== null) {
      this.successmsg = discountSuccessMsg;

      sessionStorage.removeItem('fesdissuccessmsg');
      sessionStorage.clear();
    }

    this.fesdiscountserviceService.getFesDiscount().subscribe(data => {
      this.fesdiscount = data.$values;

      // Check if DataTable is already initialized
      if (this.table) {
        this.table.destroy(); // Destroy existing table instance
      }

      // Initialize DataTable after data is loaded
      this.initializeDataTable();
    });
  }

  deleteDiscount(fesdiscountid: string) {
    this.fesdiscountserviceService.deleteFesDiscount(fesdiscountid).subscribe(() => {
      sessionStorage.setItem("fesdissuccessmsg", "Festival Discount Successfully Deleted");
      this.getdiscountafterdelete();
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
