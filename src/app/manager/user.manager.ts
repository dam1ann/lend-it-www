import { DataFetcherService } from "../http/data_fetcher.service";
import { UserTransformer } from "../transformer/user.transformer";
import { APP_CONFIG, AppConfig } from "../config/app.config";
import { Injectable, Injector } from "@angular/core";
import { StateService } from "@uirouter/core/lib";
import { AccessManager } from "./access.manager";
import { FormGroup } from "@angular/forms";
import "rxjs";
import { MyLocalStorageService } from "../core/local-storage/localStorage.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UserManager {

    private observableUser = new BehaviorSubject<UserInterface>({
        'username': '',
        'email': '',
        'roles': []
    });

    get getUser(): BehaviorSubject<UserInterface> {
        return this.observableUser;
    }

    /**
     * @param {AccessManager} accessManager
     * @param {DataFetcherService} fetcher
     * @param {UserTransformer} transformer
     * @param {Injector} injector
     * @param {StateService} stateService
     * @param {MyLocalStorageService} localStorage
     */
    constructor(private accessManager: AccessManager,
                private fetcher: DataFetcherService,
                private transformer: UserTransformer,
                private injector: Injector,
                private stateService: StateService,
                private localStorage: MyLocalStorageService) {

        if (this.accessManager.isLoggedIn) {
            this.observableUser.next(this.localStorage.getUser())
        }
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
            .map(userDetail => {
                return this.transformer.transform(userDetail);
            })
            .subscribe((user: UserInterface) => {
                    this.getUser.next(user);
                    this.localStorage.saveUser(user);
                    this.stateService.go('dashboard', {message: 'Pomyślnie zalogowano użytkownika'});
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
            .subscribe(() =>
                    this.stateService.go('login', {message: "Pomyślnie zarejestrowano użytkownika"})
                ,
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