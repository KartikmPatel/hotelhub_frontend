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

const routes: Routes = [
  {
    path:"",
    component:HoteldashboardComponent
  },
  {
    path:"displaycategory",
    component:DisplayRoomcategoryComponent
  },
  {
    path:"admindashboard",
    component:AdmindashboardComponent
  },
  {
    path:"addcategory",
    component:AddroomcategoryComponent
  },
  {
    path:"editcategory/:id",
    component:EditroomcategoryComponent
  },
  {
    path:"addfacility",
    component:AddfacilityComponent
  },
  {
    path:"displayFacility",
    component:DisplayfacilityComponent
  },
  {
    path:"editFacility/:id",
    component:EditFacilityComponent
  },
  {
    path:"displayFeatures",
    component:DisplayFeaturesComponent
  },
  {
    path:"addFeature",
    component:AddFeaturesComponent
  },
  {
    path:"editFeature/:id",
    component:EditFeatureComponent
  },
  {
    path:"hotelregister",
    component:HotelregisterComponent
  },
  {
    path:"hotellogin",
    component:HotelloginComponent
  },
  {
    path:"displayRooms",
    component:DisplayroomsComponent
  },
  {
    path:"addRoom",
    component:AddRoomsComponent
  },
  {
    path:"editRoom/:id",
    component:EditRoomComponent
  },
  {
    path:"addRoomImages/:id",
    component:AddImagesComponent
  },
  {
    path:"hotelsapprove",
    component:HotelapproveComponent
  },
  {
    path:"hotelfacility",
    component:HotelfacilityComponent
  },
  {
    path:"hotelfeature",
    component:HotelfeatureComponent
  },
  {
    path:"festivaldiscount",
    component:DisplayfesdiscountComponent
  },
  {
    path:"addfesdicount",
    component:AddfesdiscountComponent
  },
  {
    path:"editfesdiscount/:id",
    component:EditfesdiscountComponent
  },
  {
    path:"hotelprofile",
    component:HotelprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
