import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';

@Component({
  selector: 'app-showhoteldetails',
  templateUrl: './showhoteldetails.component.html',
  styleUrls: ['./showhoteldetails.component.css']
})
export class ShowhoteldetailsComponent {

  hotelData: any[] = [];
  arrivalDate: string = '';
  departureDate: string = '';
  city: string = '';
  roomData:any[] = [];

  constructor(private UserhomeserviceService: UserhomeserviceService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve values from sessionStorage (or localStorage)
    this.city = sessionStorage.getItem('city') || '';

    // Subscribe to BehaviorSubject for real-time updates
    this.UserhomeserviceService.currentHotels.subscribe((data) => {
      if (data.length > 0) {
        this.hotelData = data;
        console.log(this.hotelData);
      } else {
        // If no data from BehaviorSubject, try to load from sessionStorage
        this.hotelData = this.UserhomeserviceService.getStoredHotels();
      }
      console.log('Hotel data received in hotel details:', this.hotelData);
    });
  }

  searchrooms(hid:any)
  {
    this.city = sessionStorage.getItem('city') || '';
    const adultCapacity = sessionStorage.getItem('adultQuantity') || '';
    const childQuantity = sessionStorage.getItem('childQuantity') || '';
    this.UserhomeserviceService.getRoomsByHotel(hid,this.city,adultCapacity,childQuantity).subscribe((data) => {
      this.roomData = data.$values;
      // Store the fetched hotels in the service and localStorage
      this.UserhomeserviceService.setRooms(this.roomData);
      // Navigate to the hotel details component
      this.router.navigate(['/showrooms']);
    })
  }
}
