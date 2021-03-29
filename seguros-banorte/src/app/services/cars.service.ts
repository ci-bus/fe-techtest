import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(
        private http: HttpClient
    ) { }

    getCarBrands (): Observable<any> {
        return this.http.get('http://localhost:3000/carbrands');
    }

    getCarModels (carId:String): Observable<any> {
        return this.http.get('http://localhost:3000/carmodels/' + carId);
    }
}
