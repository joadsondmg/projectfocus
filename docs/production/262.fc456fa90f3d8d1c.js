"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[262],{7262:(v,l,i)=>{i.r(l),i.d(l,{InfoModule:()=>C});var d=i(6814),s=i(9310),t=i(4946),g=i(6466),m=i(3621),u=i(3767);const f=[{path:"",component:(()=>{class n{constructor(o,e,r){this.route=o,this.auth=e,this.data=r,this.username="",this.fill=["/triangulo_vazado.png","/triangulo.png"],this.rotate=["rotate(90deg)","rotate(270deg)"],this.infoClick=["barra de espa\xe7o do teclado","tela do celular"],this.currentWidth=window.innerWidth,this.currentObject={fill:this.fill[Math.floor(Math.random()*this.fill.length)],rotate:this.rotate[Math.floor(Math.random()*this.rotate.length)]}}infoLoader(){const o=document.getElementById("gif"),e=document.getElementById("info-click");this.currentWidth>600?(o.src="./assets/action_spacebar.gif",e.innerHTML=this.infoClick[0]):(o.src="./assets/action_screen.gif",e.innerHTML=this.infoClick[1])}redirectExam(){this.route.navigate(["info/exame"])}generateCurrentObject(){const o=document.getElementById("random-img");sessionStorage.setItem("current-object",JSON.stringify(this.currentObject)),o.src="./assets/"+this.currentObject.fill,o.style.transform=this.currentObject.rotate}getUserData(){const o=sessionStorage.getItem("access-token");o&&this.data.getUserData(o).subscribe(r=>{const a=r.data;if(a){const c=a.name.split(" ");this.username=c[0]+" "+c[c.length-1],sessionStorage.setItem("role",a.role),sessionStorage.setItem("id",a.sub)}})}ngOnInit(){this.generateCurrentObject(),this.getUserData(),this.infoLoader()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0),t.Y36(g.e),t.Y36(m.M))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-info"]],decls:23,vars:1,consts:[[1,"main-container"],[1,"info-container"],[1,"info"],[1,"gif-content"],["id","gif","src","","alt",""],["id","info-click"],[1,"img-container"],["id","random-img","src","./assets/triangulo_vazado.png","alt",""],[1,"footer"],[3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header"),t.TgZ(2,"div",1)(3,"div",2)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7,"O teste Focus foi criado para medir sua aten\xe7\xe3o, para realiz\xe1-lo, leia as instru\xe7\xf5es abaixo. Boa sorte!"),t.qZA(),t.TgZ(8,"div",3),t._UZ(9,"img",4),t.qZA(),t.TgZ(10,"p"),t._uU(11,"Clique na "),t._UZ(12,"span",5),t._uU(13,", toda vez que "),t.TgZ(14,"span"),t._uU(15,"a imagem correta aparecer."),t.qZA()()(),t.TgZ(16,"div",6)(17,"span"),t._uU(18,"Figura Correta:"),t.qZA(),t._UZ(19,"img",7),t.qZA()(),t.TgZ(20,"div",8)(21,"button",9),t.NdJ("click",function(){return r.redirectExam()}),t._uU(22,"INICIAR"),t.qZA()()()),2&e&&(t.xp6(5),t.hij("Bem-vindo, ",r.username,""))},dependencies:[u.G],styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:grid;grid-template-rows:.1fr 1fr .1fr;place-items:center}.info-container[_ngcontent-%COMP%]{width:90%;height:90%;display:grid;grid-template-columns:60% 40%}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem 5rem 0 0;gap:1rem}.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--aux-purple)}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{font-size:1.5rem}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{font-weight:700;color:var(--aux-purple-secondary)}.gif-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.gif-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15rem;height:13rem}.img-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17rem}.footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:flex-start}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:1rem 3.5rem;margin:0 2rem 2rem;background-color:var(--btn-default-color);border-radius:.7rem;font-weight:600;cursor:pointer;color:var(--aux-purple)}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--btn-default-hover);color:var(--default-text-color)}@media screen and (max-width: 600px){.info-container[_ngcontent-%COMP%]{width:90%;height:100%;display:flex;flex-direction:column;gap:3rem}.info[_ngcontent-%COMP%]{padding:0;padding-top:2rem}.img-container[_ngcontent-%COMP%]{margin-bottom:5rem}.action[_ngcontent-%COMP%]{width:2rem}}"]})}return n})()},{path:"exame",loadChildren:()=>i.e(383).then(i.bind(i,6383)).then(n=>n.ExameModule)}];let h=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(f),s.Bz]})}return n})();var p=i(2103);let C=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[d.ez,h,p.O]})}return n})()}}]);