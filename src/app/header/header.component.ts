import {Component, OnInit} from "@angular/core";
import {AccessManager} from "../manager/access.manager";
import {StateService} from "@uirouter/core/lib";

@Component({
    selector: 'ng-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    data = this.accessMng.isLoggedIn;

    constructor(private accessMng: AccessManager,
                private stateService: StateService) {
    }

    ngOnInit(): void {
        this.accessMng.isLoggedIn.subscribe();
    }

    logout() {
        this.accessMng.isLoggedIn.next(false);
        this.stateService.go('dashboard', {message: "Pomyślnie wylogowano"});
    }
}
