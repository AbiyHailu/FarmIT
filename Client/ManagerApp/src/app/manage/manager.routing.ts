import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { StoreComponent } from './store/store.component';
import { SettingsComponent } from './setting/settings.component'; 
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component'; 
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { 
      path: 'profile', 
      component: ProfileComponent ,
      loadChildren: () => import('src/app/manage/profile/profile.module').then(m => m.ProfileModule)
    },
    { path: 'reports', component: ReportsComponent },
    { path: 'scheduler', component: SchedulerComponent },
    {
      path: 'store',
      component: StoreComponent,
      loadChildren: () => import('src/app/manage/store/store.module').then(m => m.StoreModule)
    }, {
      path: 'protection',
      component: StoreComponent,
      loadChildren: () => import('src/app/manage/protection/protection.module').then(m => m.ProtectionModule)
    },

    { path: 'settings', component: SettingsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
