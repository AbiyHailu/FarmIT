import { Component } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
import { ActiveIngredient, Recieved, StoreService } from '../service/store.service';

@Component({
  selector: 'activeingredients',
  templateUrl: './activeingredients.component.html',
  styleUrls: ['./activeingredients.component.scss']
})

export class ActiveingredientsComponent { 
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
      this.getAI(this.company)  
    }

    ai:ActiveIngredient[]=[]
    getAI(companyid: string) {
        this.storeService.getAIByCompanyId(companyid)
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.ai = res 
            console.log("ai", this.ai)
          })
    } 
}