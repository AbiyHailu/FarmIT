import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { SubscriptionService } from '../services/subscription.service';
import { SharedDataService } from '../services/shared.data.service';
import { MethodesService } from '../services/methods.service';

@Component(
  {
    selector: 'manager',
    styleUrls: ['manager.component.scss'],
    templateUrl: 'manager.component.html'
  }
)

export class ManagerComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  profile: any
  subscription = []
  toggler: any

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private sharedDataService: SharedDataService,
    private subscriptionService: SubscriptionService,
    private cm: MethodesService
  ) {
    console.log(true)
    this.getCompany()

    this.subscription = []
    this.sharedDataService.currentSideToggler
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res != null) {
          this.toggler = res
          if (res == true) {
            document.getElementById("sideNav").style.width = "5%"
            document.getElementById("main").style.width = "95%";
          } else if (res == false) {
            document.getElementById("sideNav").style.width = "16.5%";
            document.getElementById("main").style.width = "83.5%";
          }
        }
      })
  }

  company: any
  getCompany() {
    this.company = this.cm.checkCompany()
    console.log("this.company", this.company)
    if (this.company) {
      this.getProfile(this.company)
    }
  }

  getProfile(companyid: any) {
    this.profileService.getFarmByCompanyiD(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log("res", res)
        this.profile = res
        if (this.profile.length > 0) {
          this.getSubscription(this.company)
        } else {
          this.subscription.push({ plan: 'Profile' })
          this.navigateTo('profile')
        }
      })
  }

  activeIndex: number;
  getSubscription(companyId: any) {
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log("ressub", res)
        let role = this.cm.checkUser()['role']
        if (role && role.toLowerCase() == 'manager') {
          this.subscription.push({ plan: 'Dashboard' })
          this.subscription.push({ plan: 'Analytics' })
          this.subscription.push({ plan: 'Profile' })
          this.subscription.push({ plan: 'Reports' })
          this.subscription.push({ plan: 'Scheduler' }) 
          res.forEach(e => {  
            this.subscription.push(this.cm.preparePlnas(e.planName))
          }) 
          this.subscription.push({ plan: 'Settings' })
        } else if (role && role.toLowerCase() == 'user') {
          this.subscription.push({ plan: this.cm.checkUser()['permission'] })
        }
      })
  }

  toggleAccordion(index: any, plans: string) {
    this.activeIndex = index
    this.navigateTo(plans.toLowerCase())
  }

  activeListIndex: any
  activeList(i, plan, item) {
    this.activeListIndex = i
    this.navigateToChildElement(plan, item)
  }

  navigateTo(destination: string) {
    this.router.navigate(['manager/' + destination]);
  }

  navigateToChildElement(plan: string, item: string) {
    this.router.navigate(['manager/' + plan.toLowerCase() + '/' + item.toLowerCase()]);
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}
