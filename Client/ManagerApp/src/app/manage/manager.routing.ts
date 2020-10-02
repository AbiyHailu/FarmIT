import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
/* import { ManageUserComponent } from './user/user.component';
import { ReportsComponent } from './reports/reports.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagerDashboardComponent } from './dashboard/dashboard.component';
import { ProtectionComponent } from './protection/protection.component';
import { MeasuresComponent } from './protection/measures/measures.component';
import { ScoutComponent } from './protection/scout/scout.component';
import { SettingsComponent } from './setting/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PestComponent } from './protection/pest/pest.component';
import { ProductComponent } from './store/product/product.component';
import { RecievedComponent } from './store/recieved/recieved.component';
import { IssuedComponent } from './store/issued/issued.component';
import { ActiveingredientsComponent } from './store/activeingredients/activeingredients.component'; */

const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  children: [
    {
      path: 'store',
      loadChildren: './store/store.module#StoreModule'
    }

   /*  { path: 'dashboard', component: ManagerDashboardComponent },
    { path: 'analytics', component: AnalyticsComponent },

    { path: 'profile', component: ProfileComponent },

    { path: 'protection', component: ProtectionComponent },
    { path: 'protection/pest', component: PestComponent },
    { path: 'protection/scout', component: ScoutComponent },
    { path: 'protection/measures', component: MeasuresComponent },
, */

    
/*     { path: 'store', component: StoreComponent },  
    { path: 'store/product', component: ProductComponent },  
    { path: 'store/activeingredients', component: ActiveingredientsComponent },  
    { path: 'store/recieved', component: RecievedComponent },  
    { path: 'store/issued', component: IssuedComponent },  
    { path: 'store', component: StoreComponent },

    { path: 'reports', component: ReportsComponent },

    { path: 'scheduler', component: SchedulerComponent },
    { path: 'user', component: ManageUserComponent },
    { path: 'settings', component: SettingsComponent }, */
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
