import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRoomcategoryComponent } from './hotels/display-roomcategory/display-roomcategory.component';
import { HotelheaderComponent } from './hotels/hotelheader/hotelheader.component';
import { HoteldashboardComponent } from './hotels/hoteldashboard/hoteldashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HoteldashboardComponent
  },
  {
    path:"displaycategory",
    component:DisplayRoomcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
