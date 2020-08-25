import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';  
import { Router } from '@angular/router';
import { Company } from '../admin/company/service/company.service'; 

@Injectable({ providedIn: 'root' })
export class AuthService {

  companyData = new BehaviorSubject<Company>(new Company());

  constructor(
    private http: HttpClient,
    private router: Router,  
  ) { }

  register(userDetails) {
    return this.http.post<any>('/api/register', userDetails)
  }

  login(companyDetails) {
    return this.http.post<any>('/api/login', companyDetails)
      .pipe(map(response => {
        console.log(response)
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userDetail', response.userDetails.id);
        this.setUserDetails();
        return response;
      }));
  }

  setUserDetails() {
    if (localStorage.getItem('authToken')) {
      const companyDetails = new Company();
    //  console.log(JSON.parse(window.atob(localStorage.getItem('usedDetail'))))
      const decodeUserDetails = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));
      console.log(decodeUserDetails) 
      companyDetails.name = decodeUserDetails.firstName; 
      companyDetails.isLoggedIn = true;
      companyDetails.userType = decodeUserDetails.role; 
      this.companyData.next(companyDetails); 
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetail');
    this.router.navigate(['/login']);
    this.companyData.next(new Company());
  }
}
