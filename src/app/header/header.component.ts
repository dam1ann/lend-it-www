import { AfterViewInit, Component, ElementRef, OnInit } from "@angular/core";
import { AccessManager } from "../manager/access.manager";
import { StateService } from "@uirouter/core/lib";
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'ng-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

    data = this.accessMng.isLoggedIn;

    constructor(private accessMng: AccessManager,
                private stateService: StateService,
                private elRef: ElementRef) {
    }

    logout() {
        this.accessMng.isLoggedIn.next(false);
        this.stateService.go('dashboard', {message: "Pomyślnie wylogowano"});
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        const header = this.elRef.nativeElement.querySelector('.header').classList,
            source = Observable.fromEvent(document, 'scroll');

        source.map(() => window.scrollY)
            .subscribe(scrollY => {
                if (scrollY > 56) {
                    header.add('small');
                } else {
                    header.remove('small');
                }
            });
    }
}
