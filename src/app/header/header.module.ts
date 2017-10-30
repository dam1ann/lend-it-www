import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MaterialModules } from "../material/material.module";
import { UIRouterModule } from "@uirouter/angular";
import { AccessManager } from "../manager/access.manager";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MaterialModules,
        UIRouterModule,
        CommonModule,
        UIRouterModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
        AccessManager
    ]

})

export class HeaderModule {

}
