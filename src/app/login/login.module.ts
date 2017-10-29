import {UserTransformer} from "../transformer/user.transformer";
import {DataFetcherService} from "../http/data_fetcher.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModules} from "../material/material.module";
import {AccessManager} from "../manager/access.manager";
import {UserManager} from "../manager/user.manager";
import {LoginComponent} from "./login.component";
import {UIRouterModule} from "@uirouter/angular";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { AuthTransformer } from "../transformer/auth.transformer";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModules,
        FormsModule,
        UIRouterModule,
        CommonModule
    ],
    providers: [
        UserManager,
        DataFetcherService,
        UserTransformer,
        AccessManager,
        AuthTransformer
    ],
    exports: [LoginComponent]
})

export class LoginModule {

}
