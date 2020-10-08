
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScoutService {

    scout: Scout[] = []
    generalMeasures: GeneralMeasures[] = []
    scoutMeasures:ScoutMeasures[]=[]
    constructor(
        private _http: HttpClient,
    ) {
        this.scout.push(
            { id: "1", companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 80 },
            { id: '2', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 81 },
            { id: '3', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 40, rowNumberEnd: 50, amount: 55 },
            { id: '4', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 65 },
            { id: '5', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 42 },
            { id: '6', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 50 },
            { id: '7', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 21 },
            { id: '8', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 70 },
            { id: '9', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 91 },
            { id: '10', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 47 },
            { id: '11', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27//2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 35 },
            { id: '12', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27//2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 20 },
            { id: '13', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 80 },
            { id: '14' ,companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 75 },
            { id: '15', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 24 },
            { id: '16', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 40 },
            { id: '17', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 38 },
            { id: '18', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/27/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 50 },
            { id: '19', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/28/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 42 },
            { id: '20', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/28/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 22 },
            { id: '21', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/28/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 34 },
            { id: '22', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/28/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 50 },
            { id: '23', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/29/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 35 },
            { id: '24', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/29/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 40 },
            { id: '25', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/30/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 44 },
            { id: '26', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/30/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 20 },
            { id: '27', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/30/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 50 },
            { id: '28', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/30/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 40 },
            { id: '29', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "08/11/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 30 },
            { id: '30', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 40 },
            { id: '31', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "1", ghName: "GH1", pestId: "1", pestName: "Spider", rownumberStart: 1, rowNumberEnd: 20, amount: 60 },
            { id: '32', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "1", ghName: "GH1", pestId: "2", pestName: "Aphides", rownumberStart: 10, rowNumberEnd: 25, amount: 50 },
            { id: '33', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 1, rowNumberEnd: 0, amount: 90 },
            { id: '34', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "3", ghName: "GH3", pestId: "3", pestName: "Thrips", rownumberStart: 2, rowNumberEnd: 4, amount: 40 },
            { id: '35', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/11/2020", ghid: "2", ghName: "GH2", pestId: "2", pestName: "Aphides", rownumberStart: 6, rowNumberEnd: 6, amount: 55 },
            { id: '36', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/10/2020", ghid: "2", ghName: "GH2", pestId: "1", pestName: "Spider", rownumberStart: 6, rowNumberEnd: 0, amount: 34 },
            { id: '37', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/10/2020", ghid: "4", ghName: "GH4", pestId: "1", pestName: "Spider", rownumberStart: 10, rowNumberEnd: 15, amount: 27 },
            { id: '38', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/10/2020", ghid: "5", ghName: "GH5", pestId: "1", pestName: "Spider", rownumberStart: 4, rowNumberEnd: 23, amount: 55 },
            { id: '39', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/10/2020", ghid: "6", ghName: "GH6", pestId: "2", pestName: "Aphides", rownumberStart: 13, rowNumberEnd: 15, amount: 52 },
            { id: '40', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/10/2020", ghid: "6", ghName: "GH6", pestId: "1", pestName: "Spider", rownumberStart: 21, rowNumberEnd: 22, amount: 66 }
        )

        this.generalMeasures.push(
            { id: '1', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", action: "Spray Pesticide", actionDate: "09/26/2020", isCompleted: false, comment: "Preventative action" },
            { id: '2', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "2", ghName: "GH2", action: "Spray Pesticide", actionDate: "10/26/2020", isCompleted: true, comment: "Preventative action" },
            { id: '3', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "4", ghName: "GH4", action: "Spray Pesticide", actionDate: "11/26/2020", isCompleted: false, comment: "Preventative action" },
            { id: '4', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "1", ghName: "GH1", action: "thinning", actionDate: "09/30/2020", isCompleted: true, comment: "Preventative action" },
            { id: '5', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "6", ghName: "GH6", action: "Spray Pesticide", actionDate: "09/06/2020", isCompleted: false, comment: "Preventative action" },
            { id: '6', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", createdDate: "09/26/2020", ghid: "7", ghName: "GH7", action: "cleaning", actionDate: "09/26/2020", isCompleted: false, comment: "Preventative action" },
        )

        this.scoutMeasures.push(
            { id: '1', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'1', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: false, comment: "spray action" },
            { id: '2', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'2', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: false, comment: "spray action" },
            { id: '3', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'3', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: true, comment: "spray action" },
            { id: '4', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'4', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: false, comment: "spray action" },
            { id: '5', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'5', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: false, comment: "spray action" },
            { id: '6', companyid: "c0bc9d2d-856e-4821-cc8b-08d867999975", scoutid :'6', createdDate: "09/26/2020", action: "Spray Pesticide", actionDate: "09/30/2020", isCompleted: false, comment: "spray action" },
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

    getGeneralMeasures(companyid: string): Observable<GeneralMeasures[]> {
        //return <Observable<any>>this.http.get("/api/user/" + id);
        return of(this.generalMeasures.filter(e => e.companyid == companyid))
    }

    getScoutMeasures(companyid: string): Observable<ScoutMeasures[]> {
        //return <Observable<any>>this.http.get("/api/user/" + id);
        return of(this.scoutMeasures.filter(e => e.companyid == companyid))
    }

    createGeneralMeasures(generalMeasure){
        return of(this.generalMeasures.push(generalMeasure))
    }
 
    createScoutMeasures(scoutmeasure: ScoutMeasures){
        console.log("scoutmeasure", scoutmeasure)
        return of(this.scoutMeasures.push(scoutmeasure)) 
    }

}
export class Scout {
    id: string
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
export class GeneralMeasures {
    id: string
    companyid: string
    ghid: string
    createdDate: string
    ghName: string
    action: string
    actionDate: string
    isCompleted: boolean
    comment: string
}
export class ScoutMeasures {
    id: string
    companyid: string
    scoutid: string
    createdDate: string
    action: string
    actionDate: string
    isCompleted: boolean
    comment:string
}


