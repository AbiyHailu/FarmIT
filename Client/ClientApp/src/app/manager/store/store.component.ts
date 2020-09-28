import { Component } from '@angular/core';
import { Issued, Recieved, Product, StoreService, ActiveIngredient } from './service/store.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/crud/service/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  subject: Subject<void> = new Subject();
  products: Product[] = []
  ai: ActiveIngredient[] = []
  issued: Issued[] = []
  recieved: Recieved[] = []
  balance: any = []
  sortedData = []
  selectedindex: number
  modalRef: any

  constructor(
    private storeService: StoreService,
    private adminCrudService: CrudService,
    private modalService: NgbModal
  ) {
    this.sortedData = []
    this.selectedindex = 1   
  } 
  createNewItem(index: number) {
    if (index == 1)
      this.addData(this.adminCrudService.getAddProduct(), index)
    if (index == 2)
      this.addData(this.adminCrudService.issueaProduct(), index)
    if (index == 3)
      this.addData(this.adminCrudService.recieveProduct(), index)
    if (index == 5)
      this.addData(this.adminCrudService.getAddAi(), index)
  }

  addData(builderItems: any, index: number) {

    if (index == 1) {
      let aiNameList = []
      this.ai.forEach(e => { aiNameList.push(e.iaName) })
      builderItems.filter(e => e.Binding == "activeIngredient")[0].SelectList = aiNameList
      builderItems.filter(e => e.Binding == "category")[0].SelectList = ["Fungicide", "Insecticide"]
      builderItems.filter(e => e.Binding == "metric")[0].SelectList = ["Kg", "Lt"]
    }

    if (index == 2 || index == 3) {
      let prodNameList = []
      this.products.forEach(e => { prodNameList.push(e.name) })
      builderItems.filter(e => e.Binding == "productName")[0].SelectList = prodNameList
    }

    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = this.title;
    console.log("this.modalRef.result", this.modalRef.result)

    this.modalRef.result.then(result => { 
      if (result != null) {
        if (index == 1)
          this.storeService.addProduct(result)
        if (index == 2)
          this.storeService.addIssued(result)
        if (index == 3)
          this.storeService.addRecieved(result)
        if (index == 5)
          this.storeService.addAI(result)
      }
    }) 
  }


  sorted = []
  title = 'Create a New Product'
  getSelected(item: string) {
    this.sortedData = []
    if (item == 'product') {
      this.selectedindex = 1
      this.sortedData = this.products
      this.title = 'Create a New Product'
    }
    if (item == 'issued') {
      this.selectedindex = 2
      this.sortedData = this.issued
      this.title = 'Issue a Product'
    }
    if (item == 'recieved') {

      this.selectedindex = 3
      this.sortedData = this.recieved
      this.title = 'Recieve a Product'
    }
    if (item == 'balance') {
      this.selectedindex = 4
      this.sortedData = this.balance
      this.title = 'Store Product Balance'
    }
    if (item == 'ai') {
      this.selectedindex = 5
      this.sortedData = this.ai
      this.title = 'Active Ingredients'
    }
  }
}




