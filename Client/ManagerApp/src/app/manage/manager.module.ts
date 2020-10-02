import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { ManagerComponent } from './manager.component';
import { ManagerRouting } from './manager.routing'; 
import { StoreModule } from './store/store.module';
//import { ChartsModule } from 'ng2-charts';
/* import { AnalyticsComponent } from './analytics/analytics.component';
import { ManagerDashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MeasuresComponent } from './protection/measures/measures.component';
import { PestComponent } from './protection/pest/pest.component';
import { ProtectionComponent } from './protection/protection.component';
import { ScoutComponent } from './protection/scout/scout.component';
import { ReportsComponent } from './reports/reports.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SettingsComponent } from './setting/settings.component'; 
import { ActiveingredientsComponent } from './store/activeingredients/activeingredients.component';
import { InventoryComponent } from './store/inventory/inventory.component'; 
import { IssuedComponent } from './store/issued/issued.component';
import { ProductComponent } from './store/product/product.component';
import { RecievedComponent } from './store/recieved/recieved.component';
import { StoreComponent } from './store/store.component';
import { ManageUserComponent } from './user/user.component'; */

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ManagerRouting,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule
   // ChartsModule
  ],

  declarations: [    
    ManagerComponent,
  /*      ManagerDashboardComponent,
 ProtectionComponent,
    MeasuresComponent, 
    ProfileComponent,

    ScoutComponent,*/
  /*   ManageUserComponent,
    SchedulerComponent,
    ReportsComponent,
    SettingsComponent,
    AnalyticsComponent,
    PestComponent,
    ProductComponent,
    ActiveingredientsComponent,
    IssuedComponent, */
   /*    RecievedComponent, 
     InventoryComponent, */
  ],

  exports: [
    ManagerComponent
  ],

  entryComponents: [
  ]

})

export class ManagerModule {

}
