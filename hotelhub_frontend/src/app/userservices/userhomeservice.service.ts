import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhomeserviceService {

  private roomApiUrl = "http://localhost:5161/api/Roomtbs";
  private fesdiscountApi = "http://localhost:5161/api/FestivalDiscounts";
  private reservationApi = "http://localhost:5161/api/Reservationtbs";

  private hotelSubject = new BehaviorSubject<any[]>([]);
  currentHotels = this.hotelSubject.asObservable();

  private roomSubject = new BehaviorSubject<any[]>([]);
  currentRooms = this.roomSubject.asObservable();

  private roomDetailSubject = new BehaviorSubject<any[]>([]);
  currentRoomDetails = this.roomDetailSubject.asObservable();

  constructor(private http: HttpClient) { }

  // get Hotels By City
  getHotelsByCity(city: string): Observable<any> {
    const url = `${this.roomApiUrl}/gethotelsbycity?city=${city}`;
    return this.http.get(url);
  }

  // Store hotel data in localStorage and update BehaviorSubject
  setHotels(hotels: any[]) {
    sessionStorage.setItem('hotels', JSON.stringify(hotels)); // Store in localStorage
    this.hotelSubject.next(hotels); // Update BehaviorSubject
  }

  // Get hotel data from localStorage (if available)
  getStoredHotels() {
    const storedHotels = sessionStorage.getItem('hotels');
    if (storedHotels) {
      return JSON.parse(storedHotels);
    }
    return [];
  }

  // Store hotel data in localStorage and update BehaviorSubject
  setRooms(rooms: any[]) {
    sessionStorage.setItem('rooms', JSON.stringify(rooms)); // Store in localStorage
    this.roomSubject.next(rooms); // Update BehaviorSubject
  }

  // Get hotel data from localStorage (if available)
  getStoredRooms() {
    const storedRooms = sessionStorage.getItem('rooms');
    if (storedRooms) {
      return JSON.parse(storedRooms);
    }
    return [];
  }

  // Store Room data in localStorage and update BehaviorSubject
  setRoomDetails(rooms: any) {
    sessionStorage.setItem('roomDetails', JSON.stringify(rooms)); // Store in localStorage
    this.roomDetailSubject.next(rooms); // Update BehaviorSubject
  }

  // Get hotel data from localStorage (if available)
  getStoredRoomsDetails() {
    const storedRoomDetails = sessionStorage.getItem('roomDetails');
    if (storedRoomDetails) {
      return JSON.parse(storedRoomDetails);
    }
    return {};
  }
  
  getfesdiscount():Observable<any>{
    return this.http.get(this.fesdiscountApi);
  }

  // get top 5 hotel with highest rating for dashboard
  getTopRatingHotels():Observable<any>{
    return this.http.get(`${this.roomApiUrl}/topratedhotels`);
  }

  // get rooms by hotelid
  getRoomsByHotel(hid: any,city:any,adultQuantity:any,childQuantity:any): Observable<any> {
    const url = `${this.roomApiUrl}/searchroomsbyhotel/${hid}?city=${city}&adultCapacity=${adultQuantity}&childCapacity=${childQuantity}`;
    return this.http.get(url);
  }

  // get Room Details by RoomId
  getRoomDetailsByRoomId(rid:any):Observable<any>
  {
    return this.http.get(`${this.roomApiUrl}/${rid}`);
  }

  // get Avialibility
  getRoomAvailibility(rid: any,checkIn:any):Observable<any>{
    const url = `${this.reservationApi}/getavailability/${rid}?checkIn=${checkIn}`;
    return this.http.get(url);
  }

  // Method to book a room
  bookRoom(bookingData: any): Observable<any> {
    return this.http.post<any>(`${this.reservationApi}/bookroom`, bookingData);
  }

  // Update Room Quantity
  updateRoomQty(roomid: any, qty: any): Observable<any> {
    const payload = { roomid: roomid, qty: qty };
    return this.http.post(`${this.reservationApi}/updatequantity`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
