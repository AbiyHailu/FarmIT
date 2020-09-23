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
import { LoginComponent } from './login/login.component';
import { ManagerModule } from './manager/manager.module';
import { CrudComponent } from './crud/crud.component';
import { HttpInterceptorService } from './shared.service/httpInterceptorService';
import { ErrorInterceptorService } from './shared.service/errorInterceptorService';
import { AdminGuard } from './shared.service/adminGuard.service';  
 
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AdminModule,
    ManagerModule,  
    NgbModule, 
    RouterModule.forRoot([ 
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: './admin/admin.module#AdminModule' 
      },

      {
        path: 'login', component: LoginComponent
      },

      {
        path: 'manager',
        //canActivate: [AuthGuard],
        loadChildren: './manager/manager.module#ManagerModule'
      }, 
      {
        path: 'user',
        //  //canActivate: [AuthGuard],
        loadChildren: './user/user.module#UserModule'
      },
     
    ]),
        
  ],

  entryComponents: [
    CrudComponent
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
