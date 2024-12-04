import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';

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
  roomDetail: any={}

  constructor(private UserhomeserviceService: UserhomeserviceService, private router: Router) {
    this.setActiveFestival();
  }

  ngOnInit(): void {
    this.UserhomeserviceService.getfesdiscount().subscribe((data) => {
      this.fesdiscount = data.$values;
      console.log(this.fesdiscount);
    });

    // Subscribe to BehaviorSubject for real-time updates
    this.UserhomeserviceService.currentRooms.subscribe((data) => {
      if (data.length > 0) {
        this.roomData = data;
        console.log("+++++++++ Room Data +++++" + this.roomData);
      } else {
        // If no data from BehaviorSubject, try to load from sessionStorage
        this.roomData = this.UserhomeserviceService.getStoredRooms();
      }
      console.log('Hotel data received in hotel details:', this.roomData);
    });
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

  // Function to set the active festival when it's today
  setActiveFestival(): void {
    this.isFestivalToday();
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

  roomdetails(roomId:any)
  {
    this.UserhomeserviceService.getRoomDetailsByRoomId(roomId).subscribe((data) => {
      this.roomDetail = data;
      // Store the fetched hotels in the service and localStorage
      console.log("Room Details "+this.roomDetail);
      this.UserhomeserviceService.setRoomDetails(this.roomDetail);
      this.router.navigate(['/roomdetails']);
    })
  }
}
