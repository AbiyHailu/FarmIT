import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { SubscriptionService } from '../../services/admin.service/SubscriptionService';

@Component({
  selector: 'company',
  styleUrls: ['company.component.css'], 
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit, OnDestroy {

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
