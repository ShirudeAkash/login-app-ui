import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private login: LoginService) {}

userLogin() {
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const body = { 
    username: username,
    password_: password   // <-- FIX HERE
  };
      this.login.login(body).subscribe({
      next: (resp) => console.log('Login Success', resp),
      error: (err) => console.error('Login Failed', err)
    });
}
}
