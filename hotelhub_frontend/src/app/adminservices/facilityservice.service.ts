import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityserviceService {

  private facilityApiUrl = "http://localhost:5161/api/Facilitytbs";

  constructor(private http:HttpClient) { }

  // Add Facility
  addfacility(facilityData:any):Observable<any>{
    return this.http.post(this.facilityApiUrl,facilityData);
  }

  // display Facility
  getFacility():Observable<any>{
    return this.http.get(this.facilityApiUrl);
  }
}
