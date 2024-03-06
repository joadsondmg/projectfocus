import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
constructor(
  private route: Router,
  private auth: AuthService
)
{}

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

ngOnInit(): void {
  this.generateCurrentObject()
}
}
