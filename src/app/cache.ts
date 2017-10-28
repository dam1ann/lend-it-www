import { Observable } from "rxjs/Observable";
import { Scheduler } from "rxjs/Scheduler";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

export function cache(bufferSize: number = Number.POSITIVE_INFINITY,
                      windowTime: number = Number.POSITIVE_INFINITY,
                      scheduler?: Scheduler): Observable<any> {
    let subject: ReplaySubject<any>;
    let source = this;
    let refs = 0;
    let outerSub: Subscription;

    const getSubject = () => {
        subject = new ReplaySubject<any>(bufferSize, windowTime, scheduler);
        return subject;
    };

    return new Observable<any>((observer: Observer<any>) => {
        if (!subject) {
            subject = getSubject();
            outerSub = source.subscribe(
                (value: any) => subject.next(value),
                (err: any) => {
                    let s = subject;
                    subject = null;
                    s.error(err);
                },
                () => subject.complete()
            );
        }

        refs++;

        if (!subject) {
            subject = getSubject();
        }
        let innerSub = subject.subscribe(observer);

        return () => {
            refs--;
            if (innerSub) {
                innerSub.unsubscribe();
            }
            if (refs === 0) {
                outerSub.unsubscribe();
            }
        };
    });
}

export interface CacheSignature {
    (bufferSize?: number, windowTime?: number, scheduler?: Scheduler): Observable<any>;
}