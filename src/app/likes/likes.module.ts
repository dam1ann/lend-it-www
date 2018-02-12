import {NgModule} from "@angular/core";
import {MaterialModules} from "../material/material.module";
import {CommonModule} from "@angular/common";
import {LikesComponent} from "./likes.component";

@NgModule({
  declarations: [
    LikesComponent
  ],
  imports: [
    MaterialModules,
    CommonModule
  ],
  providers: [],
  exports: [
    LikesComponent
  ]
})

export class LikesModule {

}
