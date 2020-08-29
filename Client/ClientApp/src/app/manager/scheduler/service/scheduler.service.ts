
import { Observable,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' })
export class SchedulerService {
  schedules:Schedule[]=[];  
  constructor(
    private http: HttpClient
  ) {
    let todo1 = { id: 1, title: "test1", priority: "high", createdDate: "26/8/2020", complitionDate: "27/8/2020", status: "completed", actionid: "1", department: "1" }
    let todo2 = { id: 2, title: "test2", priority: "high", createdDate: "26/8/2020", complitionDate: "27/8/2020", status: "completed", actionid: "2", department: "1" }
    let todo3 = { id: 3, title: "test3", priority: "low", createdDate: "25/8/2020", complitionDate: "26/8/2020", status: "Not completed", actionid: "10", department: "2" }
    let todo4 = { id: 4, title: "test4", priority: "medium", createdDate: "24/8/2020", complitionDate: "26/8/2020", status: "canceled", actionid: "11", department: "2" }
    let todo5 = { id: 5, title: "test5", priority: "low", createdDate: "24/8/2020", complitionDate: "27/8/2020", status: "Not completed", actionid: "12", department: "3" }
    let todo6 = { id: 6, title: "test6", priority: "medium", createdDate: "24/8/2020", complitionDate: "25/8/2020", status: "completed", actionid: "13", department: "3" }

    this.schedules.push(todo1, todo2, todo3, todo4, todo5, todo6) 
  }

  getSchedules(): Observable<Schedule[]> {
    // return <Observable<any>>this.http.get(this.apiUrl);  
    return of(this.schedules)
  }

  getScheduleById(id: any): Observable<Schedule> {
    //return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.schedules.find(e => e.id = id))
  }

  editSchedule(report: Schedule): Observable<any> {
    return <Observable<any>>this.http.put("/api/schedules/" + report.id, report);
  }
} 
export class Schedule {
  id: any
  title: string
  priority: string //enum - high medium low
  createdDate: any
  complitionDate: any
  status: string
  actionid: string
}
export interface action {
  id: any
  action: string
  departmentId: any //assigns repsonsible 
  reportId: string //scout or other 
}
