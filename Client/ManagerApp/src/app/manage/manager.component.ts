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
  company: any
  role: any = null
  subscription = []
  toggler: any

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private sharedDataService: SharedDataService,
    private subscriptionService: SubscriptionService,
    private cm: MethodesService
  ) {
    this.getProfile()
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

    let data = this.cm.checkUser();
    if (data) {
      this.role = data['role'];
    }

    let companyId = this.cm.checkCompany()
    if (companyId) {
      this.getSubscription(companyId)
    }
  }

  getProfile() {
    this.profileService.getFarm()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.profile = res
      })
  }

  activeIndex: number;
  getSubscription(companyId: any) {
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res.length > 0) {
          if (!this.profile) {
            this.subscription.push({ plan: 'Profile' })
            this.navigateTo('profile')
          } else {
            if (this.role && this.role.toLowerCase() == 'manager') {
              this.subscription.push({ plan: 'Dashboard' })
              this.subscription.push({ plan: 'Analytics' })
              this.subscription.push({ plan: 'Profile' })
              this.subscription.push({ plan: 'Reports' })
              this.subscription.push({ plan: 'Scheduler' })
              this.subscription.push({ plan: 'Protection', items: ["Scout", "Measures", "Pest"] })
              this.subscription.push({ plan: 'Store', items: ["Products", "Active Ingredients", "Inventory", "Issued", "Recieved"] })
              this.subscription.push({ plan: 'Settings' })
            }
            /*  res.forEach(e => {
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
             }) */
          }
        }
      })
  }

  toggleAccordion(index: any, plans: string) {
    this.activeIndex = index
    this.navigateTo(plans.toLowerCase())
  }

  activeListIndex
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
