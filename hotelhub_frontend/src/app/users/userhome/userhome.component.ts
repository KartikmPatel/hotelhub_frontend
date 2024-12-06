import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  indiaCities: string[] = [];
  newCity: any = {
    city: ''
  };
  hotelData: any[] = []; // To store the hotels fetched based on the selected city
  errorMessage: string = '';
  filteredCities: string[] = [];

  tophotels:any[]=[];

  minDate: string='';
  checkOutMinDate: string='';

  constructor(
    private UserhomeserviceService: UserhomeserviceService,
    private router: Router
  ) { 
    // Set today's date as the minimum date for Check In
    const today = new Date();
    this.minDate = this.formatDate(today);

    // Set tomorrow's date as the minimum date for Check Out
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.checkOutMinDate = this.formatDate(tomorrow);
  }

   // Handle Check In date changes
   onCheckInDateChange(event: Event) {
    const selectedDate = (event.target as HTMLInputElement).value;
    if (selectedDate) {
      const checkOutMin = new Date(selectedDate);
      checkOutMin.setDate(checkOutMin.getDate() + 1);
      this.checkOutMinDate = this.formatDate(checkOutMin);
    }
  }

  // Utility to format date as yyyy-MM-dd
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  quantity: number = 1; // Default quantity

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  quantity1: number = 1; // Default quantity

  incrementQuantity1(): void {
    this.quantity1++;
  }

  decrementQuantity1(): void {
    if (this.quantity1 > 1) {
      this.quantity1--;
    }
  } 

  ngOnInit() {
    this.loadCities();

    this.UserhomeserviceService.getTopRatingHotels().subscribe((data) => {
        this.tophotels = data.$values;
        console.log(this.tophotels);
    });
  }

  loadCities() {
    this.indiaCities = [
      'Agartala', 'Agra', 'Ahmadabad', 'Ahmadnagar', 'Aizawl', 'Ajmer', 'Akola', 'Aligarh', 'Alipore', 'Alipur Duar', 'Almora', 'Amaravati', 'Ambala', 'Ambikapur', 'Amravati', 'Amreli', 'Amritsar', 'Anand', 'Anantapur', 'Anantnag', 'Ara', 'Arcot', 'Asansol', 'Aurangabad', 'Azamgarh', 'Bahraich', 'Baharampur', 'Ballari', 'Ballia', 'Bally', 'Balangir', 'Balurghat', 'Balaghat', 'Baleshwar', 'Bankura', 'Banda', 'Baranagar', 'Barasat', 'Baramula', 'Baran', 'Barmer', 'Barrackpore', 'Barwani', 'Baripada', 'Barauni', 'Basti', 'Batala', 'Begusarai', 'Belagavi', 'Bengaluru', 'Betul', 'Bettiah', 'Bhadravati', 'Bhagalpur', 'Bhandara', 'Bharatpur', 'Bharuch', 'Bhatpara', 'Bhavnagar', 'Bhilai', 'Bhilwara', 'Bhind', 'Bhiwani', 'Bhopal', 'Bhubaneswar', 'Bhuj', 'Bid', 'Bikaner', 'Bilaspur', 'Bilaspur', 'Bithur', 'Bodh Gaya', 'Bokaro', 'Brahmapur', 'Budaun', 'Budge Budge', 'Bulandshahr', 'Bundi', 'Burhanpur', 'Chaibasa', 'Chalakudy', 'Chamba', 'Chandernagore', 'Chandigarh', 'Chandragiri', 'Chhapra', 'Chennai', 'Chhindwara', 'Chidambaram', 'Chikkamagaluru', 'Chitradurga', 'Chittoor', 'Chittaurgarh', 'Churu', 'Coimbatore', 'Cooch Behar', 'Cuddalore', 'Cuttack', 'Dalhousie', 'Daman', 'Damoh', 'Darbhanga', 'Darjeeling', 'Davanagere', 'Dehra Dun', 'Dehri', 'Delhi', 'Dhamtari', 'Dhanbad', 'Dhar', 'Dharmshala', 'Dhaulpur', 'Dhenkanal', 'Dhuburi', 'Dibrugarh', 'Dindigul', 'Dispur', 'Diu', 'Dumka', 'Durg', 'Durgapur', 'Dwarka', 'Eluru', 'Etah', 'Etawah', 'Faridabad', 'Faridkot', 'Faizabad', 'Farrukhabad-cum-Fatehgarh', 'Fatehpur', 'Fatehpur Sikri', 'Firozpur', 'Firozpur Jhirka', 'Gangtok', 'Gangtok', 'Ganganagar', 'Gandhinagar', 'Ghaziabad', 'Ghazipur', 'Giridih', 'Godhra', 'Gonda', 'Gorakhpur', 'Gurugram', 'Guwahati', 'Gwalior', 'Haldwani', 'Halisahar', 'Hamirpur', 'Hanumangarh', 'Hassan', 'Hathras', 'Haveri', 'Hisar', 'Hoshangabad', 'Hugli', 'Hubballi-Dharwad', 'Hyderabad', 'Imphal', 'Indore', 'Itanagar', 'Itarsi', 'Jabalpur', 'Jabalpur', 'Jagdalpur', 'Jaipur', 'Jaisalmer', 'Jajpur', 'Jalandhar', 'Jalgaon', 'Jalor', 'Jammu', 'Jamshedpur', 'Janjgir', 'Jaunpur', 'Jehanabad', 'Jhansi', 'Jind', 'Jodhpur', 'Junagadh', 'Kalimpong', 'Kalna', 'Kalyani', 'Kanchipuram', 'Kandla', 'Kangra', 'Kannauj', 'Kanniyakumari', 'Kanpur', 'Karad', 'Karaikal', 'Karimnagar', 'Karnal', 'Karur', 'Katihar', 'Kavaratti', 'Khamgaon', 'Khammam', 'Khandwa', 'Khargone', 'Kheda', 'Kishangarh', 'Kochi', 'Kolhapur', 'Kolkata', 'Kollam', 'Koppal', 'Korba', 'Kota', 'Kottayam', 'Kozhikode', 'Kullu', 'Kurnool', 'Kurukshetra', 'Kushtagi', 'Lachung', 'Lucknow', 'Ludhiana', 'Machilipatnam', 'Madanapalle', 'Madikeri', 'Madurai', 'Mahabaleshwar', 'Mahbubnagar', 'Mahesana', 'Maheshtala', 'Malappuram', 'Malda', 'Malerkotla', 'Mangalore', 'Mango', 'Mannargudi', 'Mathura', 'Meerut', 'Midnapore', 'Mirzapur-Vindhyachal', 'Moga', 'Mokokchung', 'Moradabad', 'Morbi', 'Mumbai', 'Munger', 'Muzaffarnagar', 'Muzaffarpur', 'Nadiad', 'Nagpur', 'Nainital', 'Nalgonda', 'Nanded', 'Nasik', 'Nathdwara', 'Navi Mumbai', 'Nawanshahr', 'Nawada', 'Neyveli', 'Noida', 'Ongole', 'Ooty', 'Palakkad', 'Palanpur', 'Palasa Kasibugga', 'Pali', 'Pallavaram', 'Panaji', 'Panipat', 'Pathankot', 'Patiala', 'Patna', 'Pattamundai', 'Phagwara', 'Phalodi', 'Pilibhit', 'Pithoragarh', 'Porbandar', 'Port Blair', 'Prayagraj', 'Puducherry', 'Pudukkottai', 'Pune', 'Purulia', 'Puri', 'Pushkar', 'Raichur', 'Raipur', 'Rajahmundry', 'Rajkot', 'Rajnandgaon', 'Ramgarh', 'Rameswaram', 'Rampur', 'Ranaghat', 'Ranchi', 'Ratl', 'Ratnagiri', 'Rewa', 'Rishikesh', 'Rohtak', 'Rourkela', 'Saharanpur', 'Sambalpur', 'Sangli', 'Satara', 'Sawai Madhopur', 'Sehore', 'Shimla', 'Shirdi', 'Shivpuri', 'Shillong', 'Sikar', 'Silchar', 'Silvassa', 'Sirohi', 'Sitapur', 'Solapur', 'Srikakulam', 'Srinagar', 'Surat', 'Tehri', 'Tiruchirappalli', 'Tirunelveli', 'Tirupati', 'Tumakuru', 'Udaipur', 'Udhagamandalam', 'Una', 'Unjha', 'Vadodara', 'Valsad', 'Varanasi', 'Vijayapura', 'Vijayawada', 'Visakhapatnam', 'Warangal', 'Wokha', 'Yemmiganur', 'Zunheboto'
    ];
    this.filteredCities = [...this.indiaCities]; // Initially show all cities
  }

  
  filterCities() {
    const query = this.newCity.city.toLowerCase();
    this.filteredCities = this.indiaCities.filter(city =>
      city.toLowerCase().includes(query)
    );
  }

  onSubmit() {
    // Get the arrival and departure dates
    const arrivalDate = (document.querySelector('input[placeholder="Arrival Date"]') as HTMLInputElement)?.value;
    const departureDate = (document.querySelector('input[placeholder="Departure Date"]') as HTMLInputElement)?.value;
    const adultQuantity = (document.querySelector('#quantity') as HTMLInputElement)?.value;
    const childQuantity = (document.querySelector('#quantity1') as HTMLInputElement)?.value;

    if (!this.newCity.city) {
      this.errorMessage = 'Please select a city.';
      return;
    }

    if (!arrivalDate) {
      this.errorMessage = 'Please select an Check In Date.';
      return;
    }
  
    if (!departureDate) {
      this.errorMessage = 'Please select a Check Out Date.';
      return;
    }

    if (!adultQuantity) {
      this.errorMessage = 'Please Enter the Adult Quantity.';
      return;
    }
  
    if (!childQuantity) {
      this.errorMessage = 'Please Enter the Child Quantity.';
      return;
    }

    // Store values in sessionStorage or localStorage
    sessionStorage.setItem('arrivalDate', arrivalDate);
    sessionStorage.setItem('departureDate', departureDate);
    sessionStorage.setItem('city', this.newCity.city);
    sessionStorage.setItem('adultQuantity', adultQuantity);
    sessionStorage.setItem('childQuantity', childQuantity);

    this.UserhomeserviceService.getHotelsByCity(this.newCity.city).subscribe({
      next: (data) => {
        this.hotelData = data.$values;
        this.errorMessage = '';
        // Store the fetched hotels in the service and localStorage
        this.UserhomeserviceService.setHotels(this.hotelData);
        // Navigate to the hotel details component
        this.router.navigate(['/showhoteldetails']);
      },
      error: (err) => {
        this.errorMessage = 'Error fetching hotels. Please try again.';
        console.error(err);
      }
    });
  }
}
