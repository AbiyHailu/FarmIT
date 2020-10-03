import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ManagerComponent } from './manager.component';
import { ManagerRouting } from './manager.routing'; 
import { ProtectionModule } from './protection/protection.module';
import { StoreModule } from './store/store.module'; 

@NgModule({  
  declarations: [    
    ManagerComponent,
 
  ],
  imports: [ 
    CommonModule,
    ManagerRouting,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule,
    ProtectionModule
   // ChartsModule
  ],  
 
  entryComponents: [
  ]

})

export class ManagerModule {

}
