
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    farm: Farm[] = [] 
    gh:GH[]=[]
    plants:Plant[]=[]
    ghPlants:GHPlant[]=[]
    constructor(
        private _http: HttpClient,
    ) {
        this.farm.push(
            { id: "1", name: "Farm1",  setupCompleted:false }
        ) 

        this.gh.push(
            { id: "1", name: "GH1", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: "2", name: "GH2", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: "3", name: "GH3", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: "4", name: "GH4", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '5', name: "GH5", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '6', name: "GH6", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '7', name: "GH7", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '8', name: "GH8", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '9', name: "GH9", length:500, width:10, size:0.5, unit:"ha", rows:250  },
            { id: '10', name: "GH10", length:500, width:10, size:0.5, unit:"ha", rows:250  },
        )
        this.plants.push(
            { id: "1", name: "plt1", varity:"a" },
            { id: "2", name: "plt2", varity:"b" },
            { id: "3", name: "plt3", varity:"c" },
            { id: "4", name: "plt4", varity:"d" },
            { id: "5", name: "plt5", varity:"e" },
            { id: "6", name: "plt6", varity:"f" },
            { id: "7", name: "plt7", varity:"g" },
            { id: "8", name: "plt8", varity:"h" },
            { id: "9", name: "plt9", varity:"i" },
            { id: "10", name: "pl10", varity:"j" }, 
        )

        this.plants.push(
            { id: "1", name: "plt1", varity:"a" },
            { id: "2", name: "plt2", varity:"b" },
            { id: "3", name: "plt3", varity:"c" },
            { id: "4", name: "plt4", varity:"d" },
            { id: "5", name: "plt5", varity:"e" },
            { id: "6", name: "plt6", varity:"f" },
            { id: "7", name: "plt7", varity:"g" },
            { id: "8", name: "plt8", varity:"h" },
            { id: "9", name: "plt9", varity:"i" },
            { id: "10", name: "pl10", varity:"j" }, 
        )

        this.ghPlants.push(
            { id: "1", plantId: "1", ghId:"1", numberPlanted:250, haPlanted:0.5, datePlanted:"12/09/2019", dateCleared:"12/09/24" },
            { id: "2", plantId: "2", ghId:"2", numberPlanted:250, haPlanted:0.5, datePlanted:"12/09/2018", dateCleared:"12/09/23"  },
            { id: "3", plantId: "3", ghId:"3", numberPlanted:250, haPlanted:0.25, datePlanted:"12/09/2017", dateCleared:"12/09/22"  },
            { id: "4", plantId: "4", ghId:"3", numberPlanted:300, haPlanted:0.25, datePlanted:"12/09/2017", dateCleared:"12/09/22"  },
            { id: "5", plantId: "4", ghId:"4", numberPlanted:300, haPlanted:0.25, datePlanted:"12/09/2017", dateCleared:"12/09/22"  },
            { id: "6", plantId: "5", ghId:"4", numberPlanted:250, haPlanted:0.25, datePlanted:"12/09/2016", dateCleared:"12/09/21"  },
            { id: "7", plantId: "6", ghId:"5", numberPlanted:250, haPlanted:0.25, datePlanted:"12/09/2015", dateCleared:"12/09/20"  },
            { id: "8", plantId: "7", ghId:"5", numberPlanted:250, haPlanted:0.25, datePlanted:"12/09/2015", dateCleared:"12/09/20"  },
            { id: "9", plantId: "8", ghId:"6", numberPlanted:500, haPlanted:0.5, datePlanted:"12/09/2016", dateCleared:"12/09/21"  },
            { id: "10", plantId: "8", ghId:"7", numberPlanted:600, haPlanted:0.5, datePlanted:"12/09/2017", dateCleared:"12/09/22"  },
            { id: "11", plantId: "10", ghId:"8", numberPlanted:450, haPlanted:0.5, datePlanted:"12/09/2018", dateCleared:"12/09/23"  },
            { id: "12", plantId: "9", ghId:"8", numberPlanted:500, haPlanted:0.5, datePlanted:"12/09/2019", dateCleared:"12/09/24"  }, 
        )
    }

    getFarm( ): Observable<Farm[]> { 
        return of(this.farm)
    }

    getGHs(): Observable<any[]> {
        return of(this.gh)
    }
 
    getGHById( id:string ): Observable<GH> { 
        return of(this.gh.find(e=>e.id ==id))
    } 
}

export class Farm {
    id: string
    name: string 
    setupCompleted:boolean
}

export class GH {
    id: string
    name: string
    length:number
    width:number 
    size:number
    unit:string 
    rows:number
} 

export class Plant {
    id: string
    name: string
    varity:string 
} 

export class GHPlant{ 
    id:string
    plantId:string
    ghId:string
    numberPlanted:number
    haPlanted:number
    datePlanted:string
    dateCleared:string 
}
