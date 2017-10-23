import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {MaterialModules} from "../material.module";
import {UIRouterModule} from "@uirouter/angular";

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports:[
    MaterialModules,
    UIRouterModule
  ],
  exports:[
    HeaderComponent
  ],

})

export class HeaderModule{

}
