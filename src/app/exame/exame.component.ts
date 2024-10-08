import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit, OnDestroy{
  constructor(
    private route: Router,
    private data: UserdataService,
  ){}

  private createObjects: any;

  currentHeight = 0
  currentWidth = 0
  totalObjects = 60
  countObjects = 0
  currentObject: any = ""
  responseText = ""
  responseImage = ""
  validate = true

  resultResponse = 0
  actionHit = 0
  omissionHit = 0
  omissionError = 0
  actionError = 0

  objectDataExam = {
    resultResponse: 0,
    omissionHit: 0,
    actionHit: 0,
    omissionError: 0,
    actionError: 0,
    time: "",
    date: ""
  }

  currentDate = new Date()
  day = this.currentDate.getDate().toString().padStart(2, '0')
  month = (this.currentDate.getMonth()+1).toString().padStart(2, '0')
  year = this.currentDate.getFullYear()
  hour = this.currentDate.getHours().toString().padStart(2,'0');
  minutes = this.currentDate.getMinutes().toString().padStart(2,"0");
  todayDate = this.day + "/" + this.month + "/" + this.year;
  todayTime = this.hour + ":" + this.minutes;

  orientation = ['rotate(90deg)', 'rotate(270deg)'];
  fill = ['/triangulo_vazado.png', '/triangulo.png']

  resultObject = [
    {
      responseText: "Você está liberado para suas atividades!",
      responseImage: "./assets/colaboradores.png"
    },
    {
      responseText: "Execução incorreta, gentileza procurar seu supervisor!",
      responseImage: "./assets/supervisor.png"
    },
    {
      responseText: "Execução não foi como esperada, gentileza procurar medicina!",
      responseImage: "./assets/medico.png"
    },
    {
      responseText: "Você já esgotou o número de tentativas hoje!",
      responseImage: "./assets/erro.png"
    }
]

resize() {
  const stage = document.getElementById('stage') as HTMLDivElement
  if( window.innerWidth > 600) {
    this.currentWidth = stage.clientWidth
    this.currentHeight = stage.clientHeight
  } else {
    stage.style.height = '70%'
    this.currentHeight = stage.clientHeight
    this.currentWidth = stage.clientWidth
  }
}

randomObjectCreate() {
  var imgs = document.getElementsByClassName('triangulo');
  var stage = document.getElementById('stage')
		if(imgs.length > 0){
			if (imgs[0].id != "triangulo") {
				this.objectDataExam.omissionHit++
			} else {
        this.objectDataExam.omissionError++
      }
			stage?.removeChild(imgs[0])
		}

    if (this.countObjects < this.totalObjects) {
      let positionX = Math.floor(Math.random() * this.currentWidth) - 90
			let positionY = Math.floor(Math.random() * this.currentHeight) - 90
			positionX = positionX < 0 ? 0 : positionX
			positionY = positionY < 0 ? 0 : positionY
			const triangle = document.createElement('img')
			const rotate = this.orientation[Math.floor(Math.random() * this.orientation.length)]
			const fill = this.fill[Math.floor(Math.random() * this.fill.length)]
			triangle.src = "./assets" + fill
			triangle.style.transform = rotate
			if( fill == this.currentObject.fill && rotate == this.currentObject.rotate ){
				triangle.id = "triangulo"
			}
      triangle.classList.add('triangulo')
      triangle.style.width = '50px'
      triangle.style.height = '50px'
			triangle.style.position = 'relative'
			triangle.style.left = positionX + 'px'
			triangle.style.top = positionY + 'px'
			stage?.appendChild(triangle);
		}
		this.countObjects++;
}

score() {
  const scoreValue = ((this.objectDataExam.actionHit + this.objectDataExam.omissionHit) / this.totalObjects) * 100;
  // console.log(this.objectDataExam.actionHit + ' ' + this.objectDataExam.omissionHit + ' ' + scoreValue)
  this.objectDataExam.resultResponse = scoreValue
  this.objectDataExam.date = this.todayDate
  this.objectDataExam.time = this.todayTime
  switch(true){
    case scoreValue >= 80:
      this.responseText = this.resultObject[0].responseText
      this.responseImage = this.resultObject[0].responseImage
      break;
    case scoreValue >= 60:
      this.responseText = this.resultObject[1].responseText
      this.responseImage = this.resultObject[1].responseImage
      break;
    default:
      this.responseText = this.resultObject[2].responseText
      this.responseImage = this.resultObject[2].responseImage
  }
  const stage = document.getElementById('stage')
  if (stage) {
    if(this.currentWidth > 600) {
      stage.innerHTML = `<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">
       <h2 style="color: white">${this.responseText}</h2>
       <img style="width: 19rem" src="${this.responseImage}" alt="">
       <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">INÍCIO</button>
    </div>`;
    } else {
      stage.innerHTML = `<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">
       <h3 style="color: white; text-align: center">${this.responseText}</h3>
       <img style="width: 15rem" src="${this.responseImage}" alt="">
       <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">INÍCIO</button>
    </div>`;
    }
    
   }
   const actionBtn = document.getElementById('action-btn')
   if(actionBtn) {
    actionBtn.addEventListener('click', () => {
      this.route.navigate(['/info'])
    })
   }
   this.storeResultResponse()
}

@HostListener('document:keydown.space', ['$event'])
handleSpaceKey(event: KeyboardEvent): void {
  const triangle = document.getElementsByClassName('triangulo')[0] ? document.getElementsByClassName('triangulo')[0] : null;
  if(event.code === "Space" && triangle){
      if(triangle.id === "triangulo") {
        this.objectDataExam.actionHit++
      } else {
        this.objectDataExam.actionError++
      }
      triangle.remove()
  }
}

@HostListener('document:click', ['$event'])
handleClick(event: MouseEvent):void {
  const triangle = document.getElementsByClassName('triangulo')[0] ? document.getElementsByClassName('triangulo')[0] : null;
  if(event.button == 0 && triangle) {
    if(triangle.id === "triangulo") {
      this.objectDataExam.actionHit++
    } else {
      this.objectDataExam.actionError++
    }
    triangle.remove()
}
}

redirectInfo() {
  this.route.navigate(['/info'])
}

storeResultResponse(){
  this.data.setResultResponse(sessionStorage.getItem('id'), this.objectDataExam).subscribe(
    (response: any) => {
      console.log(response)
    }
  )           
}

validExecution() {
  this.data.getValidExecutation(this.todayDate, sessionStorage.getItem('id')).subscribe(
    (resp: any) => {
      if(resp.status === 'denied'){
        this.responseText = this.resultObject[3].responseText
        this.responseImage = this.resultObject[3].responseImage
        const stage = document.getElementById('stage')
        if (stage) {
          if(this.currentWidth > 600) {
            stage.innerHTML = `<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">
            <h2 style="color: white">${this.responseText}</h2>
            <img style="width: 19rem" src="${this.responseImage}" alt="">
            <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">INÍCIO</button>
          </div>`;
          } else {
            stage.innerHTML = `<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">
            <h3 style="color: white; text-align: center;">${this.responseText}</h3>
            <img style="width: 15rem" src="${this.responseImage}" alt="">
            <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">INÍCIO</button>
          </div>`;
          }
          
        }
        const actionBtn = document.getElementById('action-btn')
        if(actionBtn) {
          actionBtn.addEventListener('click', () => {
            this.route.navigate(['/info'])
          })
        }
      } else {
        const storedObject = sessionStorage.getItem('current-object')
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
        }, 800)
      }
    }
  )
}

ngOnInit(): void {
  this.resize()
  this.validExecution()
}

ngOnDestroy(): void {
  clearInterval(this.createObjects);
  }
}

