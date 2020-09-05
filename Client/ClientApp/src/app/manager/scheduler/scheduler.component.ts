import { Component, OnDestroy } from '@angular/core';  
import { Subject } from 'rxjs';
import { SchedulerService } from './service/scheduler.service';
import { takeUntil } from 'rxjs/operators';
import { CommonMethedsService } from '../../shared.service/commonMethodes';

@Component({
  selector: 'scheduler-root',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})

export class SchedulerComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  schedules=[]; 
  catagorizedSchedules =[]
  constructor(
    private scheduleService: SchedulerService, 
    private commonMethodes: CommonMethedsService
  ) {

    this.scheduleService.getSchedules()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.schedules = res
        if (this.schedules.length > 0) {
          this.catagorizeByDate(this.schedules) 
        }
      })   
  }

  catagorizeByDate(schedules:any){ 
    schedules.forEach(item => {
      if (this.catagorizedSchedules.length == 0)
        this.catagorizedSchedules.push(Object.assign({}, { [item["createdDate"]]: [item] }))
      else if (this.catagorizedSchedules.filter(e => e[item["createdDate"]]).length > 0) { 
        this.catagorizedSchedules.filter(e => e[item["createdDate"]])[0][item["createdDate"]].push(item)
      } 
      else
        this.catagorizedSchedules.push(Object.assign({}, { [item["createdDate"]]: [item] }))
    })   
  } 

  activeIndex
  toggleAccordion(index:any, value:string){ 
    this.activeIndex =index 
  }
  getSchedule(items){
    console.log(items)
  }

  sortTitle: any = "Created Date"
  sortSchedules(sortvalue:string){ 
    this.sortTitle = this.commonMethodes.editTitlestring(sortvalue)
    this.catagorizedSchedules=[]
    this.schedules.forEach(item => {
      if (this.catagorizedSchedules.length == 0)
        this.catagorizedSchedules.push(Object.assign({}, { [item[sortvalue]]: [item] }))
      else if (this.catagorizedSchedules.filter(e => e[item[sortvalue]]).length > 0) { 
        this.catagorizedSchedules.filter(e => e[item[sortvalue]])[0][item[sortvalue]].push(item)
      } 
      else
        this.catagorizedSchedules.push(Object.assign({}, { [item[sortvalue]]: [item] }))
    })  
  }

  editMarkasRead(item:any) {
    console.log(item)
    if (item) {
      item.value.markasread = !item.value.markasread
      this.scheduleService.editSchedule(item.value)
    }
    console.log(item)
  }
 
  ngOnDestroy(): void {
    this.subject.next()
  } 
}


