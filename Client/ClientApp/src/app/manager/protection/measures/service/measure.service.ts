
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({ providedIn: 'root' })
export class MeasuresService { 
    constructor(
        private _http: HttpClient,
    ) {
         
    }  
}
 
