import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';  
import { Router } from '@angular/router';
import { Company } from '../admin/company/service/company.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  companyData = new BehaviorSubject<Company>(new Company());
  constructor(private http: HttpClient, private router: Router) { }
  register(userDetails) {
    return this.http.post<any>('/api/register', userDetails)
  }

  login(companyDetails) {
    return this.http.post<any>('/api/login', companyDetails)
      .pipe(map(response => {
        localStorage.setItem('authToken', response.token);
        this.setUserDetails();

        console.log("response", response)
        return response;
      }));
  }

  setUserDetails() {
    if (localStorage.getItem('authToken')) {
      const companyDetails = new Company();
      const decodeUserDetails = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));
      companyDetails.name = decodeUserDetails.sub;
      companyDetails.userType = decodeUserDetails.firstName;
      companyDetails.isLoggedIn = true;
      companyDetails.userType = decodeUserDetails.role;
      this.companyData.next(companyDetails);
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
    this.companyData.next(new Company());
  }
}
