import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {DashboardComponent} from "./dashboard.component";
import {ItemListModule} from "../item-list/item-list.module";
import {HeaderComponent} from "./header/header.component";
import {UIRouterModule} from "@uirouter/angular";
import {SettingsModule} from "../settings/settings.module";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    MaterialModules,
    SettingsModule,
    ItemListModule,
    UIRouterModule
  ],
  providers: [],
  exports: [DashboardComponent]
})

export class DashboardModule {

}
