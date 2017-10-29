import { Injectable } from "@angular/core";
import { User } from "../model/user.model";

@Injectable()
export class UserTransformer implements UserTransformerInterface {

    transform(object): UserInterface {
        const user = new User();

        user.username = object.username;
        user.email = object.email;
        user.roles = object.roles;

        return user;
    }

    transformFromLocalStorage(object): UserInterface{
        const user = new User();

        user.username = object._username;
        user.email = object._email;
        user.roles = object._roles;

        return user;
    }

}