import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service'; 
import { Scout,   ScoutService } from './scout.service';
import { GH, ProfileService } from '../../profile/profile.service';
import { Pest, PestService } from '../pest/pest.service';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})

export class ScoutComponent {
  subject: Subject<void> = new Subject();
  constructor(
    private cm: MethodesService,
    private scoutService: ScoutService,
    private profileService:ProfileService,
    private pestService: PestService,
    private crudService: CrudService,
    private modalService: NgbModal
  ) {
    this.getCompanyDetails()
  }

  title = "Add Scout Record"
  company: string
  getCompanyDetails() {
    this.company = this.cm.checkCompany()
    this.getGhs(this.company) 
    this.getPests(this.company)
    this.getScoutRecords(this.company)
  }

  ghs:GH[]=[]
  getGhs(company: string) {
      this.profileService.getGHByCompanyId(company)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ghs = res
        console.log("this.ghs", this.ghs)
      })
  } 

  pests: Pest[]=[] 
  getPests(companyid) {
    this.pestService.getPestByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.pests = res
        console.log( "this.pests" ,  this.pests )
      })
  }
  
  scouts: Scout[] = []
  getScoutRecords(companyid) {
    this.scoutService.getScoutByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.scouts = res
        console.log("this.scouts", this.scouts)
      })
  }
  
  selectedindex =0
  item =0
  getSelected(value: string) {
    if(value =="addscout"){
      this.item = 0 
      this.selectedindex =1
    }else if(value =="scoutlist"){ 
      this.item = 1 
      this.selectedindex =2
    } 
  }

  modalRef:any
  addScoutData(gh) {
    console.log(gh)
    let builderItems = this.crudService.getAddScoutData();
    builderItems.filter(e => e.Binding == 'greenhouse')[0].Label = gh.name
    let pestNameList = []
    this.pests.forEach(e => { pestNameList.push(e.name) }) 
    builderItems.filter(e => e.Binding == 'pest')[0].SelectList = pestNameList

    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = "Add New Scout Data";
    this.modalRef.result.then(result => {
      if (result != null) {
        result.ghId = gh.id
        result.perstId = this.pests.find(e=>e.name ==result.pest).id
        console.log('result', result)
        this.scoutService.addScoutData(result)  
      } 
    })
  }

  editSsoutData(scout:any){ 
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    let builderItems = this.crudService.getAddScoutData();
    builderItems.filter(e => e.Binding == 'greenhouse')[0].Label = scout.ghName
    let pestNameList = []
    this.pests.forEach(e => { pestNameList.push(e.name) }) 
    builderItems.filter(e => e.Binding == 'pest')[0].SelectList = pestNameList

    this.modalRef.componentInstance.data = this.cm.assignEditValues(builderItems, scout);
    this.modalRef.componentInstance.type = "Add User";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.scoutService.editScout(result)
      }
    })  
  }

  createAction(item){ 
    console.log(item)

    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = this.cm.assignEditValues(this.crudService.getScoutMeasures(), item);
    this.modalRef.componentInstance.type = "Add measure for scout report ";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) {    
        this.scoutService.createScoutMeasures(  Object.assign({}, {companyid:item.companyid}, {scoutid:item.id},result))
      }
    })  
  }
  /*   Slider: any
    ngAfterViewInit() {
      var slider = new this.Slider('#ex1', {
        formatter: function (value) {
          return 'Current value: ' + value;
        }
      });
    } */
  ngOnDestroy(): void {
    this.subject.next()
  }
}
