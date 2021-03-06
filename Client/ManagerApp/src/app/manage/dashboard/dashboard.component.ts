import { Component } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from 'rxjs/operators'; 
import { MethodesService } from 'src/app/services/methods.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Report, ReportsService } from '../reports/reports.service'; 
import { SettingService } from '../setting/setting.service';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class  DashboardComponent {
  subject: Subject<void> = new Subject();
  constructor(

    private reportsService: ReportsService,
    private storeService: StoreService,
    private subscriptionService: SubscriptionService,
    private commonMethodService:  MethodesService,
    private settingService: SettingService

  ) {
    this.getCompanyDetails()
    this.storeIndex = true
    this.scoutIndex = true
    this.protectionIndex = true

  }

  company: string
  getCompanyDetails() {
    this.company = this.commonMethodService.checkCompany()
    this.getExpSetting(this.company)
    this.getStockSetting(this.company)
    this.getLowStocks(this.company)
    this.getUnreadReports(this.company)
    this.getExpiringProducts(this.company)
  }

  expDateLeft: number
  getExpSetting(companyid) {
    this.settingService.getExpAlertSettingCId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res) {
          this.expDateLeft = res[0].daysLeft
          console.log(this.expDateLeft)
        }
      })
  }

  stockAmtleft: number
  getStockSetting(companyid) {
    this.settingService.getStockAlertSettingCId(companyid)
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
  scoutReports: Report[] = []
  getUnreadReports(companyid) {
    this.reportsService.getReportsByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res && res.length > 0) {
          this.storReports = res.filter(e => e.isRead == false && e.departmentName == "Store")
          this.scoutReports = res.filter(e => e.isRead == false && e.departmentName == "Scout")
          this.storReportCount = this.storReports.length
          this.scoutReportCount = this.scoutReports.length
        }
      })
  }

  expiringProducts: string | any[]
  productCount: any
  getExpiringProducts(companyid) {
    this.storeService.getProductByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res)
          this.expiringProducts = this.commonMethodService.getExpiredinDays(res, this.expDateLeft)
        this.productCount = this.expiringProducts.length
      })
  }

  stockAlert: any[]
  stockCount: any
  getLowStocks(companyid) {
    this.storeService.getInventoryByCompanyId(companyid)
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
