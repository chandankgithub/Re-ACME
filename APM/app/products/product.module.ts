import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductListingService } from './product-listing.service';
import { ProductFilerPipe } from './product-filter.pipe';

import { ProductListingComponent } from './product-listing.component'
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListingComponent }
        ]),
        FormsModule
    ],
    exports: [RouterModule],
    declarations: [ProductListingComponent, ProductFilerPipe],
    providers: [ProductListingService],
    bootstrap: []
})
export class ProductModule {

}
