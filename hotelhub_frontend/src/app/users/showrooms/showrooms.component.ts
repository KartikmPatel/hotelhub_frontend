import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.css']
})
export class ShowroomsComponent {
  roomData: any[] = [];
  fesdiscount: any[] = [];
  today: string = new Date().toISOString().split('T')[0];
  activeFestival: any;
  roomDetail: any = {};

  facilityData: any[] = [];
  featuresData: any[] = [];
  categoryData: any[] = [];

  searchRoom: any = {
    categoryId: null,
    facilityIds: [],
    featureIds: [],
    rating: null,
    isActive: null,
    city: '',
    hid: null,
    adultCapacity: null,
    childQuantity: null,
  };

  constructor(
    private UserhomeserviceService: UserhomeserviceService,
    private FacilityserviceService: FacilityserviceService,
    private FeatureServiceService: FeatureServiceService,
    private RoomcategoryserviceService: RoomcategoryserviceService,
    private router: Router
  ) {
    this.setActiveFestival();
  }

  ngOnInit(): void {
    // Fetch facilities, features, categories, and festival discounts data
    this.FacilityserviceService.getFacility().subscribe((data) => {
      this.facilityData = data.$values;
    });

    this.FeatureServiceService.getFeature().subscribe((data) => {
      this.featuresData = data.$values;
    });

    this.RoomcategoryserviceService.getCategory().subscribe((data) => {
      this.categoryData = data.$values;
    });

    this.UserhomeserviceService.getfesdiscount().subscribe((data) => {
      this.fesdiscount = data.$values;
    });

    // Subscribe to BehaviorSubject for real-time updates of room data
    this.UserhomeserviceService.currentRooms.subscribe((data) => {
      if (data.length > 0) {
        this.roomData = data;
      } else {
        // Load rooms from sessionStorage if no data from BehaviorSubject
        this.roomData = this.UserhomeserviceService.getStoredRooms();
      }
    });
  }

  hoveredRating: number = 0;

  setRating(rating: number): void {
    this.searchRoom.rating = rating; // Update the selected rating
    this.searchRoomsByRating(rating); // Trigger the search function
  }

  hoverRating(rating: number): void {
    this.hoveredRating = rating; // Update the hovered rating
  }

  // Check if today's date matches any festival date
  isFestivalToday(): boolean {
    const festival = this.fesdiscount.find(fes => {
      const fesDate = new Date(fes.fesdate);
      fesDate.setDate(fesDate.getDate() + 1); // Add 1 day to festival date
      const formattedFesDate = fesDate.toISOString().split('T')[0];
      return formattedFesDate === this.today;
    });
    this.activeFestival = festival;
    return !!festival;
  }

  // Set the active festival when it's today
  setActiveFestival(): void {
    this.isFestivalToday();
  }

  // Get the applicable discount for a room (combining festival discount and room discount)
  getDiscount(room: any): number {
    const festival = this.fesdiscount.find((fes: any) => {
      const fesDate = new Date(fes.fesdate);
      fesDate.setDate(fesDate.getDate() + 1); // Add one day to the fesDate
      const formattedFesDate = fesDate.toISOString().split('T')[0];
      return formattedFesDate === this.today;
    });

    return festival ? (festival.discount + room.discount) : room.discount;
  }

  // Fetch detailed information of a room
  roomdetails(roomId: any) {
    this.UserhomeserviceService.getRoomDetailsByRoomId(roomId).subscribe((data) => {
      this.roomDetail = data;
      this.UserhomeserviceService.setRoomDetails(this.roomDetail);
      this.router.navigate(['/roomdetails']);
    });
  }

  onFacilityChange(facilityId: number, event: any): void {
    if (event.target.checked) {
      this.searchRoom.facilityIds.push(facilityId);
    } else {
      const index = this.searchRoom.facilityIds.indexOf(facilityId);
      if (index > -1) {
        this.searchRoom.facilityIds.splice(index, 1);
      }
    }
    this.searchRooms(); // Trigger search after facility change
  }

  onFeatureChange(featureId: number, event: any): void {
    if (event.target.checked) {
      this.searchRoom.featureIds.push(featureId);
    } else {
      const index = this.searchRoom.featureIds.indexOf(featureId);
      if (index > -1) {
        this.searchRoom.featureIds.splice(index, 1);
      }
    }
    this.searchRooms(); // Trigger search after feature change
  }

  // Methods to search rooms by category, facilities, features, rating, and status
  searchRoomsByCategory(categoryId: number): void {
    const commonParams = this.getCommonParams();
    this.UserhomeserviceService.searchByCategory(categoryId, commonParams).subscribe((data) => {
      this.roomData = data.$values;
    });
  }

  searchRoomsByRating(rating: number): void {
    const commonParams = this.getCommonParams();
    this.UserhomeserviceService.searchByRating(rating, commonParams).subscribe((data) => {
      this.roomData = data.$values;
    });
  }

  searchRoomsByStatus(isActive: boolean): void {
    const commonParams = this.getCommonParams();
    this.UserhomeserviceService.searchByStatus(isActive, commonParams).subscribe((data) => {
      this.roomData = data.$values;
    });
  }

  private searchRooms(): void {
    const commonParams = this.getCommonParams();

    this.UserhomeserviceService.searchByFacilitiesAndFeatures(
      this.searchRoom.facilityIds,
      this.searchRoom.featureIds,
      commonParams
    ).subscribe((data) => {
      this.roomData = data.$values;
    });
  }

  private getCommonParams(): any {
    return {
      city: sessionStorage.getItem('city') || '',
      hid: sessionStorage.getItem('hid') ? Number(sessionStorage.getItem('hid')) : null,
      adultCapacity: sessionStorage.getItem('adultQuantity') ? Number(sessionStorage.getItem('adultQuantity')) : null,
      childQuantity: sessionStorage.getItem('childQuantity') ? Number(sessionStorage.getItem('childQuantity')) : null,
    };
  }
}
