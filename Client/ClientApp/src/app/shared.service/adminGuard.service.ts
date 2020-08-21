import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';  
import { JwtDecodeService } from './jwtdecoder.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  
  constructor(
    private router: Router, 
    private jwtDecoder: JwtDecodeService
  ) {  }
 
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) { 
    let payload = this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'));
    if (payload && payload['role'] && payload['role'].toLowerCase()==='admin' ) { 
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
