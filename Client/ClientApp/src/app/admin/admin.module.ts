import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component.';
import { AdminRouting } from './admin.routing';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [ 
    RouterModule,
    HttpClientModule,
    FormsModule,
    AdminRouting
  ],
  exports: [
    AdminComponent,
    DashboardComponent 
  ],

  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
