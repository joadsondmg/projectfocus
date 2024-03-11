import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

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
rotate = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)']

currentObject = {
  fill: this.fill[Math.floor(Math.random() * this.fill.length)],
  rotate: this.rotate[Math.floor(Math.random() * this.rotate.length)]
};

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
    const token = storedToken
    this.data.getUserData(token).subscribe(
      (response) => {
        const userData = response.data
        if(userData){
            const fullName = userData.name.split(" ")
            const firstName = fullName[0]
            const lastName = fullName[fullName.length - 1]
            this.username = firstName + " " + lastName
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
