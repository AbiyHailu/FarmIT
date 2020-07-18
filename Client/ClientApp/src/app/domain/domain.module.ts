import { NgModule } from '@angular/core';
import { DomainRouting } from './domain.routing';
import { DomainComponent } from './domain.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    CommonModule,
    DomainRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  
  declarations: [
    DomainComponent 
  ],

  exports: [
    DomainComponent 
  ],

  entryComponents:[ 
  ]

})

export class DomainModule {

}
