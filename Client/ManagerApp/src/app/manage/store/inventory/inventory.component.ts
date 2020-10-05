import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { CrudComponent } from 'src/app/crud/crud.component';
import { CrudService } from '../../../crud/crud.service';
import { MethodesService } from '../../../services/methods.service';
import { Balance, StoreService } from '../store.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent { 
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
      this.getInventory(this.company)  
    }

    inventory:Balance[]=[]
    getInventory(companyid: string) {
        this.storeService.getInventoryByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.inventory = res  
          })
    } 
    
 
  inventoryDetails(item) {
    console.log(item)
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}