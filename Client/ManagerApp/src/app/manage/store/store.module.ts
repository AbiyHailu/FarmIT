import { NgModule } from '@angular/core'; 
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import {  ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common'; 
import { ActiveingredientsComponent } from './activeingredients/activeingredients.component'; 
import { IssuedComponent } from './issued/issued.component'; 
import { RecievedComponent } from './recieved/recieved.component'; 
import { InventoryComponent } from './inventory/inventory.component'; 

@NgModule({ 
  declarations: [ 
    StoreComponent,
    ProductComponent,
    ActiveingredientsComponent,
    IssuedComponent,  
    RecievedComponent,
    InventoryComponent
  ],
  imports: [ 
    CommonModule,
    StoreRoutingModule
  ]  
})

export class StoreModule { 

}