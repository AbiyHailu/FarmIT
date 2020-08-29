import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedDataService } from '../shared.service/sharedData.service';
import { takeUntil } from 'rxjs/operators'; 
import { SubscriptionService } from '../admin/subscription/service/subscription.service';
import { CommonMethedsService } from '../shared.service/commonMethodes';

@Component(
  {
    selector: 'manager',
    styleUrls: ['manager.component.scss'],
    templateUrl: 'manager.component.html'
  }
)

export class ManagerComponent implements OnDestroy {

  subject: Subject<void> = new Subject();
  url: string
  company :any
  role: any =null
  subscription = []

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService, 
    private subscriptionService: SubscriptionService,
    private commonMethodService: CommonMethedsService
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

    let data = this.commonMethodService.checkUser();
    if (data) {
      this.role = data['role'];
      console.log(this.role)
    }

    let companyId = this.commonMethodService.checkCompany()
    if (companyId) {
        this.getSubscription(companyId)  
    } 
  }

  activeIndex: number; 
  getSubscription(companyId:any) { 
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log("res", res)
        if (res.length > 0) {
          if (this.role && this.role.toLowerCase() =='manager') {
            this.subscription.push({ plan: 'Dashboard' })
            this.subscription.push({ plan: 'Reports' })
            this.subscription.push({ plan: 'Scheduler' })
            this.subscription.push({ plan: 'User' })
          }

          res.forEach(e => {
            if (e.planName =='Store') {
              this.subscription.push({ plan: e.planName, items: ["Products", "Recieved", "Issued"] })
            }
            if (e.planName == 'Protection') {
              this.subscription.push({ plan: e.planName, items: ["Make Schedule", "Add all others" ] })
            }
            if (e.planName == 'Human Resource') {
              this.subscription.push({ plan: e.planName, items: ["Create Employee", "Deactivate" ] })
            }
            if (e.planName == 'Scout') {
              this.subscription.push({ plan: e.planName, items: ["Create Scout"] })
            }
          })
        } 
      }) 
  }

  toggleAccordion(index: any, plans:string) {
    console.log(index)
    this.activeIndex = index
    this.navigateTo(plans.toLowerCase()) 
  }

  activeListIndex
  activeList(i) {
    this.activeListIndex =i
  }

  navigateTo(destination: string) {
    console.log(destination)
    this.router.navigate(['manager/' + destination]);
  }


  ngOnDestroy(): void {
    this.subject.next();
  } 
}
