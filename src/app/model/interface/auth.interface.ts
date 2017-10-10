interface AuthInterface extends ModelInterface {
    accessToken: string;
    expiredIn: number;
    refreshToken: string;
    authenticated: boolean;
}