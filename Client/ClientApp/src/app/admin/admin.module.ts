import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component.';
import { AdminRouting } from './admin.routing';
import { CompanyComponent } from './company/company.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PlanComponent } from './plan/plan.component'; 
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CompanyComponent,
    PlanComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule,
    AdminRouting
  ],

  exports: [
    AdminComponent,
    DashboardComponent 
  ]

})
export class AdminModule { }
