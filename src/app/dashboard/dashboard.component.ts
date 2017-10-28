import {AccessManager} from "../manager/access.manager";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private accessManager: AccessManager) {
    }

    ngOnInit() {
        this.successLogged();
    }

    successLogged() {
        this.accessManager.isLoggedIn.subscribe(logged => {
            if (logged) {
                alert("Gratki, zalogowałeś się!")
            }
        })
    }
}
