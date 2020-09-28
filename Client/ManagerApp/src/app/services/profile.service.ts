
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    farm: Farm[] = []
    gh: GH[] = []
    plants: Plant[] = []
    ghPlants: GHPlant[] = [] 

    constructor(
        private _http: HttpClient,
    ) {
        this.farm.push(
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "Farm1", latittude: 9.449062, longitude: 39.291354, areaName: "x", country: "Eth", totalSize: "20ha"  }
        )

        this.gh.push(
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "GH1", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: "2", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "GH2", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: "3", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "GH3", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: "4", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "GH4", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '5', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "GH5", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '6', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "GH6", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '7', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "GH7", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '8', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "GH8", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '9', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "GH9", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
            { id: '10', companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "GH10", type: "GreenHouse", length: 500, width: 10, size: 0.5, unit: "ha", rows: 250 },
        )
        this.plants.push(
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt1", varity: "a" },
            { id: "2", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt2", varity: "b" },
            { id: "3", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt3", varity: "c" },
            { id: "4", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt4", varity: "d" },
            { id: "5", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt5", varity: "e" },
            { id: "6", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt6", varity: "f" },
            { id: "7", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt7", varity: "g" },
            { id: "8", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt8", varity: "h" },
            { id: "9", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "plt9", varity: "i" },
            { id: "10", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",name: "pl10", varity: "j" },
        )
        this.ghPlants.push(
            { id: "1", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "1", plantName: "plt1", ghId: "1", ghName: "GH1", numberPlanted: 250, haPlanted: 0.5, datePlanted: "12/09/2019", dateCleared: "12/09/24" },
            { id: "2", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "2", plantName: "plt2", ghId: "2", ghName: "GH2", numberPlanted: 250, haPlanted: 0.5, datePlanted: "12/09/2018", dateCleared: "12/09/23" },
            { id: "3", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", plantId: "3", plantName: "plt3", ghId: "3", ghName: "GH3", numberPlanted: 250, haPlanted: 0.25, datePlanted: "12/09/2017", dateCleared: "12/09/22" },
            { id: "4", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "4", plantName: "plt4", ghId: "3", ghName: "GH3", numberPlanted: 300, haPlanted: 0.25, datePlanted: "12/09/2017", dateCleared: "12/09/22" },
            { id: "5", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "4", plantName: "plt4", ghId: "4", ghName: "GH4", numberPlanted: 300, haPlanted: 0.25, datePlanted: "12/09/2017", dateCleared: "12/09/22" },
            { id: "6", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", plantId: "5", plantName: "plt5", ghId: "4", ghName: "GH4", numberPlanted: 250, haPlanted: 0.25, datePlanted: "12/09/2016", dateCleared: "12/09/21" },
            { id: "7", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "6", plantName: "plt6", ghId: "5", ghName: "GH5", numberPlanted: 250, haPlanted: 0.25, datePlanted: "12/09/2015", dateCleared: "12/09/20" },
            { id: "8", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9", plantId: "7", plantName: "plt7", ghId: "5", ghName: "GH5", numberPlanted: 250, haPlanted: 0.25, datePlanted: "12/09/2015", dateCleared: "12/09/20" },
            { id: "9", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "8", plantName: "plt8", ghId: "6", ghName: "GH6", numberPlanted: 500, haPlanted: 0.5, datePlanted: "12/09/2016", dateCleared: "12/09/21" },
            { id: "10", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "8", plantName: "plt8", ghId: "7", ghName: "GH7", numberPlanted: 600, haPlanted: 0.5, datePlanted: "12/09/2017", dateCleared: "12/09/22" },
            { id: "11", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "10", plantName: "plt10", ghId: "8", ghName: "GH8", numberPlanted: 450, haPlanted: 0.5, datePlanted: "12/09/2018", dateCleared: "12/09/23" },
            { id: "12", companyid:"53dd7524-3129-4a9e-4886-08d82c28e2a9",plantId: "9", plantName: "plt9", ghId: "8", ghName: "GH8", numberPlanted: 500, haPlanted: 0.5, datePlanted: "12/09/2019", dateCleared: "12/09/24" },
        )
    }

    editFarmProfile(result: any) {
        throw new Error('Method not implemented.');
    }

    getFarm(): Observable<Farm[]> {
        return of(this.farm)
    }

    getGHs(): Observable<any[]> {
        return of(this.gh)
    }

    getGHByCompanyId(companyId: string): Observable<GH[]> {
        return of(this.gh.filter(e => e.companyid == companyId))
    }
    
    getPlants(): Observable<any[]> {
        return of(this.plants)
    }
    getGHPlants(): Observable<any[]> {
        return of(this.ghPlants)
    }

}

export class Farm {
    id: string
    companyid: string
    name: string
    areaName: string
    country: string
    longitude: number
    latittude: number
    totalSize: string 
}

export class GH {
    id: string
    companyid: string
    name: string
    length: number
    width: number
    size: number
    unit: string
    rows: number
    type: string
} 

export class Plant {
    id: string
    companyid: string
    name: string
    varity: string
}

export class GHPlant {
    id: string
    companyid: string
    plantId: string
    plantName: string
    ghId: string
    ghName: string
    numberPlanted: number
    haPlanted: number
    datePlanted: string
    dateCleared: string
}



