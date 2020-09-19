import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';
import { takeUntil } from 'rxjs/operators';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { Report, ReportsService } from '../reports/service/reports.service';
import { StoreService } from '../store/service/store.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class ManagerDashboardComponent {
  subject: Subject<void> = new Subject();
  constructor(
    private reportsService: ReportsService,
    private storeService:StoreService,
    private subscriptionService: SubscriptionService,
    private commonMethodService: CommonMethedsService
  ) {
 
    this.storeIndex =true
    this.getUnreadReports()
    this.  getExpiringProducts()
  }

  reports: Report[] = []
  reportCount: number = 0
  getUnreadReports() {
    this.reportsService.getUnreadReports()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {

        this.reports = res
        if (res)
          this.reportCount = res.length
      })
  }

  expiringProducts
  productCount
  getExpiringProducts(){
    this.storeService.getProducts()
    .pipe(takeUntil(this.subject))
    .subscribe(res => {  
      console.log("res", res)
      if (res)
      this.expiringProducts =  this.commonMethodService.getExpiredintenDays(res)
      console.log("expired", this.expiringProducts)
      this.productCount = res.length
    })
  }

  storeIndex
  toggleStor() {
    this.storeIndex = !this.storeIndex
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}
