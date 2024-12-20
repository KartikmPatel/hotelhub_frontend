import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterserviceService {

  private userUrlApi = "http://localhost:5161/api/Usertbs";

  constructor(private http: HttpClient) { }

  // Add New User(Registration)
  addnewuser(userData: FormData): Observable<any> {
    return this.http.post(this.userUrlApi, userData);
  }

  // Login
  checkuserlogin(userData: any): Observable<any> {
    return this.http.post(`${this.userUrlApi}/login`, userData);
  }

  // get User id based on email
  getuserid(email: string): Observable<any> {
    const payload = { email: email };
    return this.http.post(`${this.userUrlApi}/getuid`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  forgotPassword(email: string): Observable<any> {
    console.log('Sending email for:', email);
    const payload = { email: email };
    return this.http.post(`${this.userUrlApi}/forgotpassword`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  resethotelpassword(email: string, password: string): Observable<any> {
    const payload = { email: email, password: password };
    return this.http.post(`${this.userUrlApi}/resetpassword`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  displayProfile(uid: any): Observable<any> {
    return this.http.get(`${this.userUrlApi}/${uid}`);
  }

  updateProfile(uid: any, profileData: FormData): Observable<any> {
    return this.http.put(`${this.userUrlApi}/${uid}`, profileData);
  }

  changePassword(hid: any, profileData: FormData): Observable<any> {
    return this.http.put(`${this.userUrlApi}/changeUserPassword/${hid}`, profileData);
  }
}
