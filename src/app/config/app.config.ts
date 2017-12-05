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
        singleMovie: string,
        categories: string
    };
}

export const APP_CONFIGURATION: AppConfig = {
    client_id: '1_15cdcd5bbnxckw0kos04s4ccwcsk80c044kwsg0ksgog4s0c0g',
    grant_type: 'password',
    client_secret: 'n2x28twxu0gowwgg0kcwoscccwscso4oww4ossoc0wc0wss8c',
    auth_url: 'http://lend-it-api.com/app_dev.php/oauth/v2/token',
    urls: {
        me: 'http://lend-it-api.com/app_dev.php/api/me',
        registry: 'http://lend-it-api.com/app_dev.php/api/registry',
        movies: 'http://lend-it-api.com/app_dev.php/api/movies',
        singleMovie: 'http://lend-it-api.com/app_dev.php/api/movie/',
        categories: 'http://lend-it-api.com/app_dev.php/api/categories'
    }
};