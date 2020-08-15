import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

  private data: any;
  private apiUrl = "/api/user/";
  token: any;
  username: any;

  constructor(
    private http: HttpClient
  ) {
 //  this.data = JSON.parse(localStorage.getItem('authToken'));
    console.log(this.data)
  //  this.token = this.data.token;
  }

  getUsers(): Observable<User[]> {
    return <Observable<any>>this.http.get(this.apiUrl);
  }

  getUserById(id: any): Observable<User> {
    return <Observable<any>>this.http.get("/api/user/" + id);
  }

  addSUser(usermodel: User): Observable<any> {
    //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //console.log(this.token)
    //headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    //return <Observable<any>><any>this.http.post<any>(this.apiUrl, usermodel, { headers: headers })
    //  .pipe(
    //    catchError(this.handleError)
    //)   .subscribe(res => {
    //      console.log(res)
    //  }) 
    return <Observable<any>><any>this.http.post("/api/user", usermodel)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      }) 
   
  } 
  editUser(user: User): Observable<any> {
    return <Observable<any>>this.http.put("/api/user/" + user.userId, user);
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}

export interface User {
  userId: any
  emailAddress: any
  phone: any
  firstName: string
  lastName: string
  password: string
}
