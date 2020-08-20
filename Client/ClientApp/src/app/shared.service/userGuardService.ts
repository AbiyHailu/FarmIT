import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';   
//import { AuthService } from './authService'; 

@Injectable({ providedIn: 'root' })
export class UserGuard
//implements CanActivate
{
  //userDataSubscription: any;
  //companyData = new Company();
  //constructor(private router: Router, private authService: AuthService) {
  //  this.userDataSubscription = this.authService.companyData.asObservable().subscribe(data => {
  //    this.companyData = data;
  //  });
  //}
  //canActivate(
  //  next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  if (this.companyData.userRole == Role.User) {
  //    return true;
  //  }
  //  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //  return false;
  //}
}
export enum Role {
  Admin = 'admin',
  Manager="manager",
  User = 'user'
}

export class User {
  userID: any
  userName: string;
  firstName: string;
  isLoggedIn: boolean;
  userRole: string;
}
