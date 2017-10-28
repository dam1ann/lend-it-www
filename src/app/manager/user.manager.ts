import { DataFetcherService } from "../http/data_fetcher.service";
import { UserTransformer } from "../transformer/user.transformer";
import { APP_CONFIG, AppConfig } from "../config/app.config";
import { AccessManager } from "./access.manager";
import { Injectable, Injector } from "@angular/core";
import "rxjs";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LocalStorageService } from "angular-2-local-storage";

@Injectable()
export class UserManager {
    constructor(private accessManager: AccessManager,
                private fetcher: DataFetcherService,
                private transformer: UserTransformer,
                private injector: Injector,
                private localStorage: LocalStorageService) {
    }

    private user: UserInterface;

    // better user
    private observableUser = new BehaviorSubject<UserInterface>({
        username: 'janusz',
        email: 'janusz523@gmail.com',
        roles: [
            'user'
        ]
    });

    get getUser(): Observable<UserInterface> {
        return this.observableUser.asObservable();
    }


    /**
     * @param loginRequested
     * @returns {Subscription}
     */
    authenticate(loginRequested) {
        let config: AppConfig = this.injector.get(APP_CONFIG);

        let requestData = {
            'password': loginRequested.password,
            'username': loginRequested.login,
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
            .subscribe((user) => {
                console.log(user);
                this.observableUser.next(user);
                return this.user = user;
            });
    }

    /**
     * @param requestData
     */
    registry(requestData) {
        let config: AppConfig = this.injector.get(APP_CONFIG);
        // let errors: Array<string>;

        return this.fetcher.POST(config.urls.registry, requestData)
            // .subscribe(
            //     response => console.log(response),
            //     errors => {
            //         return JSON.parse(errors.error);
            //     }
            // )
            ;


    }
}