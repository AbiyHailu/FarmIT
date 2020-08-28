import { Injectable } from '@angular/core';   
import { JwtDecodeService } from '../shared.service/jwtdecoder.service';

@Injectable({ providedIn: 'root' })
export class CommonMethedsService {
  constructor(
    private jwtDecoder: JwtDecodeService,
  ) {

  }
  checkUser() {
    return this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'))
  }
  checkCompany() {
    return localStorage.getItem('userDetail')
  }
}
