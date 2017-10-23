import {Injectable} from "@angular/core";
import {Auth} from "../model/auth.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AccessManager {
  private auth;
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor() {
    this.auth = new Auth();
  }

  authenticate(authDetail) {

    this.auth.accessToken = authDetail.access_token;
    this.auth.expiredIn = authDetail.expires_in;
    this.auth.refreshToken = authDetail.refresh_token;
    this.auth.authenticated = true;

    this.loggedIn.next(true);
  }

  isAuthenticated(): boolean {
    return this.auth.authenticated;
  }

  getAccessToken() {
    return this.auth.accessToken;
  }
}


