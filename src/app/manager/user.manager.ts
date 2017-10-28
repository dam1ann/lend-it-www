import { DataFetcherService } from "../http/data_fetcher.service";
import { UserTransformer } from "../transformer/user.transformer";
import { APP_CONFIG, AppConfig } from "../config/app.config";
import { AccessManager } from "./access.manager";
import { Injectable, Injector } from "@angular/core";
import "rxjs";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FormGroup} from "@angular/forms";
import {StateService} from "@uirouter/core/lib";

@Injectable()
export class UserManager {
    constructor(private accessManager: AccessManager,
                private fetcher: DataFetcherService,
                private transformer: UserTransformer,
                private injector: Injector,
                private stateService: StateService) {
    }

    private observableUser = new BehaviorSubject<UserInterface>({
        'username': '',
        'email': '',
        'roles': []
    });

    get getUser(): Observable<UserInterface> {
        return this.observableUser.asObservable();
    }


    /**
     * @param loginRequested
     * @param {FormGroup} loginGroup
     * @returns {Subscription}
     */
    authenticate(loginRequested, loginGroup: FormGroup) {
        let config: AppConfig = this.injector.get(APP_CONFIG);

        let requestData = {
            'password': loginRequested.password,
            'username': loginRequested.username,
            'client_id': config.client_id,
            'grant_type': config.grant_type,
            'client_secret': config.client_secret
        };


        return this.fetcher.POST(config.auth_url, requestData)
            .map((response: Response) => this.accessManager.authenticate(response))
            .flatMap(() => this.fetcher.POST(config.urls.me))
            .map((userDetail) => {
                return this.transformer.transform(userDetail);
            })
            .subscribe((user: UserInterface) => {
                    this.observableUser.next(user);
                    this.stateService.go('dashboard')
                },
                errors => {
                    loginGroup.get('password').setErrors({'error': errors.error.error_description});
                    loginGroup.get('username').setErrors({'error': ''});

                    return loginGroup;
                });
    }

    /**
     *
     * @param requestData
     * @param {FormGroup} registryGroup
     * @returns {Subscription}
     */
    registry(requestData, registryGroup: FormGroup) {
        let config: AppConfig = this.injector.get(APP_CONFIG);

        return this.fetcher.POST(config.urls.registry, requestData)
            .subscribe(
                response => {
                    this.stateService.go('login');
                },
                errors => {
                    UserManager.populateErrors(errors.error, registryGroup);

                    return registryGroup;
                }
            );
    }

    /**
     * @param data
     * @param registryGroup
     */
    static populateErrors(data, registryGroup): void {
        for (let prop in data) {
            if (true === Array.isArray(data[prop])) {
                registryGroup.get(prop).setErrors({'error': data[prop]});
            }
            if (prop === 'password' || prop === 'passwordRepeated') {
                registryGroup.get('passwordRepeated').setErrors({'error': data[prop].first});
            }
        }

    }
}