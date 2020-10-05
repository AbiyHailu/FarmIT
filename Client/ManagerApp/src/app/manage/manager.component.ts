import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from './profile/profile.service';
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
       this.reloadNavigation(this.cm.extractNavProperty(this.router.url))
  }

  reloadNavigation(nav) { 
    this.activeList(nav.index, nav.plan, nav.item)
    if ( nav.plan == 'store')
      this.activeIndex = 5
    if ( nav.plan == 'protection')
      this.activeIndex = 6 
    if ( nav.plan == 'profile')
      this.activeIndex = 2
  }

  company: any
  getCompany() {
    this.company = this.cm.checkCompany()
    if (this.company) {
      this.getProfile(this.company)
    }
  }

  getProfile(companyid: any) {
    this.profileService.getFarmByCompanyiD(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
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
        let role = this.cm.checkUser()['role']
        if (role && role.toLowerCase() == 'manager') {
          this.subscription.push({ plan: 'Dashboard' })
          this.subscription.push({ plan: 'Analytics' })
          this.subscription.push({ plan: 'Profile', items:["Farm", "Production Area", "Plant" ,"Plantings"]})
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
    this.activeList(null, null, null)
  }

  storetitle: string
  activeListIndex: any
  activeList(i: number, plan: string, item: string) {
    this.activeListIndex = i
    if (plan && item)
      this.navigateToChildElement(plan, item)
  }

  navigateTo(destination: string) {
    this.router.navigate(['manager/' + destination]);
  }

  navigateToChildElement(plan: string, item: string) {
    let childItem = item.split(" ");
    if (childItem.length > 1)
      item = childItem[0].toLowerCase() + childItem[1].toLowerCase()
    this.router.navigate(['manager/' + plan.toLowerCase() + '/' + item.toLowerCase()]);
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}
