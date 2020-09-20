import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SettingService {
  
  expAlertSetting:ExpAlertSetting[]=[]
  stockAlertSetting:StockAlertSetting[]=[]
  constructor(
    private http: HttpClient
  ) { 

   this.expAlertSetting.push( { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9",  daysLeft: 10 })
   this.stockAlertSetting.push( { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9",  amountLeft: 10})

  }
 
  getExpAlertSettingCId(cid): Observable<ExpAlertSetting[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.expAlertSetting);
  } 

  getStockAlertSettingCId(cid): Observable<StockAlertSetting[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.stockAlertSetting);
  }

  editExpAlertSetting(expAlertSetting: ExpAlertSetting): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let expEdited = this.expAlertSetting.find(e => e.companyid == "53dd7524-3129-4a9e-4886-08d82c28e2a9")
    expEdited = expAlertSetting;
    return of(expEdited);
  } 

   editStockAlertSetting(stockAAlertSetting: StockAlertSetting): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let stockEdited = this.stockAlertSetting.find(e => e.id == "53dd7524-3129-4a9e-4886-08d82c28e2a9")
    stockEdited = stockAAlertSetting;
    return of(stockEdited);
  } 
}
 
export interface ExpAlertSetting {
  id: string;
  companyid:string
  daysLeft:number
}

export interface StockAlertSetting {
  id: string 
  companyid:string
  amountLeft: number  
}