import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(
    private data: UserdataService
  ){}

  objectUser = {
    name: "",
    user: "",
    password: "",
    role: ""
  }

  setUserInput() {
    const name = this.objectUser.name
    const objectName = name.split(' ')
    if(name != "") {
      this.objectUser.user = (objectName[0] + "." + objectName[objectName.length - 1]).toLowerCase()
    }
  }

  createUser() {
    if(this.objectUser.name != "" && this.objectUser.password != "" && this.objectUser.role != "" ) {
      
    } else {
      alert('Preencha todos os campos')
    }
}
}
