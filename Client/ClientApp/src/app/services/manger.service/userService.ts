import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return <Observable<any>>this.http.get("/api/user");
  }

  getUserById(id: any): Observable<User> {
    return <Observable<any>>this.http.get("/api/user/" + id);
  }

  addSUser(user: User): Observable<any> {

    console.log('userttwr', user) 
    return <Observable<any>>this.http.post("/api/user", user);
  }
   

  editUser(user: User): Observable<any> {
    return <Observable<any>>this.http.put("/api/user/" + user.userId, user);
  }
}

export interface User {
  userId: any
  emailAddress: any
  phone: any
  firstName: string
  lastName: string
  password: string
}
