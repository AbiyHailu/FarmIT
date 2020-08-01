import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  
import { CrudComponent } from '../../crud/crud.component'; 
import { CrudService } from '../../crud/service/crud.service';
import { SubscriptionService } from './service/subscription.service';
@Component({
  selector: 'subscription',
  styleUrls: ['subscription.component.css'], 
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent implements OnInit, OnDestroy{

  subject: Subject<void> = new Subject();
  subscriptions: any
  modalRef: any
  constructor(
    private subscriptionService: SubscriptionService,
    private modalService: NgbModal,
    private adminCrudService:  CrudService,

  ) {
    this.subscriptions = []
    this.subscriptionService.getSubscription()
      .pipe(takeUntil(this.subject))
      .subscribe(res => { 
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

  manage(create: string) {
    console.log(create)
    let builderItems = this.adminCrudService.getAddSubscriptionItems(); 
    console.log('builderItems', builderItems)
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems; 
    this.modalRef.componentInstance.type = "Add Subscription";
    this.modalRef.result.then(result => {
      console.log('result',result)
    })
  }
    
  ngOnDestroy(): void {
    this.subject.next()
  }
}
