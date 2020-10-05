import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"

@Injectable({ providedIn: 'root' })
export class PestService {
 

    pests: Pest[] = [] 
    constructor(
        private _http: HttpClient,
    ) {
        this.pests.push(
            { id: "1", companyid:"c0bc9d2d-856e-4821-cc8b-08d867999975", pestName: "SpiderMite", type:"Mite"},
            { id: "1", companyid:"c0bc9d2d-856e-4821-cc8b-08d867999975", pestName: "Aphides", type:"Insect"},
            { id: "1", companyid:"c0bc9d2d-856e-4821-cc8b-08d867999975", pestName: "Thrips", type:"Insect"},
            { id: "1", companyid:"c0bc9d2d-856e-4821-cc8b-08d867999975", pestName: "Red SpiderMite", type:"Mite"}
        )
    } 
    
    getPestByCompanyId(companyId: string): Observable<Pest[]> {
        return of(this.pests.filter(e => e.companyid == companyId))
    }    
    
    addPest(result: any) {
      throw new Error('Method not implemented.')
    }
}

export class Pest {
    id: string
    companyid: string 
    pestName: string  
    type:string
    //itherdetails
}