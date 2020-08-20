import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { CompanyService } from './service/company.service';
import { CrudService } from '../../crud/service/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from '../../crud/crud.component';
 
@Component({
  selector: 'company',
  styleUrls: ['company.component.css'], 
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject();
  companys: any 
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
        this.companys = res;
        console.log("this.company", this.companys)
      })
  }

  ngOnInit(): void {

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

  ngOnDestroy(): void {
    this.subject.next()
  } 
}
