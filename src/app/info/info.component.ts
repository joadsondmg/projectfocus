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
  private data: UserdataService
)
{}

username = ''

fill = ['/triangulo_vazado.png', '/triangulo.png']
rotate = ['rotate(90deg)', 'rotate(270deg)']

infoClick = ['barra de espaço do teclado', 'tela do celular']

currentWidth = window.innerWidth

currentObject = {
  fill: this.fill[Math.floor(Math.random() * this.fill.length)],
  rotate: this.rotate[Math.floor(Math.random() * this.rotate.length)]
};

infoLoader() {
  const img = document.getElementById('gif') as HTMLImageElement
  const info = document.getElementById('info-click') as HTMLSpanElement
  if(this.currentWidth > 600) {
    img.src = './assets/action_spacebar.gif'
    info.innerHTML = this.infoClick[0]
  } else {
    img.src = './assets/action_screen.gif'
    info.innerHTML = this.infoClick[1]
  }
}

redirectExam() {
  this.route.navigate(['info/exame'])
}

generateCurrentObject() {
  const randomImg =  document.getElementById('random-img') as HTMLImageElement
  sessionStorage.setItem('current-object', JSON.stringify(this.currentObject))
  randomImg.src = "./assets/" + this.currentObject.fill
  randomImg.style.transform = this.currentObject.rotate
}

getUserData() {
  const storedToken = sessionStorage.getItem('access-token')
  if(storedToken){
    this.data.getUserData(storedToken).subscribe(
      (response) => {
        const userData = response.data
        if(userData){
            const fullName = userData.name.split(" ")
            const firstName = fullName[0]
            const lastName = fullName[fullName.length - 1]
            this.username = firstName + " " + lastName
            sessionStorage.setItem('role', userData.role)
            sessionStorage.setItem('id', userData.sub)
          }
        }
    )
  }
}

ngOnInit(): void {
  this.generateCurrentObject()
  this.getUserData()
  this.infoLoader()
}
}
