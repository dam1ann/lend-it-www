import { Component, OnInit } from "@angular/core";
import { AccessManager } from "../manager/access.manager";

@Component({
    selector: 'ng-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    loggedIn: boolean;

    constructor(private accessMng: AccessManager) {
    }

    ngOnInit(): void {

        this.accessMng.isLoggedIn.subscribe(next => {
            this.loggedIn = next;
        });
    }
}
