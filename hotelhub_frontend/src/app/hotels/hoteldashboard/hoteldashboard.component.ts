import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-hoteldashboard',
  templateUrl: './hoteldashboard.component.html',
  styleUrls: ['./hoteldashboard.component.css']
})
export class HoteldashboardComponent {
  roomfeaturescount:number=0;
  roomfacilitycount:number=0;
  roomcount:number=0;
  feedbackcount:number=0;
  branchcount:number=0;

  constructor(private hotelregisterserviceService: HotelregisterserviceService, private router: Router) { }

  ngOnInit(): void {
    const hid = localStorage.getItem('hotelid');
    this.getroomfeaturescount(hid);
    this.getroomfacilitycount(hid);
    this.getroomcount(hid);
    this.getfeedbackcount(hid);
    this.getBranchCount(hid);
  }

  getroomfeaturescount(hid:any)
  {
    this.hotelregisterserviceService.getroomfeaturescountByhid(hid).subscribe(data => {
      this.roomfeaturescount = data;
    });
  }

  getroomfacilitycount(hid:any)
  {
    this.hotelregisterserviceService.getroomfacalitycountByhid(hid).subscribe(data => {
      this.roomfacilitycount = data;
    });
  }

  getroomcount(hid:any)
  {
    this.hotelregisterserviceService.getroomcount(hid).subscribe(data => {
      console.log("Room Counting++++++" + data)
      this.roomcount = data;
    })
  }

  getfeedbackcount(hid:any)
  {
    this.hotelregisterserviceService.getfeedbackcountByhid(hid).subscribe(data => {
      this.feedbackcount = data;
    })
  }

  getBranchCount(hid:any)
  {
    this.hotelregisterserviceService.getBranchCountByHid(hid).subscribe(data => {
      this.branchcount = data;
    })
  }
}
