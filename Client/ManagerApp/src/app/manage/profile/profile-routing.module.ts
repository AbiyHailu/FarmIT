import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FarmComponent } from './farm/farm.component';
import { PlantComponent } from './plants/plants.component';
import { ProfileComponent } from './profile.component';
import { PlantingsComponent } from './plantings/plantings.component';
import { ProductionAreaComponent } from './production-area/production-areacomponent';

const routes: Routes = [{
  path: 'profile', component: ProfileComponent,
  children: [ 
    { path: 'farm', component: FarmComponent } , 
    { path: 'productionarea', component:ProductionAreaComponent } ,
    { path: 'plant', component: PlantComponent}  ,
    { path: 'plantings', component: PlantingsComponent}  
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { 

}
