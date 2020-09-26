import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { ManagerDashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager.component';
import { ManagerRouting } from './manager.routing'; 
import { ProfileComponent } from './profile/profile.component';
import { MeasuresComponent } from './protection/measures/measures.component';
import { ProtectionComponent } from './protection/protection.component';
import { ScoutComponent } from './protection/scout/scout.component';
import { ReportsComponent } from './reports/reports.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SettingsComponent } from './setting/settings.component';
import { StoreComponent } from './store/store.component';
import { ManageUserComponent } from './user/user.component';

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
