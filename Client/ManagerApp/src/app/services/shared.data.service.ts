import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedDataService {

  private companyDataSource = new BehaviorSubject<any>(null);
  currentCompanyData = this.companyDataSource.asObservable();
  changeCompanyDataSource(company: boolean) { 
    this.companyDataSource.next(company)
  }

  private sideTogglerSource = new BehaviorSubject<any>(null);
  currentSideToggler = this.sideTogglerSource.asObservable();
  changeToggleSideBar(toggle: boolean) {
    console.log(toggle)
    this.sideTogglerSource.next(toggle)
  } 
}
