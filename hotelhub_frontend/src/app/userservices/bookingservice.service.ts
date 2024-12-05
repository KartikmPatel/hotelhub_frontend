import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  private apiUrl = 'http://localhost:5161/api/Reservationtbs';

  constructor(private http: HttpClient) { }

  getReservationsByUser(userId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getReservationByUser/${userId}`);
  }

  cancelBooking(uid:any,rid:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/cancelBooking/${uid}/${rid}`);
  }
}
