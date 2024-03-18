import { Component } from '@angular/core';
import { UserCrudService } from '../user-crud.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(
    private crud: UserCrudService
  ){}

  objectUser = {
    name: "",
    user: "",
    password: "",
    role: ""
  }

  passChanger = false
  defaultPass = 'vale2024'

  setDefaultPass() {
    this.passChanger = !this.passChanger
    if(this.passChanger) {
      this.objectUser.password = this.defaultPass
    } else {
      this.objectUser.password = ''
    }
    
  }

  setUserInput() {
    const name = this.objectUser.name
    const objectName = name.split(' ')
    if(name != "") {
      this.objectUser.user = (objectName[0] + "." + objectName[objectName.length - 1]).toLowerCase()
    }
  }

  createUser() {
    this.objectUser.name = this.objectUser.name.toUpperCase()
    if(this.objectUser.name != "" && this.objectUser.password != "" && this.objectUser.role != "" ) {
      this.crud.createUser(this.objectUser).subscribe(
        (response) => {
          if(response === 'success') {
            alert('Usuário criado com sucesso!')
          } else if(response === 'denied') {
            alert('O usuário já existe!')
          } else if(response === 'fail') {
            alert('Erro na criação do usuário!')
          }
      })
    } else {
      alert('Preencha todos os campos')
    }
}
}
