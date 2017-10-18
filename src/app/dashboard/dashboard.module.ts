import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {DashboardComponent} from "./dashboard.component";
import {UIRouterModule} from "@uirouter/angular";
import {SettingsModule} from "../settings/settings.module";
import {ItemListComponent} from "./item-list/item-list.component";
import {NavigationComponent} from "./navigation/navigation.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ItemListComponent,
    NavigationComponent
  ],
  imports: [
    MaterialModules,
    SettingsModule,
    UIRouterModule
  ],
  providers: [],
  exports: [DashboardComponent]
})

export class DashboardModule {

}
