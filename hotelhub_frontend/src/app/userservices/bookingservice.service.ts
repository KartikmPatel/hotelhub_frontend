import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  private apiUrl = 'http://localhost:5161/api/Reservationtbs';
  private feedbackUrl = "http://localhost:5161/api/Feedbacktbs";

  constructor(private http: HttpClient) { }

  getReservationsByUser(userId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getReservationByUser/${userId}`);
  }

  cancelBooking(uid:any,rid:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/cancelBooking/${uid}/${rid}`);
  }

  // display user feedback
  getFeedbackByUser(userId: any): Observable<any> {
    return this.http.get(`${this.feedbackUrl}/getfeedbackbyuser/${userId}`);
  }

  getHotels(): Observable<any> {
    return this.http.get(`${this.feedbackUrl}/GetHotels`);
  }

  getRoomCitiesByHotel(hotelId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.feedbackUrl}/GetRoomCitiesByHotel/${hotelId}`);
  }

  getRoomCategoriesByHotelAndCity(hotelId: number, city: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.feedbackUrl}/GetRoomCategoriesByHotelAndCity/${hotelId}/${city}`);
  }

  addFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(`${this.feedbackUrl}/Feedback`, feedback);
  }

  getRoomIdByHotelCityAndCategory(hotelId: number, city: string, roomCategoryId: number): Observable<any> {
    return this.http.get(`${this.feedbackUrl}/rooms/find`, {
      params: { hotelId: hotelId.toString(), city, roomCategoryId: roomCategoryId.toString() },
    });
  }

  submitFeedback(feedback: any): Observable<any> {
    return this.http.post(`${this.feedbackUrl}`, feedback);
  }
}
