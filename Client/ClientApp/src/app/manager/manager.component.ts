import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedDataService } from '../shared.service/sharedData.service';
import { takeUntil } from 'rxjs/operators';
import { SubscriptionService } from '../admin/subscription/service/subscription.service';
import { CommonMethedsService } from '../shared.service/commonMethodes';
import { ProfileService } from './profile/service/profile.service';

@Component(
  {
    selector: 'manager',
    styleUrls: ['manager.component.scss'],
    templateUrl: 'manager.component.html'
  }
)

export class ManagerComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  profile: boolean
  company: any
  role: any = null
  subscription = []
  toggler: any

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private sharedDataService: SharedDataService,
    private subscriptionService: SubscriptionService,
    private commonMethodService: CommonMethedsService
  ) {
    this.getProfile()
    this.subscription = []
    this.sharedDataService.currentSideToggler
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res != null) {
          this.toggler = res
          console.log("this.toggler", this.toggler)
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

  getProfile() {
    this.profileService.getFarm()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.profile = res[0].setupCompleted
        console.log("profile", this.profile)
      })
  }

  activeIndex: number;
  getSubscription(companyId: any) {
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log("res", res)
        if (res.length > 0) {
          if (!this.profile) {
            this.subscription.push({ plan: 'Profile' })
            this.navigateTo('profile')
          } else {
            if (this.role && this.role.toLowerCase() == 'manager') {
              this.subscription.push({ plan: 'Dashboard' })
              this.subscription.push({ plan: 'Reports' })
              this.subscription.push({ plan: 'Scheduler' })
              this.subscription.push({ plan: 'User' })
            } 
            res.forEach(e => {
              if (e.planName == 'Store') {
                this.subscription.push({ plan: e.planName, items: [] })
              }
              if (e.planName == 'Protection') {
                this.subscription.push({ plan: e.planName, items: ["Make Schedule", "Add all others", "Pests"] })
              }
              if (e.planName == 'Human Resource') {
                this.subscription.push({ plan: e.planName, items: ["Create Employee", "Deactivate"] })
              }
              if (e.planName == 'Scout') {
                this.subscription.push({ plan: e.planName })
              }
            })
          } 
        }
      })
  }

  toggleAccordion(index: any, plans: string) {
    console.log(index)
    this.activeIndex = index
    this.navigateTo(plans.toLowerCase())
  }

  activeListIndex
  activeList(i, plan, item) {
    this.activeListIndex = i
    this.navigateToChildElement(plan, item)
  }

  navigateTo(destination: string) {
    console.log("destination", destination)
    this.router.navigate(['manager/' + destination]);
  }
  navigateToChildElement(plan: string, item: string) {
    this.router.navigate(['manager/' + plan.toLowerCase() + '/' + item.toLowerCase()]);
  }


  ngOnDestroy(): void {
    this.subject.next();
  }
}
