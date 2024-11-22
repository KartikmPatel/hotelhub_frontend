import { Component } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addroomcategory',
  templateUrl: './addroomcategory.component.html',
  styleUrls: ['./addroomcategory.component.css']
})
export class AddroomcategoryComponent {
  newCategory:any = {}

  constructor(private roomcategoryservice: RoomcategoryserviceService,private router:Router) { }
  
  onSubmit(){
    this.roomcategoryservice.addCategory(this.newCategory).subscribe(() => {
      this.router.navigate(['/displaycategory']);
    })
  }
}
