import { Component, OnChanges, OnInit } from "@angular/core";
import { UserManager } from "../manager/user.manager";


@Component({
    selector: 'ng-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit{

    user: UserInterface;

    constructor(private userMng: UserManager) {
    }

    ngOnInit(){
        this.userMng.getUser.subscribe(user=>{
            this.user = user;
        })
    }
}
