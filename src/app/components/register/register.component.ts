import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = "";
  password: string = "";
  username: string = "";

  constructor(
    private authService: AuthServiceService,
    private router : Router
  ){

  }
  register(){
    console.log(this.password, this.email, this.username);
    this.authService.register({
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe((response) => {
      window.sessionStorage.setItem("token", response.token);
      this.router.navigate(["list"])
    })
  }
}
