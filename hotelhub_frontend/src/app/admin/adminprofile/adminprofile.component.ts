import { Component } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  profile:any;
  errorMessage: string = '';

  constructor(private roomcategoryservice: RoomcategoryserviceService, private router: Router) { }

  ngOnInit(): void {
    const aid = localStorage.getItem("adminid");
    console.log("------+++",aid);
    if (aid == null) {
      this.router.navigate(['/userlogin']);
    }

    this.roomcategoryservice.getAdmin(aid).subscribe(data=>{
      this.profile = data;
      console.log(data);
    })
  }

  loadProfile(aid: string): void {
    this.roomcategoryservice.getAdmin(aid).subscribe(
      (data) => {
        this.profile = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load profile. Please try again.';
        console.error('Error loading profile:', error);
      }
    );
  }

  logout(): void {
    // localStorage.clear();
    localStorage.setItem("adminid", "");
    this.router.navigate(['/userlogin']);
  }
}
