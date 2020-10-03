import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutComponent } from './scout/scout.component';
import { ProtectionComponent } from './protection.component';

const routes: Routes = [{
  path: 'protection', component: ProtectionComponent,
  children: [ 
    { path: 'scout', component: ScoutComponent} 
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProtectionRoutingModule { 

}
