import { Component, HostListener,Renderer2, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit, OnDestroy{
  constructor(
    private route: Router,
    private data: UserdataService,
    private renderer: Renderer2,
    private el: ElementRef
  ){}

  private createObjects: any;

  currentHeight = window.innerHeight
  currentWidth = window.innerWidth
  actionHit = 0
  omissionHit = 0
  totalObjects = 5
  countObjects = 0
  currentObject: any = ""
  responseText = ""
  responseImage = ""
  resultResponse = 0
  validate = true

  currentDate = new Date()
  day = this.currentDate.getDate().toString().padStart(2, '0')
  month = (this.currentDate.getMonth()+1).toString().padStart(2, '0')
  year = this.currentDate.getFullYear()
  todayDate = this.day + "/" + this.month + "/" + this.year;

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

resizeStage() {
  this.currentHeight = window.innerHeight
  this.currentWidth = window.innerWidth
}

randomObjectCreate() {
  var imgs = document.getElementsByClassName('img');
  var stage = document.getElementById('stage')
		if(imgs.length > 0){
			if (imgs[0].id != "triangulo") {
				this.omissionHit++;
				console.log(this.omissionHit)
			}
			stage?.removeChild(imgs[0])
		}

    if (this.countObjects < this.totalObjects) {
			let positionX = Math.floor(Math.random() * this.currentWidth) - 90
			let positionY = Math.floor(Math.random() * this.currentHeight) - 90
			positionX = positionX < 0 ? 0 : positionX
			positionY = positionY < 0 ? 0 : positionY
			const triangle = document.createElement('img')
			const orientation = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
			const rotate = orientation[Math.floor(Math.random() * orientation.length)]
			const fill = ['/triangulo_vazado.png', '/triangulo.png']
			const selectFill = Math.floor(Math.random() * 2)
			triangle.src = "./assets" + fill[selectFill]
			triangle.style.transform = rotate
			if( fill[selectFill] == this.currentObject.fill && rotate == this.currentObject.rotate ){
				triangle.id = "triangulo"
			}
      triangle.classList.add('triangulo')
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
  const scoreValue = ((this.actionHit + this.omissionHit) / this.totalObjects) * 100;
  console.log(this.actionHit + ' ' + this.omissionHit + ' ' + scoreValue)
  this.resultResponse = scoreValue
  switch(true){
    case scoreValue >= 70:
      this.responseText = this.resultObject[0].responseText
      this.responseImage = this.resultObject[0].responseImage
      break;
    case scoreValue >= 50:
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
   this.storeResultResponse(scoreValue)
}

// handleKeyEvent() {
//   const triangle = document.getElementsByTagName('img')[0] ? document.getElementsByTagName('img')[0] : null;
//   if(this.currentWidth > 600) {
//     this.renderer.listen('document', 'keydown.space', (event) => {
//       if (event.code === "Space" && triangle) {
//         if (triangle.id === "triangulo") {
//           this.actionHit++;
//         }
//         triangle.remove();
//       }
//   });
//   } else {
//     const stage = document.getElementById('stage') as HTMLDivElement
//     stage.addEventListener('click', () => {
//       if (triangle) {
//         if (triangle.id === "triangulo") {
//           this.actionHit++;
//         }
//         triangle.remove();
//       }
//     } )
//   }
// }



@HostListener('document:keydown.space', ['$event'])
handleSpaceKey(event: KeyboardEvent): void {
  const triangle = document.getElementsByClassName('triangulo')[0] ? document.getElementsByClassName('triangulo')[0] : null;
  if(event.code === "Space" && triangle){
      if(triangle.id === "triangulo") {
        this.actionHit++
      }
      triangle.remove()
  }
}

@HostListener('document:click', ['$event'])
handleClick(event: MouseEvent):void {
  const triangle = document.getElementsByClassName('triangulo')[0] ? document.getElementsByClassName('triangulo')[0] : null;
  if(event.button == 0 && triangle) {
    if(triangle.id === "triangulo") {
      this.actionHit++
    }
    triangle.remove()
}
}

redirectInfo() {
  this.route.navigate(['/info'])
}

storeResultResponse(result: number){
  this.data.setResultResponse(sessionStorage.getItem('id'), result).subscribe(
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
  this.resizeStage()
  this.validExecution()
  // this.handleKeyEvent()
}

ngOnDestroy(): void {
  clearInterval(this.createObjects);
  }
}

