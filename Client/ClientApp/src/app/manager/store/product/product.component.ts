import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { Product, StoreService } from '../service/store.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent { 
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
      this.getProducts(this.company)  
    }

    products:Product[]=[]
    getProducts(companyid) {
        this.storeService.getProductByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.products = res 
            console.log("this.products", this.products)
          })
      }
}