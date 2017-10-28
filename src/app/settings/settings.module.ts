import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { MaterialModules } from "../material/material.module";
import { UserManager } from "../manager/user.manager";
import { AccessManager } from "../manager/access.manager";

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        MaterialModules
    ],
    providers: [
        AccessManager,
        UserManager
    ]
})

export class SettingsModule {

}
