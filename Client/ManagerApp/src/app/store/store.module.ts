import { NgModule } from '@angular/core'; 
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import {  ProductComponent } from './product/product.component';
@NgModule({ 
  declarations: [ 
    StoreComponent,
    ProductComponent
  ],
  imports: [ 
    StoreRoutingModule
  ]  
})
export class StoreModule { }