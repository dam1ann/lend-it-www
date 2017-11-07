import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { UserTransformer } from "../../transformer/user.transformer";
import { Auth } from "../../model/auth.model";
import { AuthTransformer } from "../../transformer/auth.transformer";
import { Movie } from "../../model/movie,model";

@Injectable()
export class MyLocalStorageService {

    constructor(private localStorage: LocalStorageService,
                private userTransformer: UserTransformer,
                private authTransformer: AuthTransformer) {
    }


    /***
     *
     * @returns {AuthInterface}
     */
    getAuthDetails(): AuthInterface {
        if (this.localStorage.keys().includes('auth')) {
            return this.authTransformer.transform(this.localStorage.get('auth'));
        }
    }

    /***
     *
     * @param authDetail
     */
    saveAuthDetails(authDetail: Auth) {
        this.localStorage.set('auth', authDetail);
    }

    /***
     *
     * @returns {UserInterface}
     */
    getUser(): UserInterface {
        if (this.localStorage.keys().includes('userDetails')) {
            return this.userTransformer.transformFromLocalStorage(this.localStorage.get("userDetails"));
        }
    }

    /***
     *
     * @param user
     */
    saveUser(user: UserInterface): void {
        this.localStorage.set("userDetails", user);
    }

    /***
     *
     */
    clean(): void {
        this.localStorage.clearAll();
    }
}
