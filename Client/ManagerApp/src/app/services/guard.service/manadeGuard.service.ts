import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtDecodeService } from '../jwtdecode.service';

@Injectable({ providedIn: 'root' })
export class ManageGuard implements CanActivate {

  constructor(
    private router: Router,
    private jwtDecoder: JwtDecodeService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let payload = this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'));
    if (payload && payload['role'] && payload['role'] === 'Manager') {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
