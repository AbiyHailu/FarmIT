import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';   
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([ 
      {
        path: 'admin',
        //  //canActivate: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'manager',
        //  //canActivate: [AuthGuard],
        loadChildren: './manager/manager.module#ManagerModule'
      }, 
      {
        path: 'user',
        //  //canActivate: [AuthGuard],
        loadChildren: './user/user.module#UserModule'
      },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
