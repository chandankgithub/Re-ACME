import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IProduct} from './product';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Injectable()
export class ProductListingService{
    private productUrl : string = '/api/products/products.json';

    constructor(private _http: Http){

    }
    getProducts(): Observable<IProduct[]>{
        
        return this._http.get(this.productUrl)
        .map((response: Response) => <IProduct[]> response.json())
        .do((data) => console.log(JSON.stringify(data)))
        .catch(this.errorHandler)
    };

    errorHandler(error: Response){
        return Observable.throw(error.json().error)
    }
}