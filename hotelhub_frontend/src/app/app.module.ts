import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayRoomcategoryComponent } from './admin/display-roomcategory/display-roomcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelheaderComponent } from './hotels/hotelheader/hotelheader.component';
import { HoteldashboardComponent } from './hotels/hoteldashboard/hoteldashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AddroomcategoryComponent } from './admin/addroomcategory/addroomcategory.component';
import { FormsModule } from '@angular/forms';
import { EditroomcategoryComponent } from './admin/editroomcategory/editroomcategory.component';
import { AddfacilityComponent } from './admin/addfacility/addfacility.component';
import { DisplayfacilityComponent } from './admin/displayfacility/displayfacility.component';
import { EditFacilityComponent } from './admin/edit-facility/edit-facility.component';
import { DisplayFeaturesComponent } from './admin/features/display-features/display-features.component';
import { AddFeaturesComponent } from './admin/features/add-features/add-features.component';
import { EditFeatureComponent } from './admin/features/edit-feature/edit-feature.component';
import { HotelregisterComponent } from './hotels/hotelregister/hotelregister.component';
import { HotelloginComponent } from './hotels/hotellogin/hotellogin.component';
import { HotelapproveComponent } from './admin/hotelapprove/hotelapprove.component';
import { DisplayroomsComponent } from './hotels/rooms/displayrooms/displayrooms.component';
import { AddRoomsComponent } from './hotels/rooms/add-rooms/add-rooms.component';
import { EditRoomComponent } from './hotels/rooms/edit-room/edit-room.component';
import { AddImagesComponent } from './hotels/rooms/add-images/add-images.component';
import { HotelfacilityComponent } from './hotels/hotelfacility/hotelfacility.component';
import { HotelfeatureComponent } from './hotels/hotelfeature/hotelfeature.component';
import { DisplayfesdiscountComponent } from './admin/festivaldiscount/displayfesdiscount/displayfesdiscount.component';
import { AddfesdiscountComponent } from './admin/festivaldiscount/addfesdiscount/addfesdiscount.component';
import { EditfesdiscountComponent } from './admin/festivaldiscount/editfesdiscount/editfesdiscount.component';
import { HotelprofileComponent } from './hotels/hotelprofile/hotelprofile.component';
import { DisplayFeedbackComponent } from './hotels/feedback/display-feedback/display-feedback.component';
import { ChangeHotelPasswordComponent } from './hotels/change-hotel-password/change-hotel-password.component';
import { ForgotHotelPasswordComponent } from './hotels/forgot-hotel-password/forgot-hotel-password.component';
import { ResethotelpasswordComponent } from './hotels/resethotelpassword/resethotelpassword.component';
import { UserregisterComponent } from './users/authentication/userregister/userregister.component';
import { UserheaderComponent } from './users/layout/userheader/userheader.component';
import { UserloginComponent } from './users/authentication/userlogin/userlogin.component';
import { HotelcityComponent } from './hotels/hotelcities/hotelcity/hotelcity.component';
import { AddCityComponent } from './hotels/hotelcities/add-city/add-city.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { ForgotuserpasswordComponent } from './users/forgotuserpassword/forgotuserpassword.component';
import { ResetuserpasswordComponent } from './users/resetuserpassword/resetuserpassword.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { ShowhoteldetailsComponent } from './users/showhoteldetails/showhoteldetails.component';
import { ShowroomsComponent } from './users/showrooms/showrooms.component';
import { RoomdetailsComponent } from './users/roomdetails/roomdetails.component';
import { ShowBookingsComponent } from './users/show-bookings/show-bookings.component';
import { UserbookingsComponent } from './hotels/userbookings/userbookings.component';
import { UserfeedbackComponent } from './users/userfeedback/userfeedback.component';
import { AddfeedbackComponent } from './users/addfeedback/addfeedback.component';
import { UserfooterComponent } from './users/layout/userfooter/userfooter.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { GalleryComponent } from './users/layout/gallery/gallery.component';
import { AboutusComponent } from './users/layout/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRoomcategoryComponent,
    HotelheaderComponent,
    HoteldashboardComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    AddroomcategoryComponent,
    EditroomcategoryComponent,
    AddfacilityComponent,
    DisplayfacilityComponent,
    EditFacilityComponent,
    DisplayFeaturesComponent,
    AddFeaturesComponent,
    EditFeatureComponent,
    HotelregisterComponent,
    HotelloginComponent,
    HotelapproveComponent,
    DisplayroomsComponent,
    AddRoomsComponent,
    EditRoomComponent,
    AddImagesComponent,
    HotelfacilityComponent,
    HotelfeatureComponent,
    DisplayfesdiscountComponent,
    AddfesdiscountComponent,
    EditfesdiscountComponent,
    HotelprofileComponent,
    DisplayFeedbackComponent,
    ChangeHotelPasswordComponent,
    ForgotHotelPasswordComponent,
    ResethotelpasswordComponent,
    UserregisterComponent,
    UserheaderComponent,
    UserloginComponent,
    HotelcityComponent,
    AddCityComponent,
    AdminprofileComponent,
    ForgotuserpasswordComponent,
    ResetuserpasswordComponent,
    UserhomeComponent,
    ShowhoteldetailsComponent,
    ShowroomsComponent,
    RoomdetailsComponent,
    ShowBookingsComponent,
    UserbookingsComponent,
    UserfeedbackComponent,
    AddfeedbackComponent,
    UserfooterComponent,
    UserprofileComponent,
    GalleryComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
