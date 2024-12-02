import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
declare var $: any;

@Component({
  selector: 'app-hotelcity',
  templateUrl: './hotelcity.component.html',
  styleUrls: ['./hotelcity.component.css']
})
export class HotelcityComponent {
  citys:any[] = [];
  private table: any;
  successmsg: string = '';

  constructor(private hotelService:HotelregisterserviceService){}

  ngOnInit():void{
    this.displayCities();
  }

  displayCities()
  {
    const hotelcityreadsuccessmsg = sessionStorage.getItem('hotelcityreadsuccessmsg');
    if (hotelcityreadsuccessmsg !== null) {
      this.successmsg = hotelcityreadsuccessmsg;

      sessionStorage.removeItem('hotelcityreadsuccessmsg');
      sessionStorage.clear();
    }
    const hid = localStorage.getItem("hotelid");
    this.hotelService.getCityByHotel(hid).subscribe(data=>{
      this.citys = data.$values;

      if (this.table) {
        this.table.destroy();
      }

      this.initializeDataTable();
    });
  }

  removeCity(id:any){
    this.hotelService.removeCityInHotel(id).subscribe(()=>{
      sessionStorage.setItem("hotelcityreadsuccessmsg", "City Successfully Removed");
      this.displayCities();
    })
  }

  initializeDataTable(): void {
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

  closeSuccessMessage(): void {
    this.successmsg = '';
  }
}
