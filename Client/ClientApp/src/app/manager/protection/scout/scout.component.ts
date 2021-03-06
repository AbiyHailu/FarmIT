import { Component, OnDestroy } from '@angular/core'; 
import { ScoutService } from './service/scout.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/crud/service/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes'; 
import { ProfileService } from '../../profile/service/profile.service'; 
import { PestService } from '../pest/service/pest.service';

@Component({
  selector: 'scout-root',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})

export class ScoutComponent implements OnDestroy {

  subject: Subject<void> = new Subject();
  ghs: any
  pests: any
  modalRef: any
  scout:any

  constructor(
    private pestService: PestService,
    private profileService: ProfileService,
    private scoutService: ScoutService,
    private modalService: NgbModal,
    private adminCrudService: CrudService,
    private commonMethodesService: CommonMethedsService
  ) {
    this.getCompanyDetails()  
  }
  company: string
  getCompanyDetails() {
    this.company = this.commonMethodesService.checkCompany() 
    this.getScout(this.company)
    this.getPests(this.company)
    this.getGHs(this.company)
  }

  getScout(companyId) {
    this.scoutService.getScoutByCompanyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.scout = res
        console.log(this.scout ) 
      })
  }

  getPests(companyid) {
    this.pestService.getPestByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.pests = res
        console.log()
      })
  }

  getGHs(companyid) {
    this.profileService.getGHByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ghs = res
        console.log(" this.ghs", this.ghs)
      })
  }

  item =0
  getSelected(value: string) {
    if(value =="addscout"){
      this.item = 0 
    }else if(value =="scoutlist"){ 
      this.item = 1 
    } 
  }

  addScoutData(gh) {
    console.log(gh)
    let builderItems = this.adminCrudService.getAddScoutData();
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

    this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(this.adminCrudService.getAddScoutData(), scout);
    this.modalRef.componentInstance.type = "Add User";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.scoutService.editScout(result)
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

