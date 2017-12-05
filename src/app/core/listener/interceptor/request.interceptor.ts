import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AccessManager } from "../../../manager/access.manager";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private accessManager: AccessManager) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = null;

        if (true === this.accessManager.isAuthenticated()) {
            token = this.accessManager.getAccessToken();
        }
        const changedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });


        return next.handle(changedReq);
    }
}