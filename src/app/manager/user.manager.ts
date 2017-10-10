import {DataFetcherService} from "../http/data_fetcher.service";
import {UserTransformer} from "../transformer/user.transformer";
import {AccessManager} from "./access.manager";
import {Injectable} from "@angular/core";

@Injectable()
export class UserManager {
    constructor(private accessManager: AccessManager,
                private fetcher: DataFetcherService,
                private transformer: UserTransformer) {
    }

    authenticate(loginRequested) {

        let url = "http://lend-it-api.com/app_dev.php/oauth/v2/token";

        let config = {
            'client_id': '3_2bi16620185c8wk400s0cs0g0kwgsocwsscwgwcgg804ggw880',
            'grant_type': 'password',
            'client_secret': 'mxahs09i9wgg4oo4owg88wccs088wc8sskcscww0ooco0wkgw',
            'password': loginRequested.password,
            'username': loginRequested.login
        };

        this.fetcher.POST(url, config)
            .subscribe(
                (authDetail) => {
                    this.accessManager.authenticate(authDetail);
                    this.fetcher.POST("http://lend-it-api.com/app_dev.php/api/me")
                        .subscribe((userDetail) => console.log(this.transformer.transform(userDetail)));
                },
                (error) => console.log(['ERROR', error])
            );

        return true;
    }
}