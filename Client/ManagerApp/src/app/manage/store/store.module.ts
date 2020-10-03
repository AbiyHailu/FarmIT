import { NgModule } from '@angular/core'; 
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import {  ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common'; 

@NgModule({ 
  declarations: [ 
    StoreComponent,
    ProductComponent
  ],
  imports: [ 
    CommonModule,
    StoreRoutingModule
  ]  
})

export class StoreModule { 

}