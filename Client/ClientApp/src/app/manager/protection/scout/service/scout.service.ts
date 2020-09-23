
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScoutService {

    scout: Scout[] = []
    constructor(
        private _http: HttpClient,
    ) {
        this.scout.push(
            { id: 1, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"1", ghName: "GH1", pestId:"1", pestName:"Spider", rownumberStart:1,  rowNumberEnd:20,amount:20  },
            { id: 2, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",createdDate: "09/26/2020", ghid:"1", ghName: "GH1", pestId:"2", pestName:"Aphides", rownumberStart:10,  rowNumberEnd:25,amount:80  },
            { id: 3, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"3", ghName: "GH3", pestId:"3", pestName:"Thrips", rownumberStart:1,  rowNumberEnd:0,amount:50  },
            { id: 4, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",createdDate: "09/26/2020",  ghid:"3", ghName: "GH3", pestId:"31", pestName:"Thrips", rownumberStart:2,  rowNumberEnd:4,amount:60  }, 
            { id: 5, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"2", ghName: "GH2", pestId:"2", pestName:"Aphides", rownumberStart:6,  rowNumberEnd:6,amount:40  },
            { id: 6, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"2", ghName: "GH2", pestId:"1", pestName:"Spider", rownumberStart:6,  rowNumberEnd:0,amount:50  },
            { id: 7, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"4", ghName: "GH4", pestId:"1", pestName:"Spider", rownumberStart:10,  rowNumberEnd:15,amount:20  },
            { id: 8, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"5", ghName: "GH5", pestId:"1", pestName:"Spider", rownumberStart:4,  rowNumberEnd:23,amount:80  },
            { id: 9, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid:"6", ghName: "GH6", pestId:"2", pestName:"Aphides", rownumberStart:13,  rowNumberEnd:15,amount:90  },
            { id: 10, companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",createdDate: "09/26/2020", ghid:"6", ghName: "GH6", pestId:"1", pestName:"Spider", rownumberStart:21,  rowNumberEnd:22,amount:100  }
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

}
export class Scout {
    id: any
    companyid:string
    ghid: string
    createdDate: string
    ghName: string
    pestId: string
    pestName: string
    rownumberStart: any
    rowNumberEnd: any
    amount: any// severity with %
} 
 
