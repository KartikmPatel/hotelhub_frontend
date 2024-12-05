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

  constructor(private bookingserviceService: BookingserviceService, private datePipe:DatePipe ,private router:Router) {}

  ngOnInit() {
    // Check if the booking was successful and show the banner if necessary
    const successBooking = sessionStorage.getItem("successBooking");
    if (successBooking === "Done") {
      this.isBannerVisible = true;
      sessionStorage.removeItem("successBooking");  // Clear session data after showing banner
    }

    // Get user ID from local storage (replace with actual logic if needed)


    this.displayBookings();
    // Fetch reservations for the user

  }

  displayBookings()
  {
    const userId = localStorage.getItem("userid");
    if (!userId) {
      console.error('User ID is missing');
      return;
    }
    this.bookingserviceService.getReservationsByUser(userId).subscribe(
      data => {
        // If the API response contains $values, map the data
        this.bookings = data.$values ? data.$values : data;

        // Format Check-in and Check-out dates using DatePipe
        this.bookings = this.bookings.map(booking => ({
          ...booking,
          checkIn: this.datePipe.transform(booking.checkIn, 'yyyy-MM-dd'),  // Format Check-in date
          checkOut: this.datePipe.transform(booking.checkOut, 'yyyy-MM-dd')  // Format Check-out date
        }));
      },
      error => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

  // Function to close the success banner
  closeBanner() {
    this.isBannerVisible = false;  // Hide banner when closed
  }

  // Cancel booking logic
  cancelBooking(rid: any) {
    const userId = localStorage.getItem("userid");
    // Call the API to cancel the booking (example)
    this.bookingserviceService.cancelBooking(userId,rid).subscribe(() => {
        // console.log('Booking canceled successfully');
        // After successful cancellation, you can update the bookings array to remove the canceled booking
        // this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
        // this.displayBookings();
        this.displayBookings();

        // Trigger a page reload to reflect the changes
        window.location.reload();

      },
      error => {
        console.error('Error canceling booking:', error);
      }
    );
  }
}
