import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(
  private auth: AuthService,
  private route: Router
  
){}

userData = {
  user: "",
  password: ""
}

login() {
  this.auth.login(this.userData).subscribe({
    next: (response) => {
      if(response) {
        localStorage.setItem('access-token', response)
        this.route.navigate(['info'])
      } else {
        alert('Dados Incorretos')
      }
    }
  })
}

showPassword() {
  const password = document.getElementById('password') as HTMLInputElement
  if(password.type === "text"){
    password.type = "password"
  } else {
    password.type = "text"
  }
}

forgotPassword() {
  alert('Método indisponível')
}

ngOnInit(): void{
  if (this.auth.isAuthenticated()) {
    this.route.navigate(['info'])
  }
}

}
