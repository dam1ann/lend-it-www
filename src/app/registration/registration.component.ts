import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserManager} from "../manager/user.manager";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'ng-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
    constructor(private userManager: UserManager) {
    }

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

        this.userManager.registry(registryData, this.registryGroup);
    }
}
