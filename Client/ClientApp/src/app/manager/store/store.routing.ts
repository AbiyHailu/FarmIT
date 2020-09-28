import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: 'store', component: StoreComponent,
  children: [
  
  /*   { path: 'store/product', component: ProductComponent },  
    { path: 'store/activeingredients', component: ActiveingredientsComponent },  
    { path: 'store/recieved', component: RecievedComponent },  
    { path: 'store/issued', component: IssuedComponent },  
    { path: 'store', component: StoreComponent },  */
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StoreRouting {

}
