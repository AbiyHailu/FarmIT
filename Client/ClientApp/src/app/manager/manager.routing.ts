import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component'; 

const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  //children: [
  //  {
  //   // path: 'dashboard', component: DashboardComponent
  //  },
  //]
//}
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagerRouting {

}
