import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  categorycount:number=0;
  facilitycount:number=0;
  featurecount:number=0;
  hotelcount:number=0;

  constructor(private roomcategoryservice: RoomcategoryserviceService) { }

  ngOnInit(): void {
    this.getcatcount();
    this.getfaccount();
    this.getfeacount();
    this.gethotelcount();
  }

  getcatcount()
  {
    this.roomcategoryservice.getcategorycount().subscribe(data => {
      this.categorycount = data;
    });
  }

  getfaccount()
  {
    this.roomcategoryservice.getfacilitycount().subscribe(data => {
      this.facilitycount = data;
    });
  }

  getfeacount()
  {
    this.roomcategoryservice.getfeaturescount().subscribe(data => {
      this.featurecount = data;
    })
  }

  gethotelcount()
  {
    this.roomcategoryservice.gethotelcount().subscribe(data => {
      this.hotelcount = data;
    })
  }
}
