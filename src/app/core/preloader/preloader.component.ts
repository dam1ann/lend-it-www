import { Component} from "@angular/core";
import { PreloaderService } from "./service/preloader.service";
import { animate, style , transition, trigger } from "@angular/animations";

@Component({
    selector: 'ng-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss'],
    // animations:[
    //     trigger('flyInOut', [
    //         transition('void => *', [
    //             style({
    //                 //transform: 'scale(0)',
    //                 opacity: 0
    //             }),
    //             animate('300ms ease-in')
    //         ]),
    //         transition('* => void', [
    //             style({
    //                 //transform: 'scale(0)',
    //                 opacity: 0
    //             }),
    //             animate('300ms ease-in')
    //         ])
    //     ])
    // ]
})
export class PreloaderComponent {
    constructor(private preloader: PreloaderService) {
    }
}
