import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayRoomcategoryComponent } from './hotels/display-roomcategory/display-roomcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelheaderComponent } from './hotels/hotelheader/hotelheader.component';
import { HoteldashboardComponent } from './hotels/hoteldashboard/hoteldashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRoomcategoryComponent,
    HotelheaderComponent,
    HoteldashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
