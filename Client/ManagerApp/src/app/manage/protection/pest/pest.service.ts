import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"

@Injectable({ providedIn: 'root' })
export class PestService {  
    constructor(
        private  http: HttpClient,
    ) {   } 
    
    getPestByCompanyId(companyId: string): Observable<Pest[]> { 
       return <Observable<any>>this.http.get("/api/pests/" + companyId); 
    }    
    
    addPest(pest: Pest) {
       return <any>this.http.post("/api/pests/", pest)
       .subscribe( res=>{
           console.log("res", res)
       }  )
    }

    updatePest(pest: Pest) {
        return <Observable<any>>this.http.put("/api/pests/"+pest.id, pest); 
    }
}

export class Pest {
    id: string
    name: string    
    companyid: string 
    description: string;  
    syptoms: string; 
    image:string  
}