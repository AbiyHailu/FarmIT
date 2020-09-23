import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';
import { takeUntil } from 'rxjs/operators';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { Report, ReportsService } from '../reports/service/reports.service';
import { StoreService } from '../store/service/store.service';
import { SettingService } from '../setting/service/setting.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class ManagerDashboardComponent {
  subject: Subject<void> = new Subject();
  constructor(

    private reportsService: ReportsService,
    private storeService: StoreService,
    private subscriptionService: SubscriptionService,
    private commonMethodService: CommonMethedsService,
    private settingService: SettingService

  ) {
    this.getCompanyDetails()
    this.storeIndex = true
    this.scoutIndex = true
    this.protectionIndex =true
    this.getExpSetting()  
    this.getStockSetting()
    this.getLowStocks()
    this.getUnreadReports()
    this.getExpiringProducts()
  }

  company: string
  getCompanyDetails() {
    this.company = this.commonMethodService.checkCompany()
  }

  expDateLeft: number
  getExpSetting() {
    this.settingService.getExpAlertSettingCId(this.company)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res) {
          this.expDateLeft = res[0].daysLeft
          console.log(this.expDateLeft)
        }
      })
  }

  stockAmtleft: number
  getStockSetting() {
    this.settingService.getStockAlertSettingCId(this.company)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res) {
          this.stockAmtleft = res[0].amountLeft
        }
      })
  } 

  storReports: Report[] = []
  storReportCount: number = 0
  scoutReportCount: number = 0
  scoutReports:Report[] = []
  getUnreadReports() {
    this.reportsService.getReports()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res && res.length>0)
       {
          this.storReports = res.filter(e=>e.isRead ==false && e.departmentName =="Store")
          this.scoutReports= res.filter(e=>e.isRead ==false && e.departmentName =="Scout")
          this.storReportCount = this.storReports.length
          this.scoutReportCount =this.scoutReports.length
       }
      })
  }

  expiringProducts: string | any[]
  productCount: any
  getExpiringProducts() {
    this.storeService.getProducts()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res)
          this.expiringProducts = this.commonMethodService.getExpiredinDays(res, this.expDateLeft)
        this.productCount = this.expiringProducts.length
      })
  }

  stockAlert: any[]
  stockCount: any
  getLowStocks() {
    this.storeService.getBalance()
      .pipe(takeUntil(this.subject))
      .subscribe(res => { 
        if (res) {
          this.stockAlert = this.commonMethodService.getStockAlerts(res, this.stockAmtleft)
          console.log("this.stockAlert", this.stockAlert)
          this.stockCount = this.stockAlert.length
        }
      })
  }

  storeIndex: boolean
  toggleStor() {
    this.storeIndex = !this.storeIndex
  }

  scoutIndex: boolean
  toggleScout() {
    this.scoutIndex = !this.scoutIndex
  }

  protectionIndex: boolean
  toggleProtection() {
    this.protectionIndex = !this.protectionIndex
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}
