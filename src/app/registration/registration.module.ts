import { NgModule } from "@angular/core";
import { MaterialModules } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./registration.component";
import { UIRouterModule } from "@uirouter/angular";
import { CommonModule } from "@angular/common";
import { UserManager } from "../manager/user.manager";
// import {Component} from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModules,
        FormsModule,
        UIRouterModule,
        CommonModule
    ],
    providers: [
        UserManager
    ],
    exports: [
        RegistrationComponent
    ]
})

export class RegistrationModule {

}
