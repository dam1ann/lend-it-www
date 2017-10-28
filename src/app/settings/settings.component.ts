import { Component, OnChanges } from "@angular/core";
import { UserManager } from "../manager/user.manager";


@Component({
    selector: 'ng-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {

    user: UserInterface;

    constructor(private userMng: UserManager) {
        this.userMng.getUser.subscribe(user=>{
            this.user = user;
        })
    }
}
