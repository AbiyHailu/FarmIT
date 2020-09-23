
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PestService {
    pests: Pest[] = []
    constructor(
        private _http: HttpClient,
    ) {
        this.pests.push(
            { id: "1", name: "P1" },
            { id: "2", name: "P2" },
            { id: "3", name: "P3" },
            { id: "4", name: "P4" }
        ) 
    }

    getPests( ): Observable<Pest[]> { 
        return of(this.pests)
    }
    
    getPestById( id:string ): Observable<Pest> { 
        return of(this.pests.find(e=>e.id ==id))
    }
   
    addPest(pest: Pest ): any {
        return of()
    }
}
export class Pest {
    id: string
    name: string
    ///other
}
