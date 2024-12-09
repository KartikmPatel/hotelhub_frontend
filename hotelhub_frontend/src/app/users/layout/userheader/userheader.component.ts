import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent {

  uid:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem("userid");
  }

  logout(): void {
    localStorage.removeItem("userid");
    this.router.navigate(['/userlogin']);
  }
}
