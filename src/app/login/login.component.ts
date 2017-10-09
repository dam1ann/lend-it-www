import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  constructor(){

  }

  ngOnInit(){

  }

  onSubmit(data: NgForm){
    const login = data.login;
    const password = data.password;
    
    console.log('Submited!!! :)');
  }
}
