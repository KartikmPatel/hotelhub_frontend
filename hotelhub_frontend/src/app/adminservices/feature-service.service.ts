import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureServiceService {
  private featureApiUrl = "http://localhost:5161/api/Featurestbs";

  constructor(private http:HttpClient) { }

  // Add Facility
  addFeature(featureData:FormData):Observable<any>{
    return this.http.post(this.featureApiUrl,featureData);
  }

  // display Facility
  getFeature():Observable<any>{
    return this.http.get(this.featureApiUrl);
  }

  deleteFeature(featureId:string):Observable<any>{
    return this.http.delete(`${this.featureApiUrl}/${featureId}`);
  }

  editFeature(featureId:string):Observable<any>{
    return this.http.get(`${this.featureApiUrl}/${featureId}`);
  }

  updateFeature(featureId:string,featureData:FormData):Observable<any>{
    return this.http.put(`${this.featureApiUrl}/${featureId}`,featureData);
  }
}
