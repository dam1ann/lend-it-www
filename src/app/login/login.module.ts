import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {LoginComponent} from "./login.component";
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
     LoginComponent
  ],
  imports: [
    MaterialModules,
    FormsModule
  ],
  providers: [],
  exports: [LoginComponent]
})

export class LoginModule{

}
