import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component.";
import { CompanyComponent } from "./company/company.component";
import { PlanComponent } from "./plan/plan.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { AdminGuard } from "../shared.service/adminGuard.service";

const routes: Routes = [{
  path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
  children: [ 
    { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    { path: 'company', component: CompanyComponent, canActivate: [AdminGuard]},
    { path: 'plans', component: PlanComponent, canActivate: [AdminGuard]},
    { path: 'subscription', component: SubscriptionComponent, canActivate: [AdminGuard]}, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRouting { }
