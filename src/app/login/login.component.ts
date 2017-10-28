import { Component } from "@angular/core";
import { UserManager } from "../manager/user.manager";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'ng-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    constructor(private userManager: UserManager) {
    }

    onSubmit(data: NgForm) {
        const login = data.value.login;
        const password = data.value.password;

        this.userManager.authenticate({login, password});
    }

}
