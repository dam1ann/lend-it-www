import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {LoginComponent} from "./login.component";
import {FormsModule} from '@angular/forms';
import {DataFetcherService} from "../http/data_fetcher.service";
import {UserManager} from "../authentication/user.manager";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MaterialModules,
        FormsModule
    ],
    providers: [
        UserManager,
        DataFetcherService
    ],
    exports: [LoginComponent]
})

export class LoginModule {

}
