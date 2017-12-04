import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    client_id: string;
    grant_type: string;
    client_secret: string;
    auth_url: string;
    urls: {
        me: string,
        registry: string,
        movies: string,
        singleMovie: string
    };
}

export const APP_CONFIGURATION: AppConfig = {
    client_id: '3_2vbblz3i7k2scok08k0wc4s40wwokswgko04wkcc0800g848w4',
    grant_type: 'password',
    client_secret: '3qx09ro02gg04k088sgg4wcskcwogcgw48www4gc04o8s8ko0o',
    auth_url: 'https://lend-it-api.herokuapp.com/app_dev.php/oauth/v2/token',
    urls: {
        me: 'https://lend-it-api.herokuapp.com/app_dev.php/api/me',
        registry: 'https://lend-it-api.herokuapp.com/app_dev.php/api/registry',
        movies: 'https://lend-it-api.herokuapp.com/app_dev.php/api/movies',
        singleMovie: 'https://lend-it-api.herokuapp.com/app_dev.php/api/movie/'
    }
};
