import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component'; 
import { ManageUserComponent } from './user/user.component';
import { ReportsComponent } from './reports/reports.component'; 
import { StoreComponent } from './store/store.component';
import { SchedulerComponent } from './scheduler/scheduler.component';  
import { ProfileComponent } from './profile/profile.component' ;
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { ManagerDashboardComponent } from './dashboard/dashboard.component';
import { ProtectionComponent } from './protection/protection.component';
import { PestComponent } from './protection/pest/pest.component';
import { MeasuresComponent } from './protection/measures/measures.component';
import { ScoutComponent } from './protection/scout/scout.component'; 
import { SettingsComponent } from './setting/settings.component';

const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  children: [ 
   { path: 'dashboard', component: ManagerDashboardComponent }, 
   { path: 'dashboard/analytics', component: AnalyticsComponent }, 

   { path: 'profile', component: ProfileComponent },

   { path: 'protection', component:ProtectionComponent }, 
   { path: 'protection/pest', component:PestComponent }, 
   { path: 'protection/scout', component:ScoutComponent },  
   { path: 'protection/measures', component: MeasuresComponent },

   { path: 'store', component: StoreComponent }, 

    { path: 'reports', component: ReportsComponent },
   
    { path: 'scheduler', component: SchedulerComponent }, 
    { path: 'user', component: ManageUserComponent } ,
    { path: 'settings', component: SettingsComponent }, 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
