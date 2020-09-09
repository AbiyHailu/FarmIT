import { Observable,  of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' })
export class UserService { 

  private apiUrl = "/api/user/"; 
  user:User[]=[]

  constructor(
    private http: HttpClient
  ) {
     this.user.push( 
      {userId:"1", emailAddress:"abiy1@a.aa", phone:"1234567", firstName:"Abiy1", lastName:"sahle", password:"1234567", permission:"Scout", isActive:"Active"},
      {userId:"1", emailAddress:"abiy2@a.aa", phone:"1234567", firstName:"Abiy2", lastName:"sahle", password:"1234567", permission:"Store", isActive:"Active"}, 
      {userId:"1", emailAddress:"abiy3@a.aa", phone:"1234567", firstName:"Abiy3", lastName:"sahle", password:"1234567", permission:"Protection, Scout",isActive:"Active"}, 
      {userId:"1", emailAddress:"abiy4@a.aa", phone:"1234567", firstName:"Abiy4", lastName:"sahle", password:"1234567", permission:"Scout", isActive:"Active"},  
      {userId:"1", emailAddress:"abiy5@a.aa", phone:"1234567", firstName:"Abiy5", lastName:"sahle", password:"1234567", permission:"Scout", isActive:"Active"}
     )
  }

  getUsers(): Observable<User[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.user)
  }

  getUserById(id: any): Observable<User> {
    //return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.user.find(e=>e.userId =="1"))
  }

  addSUser(usermodel: User): Observable<any> {
    /* return <Observable<any>><any>this.http.post("/api/user", usermodel)
      //.pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      })  */ 
     return of(this.user.push(usermodel)) 
  } 

  editUser(user: User): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user);
    let userEdited = this.user.find(e => e.userId == "1")
    userEdited = user;
    return of(userEdited); 
  }  
}

export interface User {
  userId: any
  emailAddress: any
  phone: any
  firstName: string
  lastName: string
  password: string
  permission:string
  isActive:string
}
