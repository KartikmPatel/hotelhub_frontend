import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FesdiscountserviceService {

  private festivaldiscountapiUrl = "http://localhost:5161/api/FestivalDiscounts";

  constructor(private http: HttpClient) { }

  // display festival discount
  getFesDiscount(): Observable<any> {
    return this.http.get(this.festivaldiscountapiUrl);
  }

  // Add festival discount
  addFesDiscount(discountData: any): Observable<any> {
    return this.http.post(this.festivaldiscountapiUrl, discountData);
  }

  // delete festival discount
  deleteFesDiscount(discountid: string): Observable<any> {
    return this.http.delete(`${this.festivaldiscountapiUrl}/${discountid}`);
  }

  // Retrive for update festival discount
  editFesDiscount(discountid: string): Observable<any> {
    return this.http.get(`${this.festivaldiscountapiUrl}/${discountid}`);
  }

  // Update the festival discount
  updateFesDiscount(discountid: string, discountData: any): Observable<any> {
    return this.http.put(`${this.festivaldiscountapiUrl}/${discountid}`, discountData);
  }
  
}
