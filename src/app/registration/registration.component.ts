///<reference path="../../../node_modules/@angular/forms/src/directives/validators.d.ts"/>
import {Component} from '@angular/core';
import {UserManager} from "../manager/user.manager";
import {FormControl, ValidationErrors, Validators} from '@angular/forms';

@Component({
    selector: 'ng-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
    constructor(private userManager: UserManager) {
    }

    errors: Object = {'message': ""};
    email = new FormControl('', [Validators.required, Validators.email]);

    onSubmit(data) {

        let registryData = {
            'username': data.value.login,
            'password': {
                'first': data.value.password,
                'second': data.value.passwordRepeated,
            },
            'email': this.email.value
        };


        // let errors: Array<string>;
        let response = this.userManager.registry(registryData);
        response.subscribe(
            response => console.log(response),
            errors => {
                this.errors = JSON.parse(errors.error);
                this.populateErrors(this.errors);

                return this.errors;
            }
        );
    }

    populateErrors(data) {
        if (data.message) {
            this.email.setErrors({});
        }
    }
}
