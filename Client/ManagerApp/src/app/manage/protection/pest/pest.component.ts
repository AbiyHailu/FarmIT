import { Component, OnDestroy } from '@angular/core'; 
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs'; 
import { MethodesService } from 'src/app/services/methods.service';
import { Pest, PestService } from './pest.service';
import { CrudService } from 'src/app/crud/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'pest-root',
  templateUrl: './pest.component.html',
  styleUrls: ['./pest.component.scss']
})

export class PestComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  reports = [];
  catagorizedReports = []
  loading = true
  constructor(  
    private cm: MethodesService,
    private  pestService: PestService,
    private crudService: CrudService,
    private modalService: NgbModal 
  ) { 
    this.getCompanyDetails()
  }
   
  company: string
  getCompanyDetails() {
    this.company = this.cm.checkCompany()
    this.getPests(this.company)
  }

  pests: Pest[] = []
  getPests(companyid: string) {  
    this.pestService.getPestByCompanyId(companyid)
    .pipe(takeUntil(this.subject))
    .subscribe(res => {
      this.pests = res 
    })
  }
   
  modalRef: any
  title = 'Create a New Pest'
  createNewItem() {  
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = this.crudService.getAddPest() ;
    this.modalRef.componentInstance.type = this.title;
    this.modalRef.result.then((result: Pest) => {
      if (result != null && this.company) {  
         result.companyid = this.company
         this.pestService.addPest(result) 
      }
    }) 
  }
  editPest(item){
    console.log(item)
  }
  pestDetails(item){
    console.log(item)
  }
  ngOnDestroy(): void {
    this.subject.next()
  } 
}

