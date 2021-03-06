import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ReportsService } from './reports.service';
import { MethodesService } from 'src/app/services/methods.service';

@Component({
  selector: 'reports-root',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  reports = [];
  catagorizedReports = []
  loading = true
  constructor(
    private reportService: ReportsService,
    private commonMethodes: MethodesService
  ) { 
    this.getCompanyDetails()  
  }

  company: string
  getCompanyDetails() {
    this.company = this.commonMethodes.checkCompany()
    this.getReports(this.company)
  }

  getReports(companyid) {
    this.reportService.getReportsByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.reports = res
        if (this.reports.length > 0) {
          this.catagorizeByDate(this.reports)
          this.loading = false
        }
      })  
  } 
  
  catagorizeByDate(reports: any) {
    reports.forEach(item => {
      if (this.catagorizedReports.length == 0)
        this.catagorizedReports.push(Object.assign({}, { [item["createdDate"]]: [item] }))
      else if (this.catagorizedReports.filter(e => e[item["createdDate"]]).length > 0) {
        this.catagorizedReports.filter(e => e[item["createdDate"]])[0][item["createdDate"]].push(item)
      }
      else
        this.catagorizedReports.push(Object.assign({}, { [item["createdDate"]]: [item] }))
    })
  }

  activeIndex
  toggleAccordion(index: any, value: string) {
    this.activeIndex = index
  } 
  
  sortTitle: any = "Created Date"
  sortReports(sortvalue: string) { 
    this.sortTitle =  this.commonMethodes.editTitlestring(sortvalue)
    this.catagorizedReports = []
    this.reports.forEach(item => {
      if (this.catagorizedReports.length == 0)
        this.catagorizedReports.push(Object.assign({}, { [item[sortvalue]]: [item] }))
      else if (this.catagorizedReports.filter(e => e[item[sortvalue]]).length > 0) {
        this.catagorizedReports.filter(e => e[item[sortvalue]])[0][item[sortvalue]].push(item)
      }
      else
        this.catagorizedReports.push(Object.assign({}, { [item[sortvalue]]: [item] }))
    })
  }
   
  editMarkasRead(items:any) {
    console.log(items)
    if (items) {
      items.value.markasread = !items.value.markasread
      this.reportService.editReport(items.value)
    }
    console.log(items)
  }
  ngOnDestroy(): void {
    this.subject.next()
  } 
}

