import {Component} from "@angular/core";

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  login: string;
  password: string;
}
