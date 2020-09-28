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
}