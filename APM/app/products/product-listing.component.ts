import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IProduct} from './product';
import {ProductListingService} from './product-listing.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'product-list',
    moduleId: module.id,
    templateUrl: 'product-listing.component.html'
})
export class ProductListingComponent implements OnInit {
    private pageTitle: string = `Product List`;
    width: number = 40;
    height: number = 30;
    showHideButtonText: string='Show';
    showImage: boolean = true;
    
    private products: IProduct[]

    constructor(private _service: ProductListingService){

    }
    
    ngOnInit(): void {
        this._service.getProducts().subscribe(products => this.products=products);
    }

    showImageClick():void{
        this.showImage = !this.showImage;
        if(this.showImage){
            this.showHideButtonText='Hide';
        }
        else {
            this.showHideButtonText='Show';
        }
    }
}