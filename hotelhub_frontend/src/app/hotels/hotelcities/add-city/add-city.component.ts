import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelregisterserviceService } from 'src/app/hotelservices/hotelregisterservice.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  newCity: string = ''; // Holds the user input
  errorMessage: string = '';
  indiaCities: string[] = []; // Complete list of cities
  filteredCities: string[] = []; // Filtered list based on user input
  isDropdownOpen: boolean = false; // To control dropdown visibility

  constructor(private hotelservice: HotelregisterserviceService, private router: Router) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.indiaCities = [
      'Agartala', 'Agra', 'Ahmadabad', 'Ahmadnagar', 'Aizawl', 'Ajmer', 'Akola', 'Aligarh', 'Alipore', 'Alipur Duar', 'Almora', 'Amaravati', 'Ambala', 'Ambikapur', 'Amravati', 'Amreli', 'Amritsar', 'Anand', 'Anantapur', 'Anantnag', 'Ara', 'Arcot', 'Asansol', 'Aurangabad', 'Azamgarh', 'Bahraich', 'Baharampur', 'Ballari', 'Ballia', 'Bally', 'Balangir', 'Balurghat', 'Balaghat', 'Baleshwar', 'Bankura', 'Banda', 'Baranagar', 'Barasat', 'Baramula', 'Baran', 'Barmer', 'Barrackpore', 'Barwani', 'Baripada', 'Barauni', 'Basti', 'Batala', 'Begusarai', 'Belagavi', 'Bengaluru', 'Betul', 'Bettiah', 'Bhadravati', 'Bhagalpur', 'Bhandara', 'Bharatpur', 'Bharuch', 'Bhatpara', 'Bhavnagar', 'Bhilai', 'Bhilwara', 'Bhind', 'Bhiwani', 'Bhopal', 'Bhubaneswar', 'Bhuj', 'Bid', 'Bikaner', 'Bilaspur', 'Bilaspur', 'Bithur', 'Bodh Gaya', 'Bokaro', 'Brahmapur', 'Budaun', 'Budge Budge', 'Bulandshahr', 'Bundi', 'Burhanpur', 'Chaibasa', 'Chalakudy', 'Chamba', 'Chandernagore', 'Chandigarh', 'Chandragiri', 'Chhapra', 'Chennai', 'Chhindwara', 'Chidambaram', 'Chikkamagaluru', 'Chitradurga', 'Chittoor', 'Chittaurgarh', 'Churu', 'Coimbatore', 'Cooch Behar', 'Cuddalore', 'Cuttack', 'Dalhousie', 'Daman', 'Damoh', 'Darbhanga', 'Darjeeling', 'Davanagere', 'Dehra Dun', 'Dehri', 'Delhi', 'Dhamtari', 'Dhanbad', 'Dhar', 'Dharmshala', 'Dhaulpur', 'Dhenkanal', 'Dhuburi', 'Dibrugarh', 'Dindigul', 'Dispur', 'Diu', 'Dumka', 'Durg', 'Durgapur', 'Dwarka', 'Eluru', 'Etah', 'Etawah', 'Faridabad', 'Faridkot', 'Faizabad', 'Farrukhabad-cum-Fatehgarh', 'Fatehpur', 'Fatehpur Sikri', 'Firozpur', 'Firozpur Jhirka', 'Gangtok', 'Gangtok', 'Ganganagar', 'Gandhinagar', 'Ghaziabad', 'Ghazipur', 'Giridih', 'Godhra', 'Gonda', 'Gorakhpur', 'Gurugram', 'Guwahati', 'Gwalior', 'Haldwani', 'Halisahar', 'Hamirpur', 'Hanumangarh', 'Hassan', 'Hathras', 'Haveri', 'Hisar', 'Hoshangabad', 'Hugli', 'Hubballi-Dharwad', 'Hyderabad', 'Imphal', 'Indore', 'Itanagar', 'Itarsi', 'Jabalpur', 'Jabalpur', 'Jagdalpur', 'Jaipur', 'Jaisalmer', 'Jajpur', 'Jalandhar', 'Jalgaon', 'Jalor', 'Jammu', 'Jamshedpur', 'Janjgir', 'Jaunpur', 'Jehanabad', 'Jhansi', 'Jind', 'Jodhpur', 'Junagadh', 'Kalimpong', 'Kalna', 'Kalyani', 'Kanchipuram', 'Kandla', 'Kangra', 'Kannauj', 'Kanniyakumari', 'Kanpur', 'Karad', 'Karaikal', 'Karimnagar', 'Karnal', 'Karur', 'Katihar', 'Kavaratti', 'Khamgaon', 'Khammam', 'Khandwa', 'Khargone', 'Kheda', 'Kishangarh', 'Kochi', 'Kolhapur', 'Kolkata', 'Kollam', 'Koppal', 'Korba', 'Kota', 'Kottayam', 'Kozhikode', 'Kullu', 'Kurnool', 'Kurukshetra', 'Kushtagi', 'Lachung', 'Lucknow', 'Ludhiana', 'Machilipatnam', 'Madanapalle', 'Madikeri', 'Madurai', 'Mahabaleshwar', 'Mahbubnagar', 'Mahesana', 'Maheshtala', 'Malappuram', 'Malda', 'Malerkotla', 'Mangalore', 'Mango', 'Mannargudi', 'Mathura', 'Meerut', 'Midnapore', 'Mirzapur-Vindhyachal', 'Moga', 'Mokokchung', 'Moradabad', 'Morbi', 'Mumbai', 'Munger', 'Muzaffarnagar', 'Muzaffarpur', 'Nadiad', 'Nagpur', 'Nainital', 'Nalgonda', 'Nanded', 'Nasik', 'Nathdwara', 'Navi Mumbai', 'Nawanshahr', 'Nawada', 'Neyveli', 'Noida', 'Ongole', 'Ooty', 'Palakkad', 'Palanpur', 'Palasa Kasibugga', 'Pali', 'Pallavaram', 'Panaji', 'Panipat', 'Pathankot', 'Patiala', 'Patna', 'Pattamundai', 'Phagwara', 'Phalodi', 'Pilibhit', 'Pithoragarh', 'Porbandar', 'Port Blair', 'Prayagraj', 'Puducherry', 'Pudukkottai', 'Pune', 'Purulia', 'Puri', 'Pushkar', 'Raichur', 'Raipur', 'Rajahmundry', 'Rajkot', 'Rajnandgaon', 'Ramgarh', 'Rameswaram', 'Rampur', 'Ranaghat', 'Ranchi', 'Ratl', 'Ratnagiri', 'Rewa', 'Rishikesh', 'Rohtak', 'Rourkela', 'Saharanpur', 'Sambalpur', 'Sangli', 'Satara', 'Sawai Madhopur', 'Sehore', 'Shimla', 'Shirdi', 'Shivpuri', 'Shillong', 'Sikar', 'Silchar', 'Silvassa', 'Sirohi', 'Sitapur', 'Solapur', 'Srikakulam', 'Srinagar', 'Surat', 'Tehri', 'Tiruchirappalli', 'Tirunelveli', 'Tirupati', 'Tumakuru', 'Udaipur', 'Udhagamandalam', 'Una', 'Unjha', 'Vadodara', 'Valsad', 'Varanasi', 'Vijayapura', 'Vijayawada', 'Visakhapatnam', 'Warangal', 'Wokha', 'Yemmiganur', 'Zunheboto'
    ];
    this.filteredCities = [...this.indiaCities]; // Initially show all cities
  }

  filterCities() {
    const query = this.newCity.toLowerCase();
    this.filteredCities = this.indiaCities.filter(city =>
      city.toLowerCase().includes(query)
    );
  }

  selectCity(city: string) {
    this.newCity = city;
    this.filteredCities = []; // Clear the list of filtered cities after selection
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
      city: this.newCity
    };

    this.hotelservice.addCityInHotel(cityData).subscribe(() => {
      this.router.navigate(['displayHotelCities']);
      sessionStorage.setItem("hotelcityreadsuccessmsg", "City Successfully Added");
    }, error => {
      this.errorMessage = 'Error adding city. Please try again.';
    });
  }

  toggleDropdown(isOpen: boolean) {
    this.isDropdownOpen = isOpen;
  }

  onBlur() {
    setTimeout(() => {
      this.toggleDropdown(false);
    }, 200);
  }
}
