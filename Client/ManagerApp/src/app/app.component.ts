import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs'; 
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from './services/methods.service';
import { SubscriptionService } from './services/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(
    private router: Router,
    private cm: MethodesService,
    private subscriptionService: SubscriptionService,
  ) {
    
  }
  
  subject: Subject<void> = new Subject();

  companyId: any
  getCompany() {
    this.companyId = this.cm.checkCompany()
    this.getUserRole() 
   
  }
 
  getUserRole() {
    let data = this.cm.checkUser();
    if (data) {
      let role = data['role'];
      this.getSubscription(this.companyId, role )
    }
  }
  
  profile
  subscription = []
  activeIndex: number;
  getSubscription(companyId, role) {
    this.subscriptionService.getSubscriptionByCompnyId(companyId)
    .pipe(takeUntil(this.subject))
    .subscribe(res => { 
      if (res.length > 0) {
        if (!this.profile) {
          this.subscription.push({ plan: 'Profile' })
          this.navigateTo('profile')
        } else {
          if (role &&  role.toLowerCase() == 'manager') {
            this.subscription.push({ plan: 'Dashboard' })    
            this.subscription.push({ plan: 'Analytics'})         
            this.subscription.push({ plan: 'Profile'})     
            this.subscription.push({ plan: 'Reports' })
            this.subscription.push({ plan: 'Scheduler' })
            this.subscription.push({ plan: 'Protection',items:["Scout","Measures","Pest"] })   
            this.subscription.push({ plan: 'Store',items:["Products", "Active Ingredients", "Inventory","Issued","Recieved"]  })
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
