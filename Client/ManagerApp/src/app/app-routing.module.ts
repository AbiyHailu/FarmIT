import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { ManageGuard } from './services/guard.service/manadeGuard.service';
import { ManagerComponent } from './manage/manager.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [ManageGuard],
    loadChildren: () => import('src/app/manage/manager.module').then(m => m.ManagerModule)
  } 
/*   {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    CrudComponent
  ],

})
export class AppRoutingModule { }
