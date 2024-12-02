import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  newCity: any = {};
  errorMessage: string = '';
  gujaratCities: string[] = [];

  constructor(private hotelservice: HotelregisterserviceService, private router: Router) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.gujaratCities = [
      'Ahmedabad',
      'Surat',
      'Vadodara',
      'Rajkot',
      'Bhavnagar',
      'Jamnagar',
      'Gandhinagar',
      'Junagadh',
      'Anand',
      'Navsari',
      'Mehsana',
      'Bhuj',
      'Patan',
      'Morbi',
      'Porbandar',
      'Valsad',
      'Dahod',
      'Amreli'
    ];
  }

  onSubmit() {
    const hid = localStorage.getItem("hotelid");
    this.errorMessage = '';

    if (!hid) {
      this.errorMessage = 'Hotel ID not found.';
      return;
    }

    const cityData = {
      hid: parseInt(hid),
      city: this.newCity.city
    };

    this.hotelservice.addCityInHotel(cityData).subscribe(() => {
      this.router.navigate(['displayHotelCities']);
      sessionStorage.setItem("hotelcityreadsuccessmsg", "City Successfully Added");
    }, error => {
      this.errorMessage = 'Error adding city. Please try again.';
    });
  }


}
