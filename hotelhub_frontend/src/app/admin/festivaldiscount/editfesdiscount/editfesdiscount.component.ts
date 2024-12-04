import { Component } from '@angular/core';
import { FesdiscountserviceService } from 'src/app/adminservices/fesdiscountservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editfesdiscount',
  templateUrl: './editfesdiscount.component.html',
  styleUrls: ['./editfesdiscount.component.css']
})
export class EditfesdiscountComponent {

  editfesdicount: any = {};  // Object to store the discount details
  errorMessage: string = '';  // To display error messages

  constructor(private fesdiscountserviceService: FesdiscountserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the discount ID from the URL
    const fesdiscountId = this.route.snapshot.paramMap.get('id') || '';
    
    // Fetch the festival discount details from the service
    this.fesdiscountserviceService.editFesDiscount(fesdiscountId).subscribe((data) => {
      this.editfesdicount = data;
      
      // Ensure the festival date is in the correct format for the date input
      if (this.editfesdicount.fesdate) {
        const date = new Date(this.editfesdicount.fesdate);
        
        // Add one day to the date
        date.setDate(date.getDate() + 1);
        
        // Format as YYYY-MM-DD and assign back to fesdate
        this.editfesdicount.fesdate = date.toISOString().split('T')[0]; 
      }
    });
  }

  // Handle form submission
  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.editfesdicount.festname || !this.editfesdicount.discount || !this.editfesdicount.fesdate) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    // Update the festival discount in the database
    this.fesdiscountserviceService.updateFesDiscount(this.editfesdicount.id, this.editfesdicount).subscribe(() => {
      this.router.navigate(['/festivaldiscount']);  // Navigate back to the list of festival discounts

      // Set a success message in sessionStorage
      sessionStorage.setItem("fesdissuccessmsg", "Festival Discount Successfully Edited");
    });
  }
}
