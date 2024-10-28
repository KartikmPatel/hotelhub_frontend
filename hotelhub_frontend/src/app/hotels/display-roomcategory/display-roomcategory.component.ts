import { Component, AfterViewInit } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/hotelservices/roomcategoryservice.service';

declare var $: any;

@Component({
  selector: 'app-display-roomcategory',
  templateUrl: './display-roomcategory.component.html',
  styleUrls: ['./display-roomcategory.component.css']
})
export class DisplayRoomcategoryComponent {

  categories: any[] = [];

  constructor(private roomcategoryservice: RoomcategoryserviceService) { }

  ngOnInit(): void {
    this.roomcategoryservice.getCategory().subscribe(data => {
      this.categories = data.$values;
      console.log(data);
      console.log(this.categories);
    });
  }

  ngAfterViewInit(): void {
    // Initializes the DataTable after the view is initialized
    $('#basic-datatables').DataTable({});
  }
}
