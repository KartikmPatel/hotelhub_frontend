import { Component } from '@angular/core';
import { RoomserviceService } from 'src/app/hotelservices/roomservice.service';
declare var $: any;

@Component({
  selector: 'app-hotelfacility',
  templateUrl: './hotelfacility.component.html',
  styleUrls: ['./hotelfacility.component.css']
})
export class HotelfacilityComponent {
  facility:any[] = [];
  private table:any;

  constructor(private roomservice:RoomserviceService){}

  ngOnInit():void{
    const hid = localStorage.getItem("hotelid");
    console.log(hid);
    this.roomservice.getHotelFacility(hid).subscribe(data=>{
      this.facility = data.$values;
      console.log(data.$values);

      if(this.table)
      {
        this.table.destroy();
      }

      this.initializeDataTable();
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
