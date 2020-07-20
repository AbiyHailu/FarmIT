import { Component } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { SubscriptionService } from '../../services/admin.service/SubscriptionService';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'], 
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

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
  //Get plan By Company id for manager for user specific
  sideButtons = [
    { "Subscription": "Store", "Actionlink": "link", "Other": "other" },
    { "Subscription": "Fertigation", "Actionlink": "link", "Other": "other" },
    { "Subscription": "Protection", "Actionlink": "link", "Other": "other" },
    { "Subscription": "PackHouse", "Actionlink": "link", "Other": "other" }
  ]
}
