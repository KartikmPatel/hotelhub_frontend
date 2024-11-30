import { Component } from '@angular/core';
import { FesdiscountserviceService } from 'src/app/adminservices/fesdiscountservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editfesdiscount',
  templateUrl: './editfesdiscount.component.html',
  styleUrls: ['./editfesdiscount.component.css']
})
export class EditfesdiscountComponent {

  editfesdicount: any = {}
  errorMessage: string = ''

  constructor(private fesdiscountserviceService: FesdiscountserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const fesdiscountId = this.route.snapshot.paramMap.get('id') || '';
    this.fesdiscountserviceService.editFesDiscount(fesdiscountId).subscribe((data) => {
      this.editfesdicount = data;
    })
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.editfesdicount.festname || !this.editfesdicount.discount || !this.editfesdicount.fesdate) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    this.fesdiscountserviceService.updateFesDiscount(this.editfesdicount.id, this.editfesdicount).subscribe(() => {
      this.router.navigate(['/festivaldiscount']);

      sessionStorage.setItem("fesdissuccessmsg", "Festival Discount Successfully Edited");
    })
  }
}
