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
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", pestName: "SpiderMite", Type:"Mite"},
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", pestName: "Aphides", Type:"Insect"},
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", pestName: "Thrips", Type:"Insect"},
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", pestName: "Red SpiderMite", Type:"Mite"}
        )
    } 
    getPestByCompanyId(companyId: string): Observable<Pest[]> {
        return of(this.pests.filter(e => e.companyid == companyId))
    } 
}

export class Pest {
    id: string
    companyid: string 
    pestName: string  
    Type:string
    //itherdetails
}