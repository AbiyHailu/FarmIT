import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';  
import { ManagerDashboardComponent } from './dashboard/dashboard.component.';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [{
    path: 'manager', component: ManagerComponent,
    children: [
      { path: 'dashboard', component: ManagerDashboardComponent },
      { path: 'manage-user', component: ManageUserComponent }, 
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
