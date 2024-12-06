import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const uid = localStorage.getItem("userid");

    if (uid == null) {
      this.router.navigate(['/userlogin']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/userlogin']);
  }
}
