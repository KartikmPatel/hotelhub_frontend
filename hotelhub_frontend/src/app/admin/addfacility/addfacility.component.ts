import { Component } from '@angular/core';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})
export class AddfacilityComponent {
  newFacility:any = {}

  constructor(private facilityserviceService: FacilityserviceService,private router:Router) { }

  onSubmit(){
    this.facilityserviceService.addfacility(this.newFacility).subscribe(() => {
      this.router.navigate(['/displaycategory']);
    })
  }
}
