import { Component } from '@angular/core';
import { BookingserviceService } from 'src/app/userservices/bookingservice.service';

declare var $: any;

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css']
})
export class UserfeedbackComponent {
  feedbacks: any[] = [];
  private table: any;
  successmsg: string = '';

  constructor(private BookingserviceService: BookingserviceService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  fetchFeedbacks(): void {
    const userId = localStorage.getItem("userid");

    const successfeedback1 = sessionStorage.getItem('successfeedback1');
    if (successfeedback1 !== null) {
      this.successmsg = successfeedback1;

      sessionStorage.removeItem('successfeedback1');
      sessionStorage.clear();
    }

    this.BookingserviceService.getFeedbackByUser(userId).subscribe(
      (data) => {
        this.feedbacks = data.$values;
        if (this.table) {
          this.table.destroy();
        }
  
        this.initializeDataTable();
      },
      (error) => {
        
      }
    );
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

  initializeDataTable(): void {
    // Ensure DataTable is initialized after data binding
    setTimeout(() => {
      this.table = $('#example1').DataTable({
        responsive: true,
        lengthChange: false,
        autoWidth: false,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis']
      });
      this.table.buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    }, 0);
  }

}
