import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component.";

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [ 
    {
      path: 'dashboard', component: DashboardComponent
    }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRouting {

}
