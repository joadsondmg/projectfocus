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
  const eyeImg = document.getElementById('show-pass') as HTMLImageElement
  if(password.type === "text"){
    password.type = "password"
    eyeImg.src = "./../../assets/eye_off.png"
  } else {
    password.type = "text"
    eyeImg.src = "./../../assets/eye_on.png"
  }
}

forgotPassword() {
  alert('Método indisponível')
}

redirectHome() {
  this.route.navigate(['home'])
}

ngOnInit(): void{
  if (this.auth.isAuthenticated()) {
    this.route.navigate(['info'])
  }
}

}
