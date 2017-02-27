import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';
@Pipe({
    name:'productFilter'
})
export class ProductFilerPipe implements PipeTransform{
    transform(products: IProduct[], filterBy: string): IProduct[]{
        filterBy=filterBy ? filterBy.toLowerCase(): null;
        return filterBy ? products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1) : products;
    }
}