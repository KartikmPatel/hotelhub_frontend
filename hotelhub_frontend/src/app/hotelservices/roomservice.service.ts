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
  private hotelfacility = "http://localhost:5161/api/RoomFacilitytbs"; // getAllFacilityByHotel/1
  private hotelfeature = "http://localhost:5161/api/RoomFeaturetbs";   // getAllFeatureByHotel/1
  private reservation = "http://localhost:5161/api/Reservationtbs";

  constructor(private http: HttpClient) { }

  // Get all facilities associated with a hotel
  getHotelFacility(hid: any): Observable<any> {
    return this.http.get(`${this.hotelfacility}/getAllFacilityByHotel/${hid}`);
  }

  // Get all features associated with a hotel
  getHotelFeature(hid: any): Observable<any> {
    return this.http.get(`${this.hotelfeature}/getAllFeatureByHotel/${hid}`);
  }

  // Add a new room
  addRoom(roomData: any): Observable<any> {
    return this.http.post(this.roomApiUrl, roomData);
  }

  // Get all rooms
  getAllRooms(): Observable<any> {
    return this.http.get(this.roomApiUrl + "/allrooms");
  }

  // Get rooms by hotel ID
  getRooms(hid: any): Observable<any> {
    return this.http.get(`${this.roomApiUrl}/hotel/${hid}`);
  }

  // Delete a room
  deleteRoom(roomId: string): Observable<any> {
    return this.http.delete(`${this.roomApiUrl}/${roomId}`);
  }

  // Get a room by its ID
  getRoomById(roomId: string): Observable<any> {
    return this.http.get(`${this.roomApiUrl}/${roomId}`);
  }

  // Update room details
  updateRoom(roomId: any, roomData: any): Observable<any> {
    return this.http.put(`${this.roomApiUrl}/${roomId}`, roomData);
  }

  // Add a room feature
  addRoomFeature(roomFeatureId: string, roomId: any): Observable<any> {
    const body = {
      featureid: roomFeatureId,
      roomid: roomId
    };
    return this.http.post(this.roomFeatureUrl, body);
  }

  // Get features associated with a room
  getRoomFeatures(roomId: string): Observable<any> {
    const url = `${this.roomFeatureUrl}?roomId=${roomId}`;
    return this.http.get(url);
  }

  // Add a room facility
  addRoomFacility(roomFacilityId: string, roomId: any): Observable<any> {
    const body = {
      facilityid: roomFacilityId,
      roomid: roomId
    };
    return this.http.post(this.roomFacilityUrl, body);
  }

  // Get facilities associated with a room
  getRoomFacility(roomId: string): Observable<any> {
    const url = `${this.roomFacilityUrl}?roomId=${roomId}`;
    return this.http.get(url);
  }

  // Delete all facilities of a room
  deleteRoomFacility(roomId: string): Observable<any> {
    return this.http.delete(`${this.roomFacilityUrl}/${roomId}`);
  }

  // Delete all features of a room
  deleteRoomFeature(roomId: string): Observable<any> {
    return this.http.delete(`${this.roomFeatureUrl}/${roomId}`);
  }

  // Update facilities associated with a room
  updateRoomFacilities(roomId: any, facilityIds: number[]): Observable<any> {
    const url = `${this.roomFacilityUrl}/updateRoomFacilities/${roomId}`;
    return this.http.put(url, facilityIds);
  }

  // Update features associated with a room
  updateRoomFeatures(roomId: any, featureIds: number[]): Observable<any> {
    const url = `${this.roomFeatureUrl}/updateRoomFeatures/${roomId}`;
    return this.http.put(url, featureIds);
  }

  // Get all images associated with a room
  getRoomImages(roomId: string): Observable<any> {
    return this.http.get(`${this.roomImageUrl}/roomimages/${roomId}`);
  }

  // Delete a room image by its ID
  deleteRoomImages(imageId: string): Observable<any> {
    return this.http.delete(`${this.roomImageUrl}/${imageId}`);
  }

  // Upload room images
  addRoomImages(imageData: FormData): Observable<any> {
    return this.http.post(`${this.roomImageUrl}/upload`, imageData);
  }

  changeActiveStatus(roomid:any,status :any):Observable<any>{
    return this.http.get(`${this.roomApiUrl}/changeActiveStatus/${status}?roomid=${roomid}`);
  }

  checkRoomExistence(roomId: number, city: string, categoryId: number, hid: string) {
    return this.http.get<any>(`${this.roomApiUrl}/check-existence/${roomId}?city=${city}&categoryId=${categoryId}&hid=${hid}`);
  }

  getUserBooking(hid:any):Observable<any>{
    return this.http.get(`${this.reservation}/getReservationByHotel/${hid}`);
  }
}
