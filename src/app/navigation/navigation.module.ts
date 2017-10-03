import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {NavigationComponent} from "./navigation.component";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    MaterialModules
  ],
  providers: [],
  exports: [NavigationComponent]
})

export class NavigationModule {

}
