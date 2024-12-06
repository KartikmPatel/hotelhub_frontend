import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from 'src/app/userservices/bookingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css'],
})
export class AddfeedbackComponent implements OnInit {
  hotels: any[] = [];
  cities: any[] = [];
  categories: any[] = [];
  selectedHotelId: number = 0;
  selectedCity: string = '';
  selectedCategoryId: number | null = null;

  feedback = {
    comments: '',
    rating: 0,
    roomId: null,
    userId: 1, // Replace with logged-in user ID
  };

  constructor(private bookingService: BookingserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.bookingService.getHotels().subscribe(
      (response: any) => {
        this.hotels = response.$values || [];
        // console.log('Hotels:', this.hotels);
      },
      (error) => {
        console.error('Error loading hotels:', error);
      }
    );
  }

  onHotelChange(event: any): void {
    if (this.selectedHotelId) {
      this.bookingService.getRoomCitiesByHotel(this.selectedHotelId).subscribe(
        (response: any) => {
          this.cities = response.$values || [];
          // console.log('Cities:', this.cities);
        },
        (error) => {
          console.error('Error loading cities:', error);
        }
      );
      this.categories = []; // Reset categories
    }
  }

  onCityChange(event: any): void {
    if (this.selectedHotelId && this.selectedCity) {
      this.bookingService
        .getRoomCategoriesByHotelAndCity(this.selectedHotelId, this.selectedCity)
        .subscribe(
          (response: any) => {
            this.categories = response.$values || [];
            // console.log('Categories:', this.categories);
          },
          (error) => {
            console.error('Error loading categories:', error);
          }
        );
    }
  }

  onSubmit(): void {
    if (this.selectedHotelId && this.selectedCity && this.selectedCategoryId && this.feedback.comments && this.feedback.rating) {
      this.bookingService
        .getRoomIdByHotelCityAndCategory(this.selectedHotelId, this.selectedCity, this.selectedCategoryId!)
        .subscribe(
          (response: any) => {
            const roomId = response.roomId; // Assuming API returns roomId
            this.feedback.roomId = roomId;

            // Prepare feedback payload
            const feedbackPayload = {
              comments: this.feedback.comments,
              rating: this.feedback.rating,
              readStatus: 0,
              hid: this.selectedHotelId,
              roomId: roomId,
              userId: localStorage.getItem("userid"),
            };

            console.log(feedbackPayload);

            this.bookingService.submitFeedback(feedbackPayload).subscribe(
              (res) => {
                sessionStorage.setItem("successfeedback1","Feedback Successfully Send");
                this.router.navigate(['/userfeedback']);
              },
              (err) => {
                console.error('Error submitting feedback:', err);
              }
            );
          },
          (error) => {
            console.error('Error fetching room ID:', error);
          }
        );
    } else {
      alert('Please fill all fields!');
    }
  }

}