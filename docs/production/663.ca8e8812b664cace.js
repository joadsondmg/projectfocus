"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[663],{7663:(f,u,r)=>{r.r(u),r.d(u,{LoginModule:()=>h});var d=r(6814),c=r(9310),e=r(4946),g=r(6466),a=r(95);const p=[{path:"",component:(()=>{class t{constructor(i,n){this.auth=i,this.route=n,this.userData={user:"",password:""}}login(){const i=document.getElementById("user"),n=document.getElementById("password");""!=i.value&&""!=n.value?this.auth.login(this.userData).subscribe({next:o=>{o?(sessionStorage.setItem("access-token",o),this.route.navigate(["/info"])):(alert("Dados Incorretos"),n.value="")}}):alert("Preencha os campos")}showPassword(){const i=document.getElementById("password"),n=document.getElementById("show-pass");"text"===i.type?(i.type="password",n.src="./assets/eye_off.png"):(i.type="text",n.src="./assets/eye_on.png")}forgotPassword(){alert("M\xe9todo indispon\xedvel")}redirectHome(){this.route.navigate(["/home"])}ngOnInit(){this.auth.isAuthenticated()&&this.route.navigate(["/info"])}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(g.e),e.Y36(c.F0))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:22,vars:2,consts:[[1,"main-container"],[1,"header"],["src","./assets/vale_logo_white.png","alt","",3,"click"],[1,"secound-container"],[1,"login-container"],[1,"input-field"],["for","user"],[1,"input-content"],["type","text","id","user",3,"ngModel","ngModelChange","keyup.enter"],["for","password"],["type","password","id","password",3,"ngModel","ngModelChange","keyup.enter"],["src","./assets/eye_on.png","id","show-pass","alt","",3,"click"],[3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"img",2),e.NdJ("click",function(){return o.redirectHome()}),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"span"),e._uU(6,"LOGIN"),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"Usu\xe1rio"),e.qZA(),e.TgZ(10,"div",7)(11,"input",8),e.NdJ("ngModelChange",function(l){return o.userData.user=l})("keyup.enter",function(){return o.login()}),e.qZA()()(),e.TgZ(12,"div",5)(13,"label",9),e._uU(14,"Senha"),e.qZA(),e.TgZ(15,"div",7)(16,"input",10),e.NdJ("ngModelChange",function(l){return o.userData.password=l})("keyup.enter",function(){return o.login()}),e.qZA(),e.TgZ(17,"img",11),e.NdJ("click",function(){return o.showPassword()}),e.qZA(),e.TgZ(18,"span",12),e.NdJ("click",function(){return o.forgotPassword()}),e._uU(19,"Esqueceu sua senha?"),e.qZA()()(),e.TgZ(20,"button",12),e.NdJ("click",function(){return o.login()}),e._uU(21,"Entrar"),e.qZA()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",o.userData.user),e.xp6(5),e.Q6J("ngModel",o.userData.password))},dependencies:[a.Fj,a.JJ,a.On],styles:['.main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-image:url(background_login.b411d969db555341.png);background-size:cover;background-repeat:no-repeat;overflow:hidden;display:grid;grid-template-rows:.1fr 1fr;place-items:center;font-family:Poppins}.header[_ngcontent-%COMP%]{width:100%;padding:1rem 2rem}.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem;cursor:pointer}.secound-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;gap:1rem;width:40%;min-width:19rem;height:70%;padding:2rem 1rem;border:1px solid rgba(255,255,255,.74);border-radius:.5rem;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.login-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--aux-blue);font-size:2rem}.login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--aux-purple);color:var(--default-text-color);padding:.5rem 2rem;border:none;border-radius:.3rem;cursor:pointer}.login-container[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:inherit;filter:blur(20px);z-index:-1}.input-field[_ngcontent-%COMP%]{width:100%;padding:0 2rem;display:flex;flex-direction:column}.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--default-text-color)}.input-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.input-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:1.7rem;outline:none;padding:0 3rem 0 1rem}.input-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;position:relative;bottom:1.6rem;left:40%;cursor:pointer}.input-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--default-text-color);font-size:1rem;cursor:pointer}@media screen and (max-width: 600px){.input-field[_ngcontent-%COMP%]{padding:0 1rem}}']})}return t})()}];let m=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(p),c.Bz]})}return t})(),h=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[d.ez,m,a.u5]})}return t})()}}]);