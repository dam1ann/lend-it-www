import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {LoginComponent} from "./login.component";


@NgModule({
  declarations: [
     LoginComponent
  ],
  imports: [
    MaterialModules
  ],
  providers: [],
  exports: [LoginComponent]
})

export class LoginModule{

}
