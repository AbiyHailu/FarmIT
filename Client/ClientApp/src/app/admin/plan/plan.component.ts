import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { PlanService } from '../../services/admin.service/PlanServices';
import { AdninCrudService } from '../../services/shared.service/AdminCrudService';

@Component({
  selector: 'plan',
  styleUrls: ['plan.component.css'], 
  templateUrl: './plan.component.html',
})
export class PlanComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject(); 
  modalRef: any
  plans: any[];

  constructor(
    private planSevice: PlanService,
    private modalService: NgbModal,
    private adminCrudService: AdninCrudService,
  ) {
    this.plans = []
    this.planSevice.getPlans()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.plans = res;
        console.log("this.plans", this.plans)
      })
  }

  ngOnInit(): void { 
  }

  ngOnDestroy(): void {
    this.subject.next() 
  }
    
}
