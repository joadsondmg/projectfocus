import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit, OnDestroy{
  constructor(
    private route: Router
  ){}

  private createObjects: any;

  height = 0
  width = 0
  actionHit = 0
  omissionHit = 0
  totalObjects = 10
  countObjects = 0
  currentObject: any = ""
  responseText = "TESTANDO"
  responseImage = "./../../assets/triangulo.png"

  resultObject = [
    {
      responseText: "Você está liberado para suas atividades!",
      responseImage: ""
    },
    {
      responseText: "Execução incorreta, gentileza procurar seu supervisor!",
      responseImage: ""
    },
    {
      responseText: "Execução não foi como esperada, gentileza procurar medicina!",
      responseImage: ""
    }
]
resizeStage() {
  this.height = window.innerHeight
  this.width = window.innerWidth
}

randomObjectCreate() {
  console.log("Execução")
  var imgs = document.getElementsByTagName('img');
  var stage = document.getElementById('stage')
		if(imgs.length > 0){
			if (imgs[0].id != "triangulo") {
				this.omissionHit++;
				console.log(this.omissionHit)
			}
			stage?.removeChild(imgs[0])
		}

    if (this.countObjects < this.totalObjects) {
			let positionX = Math.floor(Math.random() * this.width) - 90
			let positionY = Math.floor(Math.random() * this.height) - 90
			positionX = positionX < 0 ? 0 : positionX
			positionY = positionY < 0 ? 0 : positionY
			const triangle = document.createElement('img')
			const orientation = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
			const rotate = orientation[Math.floor(Math.random() * orientation.length)]
			const fill = ['/triangulo_vazado.png', '/triangulo.png']
			const selectFill = Math.floor(Math.random() * 2)
			triangle.src = "./../../assets" + fill[selectFill]
			triangle.style.transform = rotate
			if( fill[selectFill] == this.currentObject.fill && rotate == this.currentObject.rotate ){
				triangle.id = "triangulo"
			}
      triangle.classList.add('triangulo1')
      triangle.style.width = '50px'
      triangle.style.height = '50px'
			triangle.style.position = 'absolute'
			triangle.style.left = positionX + 'px'
			triangle.style.top = positionY + 'px'

			console.log(fill[selectFill] + ' ' + this.currentObject.fill + ' ' + rotate + ' ' + this.currentObject.rotate)

			stage?.appendChild(triangle);
		}
		this.countObjects++;
}

score() {
  const score = ((this.actionHit + this.omissionHit) / this.totalObjects) * 100;
  console.log(this.actionHit + ' ' + this.omissionHit + ' ' + score)
  const stage = document.getElementById('stage')
  if (stage) {
    stage.innerHTML = `<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">
       <h2 style="color: white">${this.responseText}</h2>
       <img style="width: 3rem" src="${this.responseImage}" alt="">
       <button style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--btn-default-color); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--aux-purple);" (click)="redirectInfo()" class="action-btn">INÍCIO</button>
    </div>`;
   }
  // const resultText = document.createElement('h2')
  // const resultImage = document.createElement('img')
  // const exitBtn = document.createElement('button')
  // exitBtn.addEventListener('click', this.redirectInfo)
  // exitBtn.textContent = 'INÍCIO'
  // exitBtn.classList.add('action-btn')
  // resultImage.src = './../../assets/triangulo.png'
  // resultImage.style.width =  '15rem'
  // resultText.innerText = 'TESTANDO'
  // resultText.style.color = 'white'
  // stage?.classList.add('result-styles')
  // stage?.appendChild(resultText)
  // stage?.appendChild(resultImage)
  // stage?.appendChild(exitBtn)
//   // console.log("Sua pontuação final foi:" + pontuacao + "%");
// window.location.href = 'resultado.html?' + score; // Redireciona para a página de fim de jogo
}

@HostListener('document:keydown.space', ['$event'])
handleSpaceKey(event: KeyboardEvent): void {
  const triangle = document.getElementsByTagName('img')[0] ? document.getElementsByTagName('img')[0] : null;
  if(event.code === "Space"){
    if(triangle) {
      if(triangle.id === "triangulo") {
        this.actionHit++
        console.log(this.actionHit)
      }
      triangle.remove()
    }
  }
}

redirectInfo() {
  this.route.navigate(['info'])
}

ngOnInit(): void {
  this.resizeStage()
  const storedObject = localStorage.getItem('current-object')
  if(storedObject){
    this.currentObject = JSON.parse(storedObject)
  }
  this.createObjects = setInterval(() =>{
    if(this.countObjects <= this.totalObjects){
      this.randomObjectCreate()
   } else {
    clearInterval(this.createObjects)
    this.score()
   }
  }, 1000)
}

ngOnDestroy(): void {
  clearInterval(this.createObjects);
  }
}

