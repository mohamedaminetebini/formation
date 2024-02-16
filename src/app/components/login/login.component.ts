import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(
    private authService: AuthServiceService,
    private router : Router
  ) {


  }

  login(){


    this.authService.login({
      username: this.email,
      password: this.password
    }).subscribe((response) => {
      window.sessionStorage.setItem("token", response.token);
      this.router.navigate(["list"])
    })
  }
}
