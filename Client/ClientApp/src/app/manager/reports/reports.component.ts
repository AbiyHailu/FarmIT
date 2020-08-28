import { Component, OnDestroy } from '@angular/core';
import { ReportsService } from './service/reports.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'reports-root',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  reports = [];
  catagorizedReports = []
  loading = true
  constructor(
    private reportService : ReportsService
  ) {

    this.reportService.getReports()
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
  getReports(items) {
    console.log(items)
  }

  sortReports(sortvalue: string) {
    this.editTitlestring(sortvalue)
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
  sortTitle: any = "Created Date"
  editTitlestring(sortvalue: string) {
    let str = sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[0]
    let str1 = sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[1]
    if (str && str1) {
      this.sortTitle = str[0].toUpperCase() + str.slice(1) + ' ' + str1[0].toUpperCase() + str1.slice(1)
    } else {
      this.sortTitle = sortvalue[0].toUpperCase() + sortvalue.slice(1)
    }
  }

  ngOnDestroy(): void {
    this.subject.next()
  } 
}

