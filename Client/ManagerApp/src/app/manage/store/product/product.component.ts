import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { ActiveIngredient, Product, StoreService } from '../store.service';
import { CrudComponent } from 'src/app/crud/crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
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
    this.getProducts(this.company)
  }

  products: Product[] = []
  getProducts(companyid) {
    this.storeService.getProductByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.products = res 
      })
  }

  ai: ActiveIngredient[] = [] 
  modalRef: any
  title = 'Create a New Product'
  createNewItem() {
    let aiNameList = []
    this.ai.forEach(e => { aiNameList.push(e.iaName) })
    let builderItems = this.crudService.getAddProduct()
    builderItems.filter(e => e.Binding == "activeIngredient")[0].SelectList = aiNameList
    builderItems.filter(e => e.Binding == "category")[0].SelectList = ["Fungicide", "Insecticide"]
    builderItems.filter(e => e.Binding == "metric")[0].SelectList = ["Kg", "Lt"]

    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = this.title;
    this.modalRef.result.then((result: Product) => {
      if (result != null) 
         this.storeService.addProduct(result) 
    }) 
  }

  editProduct(item){
    console.log(item)
  }
  productDetails(item){
    console.log(item)
  }
  
  ngOnDestroy(): void {
      this.subject.next();
    } 
}
