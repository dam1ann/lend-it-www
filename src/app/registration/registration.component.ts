import {Component, OnInit} from '@angular/core';
import {UserManager} from "../manager/user.manager";
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
    selector: 'ng-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
    constructor(private userManager: UserManager) {
    }

    errors: Object = {};

    registryGroup: FormGroup;

    ngOnInit() {
        this.registryGroup = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            username: new FormControl('', [Validators.required, Validators.minLength(1)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            passwordRepeated: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    onSubmit() {
        let registryData = {
            'username': this.registryGroup.get('username').value,
            'password': {
                'first': this.registryGroup.get('password').value,
                'second': this.registryGroup.get('passwordRepeated').value,
            },
            'email': this.registryGroup.get('email').value
        };


        let response = this.userManager.registry(registryData);
        response.subscribe(
            response => alert('REGISTRED!'),
            errors => {
                this.populateErrors(JSON.parse(errors.error));

                return this.errors;
            }
        );
    }

    populateErrors(data): void {
        for (let prop in data) {
            if (true === Array.isArray(data[prop])) {
                this.registryGroup.get(prop).setErrors({'error': data[prop]});
            }
            if (prop === 'password' || prop === 'passwordRepeated') {
                this.registryGroup.get('passwordRepeated').setErrors({'error': data[prop].first});
            }
        }

    }
}
