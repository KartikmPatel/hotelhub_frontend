import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomcategoryserviceService {

  private categoryApiUrl = "http://localhost:5161/api/RoomCategorytbs";
  private facilitycountapi = "http://localhost:5161/api/Facilitytbs/getfacilitycount";
  private featurescountapi = "http://localhost:5161/api/Featurestbs/getfeaturescount";
  private hotelapiUrl = "http://localhost:5161/api/Hoteltbs";
  private fesdiscountUrl = "http://localhost:5161/api/FestivalDiscounts";

  constructor(private http:HttpClient){}

  // display Category
  getCategory():Observable<any>{
      return this.http.get(this.categoryApiUrl);
  }

  // Add Category
  addCategory(categoryData:any):Observable<any>{
    return this.http.post(this.categoryApiUrl,categoryData);
  }

  // delete category
  deleteCategory(categoryId:string):Observable<any>{
    return this.http.delete(`${this.categoryApiUrl}/${categoryId}`);
  }

  // Retrive for update Category
  editCategory(categoryId:string):Observable<any>{
    return this.http.get(`${this.categoryApiUrl}/${categoryId}`);
  }

  // Update the Category
  updateCategory(categoryId:string,categoryData:any):Observable<any>{
    return this.http.put(`${this.categoryApiUrl}/${categoryId}`,categoryData);
  }

  // getcount of category for dashboard
  getcategorycount():Observable<any>{
    return this.http.get(`${this.categoryApiUrl}/getcategorycount`)
  }

  // get count of Facility for dashboard
  getfacilitycount():Observable<any>{
    return this.http.get(this.facilitycountapi)
  }

  // getcount of Facility for dashboard
  getfeaturescount():Observable<any>{
    return this.http.get(this.featurescountapi)
  }

  // getcount of Hotels for dashboard
  gethotelcount():Observable<any>{
    return this.http.get(`${this.hotelapiUrl}/gethotelcount`)
  }

  // getcount of festival discount for dashboard
  getfesdiscountcount():Observable<any>{
    return this.http.get(`${this.fesdiscountUrl}/getfesdiscountcount`)
  }

  // display new hotels
  gethotels():Observable<any>{
    return this.http.get(this.hotelapiUrl)
  }

  // approval new hotels
  approveHotel(hotelId: number) {
    return this.http.post(`${this.hotelapiUrl}/approve`, { id: hotelId });
  }
}
