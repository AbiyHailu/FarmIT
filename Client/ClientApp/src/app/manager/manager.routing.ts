import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { ManagerDashboardComponent } from './dashboard/dashboard.component.';
import { ManageUserComponent } from './user/user.component';
import { ReportsComponent } from './reports/reports.component';
import { ScoutComponent } from './scout/scout.component';
import { StoreComponent } from './store/store.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  children: [
    { path: 'dashboard', component: ManagerDashboardComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'store', component: StoreComponent }, 
    { path: 'scout', component: ScoutComponent },
    { path: 'scheduler', component: SchedulerComponent }, 
    { path: 'user', component: ManageUserComponent },
    //{ path: 'hr', component:HRComponent }, 
    //{ path: 'Protection', component: ProtectionComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
