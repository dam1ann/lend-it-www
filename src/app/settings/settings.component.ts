import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserManager } from "../manager/user.manager";

@Component({
    selector: 'ng-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

    user: BehaviorSubject<UserInterface> = this.userMng.getUser;

    constructor(private userMng: UserManager) {
    }

    ngOnInit() {
        this.user.subscribe();
    }
}
