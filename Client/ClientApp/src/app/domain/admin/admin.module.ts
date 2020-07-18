import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [ 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([ 
       { path: 'admin', component: AdminComponent }
    ])
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
