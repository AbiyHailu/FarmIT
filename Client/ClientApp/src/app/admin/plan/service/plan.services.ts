import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PlanService {
  constructor(
    private http: HttpClient
  ) { }

  getPlans(): Observable<Plan[]> {
    return <Observable<any>>this.http.get("/api/plans");
  }

  getPlanById(id: any): Observable<Plan> {
    return <Observable<any>>this.http.get("/api/plans/" + id);
  }

  addSPlan(plan: Plan): Observable<any> {
    return <Observable<any>>this.http.post("/api/plans", plan);
  }

  editPlan(plan: Plan): Observable<any> {
    return <Observable<any>>this.http.put("/api/plans/" + plan.id, plan);
  }
}

export interface Plan {
  id: any;
  planName:any
}
