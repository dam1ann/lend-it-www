import {Component} from '@angular/core';

@Component({
  selector: 'ng-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent{


  onSubmit(data){
    console.log(`form submited!`);
  }
}
