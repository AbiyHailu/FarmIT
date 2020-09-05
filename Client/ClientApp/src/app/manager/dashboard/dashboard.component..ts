import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.scss'], 
  templateUrl: './dashboard.component.html',
})
export class ManagerDashboardComponent {
  subject: Subject<void> = new Subject();
  subscriptions: any
  profile: any
  GreenHs: [{ length: number, width: number, rows: number }]
  Rows: [{ length: number, width: number }]
  constructor(
    private subscriptionService: SubscriptionService,
  ) {
     
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
  totalFarmSize(length: number, width: number) {
    console.log(length)
    console.log(width)
    this.lengthmain = length
    this.widthmain = width
    this.totalSize = length * width
  }
  numberofGHs
  numberofGH(value: number) {
    this.GreenHs = [{ length: 0, width: 0, rows: 0 }]
    this.numberofGHs = value
    for (let index = 1; index < value; index++) {
      this.GreenHs.push({ length: 0, width: 0, rows: 0 })
    }
    console.log(this.GreenHs)
  }

  addDimensionForGHs(index, width, length, rows) {
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
