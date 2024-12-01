import { Component } from '@angular/core';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
declare var $: any;
@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent {

  feedbacks: any[] = [];
  private table: any;
  successmsg: string = '';

  constructor(private hotelService: HotelregisterserviceService) {

  }

  ngOnInit(): void {
    const feedbackreadsuccessmsg = sessionStorage.getItem('feedbackreadsuccessmsg');
    if (feedbackreadsuccessmsg !== null) {
      this.successmsg = feedbackreadsuccessmsg;

      sessionStorage.removeItem('feedbackreadsuccessmsg');
      sessionStorage.clear();
    }

    this.displayFeedbacks();
  }

  displayFeedbacks() {
    const feedbackreadsuccessmsg = sessionStorage.getItem('feedbackreadsuccessmsg');
    if (feedbackreadsuccessmsg !== null) {
      this.successmsg = feedbackreadsuccessmsg;

      sessionStorage.removeItem('feedbackreadsuccessmsg');
      sessionStorage.clear();
    }

    const hid = localStorage.getItem("hotelid");
    this.hotelService.getFeedbacks(hid).subscribe(data => {
      this.feedbacks = data.$values;

      if (this.table) {
        this.table.destroy();
      }

      this.initializeDataTable();

    })
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

  markAsRead(id: any) {
    this.hotelService.markAsRead(id).subscribe(() => {
      sessionStorage.setItem("feedbackreadsuccessmsg", "Feedback marked as read successfully.");
      this.displayFeedbacks();
    })
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

}
