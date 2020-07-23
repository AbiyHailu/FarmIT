import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { CompanyService } from '../../services/admin.service/CompanyService';
 
@Component({
  selector: 'company',
  styleUrls: ['company.component.css'], 
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject();
  companys: any
  constructor(
    private companyervice: CompanyService
  ) {
    this.companys = []
    this.companyervice.getCompanys()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.companys = res;
        console.log("this.company", this.companys)
      })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subject.next()
  } 
}
