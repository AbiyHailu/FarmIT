import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutComponent } from './scout/scout.component';
import { ProtectionComponent } from './protection.component';
import { PestComponent } from './pest/pest.component';
import { MeasuresComponent } from './measures/measures.component';

const routes: Routes = [{
  path: 'protection', component: ProtectionComponent,
  children: [ 
    { path: 'scout', component: ScoutComponent} ,
    { path: 'pest', component: PestComponent} ,
    { path: 'measures', component: MeasuresComponent} 
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProtectionRoutingModule { 

}
