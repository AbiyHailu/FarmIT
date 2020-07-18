import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './domain.component'; 

const routes: Routes = [{
  path: 'domain', component: DomainComponent,
  children: [
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
     },
    {
      path: 'manager',
      loadChildren: './manager/manager.module#ManagerModule'
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DomainRouting {

}
