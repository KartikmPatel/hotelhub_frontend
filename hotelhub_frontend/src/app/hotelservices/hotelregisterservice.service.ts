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
  
  checkuser(hotelData: any): Observable<any> {
    return this.http.post(`${this.hotelapiUrl}/login`, hotelData);
  }  

  // Retrive for update Category
  // editCategory(categoryId:string):Observable<any>{
  //   return this.http.get(`${this.categoryApiUrl}/${categoryId}`);
  // }
}
