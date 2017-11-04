import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { MaterialModules } from "../material/material.module";
import { MockProduct } from "../mockBackend/mockProducts.service";

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports:[
        MaterialModules
    ],
    providers:[
        MockProduct
    ],
    exports:[]
})

export class ProductModule{

}