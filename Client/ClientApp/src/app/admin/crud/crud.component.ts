import { Component } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { SubscriptionService } from '../../services/admin.service/SubscriptionService';

@Component({
  selector: 'crud',
  styleUrls: ['crud.component.css'], 
  templateUrl: './crud.component.html',
})
export class CrudComponent {

  subject: Subject<void> = new Subject();
  subscriptions: any
  constructor(
    private subscriptionService: SubscriptionService
  ) {
     
  }
 
}
