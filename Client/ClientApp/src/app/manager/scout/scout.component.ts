import { Component, OnDestroy } from '@angular/core';
import { PestService } from '../pest/service/pest.service';
import { ScoutService } from './service/scout.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/crud/service/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';

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

  constructor(
    private pestService: PestService,
    private scoutService: ScoutService,  
    private modalService: NgbModal,
    private adminCrudService: CrudService,
  ) {
    this.getPests() 
    this.getGHs()
  }

  getPests() {
    this.pestService.getPests()
    .pipe(takeUntil(this.subject))
    .subscribe(res => {
      this.pests = res 
    })   
  } 

  getGHs() {
    this.scoutService.getGHs()
    .pipe(takeUntil(this.subject))
    .subscribe(res => {
      this.ghs = res 
      console.log(" this.ghs",  this.ghs)
    })   
  }  
  
  
  addScoutData(gh) { 
    console.log(gh)
    let builderItems = this.adminCrudService.getAddScoutData();
    builderItems.filter(e=>e.Binding == 'greenhouse')[0].Label = gh.name
    builderItems.filter(e=>e.Binding == 'pest')[0].SelectList =  this.pests 
    console.log('builderItems', builderItems)
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = "Add New Scout Data";
    this.modalRef.result.then(result => {
      result.greenhouse = gh.id 
      console.log('result', result) 
      //this.scoutService.addScoutData(result)  
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

export class Scout {
  id: any
  ghid: string
  pestId: string
  rownumberStart: any
  rowNumberEnd: any
  amount: any// severity with %
} 