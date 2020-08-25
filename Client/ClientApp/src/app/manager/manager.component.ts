import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedDataService } from '../shared.service/sharedData.service';
import { takeUntil } from 'rxjs/operators';
import { JwtDecodeService } from '../shared.service/jwtdecoder.service';
import { SubscriptionService } from '../admin/subscription/service/subscription.service';

@Component(
  {
    selector: 'manager',
    styleUrls: ['manager.component.scss'],
    templateUrl: 'manager.component.html'
  }
)

export class ManagerComponent implements  OnDestroy {
  subject: Subject<void> = new Subject();
  url: string
  company :any
  payload: any
  subscription =[]
  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private jwtDecoder: JwtDecodeService, 
    private subscriptionService: SubscriptionService
  ) {
    this.subscription = []
    this.sharedDataService.currentSideToggler
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res != null) {
          if (res == true) {
            document.getElementById("sideNav").style.width = "5%"
            document.getElementById("main").style.width = "95%";
          } else if (res == false) {
            document.getElementById("sideNav").style.width = "16.5%";
            document.getElementById("main").style.width = "83.5%";
            console.log(document.getElementById("main"))
          }
        }
      })
    let companyId = localStorage.getItem('userDetail')
    this.getSubscription(companyId)  
  }

  activeIndex: number;
  control = null
  getSubscription(companyId:any) {
  console.log( localStorage.getItem('userDetail')) 
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log("res", res)
        if (res.length>0) {
          res.forEach(e => {
           this.subscription.push({ plan: e.planName, items: ["item 1 ", "item 2", "item 3"] })
          })
        }
        
      }) 
  }
  activeIndex
  toggleAccordion(index: any) {
    console.log(index)
    this.activeIndex = index
  }
  navigateTo(destination: string) {
    this.router.navigate(['manager/' + destination]);
  }
  ngOnDestroy(): void {
    this.subject.next();
  } 
}
