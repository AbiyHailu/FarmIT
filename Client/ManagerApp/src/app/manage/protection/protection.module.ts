import { NgModule } from '@angular/core'; 
import { ProtectionRoutingModule } from './protection-routing.module';
import { ProtectionComponent } from './protection.component'; 
import { CommonModule } from '@angular/common'; 
import { ScoutComponent } from './scout/scout.component';

@NgModule({ 
  declarations: [ 
    ProtectionComponent,
    ScoutComponent
  ],
  imports: [ 
    CommonModule,
    ProtectionRoutingModule
  ]  
})

export class ProtectionModule { 

}