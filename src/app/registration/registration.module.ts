import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";

@NgModule({
  declarations:[
    RegistrationComponent
  ],
  imports:[
    MaterialModules,
    FormsModule
  ],
  providers:[],
  exports:[
    RegistrationComponent
  ]
})

export class RegistrationModule{

}
