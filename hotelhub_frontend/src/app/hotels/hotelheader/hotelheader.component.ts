import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelheader',
  templateUrl: './hotelheader.component.html',
  styleUrls: ['./hotelheader.component.css']
})
export class HotelheaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const hid = localStorage.getItem("hotelid");
    console.log(hid);

    if(hid == null)
    {
      this.router.navigate(['/hotellogin']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/hotellogin']);
  }

}
