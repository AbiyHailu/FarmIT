import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { StoreModule} from './store/store.module' ;
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpInterceptorService } from './services/httpInterceptorService'; 
import { ErrorInterceptorService } from './services/errorInterceptorService';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavMenuComponent, 
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    StoreModule
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
