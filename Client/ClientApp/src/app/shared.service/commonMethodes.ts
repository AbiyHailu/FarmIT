import { Injectable } from '@angular/core';
import { JwtDecodeService } from '../shared.service/jwtdecoder.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonMethedsService {


  constructor(
    private jwtDecoder: JwtDecodeService,
  ) {

  }
  checkUser() {
    return this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'))
  }
  checkCompany() {
    return localStorage.getItem('userDetail')
  }
  editTitlestring(sortvalue: string) {
    let sortTitle
    let str = sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[0]
    let str1 = sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[1]
    let str2 = sortvalue.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)[2]
    if (str && str1 && str2) {
      sortTitle = str[0].toUpperCase() + str.slice(1) + ' ' + str1[1].toUpperCase() + str1.slice(1) + ' ' + str2[0].toUpperCase() + str2.slice(1)
    } else if (str && str1) {
      sortTitle = str[0].toUpperCase() + str.slice(1) + ' ' + str1[1].toUpperCase() + str1.slice(1)
    } else {
      sortTitle = sortvalue[0].toUpperCase() + sortvalue.slice(1)
    }
    return sortTitle;
  }

  //assign  values to  edited item
  assignEditValues(buildItems: any, editedItem: any) {
    buildItems.forEach(e => {
      e.Value = editedItem[e.Binding]
    }
    )
    return buildItems
  }
  //get expired in tendays
  getExpiredintenDays(array:any) {
    let newArray=[]
    let now = new Date();
    let date1= now.getTime()
    let date2 =new Date(now.setDate(now.getDate() + 10 )).getTime() 
    console.log("date1", date1)
    console.log("date2", date2)
   array.forEach(e => {
      let actual = new Date(e.expiredDate).getTime()
      console.log(actual)
      
      if (actual > date1 && actual < date2)
        newArray.push(e) 
    });
    return newArray;
  }

  handleError(error: HttpErrorResponse) {
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
