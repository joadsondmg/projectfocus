"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[130],{7130:(M,l,r)=>{r.r(l),r.d(l,{AdminModule:()=>b});var u=r(6814),d=r(9310),e=r(4946),p=r(7398),h=r(9862);let g=(()=>{class t{constructor(n){this.http=n,this.apiCreateUser="https://backofficecheck.com.br/focus/php/create-user.php"}createUser(n){return this.http.post(this.apiCreateUser,n).pipe((0,p.U)(o=>o.status))}static#e=this.\u0275fac=function(o){return new(o||t)(e.LFG(h.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var m=r(3767),a=r(95);const f=[{path:"",component:(()=>{class t{constructor(n){this.crud=n,this.objectUser={name:"",user:"",password:"",role:""},this.passChanger=!1,this.defaultPass="vale2024"}setDefaultPass(){this.passChanger=!this.passChanger,this.objectUser.password=this.passChanger?this.defaultPass:""}setUserInput(){const n=this.objectUser.name,o=n.split(" ");""!=n&&(this.objectUser.user=(o[0]+"."+o[o.length-1]).toLowerCase())}createUser(){this.objectUser.name=this.objectUser.name.toUpperCase(),""!=this.objectUser.name&&""!=this.objectUser.password&&""!=this.objectUser.role?this.crud.createUser(this.objectUser).subscribe(n=>{"success"===n?(alert("Usu\xe1rio criado com sucesso!"),this.objectUser.name="",this.objectUser.user="",this.objectUser.role="",this.passChanger||(this.objectUser.password="")):"denied"===n?alert("O usu\xe1rio j\xe1 existe!"):"fail"===n&&alert("Erro na cria\xe7\xe3o do usu\xe1rio!")}):alert("Preencha todos os campos")}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin"]],decls:35,vars:6,consts:[[1,"main-container"],[1,"admin-panel-container"],[1,"insert-user-container"],[1,"content"],[1,"input-container"],["for","name"],["type","text","id","name",3,"ngModel","ngModelChange","blur"],["for","user"],["type","text","id","user",3,"ngModel","ngModelChange"],["for","password"],["type","text","id","password","name","password",3,"ngModel","disabled","ngModelChange"],["type","checkbox","id","passchanger",3,"ngModel","ngModelChange","click"],["for","role"],["name","role","id","role",3,"ngModel","ngModelChange"],["value","","disabled","","selected",""],["value","user"],["value","analyst"],["value","adm"],[3,"click"],[1,"table-container"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"app-header"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"h2"),e._uU(6,"Cria\xe7\xe3o de Usu\xe1rio"),e.qZA(),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Nome:"),e.qZA(),e.TgZ(10,"input",6),e.NdJ("ngModelChange",function(i){return s.objectUser.name=i})("blur",function(){return s.setUserInput()}),e.qZA()(),e.TgZ(11,"div",4)(12,"label",7),e._uU(13,"Usu\xe1rio:"),e.qZA(),e.TgZ(14,"input",8),e.NdJ("ngModelChange",function(i){return s.objectUser.user=i}),e.qZA()(),e.TgZ(15,"div",4)(16,"label",9),e._uU(17,"Senha:"),e.qZA(),e.TgZ(18,"input",10),e.NdJ("ngModelChange",function(i){return s.objectUser.password=i}),e.qZA(),e.TgZ(19,"input",11),e.NdJ("ngModelChange",function(i){return s.passChanger=i})("click",function(){return s.setDefaultPass()}),e.qZA()(),e.TgZ(20,"div",4)(21,"label",12),e._uU(22,"Fun\xe7\xe3o:"),e.qZA(),e.TgZ(23,"select",13),e.NdJ("ngModelChange",function(i){return s.objectUser.role=i}),e.TgZ(24,"option",14),e._uU(25,"Escolha uma Op\xe7\xe3o"),e.qZA(),e.TgZ(26,"option",15),e._uU(27,"Usu\xe1rio Comum"),e.qZA(),e.TgZ(28,"option",16),e._uU(29,"Analista"),e.qZA(),e.TgZ(30,"option",17),e._uU(31,"Administrador"),e.qZA()()(),e.TgZ(32,"button",18),e.NdJ("click",function(){return s.createUser()}),e._uU(33,"Cadastrar"),e.qZA()()(),e._UZ(34,"div",19),e.qZA()()),2&o&&(e.xp6(10),e.Q6J("ngModel",s.objectUser.name),e.xp6(4),e.Q6J("ngModel",s.objectUser.user),e.xp6(4),e.Q6J("ngModel",s.objectUser.password)("disabled",s.passChanger),e.xp6(1),e.Q6J("ngModel",s.passChanger),e.xp6(4),e.Q6J("ngModel",s.objectUser.role))},dependencies:[m.G,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On],styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:grid;grid-template-rows:.1fr 1fr}.admin-panel-container[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;grid-template-columns:50% 50%}.insert-user-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:3rem}.content[_ngcontent-%COMP%]{width:70%;height:80%;display:flex;flex-direction:column;gap:2rem;justify-content:center;align-items:center;border:1px solid var(--background-color);border-radius:.5rem}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.35rem 1rem;border:none;background-color:var(--background-color);color:var(--default-text-color);border-radius:.2rem}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--background-color-hover)}.input-container[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:flex-start;gap:1rem}.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:5rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;outline:none;padding-left:1rem}.input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;outline:none}.table-container[_ngcontent-%COMP%]{width:100%;height:100%}"]})}return t})()}];let C=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]})}return t})();var U=r(2103);let b=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez,C,U.O,a.u5]})}return t})()}}]);