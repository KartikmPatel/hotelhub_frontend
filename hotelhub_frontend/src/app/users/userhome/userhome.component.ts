import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from 'src/app/userservices/userhomeservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  gujaratCities: string[] = [];
  newCity: any = {
    city: ''
  };
  hotelData: any[] = []; // To store the hotels fetched based on the selected city
  errorMessage: string = '';

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
    this.gujaratCities = [
      'Port Blair', 'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor', 'Dowlaiswaram', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Nagarjunakoṇḍa', 'Rajahmundry', 'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram', 'Yemmiganur', 'Itanagar', 'Dhuburi', 'Dibrugarh', 'Dispur', 'Guwahati', 'Jorhat', 'Nagaon', 'Sivasagar', 'Silchar', 'Tezpur', 'Tinsukia', 'Ara', 'Barauni', 'Begusarai', 'Bettiah', 'Bhagalpur', 'Bihar Sharif', 'Bodh Gaya', 'Buxar', 'Chapra', 'Darbhanga', 'Dehri', 'Dinapur Nizamat', 'Gaya', 'Hajipur', 'Jamalpur', 'Katihar', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur', 'Patna', 'Purnia', 'Pusa', 'Saharsa', 'Samastipur', 'Sasaram', 'Sitamarhi', 'Siwan', 'Chandigarh', 'Ambikapur', 'Bhilai', 'Bilaspur', 'Dhamtari', 'Durg', 'Jagdalpur', 'Raipur', 'Rajnandgaon', 'Daman', 'Diu', 'Silvassa', 'Delhi', 'New Delhi', 'Madgaon', 'Panaji', 'Ahmadabad', 'Amreli', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Dwarka', 'Gandhinagar', 'Godhra', 'Jamnagar', 'Junagadh', 'Kandla', 'Khambhat', 'Kheda', 'Mahesana', 'Morbi', 'Nadiad', 'Navsari', 'Okha', 'Palanpur', 'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar', 'Valsad', 'Veraval', 'Ambala', 'Bhiwani', 'Chandigarh', 'Faridabad', 'Firozpur Jhirka', 'Gurugram', 'Hansi', 'Hisar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Panipat', 'Pehowa', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Bilaspur', 'Chamba', 'Dalhousie', 'Dharmshala', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi', 'Nahan', 'Shimla', 'Una', 'Anantnag', 'Baramula', 'Doda', 'Gulmarg', 'Jammu', 'Kathua', 'Punch', 'Rajouri', 'Srinagar', 'Udhampur', 'Bokaro', 'Chaibasa', 'Deoghar', 'Dhanbad', 'Dumka', 'Giridih', 'Hazaribag', 'Jamshedpur', 'Jharia', 'Rajmahal', 'Ranchi', 'Saraikela', 'Badami', 'Ballari', 'Bengaluru', 'Belagavi', 'Bhadravati', 'Bidar', 'Chikkamagaluru', 'Chitradurga', 'Davangere', 'Halebid', 'Hassan', 'Hubballi-Dharwad', 'Kalaburagi', 'Kolar', 'Madikeri', 'Mandya', 'Mangaluru', 'Mysuru', 'Raichur', 'Shivamogga', 'Shravanabelagola', 'Shrirangapattana', 'Tumakuru', 'Vijayapura', 'Alappuzha', 'Vatakara', 'Idukki', 'Kannur', 'Kochi', 'Kollam', 'Kottayam', 'Kozhikode', 'Mattancheri', 'Palakkad', 'Thalassery', 'Thiruvananthapuram', 'Thrissur', 'Kargil', 'Leh', 'Balaghat', 'Barwani', 'Betul', 'Bharhut', 'Bhind', 'Bhojpur', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dr. Ambedkar Nagar (Mhow)', 'Guna', 'Gwalior', 'Hoshangabad', 'Indore', 'Itarsi', 'Jabalpur', 'Jhabua', 'Khajuraho', 'Khandwa', 'Khargone', 'Maheshwar', 'Mandla', 'Mandsaur', 'Morena', 'Murwara', 'Narsimhapur', 'Narsinghgarh', 'Narwar', 'Neemuch', 'Nowgong', 'Orchha', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Sarangpur', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Ujjain', 'Vidisha', 'Ahmadnagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhandara', 'Bhusawal', 'Bid', 'Buldhana', 'Chandrapur', 'Daulatabad', 'Dhule', 'Jalgaon', 'Kalyan', 'Karli', 'Kolhapur', 'Mahabaleshwar', 'Malegaon', 'Matheran', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Osmanabad', 'Pandharpur', 'Parbhani', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Sevagram', 'Solapur', 'Thane', 'Ulhasnagar', 'Vasai-Virar', 'Wardha', 'Yavatmal', 'Imphal', 'Cherrapunji', 'Shillong', 'Aizawl', 'Lunglei', 'Kohima', 'Mon', 'Phek', 'Wokha', 'Zunheboto', 'Balangir', 'Baleshwar', 'Baripada', 'Bhubaneshwar', 'Brahmapur', 'Cuttack', 'Dhenkanal', 'Kendujhar', 'Konark', 'Koraput', 'Paradip', 'Phulabani', 'Puri', 'Sambalpur', 'Udayagiri', 'Karaikal', 'Mahe', 'Puducherry', 'Yanam', 'Amritsar', 'Batala', 'Chandigarh', 'Faridkot', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Nabha', 'Patiala', 'Rupnagar', 'Sangrur', 'Abu', 'Ajmer', 'Alwar', 'Amer', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittaurgarh', 'Churu', 'Dhaulpur', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalor', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Kishangarh', 'Kota', 'Merta', 'Nagaur', 'Nathdwara', 'Pali', 'Phalodi', 'Pushkar', 'Sawai Madhopur', 'Shahpura', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur', 'Gangtok', 'Gyalshing', 'Lachung', 'Mangan', 'Arcot', 'Chengalpattu', 'Chennai', 'Chidambaram', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanniyakumari', 'Kodaikanal', 'Kumbakonam', 'Madurai', 'Mamallapuram', 'Nagappattinam', 'Nagercoil', 'Palayamkottai', 'Pudukkottai', 'Rajapalayam', 'Ramanathapuram', 'Salem', 'Thanjavur', 'Tiruchchirappalli', 'Tirunelveli', 'Tiruppur', 'Thoothukudi', 'Udhagamandalam', 'Vellore', 'Hyderabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nizamabad', 'Sangareddi', 'Warangal', 'Agartala', 'Agra', 'Aligarh', 'Amroha', 'Ayodhya', 'Azamgarh', 'Bahraich', 'Ballia', 'Banda', 'Bara Banki', 'Bareilly', 'Basti', 'Bijnor', 'Bithur', 'Bulandshahr', 'Deoria', 'Etawah', 'Faizabad', 'Farrukhabad-cum-Fatehgarh', 'Fatehpur', 'Fatehpur Sikri', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hardoi', 'Hathras', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Mainpuri', 'Mathura', 'Meerut', 'Mirzapur-Vindhyachal', 'Moradabad', 'Muzaffarnagar', 'Partapgarh', 'Pilibhit', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Shahjahanpur', 'Sitapur', 'Sravasti', 'Sultanpur', 'Tehri', 'Varanasi', 'Almora', 'Dehra Dun', 'Haridwar', 'Nainital', 'Pithoragarh', 'Alipurduar', 'Asansol', 'Baharampur', 'Bally', 'Balurghat', 'Bankura', 'Baranagar', 'Barasat', 'Barrackpore', 'Basirhat', 'Bhatpara', 'Bishnupur', 'Budge Budge', 'Burdwan', 'Chandernagore', 'Darjiling', 'Durgapur', 'Halisahar', 'Haora', 'Hugli-Chinsurah', 'Ingraj Bazar', 'Jalpaiguri', 'Kalimpong', 'Kamarhati', 'Kanchrapara', 'Kharagpur', 'Kolkata', 'Krishnanagar', 'Malda', 'Midnapore', 'Murshidabad', 'Nabadwip', 'Palashi', 'Panihati', 'Purulia', 'Raiganj', 'Santipur', 'Shantiniketan', 'Shrirampur', 'Siliguri', 'Siuri', 'Tamluk', 'Titagarh'
    ];
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
