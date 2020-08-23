import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  
import { CrudService } from '../../crud/service/crud.service';
import { PlanService } from './service/plan.services';
import { CrudComponent } from '../../crud/crud.component';

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
    private adminCrudService: CrudService,
  ) {
    this.plans = []
    this.planSevice.getPlans()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.plans = res;
        console.log("this.plans", this.plans)
      })
  }
  createNewPlan() {
    let builderItems = this.adminCrudService.getAddPlanItems();
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = "Add Company";
    this.modalRef.result.then(result => {
      console.log('result', result)
    })
  }

  editPlan(planId) {
    console.log("create a methode for edit", planId)
  }

  planDetails(planId) {
    console.log("create a methode for Detail Desplay", planId)
  }

  ngOnInit(): void { 
  }

  ngOnDestroy(): void {
    this.subject.next() 
  }
    
}
