import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { ProfileComponent } from '../profile/profile.component';  
import { FarmComponent } from './farm/farm.component';
import { ProductionAreaComponent } from './production-area/production-areacomponent';
import { ProfileRoutingModule } from './profile-routing.module';
import { PlantComponent } from './plants/plants.component';
import { PlantingsComponent } from './plantings/plantings.component';

@NgModule({ 
  declarations: [ 
    ProfileComponent,
    FarmComponent, 
    ProductionAreaComponent,
    PlantComponent,
    PlantingsComponent
  ],
  imports: [ 
    CommonModule,
    ProfileRoutingModule
  ]  
})

export class ProfileModule { 

}