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
  successmsg: string = '';

  constructor(private roomservice:RoomserviceService){}

  ngOnInit():void{
    const roomsuccessmsg = sessionStorage.getItem('roomsuccessmsg');
    if (roomsuccessmsg !== null) {
      this.successmsg = roomsuccessmsg;

      sessionStorage.removeItem('roomsuccessmsg');
      sessionStorage.clear();
    }

    this.displayRooms();
  }

  displayRooms()
  {
    const roomsuccessmsg = sessionStorage.getItem('roomsuccessmsg');
    if (roomsuccessmsg !== null) {
      this.successmsg = roomsuccessmsg;

      sessionStorage.removeItem('roomsuccessmsg');
      sessionStorage.clear();
    }

    const hid = localStorage.getItem("hotelid");
    this.roomservice.getRooms(hid).subscribe(data=>{
      this.rooms = data.$values;

      if (this.table) {
        this.table.destroy();
      }

      this.initializeDataTable();
    })
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

  deleteRoom(roomId:string)
  {
    this.roomservice.deleteRoomFacility(roomId).subscribe(()=>{
      this.roomservice.deleteRoomFeature(roomId).subscribe(()=>{
        this.roomservice.deleteRoom(roomId).subscribe(()=>{
          sessionStorage.setItem("roomsuccessmsg", "Room Successfully Deleted");
          this.displayRooms();
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

  changeActiveStatus(roomid:any,status:any){
    this.roomservice.changeActiveStatus(roomid,status).subscribe(()=>{
      this.displayRooms();
    })
  }
}
