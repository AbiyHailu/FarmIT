import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { Issued, Product, Recieved, StoreService } from '../service/store.service';

@Component({
  selector: 'issued',
  templateUrl: './issued.component.html',
  styleUrls: ['./issued.component.scss']
})

export class IssuedComponent { 
    subject: Subject<void> = new Subject();
    constructor(
        private cm: CommonMethedsService,
        private storeService: StoreService,
        private adminCrudService: CrudService,
        private modalService: NgbModal
      ) { 
        this.getCompanyDetails()  
    }

    company: string
    getCompanyDetails() {
      this.company = this.cm.checkCompany()  
      this.getIssued(this.company)  
    }

    issued:Issued[]=[]
    getIssued(companyid) {
        this.storeService.getIssuedByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.issued = res 
            console.log("recieved", this.issued)
          })
      }
}