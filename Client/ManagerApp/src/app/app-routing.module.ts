import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { ManageGuard } from './services/guard.service/manadeGuard.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'manager',
    canActivate: [ManageGuard],
    loadChildren: './manager/manager.manager#ManagerModule'
  }

 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    CrudComponent
  ],

})
export class AppRoutingModule { }
