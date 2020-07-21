import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { SubscriptionService } from '../../services/admin.service/SubscriptionService';

@Component({
  selector: 'subscription',
  styleUrls: ['subscription.component.css'], 
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent implements OnInit, OnDestroy{

  subject: Subject<void> = new Subject();
  subscriptions: any
  constructor(
    private subscriptionService: SubscriptionService
  ) {
    this.subscriptions = []
    this.subscriptionService.getSubscription()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        //res.forEach(e => {
        //  if (this.subscriptions.lenght == 0) {

        //}

      //  })
      
        
        res.forEach(item => {
          if (this.subscriptions.length == 0)
            this.subscriptions.push(Object.assign({}, { [item["companyName"]]: [item] }))
          else if (this.subscriptions.filter(e => e[item["companyName"]]).length > 0) {
            
            this.subscriptions.filter(e => e[item["companyName"]])[0][item["companyName"]].push(item)
          }
         
          else
            this.subscriptions.push(Object.assign({}, { [item["companyName"]]: [item] }))
        })


        console.log(this.subscriptions)
      })
  }
 

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}
