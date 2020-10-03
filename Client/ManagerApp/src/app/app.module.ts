import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpInterceptorService } from './services/httpInterceptorService'; 
import { ErrorInterceptorService } from './services/errorInterceptorService';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CrudComponent } from './crud/crud.component'; 
import { ManagerModule as ManagerModule } from './manage/manager.module';

@NgModule({
  declarations: [
    AppComponent, 
    NavMenuComponent, 
    CrudComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ManagerModule
  ],
  entryComponents: [
    CrudComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
