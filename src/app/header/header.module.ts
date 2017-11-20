import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MaterialModules } from "../material/material.module";
import { UIRouterModule } from "@uirouter/angular";
import { AccessManager } from "../manager/access.manager";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        MaterialModules,
        UIRouterModule,
        ReactiveFormsModule
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
