import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    client_id: string;
    grant_type: string;
    client_secret: string;
    auth_url: string;
    urls: {
        me: string,
        registry: string,
    };
}

export const APP_CONFIGURATION: AppConfig = {
    client_id: '3_2bi16620185c8wk400s0cs0g0kwgsocwsscwgwcgg804ggw880',
    grant_type: 'password',
    client_secret: 'mxahs09i9wgg4oo4owg88wccs088wc8sskcscww0ooco0wkgw',
    auth_url: 'http://lend-it-api.com/app_dev.php/oauth/v2/token',
    urls: {
        me: 'http://lend-it-api.com/app_dev.php/api/me',
        registry: 'http://lend-it-api.com/app_dev.php/api/registry'
    }
};