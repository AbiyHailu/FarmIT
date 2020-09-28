import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtDecodeService {
  jwtDecode(t) {             
    if (t) {
      let token = { raw: "", header: "", payload: "" };
      token.raw = t;
      token.header = JSON.parse(window.atob(t.split('.')[0]));
      token.payload = JSON.parse(window.atob(t.split('.')[1]));
      return (token.payload )
    } else {
      return null;
    } 
  }
}
