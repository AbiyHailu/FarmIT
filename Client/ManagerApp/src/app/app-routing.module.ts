 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CrudComponent } from './crud/crud.component'; 
const routes: Routes = [
  
  {
    path: 'store',
    //canActivate: [AuthGuard],
    loadChildren: './store/store.module#StoreModule'
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    CrudComponent
  ],
 
})
export class AppRoutingModule { }
