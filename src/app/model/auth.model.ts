export class Auth implements AuthInterface {
    private _accessToken: string;
    private _expiredIn: number;
    private _refreshToken: string;
    private _authenticated: boolean;

    get authenticated(): boolean {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
    }

    get accessToken(): string {
        return this._accessToken;
    }

    set accessToken(value: string) {
        this._accessToken = value;
    }

    get expiredIn(): number {
        return this._expiredIn;
    }

    set expiredIn(value: number) {
        this._expiredIn = value;
    }

    get refreshToken(): string {
        return this._refreshToken;
    }

    set refreshToken(value: string) {
        this._refreshToken = value;
    }
}