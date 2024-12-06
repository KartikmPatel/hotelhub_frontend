import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRoomcategoryComponent } from './admin/display-roomcategory/display-roomcategory.component';
import { HoteldashboardComponent } from './hotels/hoteldashboard/hoteldashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddroomcategoryComponent } from './admin/addroomcategory/addroomcategory.component';
import { EditroomcategoryComponent } from './admin/editroomcategory/editroomcategory.component';
import { AddfacilityComponent } from './admin/addfacility/addfacility.component';
import { DisplayfacilityComponent } from './admin/displayfacility/displayfacility.component';
import { EditFacilityComponent } from './admin/edit-facility/edit-facility.component';
import { DisplayFeaturesComponent } from './admin/features/display-features/display-features.component';
import { AddFeaturesComponent } from './admin/features/add-features/add-features.component';
import { EditFeatureComponent } from './admin/features/edit-feature/edit-feature.component';
import { HotelregisterComponent } from './hotels/hotelregister/hotelregister.component';
import { HotelloginComponent } from './hotels/hotellogin/hotellogin.component';
import { DisplayroomsComponent } from './hotels/rooms/displayrooms/displayrooms.component';
import { AddRoomsComponent } from './hotels/rooms/add-rooms/add-rooms.component';
import { EditRoomComponent } from './hotels/rooms/edit-room/edit-room.component';
import { AddImagesComponent } from './hotels/rooms/add-images/add-images.component';
import { HotelapproveComponent } from './admin/hotelapprove/hotelapprove.component';
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
import { HotelcityComponent } from './hotels/hotelcities/hotelcity/hotelcity.component';
import { AddCityComponent } from './hotels/hotelcities/add-city/add-city.component';
import { UserregisterComponent } from './users/authentication/userregister/userregister.component';
import { UserloginComponent } from './users/authentication/userlogin/userlogin.component';
import { UserheaderComponent } from './users/layout/userheader/userheader.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { ResetuserpasswordComponent } from './users/resetuserpassword/resetuserpassword.component';
import { ForgotuserpasswordComponent } from './users/forgotuserpassword/forgotuserpassword.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { ShowhoteldetailsComponent } from './users/showhoteldetails/showhoteldetails.component';
import { ShowroomsComponent } from './users/showrooms/showrooms.component';
import { RoomdetailsComponent } from './users/roomdetails/roomdetails.component';
import { ShowBookingsComponent } from './users/show-bookings/show-bookings.component';
import { UserbookingsComponent } from './hotels/userbookings/userbookings.component';
import { UserfeedbackComponent } from './users/userfeedback/userfeedback.component';
import { AddfeedbackComponent } from './users/addfeedback/addfeedback.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';

const routes: Routes = [
  {
    path: "",
    component: HoteldashboardComponent
  },
  {
    path: "displaycategory",
    component: DisplayRoomcategoryComponent
  },
  {
    path: "admindashboard",
    component: AdmindashboardComponent
  },
  {
    path: "addcategory",
    component: AddroomcategoryComponent
  },
  {
    path: "editcategory/:id",
    component: EditroomcategoryComponent
  },
  {
    path: "addfacility",
    component: AddfacilityComponent
  },
  {
    path: "displayFacility",
    component: DisplayfacilityComponent
  },
  {
    path: "editFacility/:id",
    component: EditFacilityComponent
  },
  {
    path: "displayFeatures",
    component: DisplayFeaturesComponent
  },
  {
    path: "addFeature",
    component: AddFeaturesComponent
  },
  {
    path: "editFeature/:id",
    component: EditFeatureComponent
  },
  {
    path: "hotelregister",
    component: HotelregisterComponent
  },
  {
    path: "hotellogin",
    component: HotelloginComponent
  },
  {
    path: "displayRooms",
    component: DisplayroomsComponent
  },
  {
    path: "addRoom",
    component: AddRoomsComponent
  },
  {
    path: "editRoom/:id",
    component: EditRoomComponent
  },
  {
    path: "addRoomImages/:id",
    component: AddImagesComponent
  },
  {
    path: "hotelsapprove",
    component: HotelapproveComponent
  },
  {
    path: "hotelfacility",
    component: HotelfacilityComponent
  },
  {
    path: "hotelfeature",
    component: HotelfeatureComponent
  },
  {
    path: "festivaldiscount",
    component: DisplayfesdiscountComponent
  },
  {
    path: "addfesdicount",
    component: AddfesdiscountComponent
  },
  {
    path: "editfesdiscount/:id",
    component: EditfesdiscountComponent
  },
  {
    path: "hotelprofile",
    component: HotelprofileComponent
  },
  {
    path: "displayFeedback",
    component: DisplayFeedbackComponent
  },
  {
    path: "changeHotelPassword",
    component: ChangeHotelPasswordComponent
  },
  {
    path: "forgotHotelPassword",
    component: ForgotHotelPasswordComponent
  },
  {
    path: "resethotelpassword",
    component: ResethotelpasswordComponent
  },
  {
    path: "displayHotelCities",
    component: HotelcityComponent
  },
  {
    path: "addHotelCity",
    component: AddCityComponent
  },
  {
    path: "userregister",
    component: UserregisterComponent
  },
  {
    path: "userlogin",
    component: UserloginComponent
  },
  {
    path: "userhome",
    component: UserhomeComponent
  },
  {
    path: "showhoteldetails",
    component: ShowhoteldetailsComponent
  },
  {
    path: "showrooms",
    component: ShowroomsComponent
  },
  {
    path: "roomdetails",
    component: RoomdetailsComponent
  },
  {
    path: "adminprofile",
    component: AdminprofileComponent
  },
  {
    path: "forgotUserPassword",
    component: ForgotuserpasswordComponent
  },
  {
    path: "resetuserpassword",
    component: ResetuserpasswordComponent
  },
  {
    path: "showBookings",
    component: ShowBookingsComponent
  },
  {
    path: "showUserBookings",
    component: UserbookingsComponent
  },
  {
    path: "userfeedback",
    component: UserfeedbackComponent
  },
  {
    path: "addfeedback",
    component: AddfeedbackComponent
  },
  {
    path: "userprofile",
    component: UserprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
