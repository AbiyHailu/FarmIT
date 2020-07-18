import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { UserComponent } from './user.component';


@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule
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
