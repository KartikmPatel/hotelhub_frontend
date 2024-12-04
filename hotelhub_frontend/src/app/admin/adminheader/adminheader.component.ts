import { Component } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {
  profile:any;
  constructor(private roomcategoryservice: RoomcategoryserviceService, private router: Router) { }

  ngOnInit(): void {
    const aid = localStorage.getItem("adminid");
    if (aid == null) {
      this.router.navigate(['/userlogin']);
    }

    this.roomcategoryservice.getAdmin(aid).subscribe(data=>{
      this.profile = data;
      console.log(data);
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/userlogin']);
  }
}
