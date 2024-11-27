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
    EditFeatureComponent
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
