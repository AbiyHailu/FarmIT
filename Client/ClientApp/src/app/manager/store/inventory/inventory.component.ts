import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { Balance, Recieved, StoreService } from '../service/store.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent { 
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
      this.getInventory(this.company)  
    }

    inventory:Balance[]=[]
    getInventory(companyid: string) {
        this.storeService.getInventoryByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.inventory = res 
            console.log("recieved", this.inventory)
          })
    } 
}