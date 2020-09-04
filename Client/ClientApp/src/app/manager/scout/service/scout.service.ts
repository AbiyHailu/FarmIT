
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs'; 
import { Scout } from '../scout.component';

@Injectable({ providedIn: 'root' })
export class ScoutService {
    constructor(
        private _http: HttpClient, 
    ) {   }
 
    getScouts( ): Observable<Scout[]> { 
      return of()
    }

    getGHs( ): Observable<any[]> { 
        return of( [
            { id: 1, name: "GH1" },
            { id: 2, name: "GH2" },
            { id: 3, name: "GH3" },
            { id: 4, name: "GH4" }
          ])
      }
   
    addScoutData(changeNameLicenseModel: any, id: string): any { 
        return of()
    }
} 
