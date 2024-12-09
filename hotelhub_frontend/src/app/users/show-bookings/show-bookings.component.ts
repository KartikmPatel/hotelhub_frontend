import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from 'src/app/userservices/bookingservice.service';
import { DatePipe } from '@angular/common';  // Import DatePipe for date formatting
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css'],
  providers: [DatePipe]  // Provide DatePipe here
})
export class ShowBookingsComponent implements OnInit {

  isBannerVisible: boolean = false;
  today: string = new Date().toISOString().split('T')[0]; // Today's date (yyyy-MM-dd)
  bookings: any[] = [];  // Array to store reservations
  successmsg: string = '';

  constructor(
    private bookingserviceService: BookingserviceService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    // Check for successful booking and display banner only once
    this.checkForSuccessBanner();

    // Check for successful cancellation message

    // Display bookings
    this.displayBookings();
  }

  private checkForSuccessBanner() {
    const successBooking = sessionStorage.getItem('successBooking');
    if (successBooking === 'Done' && !this.isBannerVisible) {
      this.isBannerVisible = true;
      sessionStorage.removeItem('successBooking'); // Ensure it doesn't trigger again
    }
  }

  displayBookings() {
    const userId = localStorage.getItem('userid');
    if (!userId) {
      console.error('User ID is missing');
      return;
    }
    this.bookingserviceService.getReservationsByUser(userId).subscribe(
      data => {
        this.bookings = data.$values ? data.$values : data;

        this.bookings = this.bookings.map(booking => ({
          ...booking,
          checkIn: this.datePipe.transform(booking.checkIn, 'yyyy-MM-dd'),
          checkOut: this.datePipe.transform(booking.checkOut, 'yyyy-MM-dd')
        }));
      },
      error => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

  closeBanner() {
    this.isBannerVisible = false;
  }

  closeSuccessMessage(): void {
    this.successmsg = '';
  }

  cancelBooking(rid: any) {
    const userId = localStorage.getItem('userid');
    this.bookingserviceService.cancelBooking(userId, rid).subscribe(
      () => {
        this.displayBookings();
      },
      error => {
        console.error('Error canceling booking:', error);
      }
    );
  }
}
