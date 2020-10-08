import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { JwtDecodeService } from './jwtdecode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MethodesService {

  constructor(
    private jwtDecoder: JwtDecodeService,
    private datePipe: DatePipe
  ) {
  }

  checkUser() {
    return this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'))
  }

  checkCompany() {
    return localStorage.getItem('userDetail')
  }

  preparePlnas(planName: any) {
    if (planName.toLowerCase() == 'protection') {
      return { plan: 'Protection', items: ["Scout", "Measures", "Pest"] }
    } else if (planName.toLowerCase() == 'store') {
      return { plan: 'Store', items: ["Product", "Active Ingredient", "Inventory", "Issued", "Recieved"] }
    }
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
    })
    return buildItems
  }

  //get expired in days
  getExpiredinDays(array: any, days: number) {
    let newArray = []
    let now = new Date();
    let date1 = now.getTime()
    let date2 = new Date(now.setDate(now.getDate() + days)).getTime()
    array.forEach(e => {
      let actual = new Date(e.expiredDate).getTime()
      if (actual > date1 && actual < date2)
        newArray.push(e)
    });
    return newArray;
  }

  //get stock alerts in days
  getStockAlerts(array: any, amt: number) {
    let newArray = []
    array.forEach(e => {
      if (parseFloat(e.amount) < amt)
        newArray.push(e)
    });
    return newArray;
  }

  getFirstRecords(array: string | any[], size: any) {
    return array.slice(0, size)
  }

  /* convertTime(time: any) {
   // let date = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
  
   let createdDate = new Date("09/20/2020").getTime()
    if(time.toLowerCase()=="week"){ 
      let date  = new Date().getTime() - 7 * 24 * 60 * 60 * 1000
      console.log(date > createdDate) 
    }
  } */

  selectedTime(time) {
    if (time.toLowerCase() == "week") {
      return new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    } else if (time.toLowerCase() == "2 weeks") {
      return new Date().getTime() - 14 * 24 * 60 * 60 * 1000
    } else if (time.toLowerCase() == "3 weeks") {
      return new Date().getTime() - 21 * 24 * 60 * 60 * 1000
    } else if (time.toLowerCase() == "month") {
      return new Date().getTime() - 30 * 24 * 60 * 60 * 1000
    } else {
      return new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    }
  }

  convertTime(time) {
    return new Date(time).getTime()
  }

  weightedAverage(rowStart: number, rowEnd: number, totalrow: number) {
    let x = (((rowEnd - rowStart) * 100) / totalrow) / 100
    return x
  }

  prepareLineChartData(dataArray: any[]) {
    let data = []
    dataArray.forEach(e => {
      data.push(e.weightAmount)
    })
    return data
  }

  prepareLineeChartLabels(dataArray: any[]) {
    let data = []
    dataArray.forEach(e => {
      data.push(e.date)
    })
    return data
  }

  //getNav Property to expand child elements 
  extractNavProperty(str: string) {
    let index: number
    let item: string
    let plan: string
    if (str && str.includes("/")) {
      if (str.includes("store")) {
        let store = ["product", "activeingredient", "inventory", "issued", "recieved"]
        let last = str.split("/");
        if (last.length == 4)
          item = last[last.length - 1]
        index = store.findIndex(x => x === item);
        plan = "store"
      } else if (str.includes("protection")) {
        let protection = ["scout", "measures", "pest"]
        let last = str.split("/");
        if (last.length == 4)
          item = last[last.length - 1]
        index = protection.findIndex(x => x === item);
        plan = "protection"
      } else if (str.includes("profile")) {
        let profile = ["Farm", "Greenhouse", "Plant", "Plantings"]
        let last = str.split("/");
        if (last.length == 4)
          item = last[last.length - 1]
        index = profile.findIndex(x => x === item);
        plan = "profile"
      }
    }
    return { index: index, plan: plan, item: item }
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
