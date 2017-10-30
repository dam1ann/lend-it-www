import {FormGroup, FormControl, Validators} from "@angular/forms";
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
     */
    constructor(private userManager: UserManager) {
    }

    ngOnInit() {
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
}
