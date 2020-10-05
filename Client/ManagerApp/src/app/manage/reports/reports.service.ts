 import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' })
export class ReportsService {  
 reports: Report[] = [];
  constructor(
    private http: HttpClient
  ) {   
    let todo1 = { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", title: "test1", priority: "high", createdDate: "26/8/2020", department: "1", isRead: false, departmentName: "Store", description:"test1description" }
    let todo2 = { id: '2', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", title: "test2", priority: "high", createdDate: "26/8/2020", department: "3", isRead: false, departmentName: "Protection", description:"test2 description"  }
    let todo3 = { id: '3', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",title: "test3", priority: "low", createdDate: "25/8/2020", department: "4", isRead: false, departmentName: "Scout" , description:"test3 description" }
    let todo4 = { id: '4', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", title: "test4", priority: "medium", createdDate: "24/8/2020", department: "2", isRead: true, departmentName: "Fertigation" , description:"test4 description"  }
    let todo5 = { id: '5', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", title: "test5", priority: "low", createdDate: "24/8/2020", department: "1", isRead: false, departmentName: "Store", description:"test5 description" }
    let todo6 = { id: '6', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", title: "test6", priority: "medium", createdDate: "24/8/2020", department: "4", isRead: true, departmentName: "Scout" , description:"test6 description" }
    this.reports.push(todo1, todo2, todo3, todo4, todo5, todo6)
  }
 
  getReportsByCompanyId(companyid: any): Observable<Report[]> {
    //return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.reports.filter(e=>e.companyid = companyid))
  }
   
  editReport(report: Report): Observable<any> {
    return <Observable<any>>this.http.put("/api/reports/" + report.id, report);
  }  
}

export class Report {
  id: any
  companyid:string
  title: string
  priority: string //enum - high medium low
  createdDate: any
  department: string
  isRead: boolean;
  departmentName: string;
  description:string
} 
