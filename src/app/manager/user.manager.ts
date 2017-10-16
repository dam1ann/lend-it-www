import {DataFetcherService} from "../http/data_fetcher.service";
import {UserTransformer} from "../transformer/user.transformer";
import {APP_CONFIG, AppConfig} from "../config/app.config";
import {AccessManager} from "./access.manager";
import {Injectable, Injector} from "@angular/core";
import 'rxjs';

@Injectable()
export class UserManager {
    constructor(private accessManager: AccessManager,
                private fetcher: DataFetcherService,
                private transformer: UserTransformer,
                private injector: Injector) {
    }

    private user: UserInterface;

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
                return this.user = user;
            });
    }
}