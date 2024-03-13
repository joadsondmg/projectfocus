"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[383],{6383:(x,u,a)=>{a.r(u),a.d(u,{ExameModule:()=>y});var g=a(6814),c=a(9310),n=a(4946),p=a(3621);const f=[{path:"",component:(()=>{class o{constructor(e,t,s,i){this.route=e,this.data=t,this.renderer=s,this.el=i,this.currentHeight=window.innerHeight,this.currentWidth=window.innerWidth,this.actionHit=0,this.omissionHit=0,this.totalObjects=5,this.countObjects=0,this.currentObject="",this.responseText="",this.responseImage="",this.resultResponse=0,this.validate=!0,this.currentDate=new Date,this.day=this.currentDate.getDate().toString().padStart(2,"0"),this.month=(this.currentDate.getMonth()+1).toString().padStart(2,"0"),this.year=this.currentDate.getFullYear(),this.todayDate=this.day+"/"+this.month+"/"+this.year,this.resultObject=[{responseText:"Voc\xea est\xe1 liberado para suas atividades!",responseImage:"./assets/colaboradores.png"},{responseText:"Execu\xe7\xe3o incorreta, gentileza procurar seu supervisor!",responseImage:"./assets/supervisor.png"},{responseText:"Execu\xe7\xe3o n\xe3o foi como esperada, gentileza procurar medicina!",responseImage:"./assets/medico.png"},{responseText:"Voc\xea j\xe1 esgotou o n\xfamero de tentativas hoje!",responseImage:"./assets/erro.png"}]}resizeStage(){this.currentHeight=window.innerHeight,this.currentWidth=window.innerWidth}randomObjectCreate(){var e=document.getElementsByClassName("triangulo"),t=document.getElementById("stage");if(e.length>0&&("triangulo"!=e[0].id&&(this.omissionHit++,console.log(this.omissionHit)),t?.removeChild(e[0])),this.countObjects<this.totalObjects){let s=Math.floor(Math.random()*this.currentWidth)-90,i=Math.floor(Math.random()*this.currentHeight)-90;s=s<0?0:s,i=i<0?0:i;const r=document.createElement("img"),m=["rotate(0deg)","rotate(90deg)","rotate(180deg)","rotate(270deg)"],l=m[Math.floor(Math.random()*m.length)],d=["/triangulo_vazado.png","/triangulo.png"],h=Math.floor(2*Math.random());r.src="./assets"+d[h],r.style.transform=l,d[h]==this.currentObject.fill&&l==this.currentObject.rotate&&(r.id="triangulo"),r.classList.add("triangulo"),r.style.width="50px",r.style.height="50px",r.style.position="absolute",r.style.left=s+"px",r.style.top=i+"px",console.log(d[h]+" "+this.currentObject.fill+" "+l+" "+this.currentObject.rotate),t?.appendChild(r)}this.countObjects++}score(){const e=(this.actionHit+this.omissionHit)/this.totalObjects*100;switch(console.log(this.actionHit+" "+this.omissionHit+" "+e),this.resultResponse=e,!0){case e>=70:this.responseText=this.resultObject[0].responseText,this.responseImage=this.resultObject[0].responseImage;break;case e>=50:this.responseText=this.resultObject[1].responseText,this.responseImage=this.resultObject[1].responseImage;break;default:this.responseText=this.resultObject[2].responseText,this.responseImage=this.resultObject[2].responseImage}const t=document.getElementById("stage");t&&(t.innerHTML=this.currentWidth>600?`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n       <h2 style="color: white">${this.responseText}</h2>\n       <img style="width: 19rem" src="${this.responseImage}" alt="">\n       <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n    </div>`:`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n       <h3 style="color: white; text-align: center">${this.responseText}</h3>\n       <img style="width: 15rem" src="${this.responseImage}" alt="">\n       <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n    </div>`);const s=document.getElementById("action-btn");s&&s.addEventListener("click",()=>{this.route.navigate(["/info"])}),this.storeResultResponse(e)}handleSpaceKey(e){const t=document.getElementsByClassName("triangulo")[0]?document.getElementsByClassName("triangulo")[0]:null;"Space"===e.code&&t&&("triangulo"===t.id&&this.actionHit++,t.remove())}handleClick(e){const t=document.getElementsByClassName("triangulo")[0]?document.getElementsByClassName("triangulo")[0]:null;0==e.button&&t&&("triangulo"===t.id&&this.actionHit++,t.remove())}redirectInfo(){this.route.navigate(["/info"])}storeResultResponse(e){this.data.setResultResponse(sessionStorage.getItem("id"),e).subscribe(t=>{console.log(t)})}validExecution(){this.data.getValidExecutation(this.todayDate,sessionStorage.getItem("id")).subscribe(e=>{if("denied"===e.status){this.responseText=this.resultObject[3].responseText,this.responseImage=this.resultObject[3].responseImage;const t=document.getElementById("stage");t&&(t.innerHTML=this.currentWidth>600?`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n            <h2 style="color: white">${this.responseText}</h2>\n            <img style="width: 19rem" src="${this.responseImage}" alt="">\n            <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n          </div>`:`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n            <h3 style="color: white; text-align: center;">${this.responseText}</h3>\n            <img style="width: 15rem" src="${this.responseImage}" alt="">\n            <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n          </div>`);const s=document.getElementById("action-btn");s&&s.addEventListener("click",()=>{this.route.navigate(["/info"])})}else{const t=sessionStorage.getItem("current-object");t&&(this.currentObject=JSON.parse(t)),this.createObjects=setInterval(()=>{this.countObjects<=this.totalObjects?this.randomObjectCreate():(clearInterval(this.createObjects),this.score())},800)}})}ngOnInit(){this.resizeStage(),this.validExecution()}ngOnDestroy(){clearInterval(this.createObjects)}static#t=this.\u0275fac=function(t){return new(t||o)(n.Y36(c.F0),n.Y36(p.M),n.Y36(n.Qsj),n.Y36(n.SBq))};static#e=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-exame"]],hostBindings:function(t,s){1&t&&n.NdJ("keydown.space",function(r){return s.handleSpaceKey(r)},!1,n.evT)("click",function(r){return s.handleClick(r)},!1,n.evT)},decls:1,vars:0,consts:[["id","stage",1,"main-container"]],template:function(t,s){1&t&&n._UZ(0,"div",0)},styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:var(--background-color)}.result-styles[_ngcontent-%COMP%]{display:grid;place-items:center}.response-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}.action-btn[_ngcontent-%COMP%]{border:none;padding:1rem 3.5rem;margin:0 2rem 2rem;background-color:var(--btn-default-color);border-radius:.7rem;font-weight:600;cursor:pointer;color:var(--aux-purple)}.action-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-default-hover);color:var(--default-text-color)}"]})}return o})()}];let b=(()=>{class o{static#t=this.\u0275fac=function(t){return new(t||o)};static#e=this.\u0275mod=n.oAB({type:o});static#s=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(f),c.Bz]})}return o})(),y=(()=>{class o{static#t=this.\u0275fac=function(t){return new(t||o)};static#e=this.\u0275mod=n.oAB({type:o});static#s=this.\u0275inj=n.cJS({imports:[g.ez,b]})}return o})()}}]);