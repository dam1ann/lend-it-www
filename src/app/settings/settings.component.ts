import {ChangeDetectionStrategy, Component, Input, OnChanges} from "@angular/core";
import {User} from "../model/user.model";


@Component({
  selector: 'ng-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SettingsComponent implements OnChanges{

  @Input()user: User;

  constructor(){

  }

  ngOnChanges(){

  }
}
