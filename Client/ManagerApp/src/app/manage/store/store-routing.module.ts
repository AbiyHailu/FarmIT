import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveingredientsComponent } from './activeingredients/activeingredients.component';
import { InventoryComponent } from './inventory/inventory.component';
import { IssuedComponent } from './issued/issued.component';
import { ProductComponent } from './product/product.component';
import { RecievedComponent } from './recieved/recieved.component';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: 'store', component: StoreComponent,
  children: [ 
    { path: 'product', component: ProductComponent}, 
    { path: 'inventory', component: InventoryComponent},
    { path: 'recieved', component: RecievedComponent},
    { path: 'issued', component:IssuedComponent} ,
    { path: 'activeingredient', component:ActiveingredientsComponent} 
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule { 

}
