import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit, OnDestroy{

  private createObjects: any;

  height = 0
  width = 0
  actionHit = 0
  omissionHit = 0
  totalObjects = 10
  countObjects = 0
  currentObject: any = ""

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
			var positionX = Math.floor(Math.random() * this.width) - 90
			var positionY = Math.floor(Math.random() * this.height) - 90
			positionX = positionX < 0 ? 0 : positionX
			positionY = positionY < 0 ? 0 : positionY
			var triangle = document.createElement('img')
			var orientation = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
			var rotate = orientation[Math.floor(Math.random() * orientation.length)]
			var fill = ['/triangulo_vazado.png', '/triangulo.png']
			var selectFill = Math.floor(Math.random() * 2)
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
  var score = ((this.actionHit + this.omissionHit) / this.totalObjects) * 100;
  console.log(this.actionHit + ' ' + this.omissionHit + ' ' + score)
//   // console.log("Sua pontuação final foi:" + pontuacao + "%");
// window.location.href = 'resultado.html?' + score; // Redireciona para a página de fim de jogo
}

@HostListener('document:keydown.space', ['$event'])
handleSpaceKey(event: KeyboardEvent): void {
  var triangle = document.getElementsByTagName('img')[0] ? document.getElementsByTagName('img')[0] : null;
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

