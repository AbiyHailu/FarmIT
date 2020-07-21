import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component.";
import { CompanyComponent } from "./company/company.component";
import { PlanComponent } from "./plan/plan.component";
import { SubscriptionComponent } from "./subscription/subscription.component";

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [ 
    { path: 'dashboard', component: DashboardComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'plans', component:PlanComponent },
    { path: 'subscription', component: SubscriptionComponent }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRouting { }
