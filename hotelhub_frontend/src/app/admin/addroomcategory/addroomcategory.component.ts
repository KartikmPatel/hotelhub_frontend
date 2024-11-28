import { Component } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addroomcategory',
  templateUrl: './addroomcategory.component.html',
  styleUrls: ['./addroomcategory.component.css']
})
export class AddroomcategoryComponent {
  newCategory: any = {}
  errorMessage: string = '';

  constructor(private roomcategoryservice: RoomcategoryserviceService, private router: Router) { }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newCategory.categoryName) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    this.roomcategoryservice.addCategory(this.newCategory).subscribe(() => {
      this.router.navigate(['/displaycategory']);

      sessionStorage.setItem("categorysuccessmsg", "Category Successfully Inserted");
    })
  }
}
