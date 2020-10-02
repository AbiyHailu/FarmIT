import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../services/crud.service';
import { Product, StoreService } from '../../../services/store.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent { 
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