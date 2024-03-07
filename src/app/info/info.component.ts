import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserdataService } from '../userdata.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
constructor(
  private route: Router,
  private auth: AuthService,
  private data: UserdataService
)
{}

username = 'teste'
preenchimento = ['/triangulo_vazado.png', '/triangulo.png']
rotate = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)']

currentObject = {
  preenchimento: this.preenchimento[Math.floor(Math.random() * this.preenchimento.length)],
  rotate: this.rotate[Math.floor(Math.random() * this.rotate.length)]
};

dropdownVisible = false

logout() {
  this.auth.logout()
  this.route.navigate(['login'])
}

showDropDown() {
  this.dropdownVisible = !this.dropdownVisible;
}

redirectExam() {
  this.route.navigate(['info/exame'])
}

generateCurrentObject() {
  const randomImg =  document.getElementById('random-img') as HTMLImageElement
  localStorage.setItem('currentObject', JSON.stringify(this.currentObject))
  randomImg.src = "./../../assets/" + this.currentObject.preenchimento
  randomImg.style.transform = this.currentObject.rotate
}

getUserData() {
  const storedToken = localStorage.getItem('access-token')
  if(storedToken){
    const token = storedToken
    this.data.getUserData(token).subscribe(
      (response) => {
        const userData = response.data
        if(userData){
          const exp = parseInt(userData.exp) * 1000
          console.log(exp)
          if(Date.now() > exp){
            localStorage.removeItem('access-token');
            window.location.reload()
          } else {
            const fullName = userData.name.split(" ")
            const firstName = fullName[0]
            const lastName = fullName[fullName.length - 1]
            this.username = firstName + " " + lastName
          }
        } else {
          alert('Erro')
        }
       
        
      }
    )
  }
}

ngOnInit(): void {
  this.generateCurrentObject()
  this.getUserData()
}
}
