import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/hotelservices/roomcategoryservice.service';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-display-roomcategory',
  templateUrl: './display-roomcategory.component.html',
  styleUrls: ['./display-roomcategory.component.css']
})
export class DisplayRoomcategoryComponent implements OnInit, AfterViewInit {

  categories: any[] = [];
  
  constructor(private roomcategoryservice: RoomcategoryserviceService) { }
  
  ngOnInit(): void {
    this.roomcategoryservice.getCategory().subscribe(data => {
      this.categories = data.$values;
      console.log(data);
      console.log(this.categories);
    });
  }
  
  // For Datatables
  @ViewChild('dataTable', { static: true }) table!: ElementRef;
  ngAfterViewInit(): void {
    // Initialize Simple DataTable after view is initialized
    new DataTable(this.table.nativeElement);
  }
}
