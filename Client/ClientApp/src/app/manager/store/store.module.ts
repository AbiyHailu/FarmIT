import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts'; 
import { StoreComponent } from './store.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],

  declarations: [
    StoreComponent
 /*    ManagerDashboardComponent,
    ProtectionComponent,
    MeasuresComponent,
    ProfileComponent,
    ManagerComponent,
    ScoutComponent,
    StoreComponent,
    ManageUserComponent,
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
    StoreComponent
  ],

  entryComponents: [
  ]

})

export class StoreModule {

}
