import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    @Input() movies;

    constructor() {
    }

    ngOnInit() {
    }
}
