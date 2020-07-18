import { NgModule } from '@angular/core';
import { ManagerRouting } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ManagerRouting,
    HttpClientModule,
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
