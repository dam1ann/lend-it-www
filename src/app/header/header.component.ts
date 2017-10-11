import {Component, Input} from "@angular/core";

@Component({
  selector: 'ng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  @Input() isUser: boolean;


}
