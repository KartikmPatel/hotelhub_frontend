import { Component,AfterViewInit, OnDestroy } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/hotelservices/roomcategoryservice.service';
import { DataTable } from 'simple-datatables';

declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-display-roomcategory',
  templateUrl: './display-roomcategory.component.html',
  styleUrls: ['./display-roomcategory.component.css']
})
export class DisplayRoomcategoryComponent{

  categories: any[] = [];
  
  constructor(private roomcategoryservice: RoomcategoryserviceService) { }
  
  ngOnInit(): void {
    this.roomcategoryservice.getCategory().subscribe(data => {
      this.categories = data.$values;
      console.log(data);
      console.log(this.categories);
    });
  }

  private table: any;

  ngAfterViewInit(): void {
    this.table = $('#example1').DataTable({
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis']
    });

    this.table.buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  }

  ngOnDestroy(): void {
    if (this.table) {
      this.table.destroy();
    }
  }
}
