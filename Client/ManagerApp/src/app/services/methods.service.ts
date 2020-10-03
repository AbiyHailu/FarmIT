import { Injectable } from '@angular/core';  
import { DatePipe } from '@angular/common';
import {JwtDecodeService} from './jwtdecode.service';

@Injectable({ providedIn: 'root' })
export class MethodesService {

  constructor(
    private jwtDecoder: JwtDecodeService,
    private datePipe: DatePipe
  ) {  
  }

  checkUser() {
    return this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'))
  }

  checkCompany() {
    return localStorage.getItem('userDetail')
  }  
  
  preparePlnas(planName: any) { 
   if(planName.toLowerCase() =='protection'){  
     return { plan: 'Protection', items: ["Scout", "Measures", "Pest"] } 
   }else if(planName.toLowerCase()  =='store'){
     return { plan: 'Store', items: ["Product", "Active Ingredient", "Inventory", "Issued", "Recieved"] }
   }
  } 
}