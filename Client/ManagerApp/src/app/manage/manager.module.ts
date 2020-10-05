import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager.component';
import { ManagerRouting } from './manager.routing';  
import { ProtectionModule } from './protection/protection.module';
import { ReportsComponent } from './reports/reports.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SettingsComponent } from './setting/settings.component';
import { StoreModule } from './store/store.module'; 
import { ChartsModule } from 'ng2-charts';
import { ProfileModule } from './profile/profile.module';

@NgModule({  
  declarations: [    
    ManagerComponent,
    DashboardComponent,
    AnalyticsComponent,  
    ReportsComponent, 
    SchedulerComponent,
    SettingsComponent
  ],
  imports: [ 
    CommonModule,
    ManagerRouting,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileModule,
    StoreModule,
    ProtectionModule,
    ChartsModule
  ],  
 
  entryComponents: [
  ]

})

export class ManagerModule {

}
