import { Component } from "@angular/core";
import { MockProduct } from "../mockBackend/mockProducts.service";
@Component({
    selector: 'ng-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent{

    constructor(private mockProducts: MockProduct){

    }
}