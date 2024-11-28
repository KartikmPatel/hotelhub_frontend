import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {

  private roomApiUrl = "http://localhost:5161/api/Roomtbs";
  private roomFeatureUrl = "http://localhost:5161/api/RoomFeaturetbs";
  private roomFacilityUrl = "http://localhost:5161/api/RoomFacilitytbs";
  private roomImageUrl = "http://localhost:5161/api/RoomImagetbs";

  constructor(private http:HttpClient) { }

  addRoom(roomData:any):Observable<any>{
    return this.http.post(this.roomApiUrl,roomData);
  }

  getAllRooms():Observable<any>{
    return this.http.get(this.roomApiUrl+"/allrooms");
  }

  getRooms():Observable<any>{
    return this.http.get(this.roomApiUrl);
  }

  deleteRoom(roomId:string):Observable<any>{
    return this.http.delete(`${this.roomApiUrl}/${roomId}`);
  }

  getRoomById(roomId:string):Observable<any>{
    return this.http.get(`${this.roomApiUrl}/${roomId}`);
  }

  updateRoom(roomId:string,roomData:any):Observable<any>{
    return this.http.put(`${this.roomApiUrl}/${roomId}`,roomData);
  }

  addRoomFeature(roomFeatureId: string, roomId: any): Observable<any> {
    const body = {
      featureid: roomFeatureId,
      roomid: roomId
    };

    return this.http.post(this.roomFeatureUrl, body);
  }

  getRoomFeatures(roomId: string): Observable<any> {
    const url = `${this.roomFeatureUrl}?roomId=${roomId}`;
    return this.http.get(url);
  }

  addRoomFacility(roomFacilityId:string,roomId:any):Observable<any>{
    const body = {
      facilityid: roomFacilityId,
      roomid: roomId
    };

    return this.http.post(this.roomFacilityUrl, body);
  }

  getRoomFacility(roomId: string): Observable<any> {
    const url = `${this.roomFacilityUrl}?roomId=${roomId}`;
    return this.http.get(url);
  }

  deleteRoomFacility(roomId:string):Observable<any>{
    return this.http.delete(`${this.roomFacilityUrl}/${roomId}`);
  }

  deleteRoomFeature(roomId:string):Observable<any>{
    return this.http.delete(`${this.roomFeatureUrl}/${roomId}`);
  }

  getRoomImages(roomId: string): Observable<any> {
    return this.http.get(`${this.roomImageUrl}/roomimages/${roomId}`);
  }

  deleteRoomImages(imageId:string):Observable<any>{
    return this.http.delete(`${this.roomImageUrl}/${imageId}`);
  }

  addRoomImages(imageData: FormData): Observable<any> {
    return this.http.post(`${this.roomImageUrl}/upload`, imageData);
  }

}
