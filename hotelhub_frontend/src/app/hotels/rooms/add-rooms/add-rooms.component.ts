import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityserviceService } from 'src/app/adminservices/facilityservice.service';
import { FeatureServiceService } from 'src/app/adminservices/feature-service.service';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';
import { RoomserviceService } from 'src/app/hotelservices/roomservice.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent {
  newRoom: any = {
    featureIds: [], // Store selected feature IDs in an array
    facilityIds: [] // Store selected facility IDs in an array
  };

  citys:any[] = [];
  categorys: any[] = [];
  features: any[] = [];
  facilitys: any[] = [];
  errorMessage:string='';

  selectedFeatures: boolean[] = []; // Tracks selected features (boolean)
  selectedFacilities: boolean[] = []; // Tracks selected facilities (boolean)

  constructor(
    private roomservice: RoomserviceService,
    private router: Router,
    private facilityservice: FacilityserviceService,
    private featureservice: FeatureServiceService,
    private categoryservice: RoomcategoryserviceService,
    private hotelservice:HotelregisterserviceService
  ) {}

  ngOnInit(): void {
    const hid = localStorage.getItem("hotelid");
    console.log(hid);
    this.categoryservice.getCategory().subscribe(data => {
      this.categorys = data.$values;
    });

    this.facilityservice.getFacility().subscribe(data => {
      this.facilitys = data.$values;
      this.selectedFacilities = new Array(this.facilitys.length).fill(false); // Initialize the selectedFacilities array
    });

    this.featureservice.getFeature().subscribe(data => {
      this.features = data.$values;
      this.selectedFeatures = new Array(this.features.length).fill(false); // Initialize the selectedFeatures array
    });

    this.hotelservice.getCityByHotel(hid).subscribe(data=>{
      this.citys = data.$values;
    })
  }

  onSubmit() {
    this.errorMessage = '';

    // Validation checks
    if (!this.newRoom.roomcategoryid || !this.newRoom.adultCapacity || !this.newRoom.childrenCapacity || !this.newRoom.quantity || !this.newRoom.rent || !this.newRoom.discount) {
      this.errorMessage = 'All fields are required.';
      return; // Stop further execution if fields are missing
    }

    const hid = localStorage.getItem("hotelid");
    console.log(hid);
    // Step 1: Prepare the base room data without featureIds and facilityIds
    const roomData = {
      roomcategoryid: this.newRoom.roomcategoryid,
      adultCapacity: this.newRoom.adultCapacity,
      childrenCapacity: this.newRoom.childrenCapacity,
      quantity: this.newRoom.quantity,
      city:this.newRoom.city,
      rent: this.newRoom.rent,
      discount: this.newRoom.discount,
      activeStatus: 0,
      festivalId: null,
      hid:hid
    };

    this.roomservice.addRoom(roomData).subscribe(
      (response) => {
        const roomId = response.id;

        this.addRoomFacilities(roomId);
        this.addRoomFeatures(roomId);

        this.router.navigate(['/displayRooms']);

        sessionStorage.setItem("roomsuccessmsg", "Room Successfully Inserted");
      },
      (error) => {
        console.error('Error adding room:', error);
      }
    );
  }

  addRoomFacilities(roomId: number) {
    const selectedFacilityIds = this.facilitys
      .filter((_, index) => this.selectedFacilities[index])
      .map(facility => facility.id);

    selectedFacilityIds.forEach(facilityId => {
      this.roomservice.addRoomFacility(facilityId, roomId).subscribe(
        () => console.log(`Facility ${facilityId} added to room ${roomId}`),
        (error) => console.error(`Error adding facility ${facilityId}:`, error)
      );
    });
  }

  addRoomFeatures(roomId: number) {
    const selectedFeatureIds = this.features
      .filter((_, index) => this.selectedFeatures[index])
      .map(feature => feature.id);

    selectedFeatureIds.forEach(featureId => {
      this.roomservice.addRoomFeature(featureId, roomId).subscribe(
        () => console.log(`Feature ${featureId} added to room ${roomId}`),
        (error) => console.error(`Error adding feature ${featureId}:`, error)
      );
    });
  }


}
