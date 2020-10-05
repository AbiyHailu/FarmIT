import { NgModule } from '@angular/core'; 
import { ProtectionRoutingModule } from './protection-routing.module';
import { ProtectionComponent } from './protection.component'; 
import { CommonModule } from '@angular/common'; 
import { ScoutComponent } from './scout/scout.component';
import { PestComponent } from './pest/pest.component';
import { MeasuresComponent } from './measures/measures.component';

@NgModule({ 
  declarations: [ 
    ProtectionComponent,
    ScoutComponent,
    PestComponent,
    MeasuresComponent
  ],
  imports: [ 
    CommonModule,
    ProtectionRoutingModule
  ]  
})

export class ProtectionModule { 

}