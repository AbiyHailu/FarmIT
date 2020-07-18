import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserRouting } from './user.routing';


@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
    UserRouting
  ],
  
  declarations: [
    UserComponent 
  ],

  exports: [
    UserComponent 
  ],

  entryComponents:[ 
  ]

})

export class UserModule {

}
