import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRoomcategoryComponent } from './admin/display-roomcategory/display-roomcategory.component';
import { HoteldashboardComponent } from './hotels/hoteldashboard/hoteldashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddroomcategoryComponent } from './admin/addroomcategory/addroomcategory.component';
import { EditroomcategoryComponent } from './admin/editroomcategory/editroomcategory.component';
import { AddfacilityComponent } from './admin/addfacility/addfacility.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
