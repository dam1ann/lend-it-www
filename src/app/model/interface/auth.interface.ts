interface AuthInterface {
    accessToken: string;
    expiredIn: number;
    refreshToken: string;
    authenticated: boolean;
}