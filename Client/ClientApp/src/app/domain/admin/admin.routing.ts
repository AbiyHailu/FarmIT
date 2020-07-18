import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [ 
    {
      path: 'subscription',
     // component: SubscriptionComponent
    },
     
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRouting {

}
