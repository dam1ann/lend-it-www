import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AccessManager } from '../manager/access.manager';
import { StateService } from '@uirouter/core/lib';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ng-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

    data = this.accessMng.isLoggedIn;

    myControl: FormControl = new FormControl();

    options: Array<any> = [
        'One',
        'Two',
        'Three'
    ];

    filteredOptions: Observable<string[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val) : this.options.slice());
    }

    filter(val: string): string[] {
        return this.options.filter(option =>
            option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }


    constructor(private accessMng: AccessManager,
                private stateService: StateService,
                private elRef: ElementRef) {
    }

    logout() {
        this.accessMng.isLoggedIn.next(false);
        this.stateService.go('dashboard', {message: 'Pomyślnie wylogowano'});
    }

    ngAfterViewInit() {
        const header = this.elRef.nativeElement.querySelector('.header').classList,
            source = Observable.fromEvent(document, 'scroll');

        source.map(() => window.scrollY)
            .subscribe(scrollY => {
                if (scrollY > 56) {
                    header.add('small');
                } else {
                    header.remove('small');
                }
            });
    }
}
