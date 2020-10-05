import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { Product, Recieved, StoreService } from '../store.service';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'recieved',
  templateUrl: './recieved.component.html',
  styleUrls: ['./recieved.component.scss']
})

export class RecievedComponent { 
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
      this.getRecieved(this.company)   
      this.getProducts(this.company) 
    }

    recieved:Recieved[]=[]
    getRecieved(companyid) {
        this.storeService.getRecievedByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.recieved = res  
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
      title = 'Recieve a Product'
      createNewItem() {
        let prodNameList = []
        this.products.forEach(e => { prodNameList.push(e.name) }) 
        let builderItems =this.crudService.recieveProduct() 
        builderItems.filter(e => e.Binding == "productName")[0].SelectList = prodNameList 
        this.modalRef = this.modalService.open(CrudComponent, {
          centered: true,
          size: 'md',
          backdrop: 'static',
          keyboard: false
        });
    
        this.modalRef.componentInstance.data = builderItems;
        this.modalRef.componentInstance.type = this.title;
        this.modalRef.result.then((result: Recieved) => {
          if (result != null)
            this.storeService.addRecieved(result)
        })
      }

      editRecieved(item) {
        console.log(item)
      }
    
      recievedDetails(item) {
        console.log(item)
      }

}