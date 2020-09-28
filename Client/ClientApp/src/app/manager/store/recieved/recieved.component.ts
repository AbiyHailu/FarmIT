import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import {  Recieved, StoreService } from '../service/store.service';

@Component({
  selector: 'recieved',
  templateUrl: './recieved.component.html',
  styleUrls: ['./recieved.component.scss']
})

export class RecievedComponent { 
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
      this.getRecieved(this.company)  
    }

    recieved:Recieved[]=[]
    getRecieved(companyid) {
        this.storeService.getRecievedByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.recieved = res 
            console.log("recieved", this.recieved)
          })
      }
}