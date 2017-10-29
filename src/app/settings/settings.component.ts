import {UserEvents} from "../core/events/user-events.service";
import {Component, OnInit} from "@angular/core";


@Component({
    selector: 'ng-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

    user: UserInterface;

    constructor(private userEvents: UserEvents) {
    }

    ngOnInit() {
        this.userEvents.getUser.subscribe(user => this.user = user);
    }
}
