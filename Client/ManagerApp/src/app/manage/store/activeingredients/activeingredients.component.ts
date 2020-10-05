import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudComponent } from 'src/app/crud/crud.component';
import { MethodesService } from 'src/app/services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { ActiveIngredient, Product, Recieved, StoreService } from '../store.service';

@Component({
  selector: 'activeingredients',
  templateUrl: './activeingredients.component.html',
  styleUrls: ['./activeingredients.component.scss']
})

export class ActiveingredientsComponent {
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
    if (this.company) {
      this.getAI(this.company)
    }
  }

  ai: ActiveIngredient[] = []
  getAI(companyid: string) {
    this.storeService.getAIByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ai = res 
      })
  }
  
  modalRef: any
  title = 'Create a new Activ Ingredient'
  createNewItem() {   
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = this.crudService.getAddAi() ;
    this.modalRef.componentInstance.type = this.title;
    this.modalRef.result.then((result: ActiveIngredient ) => {
      if (result != null)
        this.storeService.addAI(result)
    })
  }

  editAi(item) {
    console.log(item)
  }
  aiDetails(item) {
    console.log(item)
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}