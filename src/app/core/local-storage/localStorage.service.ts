import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { UserTransformer } from "../../transformer/user.transformer";
import { Auth } from "../../model/auth.model";
import { AuthTransformer } from "../../transformer/auth.transformer";

@Injectable()
export class MyLocalStorageService {

    constructor(private localStorage: LocalStorageService,
                private userTransformer: UserTransformer,
                private authTransformer: AuthTransformer) {
    }

    saveAuthDetails(authDetail: Auth) {
        this.localStorage.set('auth', authDetail);
    }

    saveUser(user: UserInterface): void {
        this.localStorage.set("userDetails", user);
    }

    getAuthDetails() {
        if (this.localStorage.keys().includes('auth')) {
            return this.authTransformer.transform(this.localStorage.get('auth'));
        }
    }

    getUser(): UserInterface {
        if (this.localStorage.keys().includes('userDetails')) {
            return this.userTransformer.transformFromLocalStorage(this.localStorage.get("userDetails"));
        }
    }

    clean(): void {
        this.localStorage.clearAll();
    }
}
