import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component'; 
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpInterceptorService } from './services/shared.service/httpInterceptorService';
import { ErrorInterceptorService } from './services/shared.service/errorInterceptorService';
import { LoginComponent } from './login/login.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AdminModule,
    NgbModule,
    RouterModule.forRoot([ 
      {
        path: 'admin',
        //  //canActivate: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule'
      },

      { path: 'login', component: LoginComponent },

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
     
    ]),
        
  ] ,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
