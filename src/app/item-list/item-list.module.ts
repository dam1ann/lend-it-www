import {NgModule} from "@angular/core";
import {ItemListComponent} from "./item-list.component";
import {ItemComponent} from "./item/item.component";
import {MaterialModules} from "../material.module";
import {NavigationModule} from "../navigation/navigation.module";


@NgModule({
  declarations:[
    ItemListComponent,
    ItemComponent
  ],
  imports:[
    MaterialModules,
    NavigationModule
  ],
  exports:[
    ItemListComponent
  ]
})

export class ItemListModule{

}
