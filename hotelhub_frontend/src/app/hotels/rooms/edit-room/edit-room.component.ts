import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { RoomserviceService } from 'src/app/hotelservices/roomservice.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  room: any = {};
  categorys: any[] = [];
  features: any[] = [];
  facilitys: any[] = [];
  errorMessage: string = '';
  citys: any[] = [];

  selectedFeatures: { [key: number]: boolean } = {};  // Track selected features with object mapping
  selectedFacilities: { [key: number]: boolean } = {};  // Track selected facilities with object mapping

  constructor(
    private roomservice: RoomserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private facilityservice: FacilityserviceService,
    private featureservice: FeatureServiceService,
    private categoryservice: RoomcategoryserviceService,
    private hotelservice: HotelregisterserviceService
  ) {}

  ngOnInit(): void {
    const hid = localStorage.getItem("hotelid");
    console.log(hid);
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.roomservice.getRoomById(roomId).subscribe(data => {
        this.room = data;
      });

      this.categoryservice.getCategory().subscribe(data => {
        this.categorys = data.$values;
      });

      this.facilityservice.getFacility().subscribe(data => {
        this.facilitys = data.$values;
        this.loadFacilities(roomId);
      });

      this.featureservice.getFeature().subscribe(data => {
        this.features = data.$values;
        this.loadFeatures(roomId);
      });

      this.hotelservice.getCityByHotel(hid).subscribe(data => {
        this.citys = data.$values;
      });
    }
  }

  loadFacilities(roomId: string) {
    this.roomservice.getRoomFacility(roomId).subscribe(
      (data: any) => {
        const facilityIds = data.$values.map((facility: any) => facility.facilityId);

        this.selectedFacilities = {};
        this.facilitys.forEach((facility: any) => {
          this.selectedFacilities[facility.id] = facilityIds.includes(facility.id);
        });
      },
      (error) => {
        console.error('Error fetching room facilities:', error);
      }
    );
  }

  loadFeatures(roomId: string) {
    this.roomservice.getRoomFeatures(roomId).subscribe((data: any) => {
        const featureIds = data.$values.map((feature: any) => feature.featureId);

        this.selectedFeatures = {};
        this.features.forEach((feature: any) => {
          this.selectedFeatures[feature.id] = featureIds.includes(feature.id);
        });
      },
      (error) => {
        console.error('Error fetching room features:', error);
      }
    );
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.room.roomcategoryid || !this.room.adultCapacity || !this.room.childrenCapacity || !this.room.quantity || !this.room.rent || !this.room.discount) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    const hid = localStorage.getItem("hotelid");
    console.log(hid);

    // Step 1: Check if the updated room data already exists in the database
    this.roomservice.checkRoomExistence(this.room.id, this.room.city, this.room.roomcategoryid, this.room.hid).subscribe(
      (response: any) => {
        if (response.exists) {
          this.errorMessage = 'A room with the same Category, and City already exists.';
          return;
        }

        // Step 2: Proceed with room update
        const updatedRoom = {
          id: this.room.id,
          roomcategoryid: this.room.roomcategoryid,
          adultCapacity: this.room.adultCapacity,
          childrenCapacity: this.room.childrenCapacity,
          quantity: this.room.quantity,
          city: this.room.city,
          rent: this.room.rent,
          discount: this.room.discount,
          activeStatus: this.room.activeStatus,
          festivalId: null,
          hid: hid
        };

        console.log("Final Room Data for API:", updatedRoom);

        this.roomservice.updateRoom(this.room.id, updatedRoom).subscribe(
          () => {
            this.updateRoomFacilities(this.room.id);
            this.updateRoomFeatures(this.room.id);
            this.router.navigate(['/displayRooms']);

            sessionStorage.setItem("roomsuccessmsg", "Room Successfully Edited");
          },
          (error) => {
            console.error('Error updating room:', error);
          }
        );
      },
      (error) => {
        console.error('Error checking room existence:', error);
      }
    );
  }

  updateRoomFacilities(roomId: number) {
    const selectedFacilityIds = this.facilitys
      .filter(facility => this.selectedFacilities[facility.id])
      .map(facility => facility.id);

    this.roomservice.updateRoomFacilities(roomId, selectedFacilityIds).subscribe(
      () => console.log('Facilities updated'),
      (error) => console.error('Error updating facilities:', error)
    );
  }

  updateRoomFeatures(roomId: number) {
    const selectedFeatureIds = this.features
      .filter(feature => this.selectedFeatures[feature.id])
      .map(feature => feature.id);

    this.roomservice.updateRoomFeatures(roomId, selectedFeatureIds).subscribe(
      () => console.log('Features updated'),
      (error) => console.error('Error updating features:', error)
    );
  }
}
