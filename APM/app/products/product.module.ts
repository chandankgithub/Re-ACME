import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductListingService} from './product-listing.service';

import {ProductListingComponent} from './product-listing.component'
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'products', component: ProductListingComponent}
        ])
    ],
    exports:[RouterModule],
    declarations:[ProductListingComponent],
    providers:[ProductListingService],
    bootstrap:[]
})
export class ProductModule{

}
