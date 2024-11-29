import { Component } from '@angular/core';
import { RoomserviceService } from 'src/app/hotelservices/roomservice.service';
declare var $: any;
@Component({
  selector: 'app-displayrooms',
  templateUrl: './displayrooms.component.html',
  styleUrls: ['./displayrooms.component.css']
})
export class DisplayroomsComponent {
  rooms:any[] = [];
  private table:any;

  constructor(private roomservice:RoomserviceService){}

  ngOnInit():void{
    const hid = localStorage.getItem("hotelid");
    console.log(hid);
    this.roomservice.getRooms(hid).subscribe(data=>{
      this.rooms = data.$values;
      console.log(data.$values);

      if(this.table)
      {
        this.table.destroy();
      }

      this.initializeDataTable();
    })
  }

  getRoomafterdelete(){
    const hid = localStorage.getItem("hotelid");
    this.roomservice.getRooms(hid).subscribe(data=>{
      this.rooms = data.$values;

      if (this.table) {
        this.table.destroy();
      }

      this.initializeDataTable();
    })
  }

  deleteRoom(roomId:string)
  {
    this.roomservice.deleteRoomFacility(roomId).subscribe(()=>{
      this.roomservice.deleteRoomFeature(roomId).subscribe(()=>{
        this.roomservice.deleteRoom(roomId).subscribe(()=>{
          this.getRoomafterdelete();
        })
      })
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
