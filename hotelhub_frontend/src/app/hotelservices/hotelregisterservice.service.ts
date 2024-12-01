import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelregisterserviceService {

  private hotelapiUrl = "http://localhost:5161/api/Hoteltbs";
  private hotelFeedbackUrl = "http://localhost:5161/api/Feedbacktbs";
  private roomUrlApi = "http://localhost:5161/api/Roomtbs";
  private roomfeatureUrlApi = "http://localhost:5161/api/RoomFeaturetbs";
  private roomfacilityUrlApi = "http://localhost:5161/api/RoomFacilitytbs";
  private feedbackUrlApi = "http://localhost:5161/api/Feedbacktbs";

  constructor(private http: HttpClient) { }

  // Add New Hotel(Registration)
  addnewhotel(hotelData: FormData): Observable<any> {
    return this.http.post(this.hotelapiUrl, hotelData);
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

  // get Rooms Count for Dashboard
  getroomfeaturescountByhid(hid:any):Observable<any>{
    return this.http.get(`${this.roomfeatureUrlApi}/getRoomFeatureCountByHotel/${hid}`);
  }

  // get Rooms Count for Dashboard
  getroomfacalitycountByhid(hid:any):Observable<any>{
    return this.http.get(`${this.roomfacilityUrlApi}/getRoomFacilityCountByHotel/${hid}`);
  }

  // get Rooms Count for Dashboard
  getfeedbackcountByhid(hid:any):Observable<any>{
    return this.http.get(`${this.feedbackUrlApi}/getFeedbackCountByHotel/${hid}`);
  }

  // get Rooms Count for Dashboard
  getroomcount(hid:any):Observable<any>{
    return this.http.get(`${this.roomUrlApi}/getroomcount/${hid}`);
  }

  displayProfile(hid: any): Observable<any> {
    return this.http.get(`${this.hotelapiUrl}/${hid}`);
  }

  updateProfile(hid: any, profileData: FormData): Observable<any> {
    return this.http.put(`${this.hotelapiUrl}/${hid}`, profileData);
  }

  getFeedbacks(hid: any): Observable<any> {
    return this.http.get(`${this.hotelFeedbackUrl}/getByHotel/${hid}`);
  }

  markAsRead(id: any): Observable<any> {
    return this.http.get(`${this.hotelFeedbackUrl}/markAsRead/${id}`);
  }

  changePassword(hid: any, profileData: FormData): Observable<any> {
    return this.http.put(`${this.hotelapiUrl}/changeHotelPassword/${hid}`, profileData);
  }

  forgotPassword(email: string): Observable<any> {
    console.log('Sending email for:', email);
    const payload = { email: email };
    return this.http.post(`${this.hotelapiUrl}/forgotpassword`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  resethotelpassword(email: string, password: string): Observable<any> {
    const payload = { email: email, password: password };
    return this.http.post(`${this.hotelapiUrl}/resetpassword`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
