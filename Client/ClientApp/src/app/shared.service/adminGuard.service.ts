import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';   
import { AuthService } from './auth.service';
import { takeUntil } from 'rxjs/operators'; 
import { Company } from '../admin/company/service/company.service';
import { Role } from './userGuardService';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate, OnInit, OnDestroy{ 
  subject: Subject<void> = new Subject();
  companyData = new Company();
  constructor(private router: Router, private authService: AuthService) {
    console.log(true)
    this.authService.companyData
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        console.log( "data", data )
        this.companyData = data;
        console.log(this.companyData)
    });
  }
  
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.companyData.userType &&  (this.companyData.userType.toLowerCase() === Role.Admin.toLowerCase())) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  ngOnDestroy(): void {
    this.subject.next();
  }
}
