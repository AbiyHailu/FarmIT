import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  constructor(
    private http: HttpClient  
  ) { }

  getSubscription(): Observable<Subscription[]> {
    return <Observable<any>>this.http.get("/api/subscriptions");
  }

  getSubscriptionById(id: any): Observable<Subscription> {
    return <Observable<any>>this.http.get("/api/subscriptions/" + id);
  }

  addSubscription(subscription: Subscription): Observable<any> {
    return <Observable<any>>this.http.post("/api/subscriptions", subscription);
  }

  editSubscription(subscription: Subscription): Observable<any> {
    return <Observable<any>>this.http.put("/api/subscriptions/" + subscription.id, subscription);
  }
}

export interface Subscription {
  id
}
