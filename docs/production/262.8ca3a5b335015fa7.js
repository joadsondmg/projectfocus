"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[262],{7262:(v,c,s)=>{s.r(c),s.d(c,{InfoModule:()=>C});var d=s(6814),a=s(9310),t=s(4946),l=s(3621),g=s(3249),u=s(3767);function p(r,P){if(1&r){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"h3"),t._uU(3,"Redefina sua senha abaixo para continuar"),t.qZA(),t.TgZ(4,"div",13)(5,"div",14)(6,"label",15),t._uU(7,"Senha:"),t.qZA(),t.TgZ(8,"input",16),t.NdJ("keyup.enter",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.passUpdate())}),t.qZA()(),t.TgZ(9,"div",14)(10,"label",17),t._uU(11,"Confirme sua senha:"),t.qZA(),t.TgZ(12,"input",18),t.NdJ("keyup.enter",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.passUpdate())}),t.qZA(),t.TgZ(13,"img",19),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.showPassword())}),t.qZA()(),t.TgZ(14,"button",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.passUpdate())}),t._uU(15,"Alterar senha"),t.qZA()()()()}}const m=[{path:"",component:(()=>{class r{constructor(e,n,o){this.route=e,this.data=n,this.crud=o,this.username="",this.firstAcessControl=!1,this.fill=["/triangulo_vazado.png","/triangulo.png"],this.rotate=["rotate(90deg)","rotate(270deg)"],this.infoClick=["barra de espa\xe7o do teclado","tela do celular"],this.currentWidth=window.innerWidth,this.currentObject={fill:this.fill[Math.floor(Math.random()*this.fill.length)],rotate:this.rotate[Math.floor(Math.random()*this.rotate.length)]}}infoLoader(){const e=document.getElementById("gif"),n=document.getElementById("info-click");this.currentWidth>600?(e.src="./assets/action_spacebar.gif",n.innerHTML=this.infoClick[0]):(e.src="./assets/action_screen.gif",n.innerHTML=this.infoClick[1])}redirectExam(){this.route.navigate(["info/exame"])}generateCurrentObject(){const e=document.getElementById("random-img");sessionStorage.setItem("current-object",JSON.stringify(this.currentObject)),e.src="./assets/"+this.currentObject.fill,e.style.transform=this.currentObject.rotate}getUserData(){const e=sessionStorage.getItem("access-token");e&&this.data.getUserData(e).subscribe(n=>{const o=n.data;if(o){const i=o.name.split(" ");this.username=i[0]+" "+i[i.length-1],sessionStorage.setItem("role",o.role),sessionStorage.setItem("id",o.sub),this.checkFirstLogin()}})}passUpdate(){const e=document.getElementById("password"),n=document.getElementById("repeat_password");if(e.value&&n.value)if(e.value===n.value){const o={id:sessionStorage.getItem("id"),password:e.value};this.crud.updatePassword(o).subscribe(i=>{"success"===i?(alert("Senha alterada com sucesso!"),this.firstAcessControl=!1):alert("Erro ao alterar senha. Por favor, entre em contato com um admnistador")})}else alert("As senhas  devem ser iguais");else alert("Preencha todos os campos")}checkFirstLogin(){const e={id:sessionStorage.getItem("id")};this.crud.validFirstAcces(e).subscribe(n=>{0==n.access&&(this.firstAcessControl=!0)})}showPassword(){const e=document.getElementById("password"),n=document.getElementById("repeat_password"),o=document.getElementById("show-pass");"text"===e.type?(e.type="password",n.type="password",o.src="./assets/eye_on.png"):(e.type="text",n.type="text",o.src="./assets/eye_off.png")}ngOnInit(){this.generateCurrentObject(),this.getUserData(),this.infoLoader()}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(a.F0),t.Y36(l.M),t.Y36(g.q))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-info"]],decls:24,vars:2,consts:[[1,"main-container"],[1,"info-container"],[1,"info"],[1,"gif-content"],["id","gif","src","","alt",""],["id","info-click"],[1,"img-container"],["id","random-img","src","./assets/triangulo_vazado.png","alt",""],[1,"footer"],[3,"click"],["class","first-access-panel",4,"ngIf"],[1,"first-access-panel"],[1,"pass-container"],[1,"input-container"],[1,"input-content"],["for","password"],["type","password","id","password","placeholder","Digite sua senha",3,"keyup.enter"],["for","repeat_password"],["type","password","id","repeat_password","placeholder","Digite novamente sua senha",3,"keyup.enter"],["src","./assets/eye_on.png","id","show-pass","alt","",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-header"),t.TgZ(2,"div",1)(3,"div",2)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7,"O teste Focus foi criado para medir sua aten\xe7\xe3o, para realiz\xe1-lo, leia as instru\xe7\xf5es abaixo. Boa sorte!"),t.qZA(),t.TgZ(8,"div",3),t._UZ(9,"img",4),t.qZA(),t.TgZ(10,"p"),t._uU(11,"Clique na "),t._UZ(12,"span",5),t._uU(13,", toda vez que "),t.TgZ(14,"span"),t._uU(15,"a imagem correta aparecer."),t.qZA()()(),t.TgZ(16,"div",6)(17,"span"),t._uU(18,"Figura Correta:"),t.qZA(),t._UZ(19,"img",7),t.qZA()(),t.TgZ(20,"div",8)(21,"button",9),t.NdJ("click",function(){return o.redirectExam()}),t._uU(22,"INICIAR"),t.qZA()(),t.YNc(23,p,16,0,"div",10),t.qZA()),2&n&&(t.xp6(5),t.hij("Bem-vindo, ",o.username,""),t.xp6(18),t.Q6J("ngIf",o.firstAcessControl))},dependencies:[d.O5,u.G],styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:grid;grid-template-rows:.1fr 1fr .1fr;place-items:center}.info-container[_ngcontent-%COMP%]{width:90%;height:90%;display:grid;grid-template-columns:60% 40%}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem 5rem 0 0;gap:1rem}.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--aux-purple)}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{font-size:1.5rem}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{font-weight:700;color:var(--aux-purple-secondary)}.gif-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.gif-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15rem;height:13rem}.img-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17rem}.footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:flex-start}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:1rem 3.5rem;margin:0 2rem 2rem;background-color:var(--btn-default-color);border-radius:.7rem;font-weight:600;cursor:pointer;color:var(--aux-purple)}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--btn-default-hover);color:var(--default-text-color)}.first-access-panel[_ngcontent-%COMP%]{position:absolute;width:100vw;height:100%;background-color:#b6b5b5bb;display:grid;place-items:center}.pass-container[_ngcontent-%COMP%]{background-color:#fff;width:50%;height:50%;border-radius:.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}.pass-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--background-color)}.input-container[_ngcontent-%COMP%]{width:50%;height:60%;display:flex;flex-direction:column;gap:1rem;align-items:center}.input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;background-color:var(--background-color);border:none;border-radius:.2rem;color:var(--default-text-color);padding:.5rem 0;margin-top:1rem}.input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--background-color-hover)}.input-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.input-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background-color:#e4e6e8;padding:.2rem 0 .2rem 1rem}.input-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;position:relative;bottom:1.6rem;left:90%;cursor:pointer}@media screen and (max-width: 600px){.main-container[_ngcontent-%COMP%]{height:100%}.first-access-panel[_ngcontent-%COMP%]{height:130%}.info-container[_ngcontent-%COMP%]{width:90%;height:100%;display:flex;flex-direction:column;gap:3rem}.info[_ngcontent-%COMP%]{padding:0;padding-top:2rem}.img-container[_ngcontent-%COMP%]{margin-bottom:5rem}.action[_ngcontent-%COMP%]{width:2rem}.pass-container[_ngcontent-%COMP%]{width:90%;height:60%}.pass-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]{width:80%}}"]})}return r})()},{path:"exame",loadChildren:()=>s.e(383).then(s.bind(s,6383)).then(r=>r.ExameModule)}];let f=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(m),a.Bz]})}return r})();var h=s(2103);let C=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[d.ez,f,h.O]})}return r})()}}]);