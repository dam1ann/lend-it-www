import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {UserEvents} from "../core/events/user-events.service";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {

    /**
     * @param {UserEvents} userEvents
     * @param {MatSnackBar} snackBar
     */
    constructor(private userEvents: UserEvents,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.successLogged();
    }

    successLogged() {
        this.userEvents.successLogged.subscribe(message => {
            this.snackBar.open(String(message), "", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top",
                extraClasses: ['custom-snack-bar']
            });
        });
    }
}
