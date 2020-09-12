import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';
import { takeUntil } from 'rxjs/operators';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class ManagerDashboardComponent {
  subject: Subject<void> = new Subject();
  units: any = []

  subscriptions: any
  profile: any
  GreenHs: [{ length: number, width: number, rows: number }]
  Rows: [{ length: number, width: number }]
  constructor(
    private subscriptionService: SubscriptionService,
    private commonMethodService: CommonMethedsService
  ) {
    this.units.push("ha")
    this.units.push("m2")
    this.profile = null
    this.GreenHs = [{ length: 0, width: 0, rows: 0 }]
    this.subscriptions = []
    this.subscriptionService.getSubscription()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.subscriptions = res;
        console.log("this.subscriptions", this.subscriptions)
      })
  }


  totalSize: number
  lengthmain: number
  widthmain: number
  errormessage = ''
  calculateDimensions(size: number, unit: string) {
    console.log(size, unit)
    
    this.totalSize = size  
    if (unit == 'm2') {
      //size must be below 1 digites :should be inproved 
      if (size.toString().length <= 3) {
        this.errormessage = "* Farm size is too small (min 1000 m2)"
      } else {
        this.errormessage = ""  
        this.widthmain = 500
        this.lengthmain =300 
        this.totalSize = size  
      }
    } else if (unit == 'ha') {
      if (size.toString().length > 3) {
        this.errormessage = "farm size is too big (max 100 ha)"
      } else { 
        if (size > 100) {
          this.errormessage = "farm size is too big (max 100 ha)" 
        } else {
          this.widthmain = 800
          this.lengthmain =500
          this.totalSize = size  
        } 
      }
    }
  }

  numberofGHs: number
  numberofGH(value: number) { 
    this.GreenHs = [{ length: 0, width: 0, rows: 0 }] 
    this.numberofGHs = value
    for (let index = 1; index < value; index++) {
      this.GreenHs.push({ length: 0, width: 0, rows: 0 })
    }
    console.log(this.GreenHs) 
  }

  addDimensionForGHs(index:number, width: number, length: number, rows: number) {
    console.log(index, width, length)
    this.GreenHs[index].width = width;
    this.GreenHs[index].length = length
    this.GreenHs[index].rows = rows
    console.log(this.GreenHs)
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}
