import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { UserCrudService } from '../user-crud.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
constructor(
  private route: Router,
  private data: UserdataService,
  private crud: UserCrudService
)
{}

username = ''

firstAcessControl = false

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
            this.checkFirstLogin()
          }
        }
    )
  }
}

passUpdate() {
  const pass = document.getElementById('password') as HTMLInputElement
  const repeatPass = document.getElementById('repeat_password') as HTMLInputElement
  if(pass.value && repeatPass.value) {
    if(pass.value === repeatPass.value) {
      const objectUser = {
        'id': sessionStorage.getItem('id'),
        'password': pass.value
      }
      this.crud.updatePassword(objectUser).subscribe(
        (response) => {
          if(response === 'success') {
            alert('Senha alterada com sucesso!')
            this.firstAcessControl = false

        } else {
          alert('Erro ao alterar senha. Por favor, entre em contato com um admnistador')
        }
      })
    } else {
      alert('As senhas  devem ser iguais')
    }
  } else {
    alert('Preencha todos os campos')
  }
}

checkFirstLogin() {
  const objectUser = {
    'id': sessionStorage.getItem('id')
  }
  this.crud.validFirstAcces(objectUser).subscribe(
    (response) => {
      if(response.access == 0) {
        this.firstAcessControl = true
      }
    }
  )
}

ngOnInit(): void {
  this.generateCurrentObject()
  this.getUserData()
  this.infoLoader()
  // this.checkFirstLogin()
}
}
