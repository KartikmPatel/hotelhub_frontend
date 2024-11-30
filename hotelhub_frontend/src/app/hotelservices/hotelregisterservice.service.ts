import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelregisterserviceService {

  private hotelapiUrl = "http://localhost:5161/api/Hoteltbs";


  constructor(private http:HttpClient) { }

  // Add New Hotel(Registration)
  addnewhotel(hotelData:FormData):Observable<any>{
    return this.http.post(this.hotelapiUrl,hotelData);
  }
  
  // Login
  checkuser(hotelData: any): Observable<any> {
    return this.http.post(`${this.hotelapiUrl}/login`, hotelData);
  }  

  // get hotel id based on email
  gethotelid(email: string): Observable<any> {
    const payload = { email: email };
    return this.http.post(`${this.hotelapiUrl}/gethid`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  displayProfile(hid:any): Observable<any>{
    return this.http.get(`${this.hotelapiUrl}/${hid}`);
  }

  updateProfile(hid:any, profileData:FormData):Observable<any>{
    console.log(hid+"------------------------"+FormData);
    return this.http.put(`${this.hotelapiUrl}/${hid}`,profileData);
  }
}
