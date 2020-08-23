import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { CompanyService, Company } from './service/company.service';
import { CrudService } from '../../crud/service/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from '../../crud/crud.component';
import { SubscriptionService } from '../subscription/service/subscription.service';
 
@Component({
  selector: 'company',
  styleUrls: ['company.component.css'], 
  templateUrl: './company.component.html',
})
export class CompanyComponent implements  OnDestroy {

  subject: Subject<void> = new Subject();
  companys: Company[]; 
  modalRef: any

  constructor(
    private companyervice: CompanyService, 
    private adminCrudService: CrudService, 
    private modalService: NgbModal
  ) {

    this.companys = [] 
    this.companyervice.getCompanys()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        console.log('res', res)
        this.companys = res; 
      })
  }
   
  createNewCompany(create:string) {
    console.log(create)
    let builderItems = this.adminCrudService.getAddCompany(); 
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

  editCompany(companyId) {
    console.log("create a methode for edit", companyId)
  }

  companyDetails(companyId) {
    console.log("create a methode for Detail Desplay", companyId)
  }

  ngOnDestroy(): void {
    this.subject.next()
  } 
}
