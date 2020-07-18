import { NgModule } from '@angular/core';
import { ManagerRouting } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    CommonModule,
    ManagerRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  
  declarations: [
    ManagerComponent 
  ],

  exports: [
    ManagerComponent 
  ],

  entryComponents:[ 
  ]

})

export class ManagerModule {

}
