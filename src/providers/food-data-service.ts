import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { LocalStorageService } from './local-storage-service';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from './rest-response';
import { Food } from '../model/food';



@Injectable()
export class FoodDataService {

    private url = "https://api.nal.usda.gov/ndb/reports/?type=f&format=json&api_key=AIzaSyDTTeZF65x9Qf6KLj_09UAagivXNUsIvqk&ndbno=";

    constructor(private http: HttpClient) { }

    serch(query: string) : Promise<Food> {
        return new Observable<Food>((observer) => {
            this.http.get<RestResponse>(this.url + query).subscribe(res => {
                observer.next(res.report.food);
                observer.complete();
            })
        }).toPromise();
    }

}