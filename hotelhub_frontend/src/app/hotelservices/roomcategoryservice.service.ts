import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomcategoryserviceService {

  private apiUrl = "http://localhost:5161/api/RoomCategorytbs";

  constructor(private http:HttpClient){}

  // display Category
  getCategory():Observable<any>{
      return this.http.get(this.apiUrl);
  }
}
