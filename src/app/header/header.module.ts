import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MaterialModules } from "../material/material.module";
import { UIRouterModule } from "@uirouter/angular";
import { AccessManager } from "../manager/access.manager";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MaterialModules,
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
