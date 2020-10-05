import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FarmComponent } from './farm/farm.component';
import { ProfileComponent } from './profile.component';
import { ProductionAreaComponent } from './production-area/production-areacomponent';

const routes: Routes = [{
  path: 'profile', component: ProfileComponent,
  children: [ 
    { path: 'farm', component: FarmComponent } , 
    { path: 'production-area', component:ProductionAreaComponent } ,
  /*  { path: 'plant', component: PlantComponent} 
    { path: 'planting', component: PlantingComponent} */ 
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { 

}
