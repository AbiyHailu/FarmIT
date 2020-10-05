import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SettingService {

  expAlertSetting:ExpAlertSetting[]=[]
  stockAlertSetting:StockAlertSetting[]=[]
  thresh:ThresholdLevelSetting[]=[]
  constructor(
    private http: HttpClient
  ) { 

   this.expAlertSetting.push( { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9",  daysLeft: 10 })
   this.stockAlertSetting.push( { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9",  amountLeft: 10})
   this.thresh.push(
     {id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", pestId:"1", economic:30, damage:50 },
     {id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", pestId:"2", economic:20, damage:40 },
     {id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", pestId:"3", economic:30, damage:60 },
     {id: "4", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", pestId:"4", economic:10, damage:30 },
     )
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

  getThresholdlevelSetting(id:string){
    return of(this.thresh.filter(e=>e.companyid ==id)); 
  }
  editThreshold(result: any) {
   let edited = this.thresh.find(e=>e.id ==result.id)
   edited =result
    return of(edited); 
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

export interface ThresholdLevelSetting {
  id: string 
  companyid:string
  pestId:string
  economic: number  
  damage: number  
}