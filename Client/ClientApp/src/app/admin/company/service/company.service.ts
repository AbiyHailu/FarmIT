import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private http: HttpClient
  ) { }

  getCompanys(): Observable<Company[]> {
    return <Observable<any>>this.http.get("/api/companys");
  }

  getCompanyById(id: any): Observable<Company> {
    return <Observable<any>>this.http.get("/api/companys/" + id);
  }

  addSCompany(company: Company): Observable<any> {
    return <Observable<any>>this.http.post("/api/companys", company);
  }

  editCompany(company: Company): Observable<any> {
    return <Observable<any>>this.http.put("/api/companys/" + company.id, company);
  }
}

export class Company {
  id: any
  name: any
  emailAddress: any
  password: any
  phone:any
  userType: any
  isLoggedIn:any
}
