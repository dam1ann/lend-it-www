import {PreloaderService} from "./service/preloader.service";
import {PreloaderComponent} from './preloader.component';
import {MaterialModules} from "../../material.module";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        MaterialModules,
    ],
    declarations: [
        PreloaderComponent
    ],
    providers: [
        PreloaderService
    ],
    exports: [
        PreloaderComponent
    ]
})
export class PreloaderModule {

}
