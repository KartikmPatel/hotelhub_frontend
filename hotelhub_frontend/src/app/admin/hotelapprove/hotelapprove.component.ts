import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';

declare var $: any;

@Component({
  selector: 'app-hotelapprove',
  templateUrl: './hotelapprove.component.html',
  styleUrls: ['./hotelapprove.component.css']
})
export class HotelapproveComponent implements OnInit, OnDestroy {
  hotels: any[] = [];
  private table: any;
  successmessage = "";

  constructor(private roomcategoryservice: RoomcategoryserviceService) { }

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels(): void {
    this.roomcategoryservice.gethotels().subscribe({
      next: (data) => {
        this.hotels = data.$values;

        // Check if DataTable is already initialized
        if (this.table) {
          this.table.destroy(); // Destroy existing table instance
        }

        // Reinitialize DataTable after updating hotel data
        this.initializeDataTable();
      },
      error: (err) => {
        console.error('Error fetching hotels:', err);
        alert('Failed to fetch hotels. Please try again.');
      }
    });
  }

  approveHotel(hotelId: number): void {
    this.roomcategoryservice.approveHotel(hotelId).subscribe(() => {
      this.successmessage = "Hotel approved successfully.";
      this.fetchHotels();
    });
  }

  initializeDataTable(): void {
    // Initialize DataTable after a slight delay for data binding
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

  ngOnDestroy(): void {
    // Destroy DataTable instance on component destroy to prevent memory leaks
    if (this.table) {
      this.table.destroy();
    }
  }

  closeSuccessMessage(): void {
    this.successmessage = '';
  }
}
