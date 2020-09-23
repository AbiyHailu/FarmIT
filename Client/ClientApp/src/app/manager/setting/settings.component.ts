import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs'; 
import { takeUntil } from 'rxjs/operators';
import { CrudComponent } from 'src/app/crud/crud.component';
import { CrudService } from 'src/app/crud/service/crud.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes'; 
import { PestService } from '../protection/pest/service/pest.service';
import { SettingService, ThresholdLevelSetting } from './service/setting.service';

@Component({
  selector: 'settings',
  styleUrls: ['settings.component.scss'],
  templateUrl: './settings.component.html',
})

export class SettingsComponent {
  subject: Subject<void> = new Subject(); 
  modalRef: any

  constructor(  
    private commonMethodService: CommonMethedsService,
    private settingservice:SettingService,  
    private crudService: CrudService, 
    private modalService: NgbModal,
    private pestService:PestService
  ) {
    this.getCompanyDetails() 
  }

  company: string
  getCompanyDetails() {
    this.company = this.commonMethodService.checkCompany()
  }
 pests
  getPests(){
    this.pestService.getPests()
    .pipe(takeUntil(this.subject))
    .subscribe(res => {
      this.pests = res
    }) 
  }

  thresHoldSetting: ThresholdLevelSetting[]
  private getThresholdSetting(pestid) {
    this.settingservice.getThresholdlevelSetting(pestid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.thresHoldSetting = res;
      });
  }

  title:string
  builderItems:any
  setThreshold(){ 
    this.getPests() 
    this.builderItems= this.crudService.getThresholdSetting()
    let pestNameList = []
    this.pests.forEach(e => { pestNameList.push(e.name) }) 
    this.builderItems.filter(e => e.Binding == 'pest')[0].SelectList = pestNameList
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });
    this.title="Set Threhold Level"
    this.modalRef.componentInstance.type = this.title;
    this.modalRef.componentInstance.data = this.builderItems;
    this.modalRef.componentInstance.event.subscribe((emmitedValue) => {
      console.log(emmitedValue)
      if (emmitedValue) {
        let pestid = this.pests.filter(e => e.name == emmitedValue)[0].id
        this.getThresholdSetting(pestid)
        console.log(this.thresHoldSetting)
        this.thresHoldSetting.forEach(element => {
          this.modalRef.componentInstance.data = this.commonMethodService.assignEditValues(this.builderItems, element);
        }); 
     }

     this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.settingservice.editThreshold(result)
      }
    })  
  });
  }

 

  ngOnDestroy(): void {
    this.subject.next()
  }
}
