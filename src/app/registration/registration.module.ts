import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";
import {UIRouterModule} from "@uirouter/angular";

@NgModule({
  declarations:[
    RegistrationComponent
  ],
  imports:[
    MaterialModules,
    FormsModule,
    UIRouterModule
  ],
  providers:[],
  exports:[
    RegistrationComponent
  ]
})

export class RegistrationModule{

}
