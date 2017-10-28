import { Component } from "@angular/core";
import { PreloaderService } from "./service/preloader.service";

@Component({
    selector: 'ng-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
    constructor(private preloader: PreloaderService) {
    }
}
