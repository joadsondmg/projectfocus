"use strict";(self.webpackChunkprojectfocus=self.webpackChunkprojectfocus||[]).push([[592],{3767:(g,d,s)=>{s.d(d,{G:()=>o});var t=s(4946),p=s(6466),u=s(9310),a=s(3621),m=s(6814);function n(i,_){if(1&i){const c=t.EpF();t.TgZ(0,"ul",10)(1,"li",6),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onBuild())}),t.TgZ(2,"div",11),t._UZ(3,"img",12),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Perfil"),t.qZA(),t._UZ(6,"img",13),t.qZA(),t.TgZ(7,"li",6),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onBuild())}),t.TgZ(8,"div",11),t._UZ(9,"img",14),t.qZA(),t.TgZ(10,"span"),t._uU(11,"Configura\xe7\xe3o"),t.qZA(),t._UZ(12,"img",13),t.qZA(),t.TgZ(13,"li",6),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onBuild())}),t.TgZ(14,"div",11),t._UZ(15,"img",15),t.qZA(),t.TgZ(16,"span"),t._uU(17,"Ajuda"),t.qZA(),t._UZ(18,"img",13),t.qZA(),t.TgZ(19,"li",6),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.logout())}),t.TgZ(20,"div",11),t._UZ(21,"img",16),t.qZA(),t.TgZ(22,"span"),t._uU(23,"Sair"),t.qZA(),t._UZ(24,"img",13),t.qZA()()}}let o=(()=>{class i{constructor(c,r,e){this.auth=c,this.route=r,this.data=e,this.dropdownVisible=!1}showDropDown(){this.dropdownVisible=!this.dropdownVisible}logout(){this.auth.logout(),this.route.navigate(["/login"])}redirectAnalysis(){this.route.navigate(["analysis"])}redirectInfo(){this.route.navigate(["info"])}redirectAdmin(){this.route.navigate(["admin"])}onBuild(){alert("Fun\xe7\xe3o em desenvolvimento")}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(p.e),t.Y36(u.F0),t.Y36(a.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-header"]],decls:15,vars:1,consts:[[1,"header"],[1,"logo"],["src","./assets/focus_white.png","alt","",3,"click"],[1,"action"],[1,"routes-container"],[1,"routes"],[3,"click"],[1,"user-options"],["src","./assets/user.png","alt","",3,"click"],["id","user-info","class","dropdown",4,"ngIf"],["id","user-info",1,"dropdown"],[1,"img-dropdown"],["src","./assets/user-edit.png","alt",""],["src","./assets/arrow.png","alt",""],["src","./assets/configuration.png","alt",""],["src","./assets/help.png","alt",""],["src","./assets/logout.png","alt",""]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"img",2),t.NdJ("click",function(){return e.redirectInfo()}),t.qZA()(),t.TgZ(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6),t.NdJ("click",function(){return e.redirectInfo()}),t._uU(7,"In\xedcio"),t.qZA(),t.TgZ(8,"li",6),t.NdJ("click",function(){return e.redirectAnalysis()}),t._uU(9,"An\xe1lise"),t.qZA(),t.TgZ(10,"li",6),t.NdJ("click",function(){return e.redirectAdmin()}),t._uU(11,"Painel"),t.qZA()()(),t.TgZ(12,"div",7)(13,"img",8),t.NdJ("click",function(){return e.showDropDown()}),t.qZA(),t.YNc(14,n,25,0,"ul",9),t.qZA()()()),2&r&&(t.xp6(14),t.Q6J("ngIf",e.dropdownVisible))},dependencies:[m.O5],styles:[".header[_ngcontent-%COMP%]{width:100vw;display:flex;justify-content:space-between;align-items:center;padding:.7rem 0;background-color:var(--background-color)}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:5rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6rem;cursor:pointer}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-right:5rem;gap:3rem}.routes-container[_ngcontent-%COMP%]{color:var(--default-text-color);height:100%}.routes[_ngcontent-%COMP%]{list-style-type:none;display:flex;gap:2rem}.routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.6rem 1rem;border-radius:.3rem;cursor:pointer}.user-options[_ngcontent-%COMP%]{display:flex;align-items:center}.user-options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2rem;cursor:pointer}.dropdown[_ngcontent-%COMP%]{list-style-type:none;width:18rem;position:absolute;top:5rem;right:5rem;display:flex;flex-direction:column;gap:.3rem;background-color:#fff;padding:1rem;box-shadow:3px 3px 10px -5px;z-index:999;border-radius:.2rem}.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:.2rem;padding:.5rem;display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer}.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:7rem;text-align:start}.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#cbcdd1}.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1rem;opacity:.7}.img-dropdown[_ngcontent-%COMP%]{padding:.6rem;background-color:#d2cdcd;border-radius:20px;display:flex;justify-content:center;align-items:center}.img-dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.7;width:1.3rem!important}@media screen and (max-width: 600px){.logo[_ngcontent-%COMP%]{padding:.5rem 2rem}.routes-container[_ngcontent-%COMP%]{display:none}.dropdown[_ngcontent-%COMP%]{right:2rem}}"]})}return i})()},3621:(g,d,s)=>{s.d(d,{M:()=>u});var t=s(4946),p=s(9862);let u=(()=>{class a{constructor(n){this.http=n,this.apiGetUser="https://backofficecheck.com.br/focus/php/user-data.php",this.apiGetResult="https://backofficecheck.com.br/focus/php/valid-exec.php",this.apiGetAllResult="https://backofficecheck.com.br/focus/php/get-results.php",this.apiSet="https://backofficecheck.com.br/focus/php/set-result.php",this.apiFilterResult="https://backofficecheck.com.br/focus/php/filter-result.php",this.apiCountResult="https://backofficecheck.com.br/focus/php/count-result.php"}getUserData(n){return this.http.post(this.apiGetUser,{token:n})}setResultResponse(n,o){const i=new Date,_=i.getDate().toString().padStart(2,"0"),c=(i.getMonth()+1).toString().padStart(2,"0"),r=i.getFullYear();return this.http.post(this.apiSet,{id_user:n,result:o,date:_+"/"+c+"/"+r})}getValidExecutation(n,o){return this.http.post(this.apiGetResult,{id_user:o,date:n})}getAllResults(n){return this.http.post(this.apiGetAllResult,{date:n})}getFilteredResults(n,o){return this.http.post(this.apiFilterResult,{date:n,page:o})}countResults(n){return this.http.post(this.apiCountResult,{date:n})}static#t=this.\u0275fac=function(o){return new(o||a)(t.LFG(p.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);