import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { MaterialModules } from "../material/material.module";
@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        MaterialModules
    ],
    providers: [],
    exports: [
        FooterComponent
    ]
})

export class FooterModule {

}