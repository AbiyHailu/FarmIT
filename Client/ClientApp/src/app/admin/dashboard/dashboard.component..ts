import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { SubscriptionService } from '../subscription/service/subscription.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['dashboard.component.css'], 
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy { 
  subject: Subject<void> = new Subject();
  subscriptions: any
  constructor(
    private subscriptionService: SubscriptionService
  ) {
    this.subscriptions = []
    this.subscriptionService.getSubscription()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.subscriptions = res;
        console.log("this.subscriptions", this.subscriptions)
      })
  }

  ngOnInit(): void {

  }
 
  ngOnDestroy(): void {
    this.subject.next()
  }
}
