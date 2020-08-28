import { Component } from '@angular/core';  

@Component({
  selector: 'scheduler-root',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {  
  schedules=[]; 
  catagorizedSchedules =[]
  constructor() { 
    let todo1 = {id:1, titel: "test1", priority:"high", createdDate:"26/8/2020", complitionDate:"27/8/2020", isCompleted:"completed", actionid:1, department:"1"}
    let todo2 = {id:2, titel: "test2", priority:"high", createdDate:"26/8/2020", complitionDate:"27/8/2020", isCompleted:"completed", actionid:2, department:"1"}
    let todo3 = {id:3, titel: "test3", priority:"low", createdDate:"25/8/2020", complitionDate:"26/8/2020", isCompleted:"Not completed", actionid:10, department:"2"}
    let todo4 = {id:4, titel: "test4", priority:"medium", createdDate:"24/8/2020", complitionDate:"26/8/2020", isCompleted:"completed", actionid:11, department:"2"}
    let todo5 = {id:5, titel: "test5", priority:"low", createdDate:"24/8/2020", complitionDate:"27/8/2020", isCompleted:"Not completed", actionid:12, department:"3"}
    let todo6 = {id:6, titel: "test6", priority:"medium", createdDate:"24/8/2020", complitionDate:"25/8/2020", isCompleted:"completed", actionid:13, department:"3"}

    this.schedules.push( todo1, todo2, todo3, todo4, todo5, todo6) 
    this.catagorizeByDate(this.schedules)
    
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

  sortSchedules(sortvalue:string){ 
    this.editTitlestring(sortvalue)
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
  sortTitle:any= "Created Date"
  editTitlestring(sortvalue:string){
    let str= sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[0] 
    let str1=  sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[1] 
    if(str && str1){
     this.sortTitle= str[0].toUpperCase() + str.slice(1)+' '+str1[0].toUpperCase() + str1.slice(1) 
    }else{
      this.sortTitle= sortvalue[0].toUpperCase()+ sortvalue.slice(1)
    } 
  }
}

export class  Todo {
  id:any
  title: string
  priority:string //enum - high medium low
  createdDate:any
  complitionDate:any
  iSCompleted:boolean 
  actionid:string
}
export interface action{
  id:any
  action:string 
  departmentId:any //assigns repsonsible 
  reportId:string //scout or other 
}
