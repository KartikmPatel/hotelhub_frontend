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
