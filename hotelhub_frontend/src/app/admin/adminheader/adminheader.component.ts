import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const aid = localStorage.getItem("adminid");
    if (aid == null) {
      this.router.navigate(['/userlogin']);
    }
  }

  logout(): void {
    // localStorage.clear();
    localStorage.setItem("adminid", "");
    this.router.navigate(['/userlogin']);
  }
}
