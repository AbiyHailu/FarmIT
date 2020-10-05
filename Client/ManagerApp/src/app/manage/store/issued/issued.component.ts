import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { Issued, Product, StoreService } from '../store.service';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'issued',
  templateUrl: './issued.component.html',
  styleUrls: ['./issued.component.scss']
})

export class IssuedComponent {
  subject: Subject<void> = new Subject();
  constructor(
    private cm: MethodesService,
    private storeService: StoreService,
    private crudService: CrudService,
    private modalService: NgbModal
  ) {
    this.getCompanyDetails()
  }

  company: string
  getCompanyDetails() {
    this.company = this.cm.checkCompany()
    this.getIssued(this.company)
    this.getProducts(this.company) 
  }

  issued: Issued[] = []
  getIssued(companyid) {
    this.storeService.getIssuedByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.issued = res
        console.log("recieved", this.issued)
      })
  } 
  
  products: Product[] = []
  getProducts(companyid) {
    this.storeService.getProductByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.products = res 
      })
  }
 
  modalRef: any
  title = 'Issue a Product'
  createNewItem() {
    let prodNameList = []
    this.products.forEach(e => { prodNameList.push(e.name) }) 
    let builderItems = this.crudService.issueaProduct()  
    builderItems.filter(e => e.Binding == "productName")[0].SelectList = prodNameList

    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    }); 

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = this.title;
    this.modalRef.result.then((result: Issued) => {
      if (result != null)
        this.storeService.addIssued(result)
    })
  }

  editIssued(item) {
    console.log(item)
  }

  issuedDetails(item) {
    console.log(item)
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}