import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: 'store', component: StoreComponent,
  children: [ 
    { path: 'product', component: ProductComponent} 
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule { 

}
