"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[488],{1413:(f,l,n)=>{n.d(l,{K:()=>u});var a=n(4946),h=n(9310),d=n(3621);let u=(()=>{class i{constructor(e,s){this.route=e,this.data=s,this.height=0,this.width=0,this.actionHit=0,this.omissionHit=0,this.totalObjects=60,this.countObjects=0,this.currentObject="",this.responseText="",this.responseImage="",this.resultResponse=0,this.idUser=1,this.validate=!0,this.currentDate=new Date,this.day=this.currentDate.getDate().toString().padStart(2,"0"),this.month=(this.currentDate.getMonth()+1).toString().padStart(2,"0"),this.year=this.currentDate.getFullYear(),this.todayDate=this.day+"/"+this.month+"/"+this.year,this.resultObject=[{responseText:"Voc\xea est\xe1 liberado para suas atividades!",responseImage:"./assets/colaboradores.png"},{responseText:"Execu\xe7\xe3o incorreta, gentileza procurar seu supervisor!",responseImage:"./assets/supervisor.png"},{responseText:"Execu\xe7\xe3o n\xe3o foi como esperada, gentileza procurar medicina!",responseImage:"./assets/medico.png"},{responseText:"Voc\xea j\xe1 esgotou o n\xfamero de tentativas hoje!",responseImage:"./assets/erro.png"}]}resizeStage(){this.height=window.innerHeight,this.width=window.innerWidth}randomObjectCreate(){console.log("Execu\xe7\xe3o");var e=document.getElementsByTagName("img"),s=document.getElementById("stage");if(e.length>0&&("triangulo"!=e[0].id&&(this.omissionHit++,console.log(this.omissionHit)),s?.removeChild(e[0])),this.countObjects<this.totalObjects){let t=Math.floor(Math.random()*this.width)-90,c=Math.floor(Math.random()*this.height)-90;t=t<0?0:t,c=c<0?0:c;const o=document.createElement("img"),r=["rotate(0deg)","rotate(90deg)","rotate(180deg)","rotate(270deg)"],g=r[Math.floor(Math.random()*r.length)],m=["/triangulo_vazado.png","/triangulo.png"],p=Math.floor(2*Math.random());o.src="./assets"+m[p],o.style.transform=g,m[p]==this.currentObject.fill&&g==this.currentObject.rotate&&(o.id="triangulo"),o.classList.add("triangulo1"),o.style.width="50px",o.style.height="50px",o.style.position="absolute",o.style.left=t+"px",o.style.top=c+"px",console.log(m[p]+" "+this.currentObject.fill+" "+g+" "+this.currentObject.rotate),s?.appendChild(o)}this.countObjects++}score(){const e=(this.actionHit+this.omissionHit)/this.totalObjects*100;switch(console.log(this.actionHit+" "+this.omissionHit+" "+e),this.resultResponse=e,!0){case e>=70:this.responseText=this.resultObject[0].responseText,this.responseImage=this.resultObject[0].responseImage;break;case e>=50:this.responseText=this.resultObject[1].responseText,this.responseImage=this.resultObject[1].responseImage;break;default:this.responseText=this.resultObject[2].responseText,this.responseImage=this.resultObject[2].responseImage}const s=document.getElementById("stage");s&&(s.innerHTML=`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n       <h2 style="color: white">${this.responseText}</h2>\n       <img style="width: 19rem" src="${this.responseImage}" alt="">\n       <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n    </div>`);const t=document.getElementById("action-btn");t&&t.addEventListener("click",()=>{this.route.navigate(["/info"])}),this.storeResultResponse(e)}handleSpaceKey(e){const s=document.getElementsByTagName("img")[0]?document.getElementsByTagName("img")[0]:null;"Space"===e.code&&s&&("triangulo"===s.id&&this.actionHit++,s.remove())}redirectInfo(){this.route.navigate(["/info"])}storeResultResponse(e){this.data.setResultResponse(this.idUser,e).subscribe(s=>{console.log(s)})}validExecution(){const e=sessionStorage.getItem("access-token");e&&this.data.getUserData(e).subscribe(s=>{const t=s.data;t&&this.data.getValidExecutation(this.todayDate,t.sub).subscribe(c=>{if("denied"===c.status){this.responseText=this.resultObject[3].responseText,this.responseImage=this.resultObject[3].responseImage;const o=document.getElementById("stage");o&&(o.innerHTML=`<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem;">\n                        <h2 style="color: white">${this.responseText}</h2>\n                        <img style="width: 19rem" src="${this.responseImage}" alt="">\n                        <button id='action-btn' style="border: none; padding: 1rem 3.5rem;margin: 0 2rem 2rem 2rem; background-color: var(--aux-purple); border-radius: 0.7rem; font-weight: 600; cursor: pointer; color: var(--default-text-color);" class="action-btn">IN\xcdCIO</button>\n                      </div>`);const r=document.getElementById("action-btn");r&&r.addEventListener("click",()=>{this.route.navigate(["/info"])})}else{const o=sessionStorage.getItem("current-object");o&&(this.currentObject=JSON.parse(o)),this.createObjects=setInterval(()=>{this.countObjects<=this.totalObjects?this.randomObjectCreate():(clearInterval(this.createObjects),this.score())},800)}})})}ngOnInit(){this.resizeStage(),this.validExecution()}ngOnDestroy(){clearInterval(this.createObjects)}static#t=this.\u0275fac=function(s){return new(s||i)(a.Y36(h.F0),a.Y36(d.M))};static#e=this.\u0275cmp=a.Xpm({type:i,selectors:[["app-exame"]],hostBindings:function(s,t){1&s&&a.NdJ("keydown.space",function(o){return t.handleSpaceKey(o)},!1,a.evT)},decls:1,vars:0,consts:[["id","stage",1,"main-container"]],template:function(s,t){1&s&&a._UZ(0,"div",0)},styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:var(--background-color)}.result-styles[_ngcontent-%COMP%]{display:grid;place-items:center}.response-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}.action-btn[_ngcontent-%COMP%]{border:none;padding:1rem 3.5rem;margin:0 2rem 2rem;background-color:var(--btn-default-color);border-radius:.7rem;font-weight:600;cursor:pointer;color:var(--aux-purple)}.action-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-default-hover);color:var(--default-text-color)}"]})}return i})()},6488:(f,l,n)=>{n.r(l),n.d(l,{InfoModule:()=>s});var a=n(6814),h=n(9310),d=n(1524),u=n(1413),i=n(4946);const b=[{path:"",component:d.O},{path:"exame",component:u.K,loadChildren:()=>n.e(18).then(n.bind(n,7018)).then(t=>t.ExameModule)}];let e=(()=>{class t{static#t=this.\u0275fac=function(r){return new(r||t)};static#e=this.\u0275mod=i.oAB({type:t});static#s=this.\u0275inj=i.cJS({imports:[h.Bz.forChild(b),h.Bz]})}return t})(),s=(()=>{class t{static#t=this.\u0275fac=function(r){return new(r||t)};static#e=this.\u0275mod=i.oAB({type:t});static#s=this.\u0275inj=i.cJS({imports:[a.ez,e]})}return t})()}}]);