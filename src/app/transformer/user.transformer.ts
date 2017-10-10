import {Injectable} from "@angular/core";
import {User} from "../model/user.model";

@Injectable()
export class UserTransformer implements TransformerInterface {

    transform(object): UserInterface {
        const user = new User();

        user.username = object.username;
        user.email = object.email;
        user.roles = object.roles;

        return user;
    }

}