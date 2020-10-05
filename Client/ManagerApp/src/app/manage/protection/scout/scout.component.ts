import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})

export class ScoutComponent { 
    subject: Subject<void> = new Subject();
    constructor(
        private cm:  MethodesService,
        private storeService: StoreService,
        private crudService: CrudService,
        private modalService: NgbModal
      ) { 
        this.getCompanyDetails()  
    }
    company: string
    getCompanyDetails() {
      this.company = this.cm.checkCompany()  
      //this.getProducts(this.company)  
    }

    /* products:Scout[]=[]
    getProducts(companyid) {
        this.storeService.getProductByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.products = res 
            console.log("this.products", this.products)
          })
      } */
}