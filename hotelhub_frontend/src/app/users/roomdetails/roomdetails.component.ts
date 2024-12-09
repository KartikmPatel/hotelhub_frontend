import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';

declare var bootstrap: any;

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})


export class RoomdetailsComponent {
  roomDetails: any = {};
  availableCount: any = {};
  errorMessage: string = '';
  fesdiscount: any[] = [];
  today: string = new Date().toISOString().split('T')[0];
  roomCount: number = 1; // Default quantity
  paymentAmount:any;

  constructor(private UserhomeserviceService: UserhomeserviceService, private router: Router) { }

  ngAfterViewInit(): void {
    const feedbackCarousel = document.getElementById('feedbackCarousel');
    if (feedbackCarousel) {
      new bootstrap.Carousel(feedbackCarousel, {
        interval: 2000,
        ride: 'carousel'
      });
    }
  }

  increaseRoom(): void {
    this.roomCount++;
  }

  decreaseRoom(): void {
    if (this.roomCount > 1) {
      this.roomCount--;
    }
  }

  ngOnInit(): void {
    this.UserhomeserviceService.currentRoomDetails.subscribe((data) => {
      if (data.length > 0) {
        this.roomDetails = data;
      } else {
        this.roomDetails = this.UserhomeserviceService.getStoredRoomsDetails();
      }

      const checkIn = sessionStorage.getItem('arrivalDate');
      this.UserhomeserviceService.getRoomAvailibility(this.roomDetails.id, checkIn).subscribe((data) => {
        this.availableCount = data;
      });
      console.log('Room details +++++ :', this.roomDetails);
    });

    this.UserhomeserviceService.getfesdiscount().subscribe((data) => {
      this.fesdiscount = data.$values;
    });
  }

  getDiscount(room: any): number {
    // Normalize the date by removing the time component and adding one day
    const festival = this.fesdiscount.find((fes: any) => {
      const fesDate = new Date(fes.fesdate);
      // Add one day to the fesDate
      fesDate.setDate(fesDate.getDate() + 1);
      // Format the date to 'YYYY-MM-DD' format
      const formattedFesDate = fesDate.toISOString().split('T')[0];
      return formattedFesDate === this.today;
    });

    // If a festival discount exists, return the combined discount; otherwise, return the room's normal discount
    return festival ? (festival.discount + room.discount) : room.discount;
  }

  bookRoom(): void {
    const uid = localStorage.getItem("userid");
    if (uid == null) {
      const checkstatus = sessionStorage.setItem("checkstatus","pending");
      this.router.navigate(['/userlogin']);
    }else{
      sessionStorage.removeItem("checkstatus");
    }
    const availableRooms = (this.roomDetails.quantity) - (this.availableCount.availableReservationsCount);
    if (availableRooms < this.roomCount) {
      this.errorMessage = `You cannot book more than ${availableRooms} rooms.`;
    } else {
      const checkIn = sessionStorage.getItem('arrivalDate');
      const checkout = sessionStorage.getItem('departureDate');
      const rid = this.roomDetails.id;
      const hid = this.roomDetails.hid;
      const userid = localStorage.getItem("userid");
      const rent = (this.roomDetails.rent) - ((this.roomDetails.rent * this.getDiscount(this.roomDetails)) / 100);

      // Parse the check-in and check-out dates
      const checkInDate = new Date(sessionStorage.getItem('arrivalDate')!);
      const checkoutDate = new Date(sessionStorage.getItem('departureDate')!);

      // Calculate the difference in milliseconds
      const timeDifference = checkoutDate.getTime() - checkInDate.getTime();

      // Convert the time difference to days
      const numberOfDays = timeDifference / (1000 * 3600 * 24); // Milliseconds to days
      const finalrent = numberOfDays * rent;
      this.paymentAmount = this.roomCount*finalrent;
      sessionStorage.setItem("paymentAmount", this.paymentAmount);
      // Prepare the booking data
      for (let i = 0; i < this.roomCount; i++) {
        const bookingData = {
          userId: userid,
          roomId: rid,
          hotelId: hid,
          rent: finalrent,
          checkIn: checkIn,
          checkout: checkout,
          bookingTime: new Date().toISOString(), // Store the current date and time of booking
        };

        console.log("Booking Data" + bookingData);

        this.UserhomeserviceService.bookRoom(bookingData).subscribe(response => {
          if (response.success) {

            this.router.navigate(['/payment']);
          } else {
            console.error(`Failed to book room ${i + 1}`);
          }
        });
      }
    }
  }
}
