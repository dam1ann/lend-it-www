import { NgModule } from "@angular/core";
import { MaterialModules } from "../material/material.module";
import { CartComponent } from "./cart.component";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[
        CartComponent
    ],
    imports:[
        MaterialModules,
        CommonModule
    ],
    providers:[],
    exports:[
        CartComponent
    ]
})

export class CartModule{

}