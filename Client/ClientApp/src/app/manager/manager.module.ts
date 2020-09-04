import { NgModule } from '@angular/core';
import { ManagerRouting } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ManagerDashboardComponent } from './dashboard/dashboard.component.';
import { ManageUserComponent } from './user/user.component';
import { ScoutComponent } from './scout/scout.component';
import { StoreComponent } from './store/store.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ReportsComponent } from './reports/reports.component'; 
import { PestComponent } from './pest/pest.component';

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
    ManagerComponent,
    ManagerDashboardComponent,
    ManageUserComponent,
    ScoutComponent,
    StoreComponent,
    SchedulerComponent,
    ReportsComponent,
    PestComponent
  ],

  exports: [
    ManagerComponent 
  ],

  entryComponents:[ 
  ]

})

export class ManagerModule {

}
