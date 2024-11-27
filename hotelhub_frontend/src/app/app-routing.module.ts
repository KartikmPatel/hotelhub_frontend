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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
