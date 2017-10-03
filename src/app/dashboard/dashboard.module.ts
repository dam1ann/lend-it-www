import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {DashboardComponent} from "./dashboard.component";
import {HeaderModule} from "../header/header.module";
import {NavigationModule} from "../navigation/navigation.module";
import {ItemListModule} from "../item-list/item-list.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MaterialModules,
    HeaderModule,
    NavigationModule,
    ItemListModule
  ],
  providers: [],
  exports: [DashboardComponent]
})

export class DashboardModule{

}
