import { NgModule } from "@angular/core";
import { MaterialModules } from "../material/material.module";
import { CartComponent } from "./cart.component";
@NgModule({
    declarations:[
        CartComponent
    ],
    imports:[
        MaterialModules
    ],
    providers:[],
    exports:[
        CartComponent
    ]
})

export class CartModule{

}