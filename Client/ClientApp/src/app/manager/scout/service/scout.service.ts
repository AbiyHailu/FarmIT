
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScoutService {

    scout: Scout[] = []
    gh:GH[]=[]
    constructor(
        private _http: HttpClient,
    ) {
        this.scout.push(
            { id: 1, ghid:"1", ghName: "GH1", pestId:"1", pestName:"Spider", rownumberStart:1,  rowNumberEnd:20,amount:20  },
            { id: 2, ghid:"1", ghName: "GH1", pestId:"2", pestName:"Aphides", rownumberStart:10,  rowNumberEnd:25,amount:80  },
            { id: 3, ghid:"3", ghName: "GH3", pestId:"3", pestName:"Thrips", rownumberStart:1,  rowNumberEnd:0,amount:50  },
            { id: 4, ghid:"3", ghName: "GH3", pestId:"31", pestName:"Thrips", rownumberStart:2,  rowNumberEnd:4,amount:60  }, 
            { id: 5, ghid:"2", ghName: "GH2", pestId:"2", pestName:"Aphides", rownumberStart:6,  rowNumberEnd:6,amount:40  },
            { id: 6, ghid:"2", ghName: "GH2", pestId:"1", pestName:"Spider", rownumberStart:6,  rowNumberEnd:0,amount:50  },
            { id: 7, ghid:"4", ghName: "GH4", pestId:"1", pestName:"Spider", rownumberStart:10,  rowNumberEnd:15,amount:20  },
            { id: 8, ghid:"5", ghName: "GH5", pestId:"1", pestName:"Spider", rownumberStart:4,  rowNumberEnd:23,amount:80  },
            { id: 9, ghid:"6", ghName: "GH6", pestId:"2", pestName:"Aphides", rownumberStart:13,  rowNumberEnd:15,amount:90  },
            { id: 10, ghid:"6", ghName: "GH6", pestId:"1", pestName:"Spider", rownumberStart:21,  rowNumberEnd:22,amount:100  }
        )
        this.gh.push(
            { id: 1, name: "GH1", size:20, unit:"ha" },
            { id: 2, name: "GH2", size:20, unit:"ha" },
            { id: 3, name: "GH3", size:20, unit:"ha" },
            { id: 4, name: "GH4", size:20, unit:"ha" }
        )
    }

    getScouts(): Observable<Scout[]> {
        return of(this.scout)
    }

    getScoutById(id: Scout): Observable<Scout> {
        //return <Observable<any>>this.http.get("/api/user/" + id);
        return of(this.scout.find(e=>e.id =="1"))
    }

    addScoutData(scout: Scout): Observable<any> {
        return of(this.scout.push(scout))
    }
    
    editScout(scout: Scout): Observable<any> {
        //return <Observable<any>>this.http.put("/api/user/" + user.userId, user);
        let scoutEdited = this.scout.find(e => e.id == "1")
        scoutEdited = scout;
        return of(scoutEdited);
    }

    getGHs(): Observable<any[]> {
        return of(this.gh)
    }
 

}
export class Scout {
    id: any
    ghid: string
    ghName: string
    pestId: string
    pestName: string
    rownumberStart: any
    rowNumberEnd: any
    amount: any// severity with %
} 
export class GH {
    id: any
    name: string
    size:number
    unit:string 
} 

