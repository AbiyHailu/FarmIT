import { Component } from '@angular/core';
import { Subject } from 'rxjs'; 
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes'; 

@Component({
  selector: 'analytics',
  styleUrls: ['analytics.component.scss'],
  templateUrl: './analytics.component.html',
})

export class AnalyticsComponent {
  subject: Subject<void> = new Subject();
  constructor(  
    private commonMethodService: CommonMethedsService

  ) {
    this.getCompanyDetails() 
  }

  company: string
  getCompanyDetails() {
    this.company = this.commonMethodService.checkCompany()
  }


  ngOnDestroy(): void {
    this.subject.next()
  }
}
