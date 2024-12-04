import { Component } from '@angular/core';
import { FesdiscountserviceService } from 'src/app/adminservices/fesdiscountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfesdiscount',
  templateUrl: './addfesdiscount.component.html',
  styleUrls: ['./addfesdiscount.component.css']
})
export class AddfesdiscountComponent {

  newFesdiscount: any = {};
  errorMessage: string = '';

  constructor(private fesdiscountserviceService: FesdiscountserviceService, private router: Router) { }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newFesdiscount.festname || !this.newFesdiscount.discount || !this.newFesdiscount.fesdate) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    // Send the entire object to the service
    this.fesdiscountserviceService.addFesDiscount(this.newFesdiscount).subscribe(() => {
      this.router.navigate(['/festivaldiscount']);
      sessionStorage.setItem("fesdissuccessmsg", "Festival Discount Successfully Inserted");
    });
  }

}
