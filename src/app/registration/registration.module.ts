import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";
import {UIRouterModule} from "@uirouter/angular";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    RegistrationComponent
  ],
  imports:[
    MaterialModules,
    FormsModule,
    UIRouterModule,
    CommonModule
  ],
  providers:[],
  exports:[
    RegistrationComponent
  ]
})

export class RegistrationModule{

}
