import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit {
  height = 0
  width = 0
  actionHit = 0
  totalObjects = 10
  countObjects = 0
  currentObject = ""

  

  resizeStage() {
    this.height = window.innerHeight
    this.width = window.innerWidth
  }



  ngOnInit(): void {
    // this.currentObject = JSON.parse(localStorage.getItem('currentObject'))
  }
}
