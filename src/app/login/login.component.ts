import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;
  constructor(private authenticationService: AuthenticationService) {
    
  }

  ngOnInit() {
  }

  login(){
    this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
      alert('login corretto');
      console.log(data);
    }).catch((error) => {
      alert('errore');
      console.log(error);
    })
  }

  register(){
    this.authenticationService.registerWithEmail(this.email, this.password).then((data) => {
      alert('Registrato correttamente');
      console.log(data);
    }).catch((error) => {
      alert('errore al momento di registrarsi');
      console.log(error);
    })
  }

}
