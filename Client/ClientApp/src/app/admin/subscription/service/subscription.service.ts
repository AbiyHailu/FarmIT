import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  constructor(
    private http: HttpClient  
  ) { }

  getSubscription(): Observable<Subscription[]> {
    return <Observable<any>>this.http.get("/api/subscription");
  }

  getSubscriptionById(id: any): Observable<Subscription> {
    return <Observable<any>>this.http.get("/api/subscription/" + id);
  }

  getSubscriptionByCompnyId(id: any): Observable<Subscription> {
    return <Observable<any>>this.http.get("/api/subscription/", id);
  }

  addSubscription(subscription: Subscription): Observable<any> {
    return <Observable<any>>this.http.post("/api/subscription", subscription);
  }

  editSubscription(subscription: Subscription): Observable<any> {
    return <Observable<any>>this.http.put("/api/subscription/" + subscription.id, subscription);
  }
}

export interface Subscription {
  id
}
