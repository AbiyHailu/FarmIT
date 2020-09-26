
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
            { id: 1, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 80 },
            { id: 2, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 81 },
            { id: 3, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 40, rowNumberEnd: 50, amount: 55},
            { id: 4, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 65 },
            { id: 5, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 42 },
            { id: 6, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 50 },
            { id: 7, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 21 },
            { id: 8, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 70 },
            { id: 9, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/26/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 91 },
            { id: 10, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 47 },
            { id: 11, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27//2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 35},
            { id: 12, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27//2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 20 },
            { id: 13, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 80 },
            { id: 14, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 75 },
            { id: 15, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 24 },
            { id: 16, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 40 },
            { id: 17, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 38 },
            { id: 18, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/27/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 50 },
            { id: 19, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/28/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 42 },
            { id: 20, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/28/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 22 },
            { id: 21, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/28/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 34 },
            { id: 22, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/28/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 50 },
            { id: 23, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/29/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 35 },
            { id: 24, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/29/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 40 },
            { id: 25, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/30/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 44 },
            { id: 26, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/30/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 20 },
            { id: 27, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/30/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 50 },
            { id: 28, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/30/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 40 },
            { id: 29, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "08/11/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount:30 },
            { id: 30, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 40 },
            { id: 31, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 60 },
            { id: 32, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 50 },
            { id: 33, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 90 },
            { id: 34, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 40 },
            { id: 35, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/11/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 55 },
            { id: 36, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/10/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 34 },
            { id: 37, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/10/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 27 },
            { id: 38, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/10/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 55},
            { id: 39, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/10/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 52 },
            { id: 40, companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", createdDate: "09/10/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 66 }
        )
    }
 
    getScoutByCompanyId(companyid: string): Observable<Scout[]> {
        //return <Observable<any>>this.http.get("/api/user/" + id);
        return of(this.scout.filter(e => e.companyid == companyid))
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
    companyid: string
    ghid: string
    createdDate: string
    ghName: string
    pestId: string
    pestName: string
    rownumberStart: any
    rowNumberEnd: any
    amount: any// severity with %
}

