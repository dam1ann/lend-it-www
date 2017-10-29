import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UserEvents} from "../core/events/user-events.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserManager} from "../manager/user.manager";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'ng-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginGroup: FormGroup;

    /**
     * @param {UserManager} userManager
     * @param {UserEvents} userEvents
     * @param {MatSnackBar} snackBar
     */
    constructor(private userManager: UserManager,
                private userEvents: UserEvents,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.successRegistered();
        this.loginGroup = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        const username = this.loginGroup.get('username').value;
        const password = this.loginGroup.get('password').value;

        this.userManager.authenticate({username, password}, this.loginGroup)
    }

    successRegistered() {
        this.userEvents.successRegistered.subscribe(message => {
            this.snackBar.open(String(message), "", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top",
                extraClasses: ['custom-snack-bar']
            });
        });
    }
}
