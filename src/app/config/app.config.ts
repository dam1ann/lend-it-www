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
    client_id: '1_x6s9gwd49dcs8o0g0kcocgkw4s84kkkwcg8c0sokwc4ssc8g4',
    grant_type: 'password',
    client_secret: '3wy05mtrii0wog4oo0woc4ogs80co0ckg4so48s4c4w4g0g8c4',
    auth_url: 'https://powerful-meadow-36630.herokuapp.com/app_dev.php/oauth/v2/token',
    urls: {
        me: 'https://powerful-meadow-36630.herokuapp.com/app_dev.php/api/me',
        registry: 'https://powerful-meadow-36630.herokuapp.com/app_dev.php/api/registry',
        movies: 'https://powerful-meadow-36630.herokuapp.com/app_dev.php/api/movies',
        singleMovie: 'https://powerful-meadow-36630.herokuapp.com/app_dev.php/api/movie/'
    }
};
