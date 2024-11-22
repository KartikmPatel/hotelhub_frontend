import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomcategoryserviceService {

  private categoryApiUrl = "http://localhost:5161/api/RoomCategorytbs";

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

}
