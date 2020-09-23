import { NgModule } from '@angular/core';
import { ManagerRouting } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { ManageUserComponent } from './user/user.component'; 
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ReportsComponent } from './reports/reports.component';  
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component'; 
import { ManagerDashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component'; 
import { PestComponent } from './protection/pest/pest.component';
import { ScoutComponent } from './protection/scout/scout.component';
import { ProtectionComponent } from './protection/protection.component';
import { MeasuresComponent } from './protection/measures/measures.component';
import { SettingsComponent } from './setting/settings.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ManagerRouting,
    HttpClientModule,
    ReactiveFormsModule,  
    FormsModule 
  ],
  
  declarations: [
    ManagerDashboardComponent,
    ProtectionComponent,
    MeasuresComponent,
    ProfileComponent,
    ManagerComponent,  
    ScoutComponent,
    StoreComponent,
    ManageUserComponent,
    SchedulerComponent,
    ReportsComponent,
    PestComponent,
    AnalyticsComponent, 
    SettingsComponent
  ],

  exports: [
    ManagerComponent 
  ],

  entryComponents:[ 
  ]

})

export class ManagerModule {

}
