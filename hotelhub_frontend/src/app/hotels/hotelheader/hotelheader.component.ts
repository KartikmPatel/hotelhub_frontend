import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelheader',
  templateUrl: './hotelheader.component.html',
  styleUrls: ['./hotelheader.component.css']
})
export class HotelheaderComponent {
  profile:any;
  constructor(private router: Router, private hotelservice: HotelregisterserviceService) { }

  ngOnInit(): void {
    const hid = localStorage.getItem("hotelid");
    console.log(hid);

    if(hid == null)
    {
      this.router.navigate(['/hotellogin']);
    }

    this.hotelservice.displayProfile(hid).subscribe(data=>{
      this.profile = data;
      console.log(data);
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/hotellogin']);
  }
}
