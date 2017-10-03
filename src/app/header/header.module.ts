import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {MaterialModules} from "../material.module";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MaterialModules
  ],
  providers:[],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule{

}
