"use strict";(self.webpackChunkau=self.webpackChunkau||[]).push([[202],{8202:(xe,f,r)=>{r.r(f),r.d(f,{CoreModule:()=>we});var b=r(9505),g=r(6983),e=r(7716);let N=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container-fluid","mt-3"]],template:function(n,i){1&n&&(e.TgZ(0,"section",0),e._UZ(1,"router-outlet"),e.qZA())},directives:[g.lC],styles:[""]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-home"]],decls:2,vars:0,consts:[[1,""]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._uU(1," Udemy AU\n"),e.qZA())},styles:[""]}),t})();var l=r(5618),m=r(8295),T=r(9983),h=r(3679);let D=(()=>{class t{constructor(){this.ngModelValue="This is one way ng model value",this.ngModelValue2="This is 2 way ng model value",this.valueFromTemplateVariable=""}ngOnInit(){}onKeyup(n){this.valueFromTemplateVariable=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-component"]],decls:26,vars:5,consts:[["fxLayout","column","fxLayoutAlign","start start",1,"parent"],["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","5px",1,"w-100"],[1,"example-form","w-50"],[1,"example-full-width"],["matInput","",3,"ngModel"],["matInput","",3,"ngModel","ngModelChange"],["matInput","",3,"keyup"],["myInput",""]],template:function(n,i){if(1&n){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e._uU(3," 1) One way binding value using ngModel "),e.qZA(),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div",2),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",1),e.TgZ(10,"div"),e._uU(11," 2) Two way binding value using ngModel "),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.qZA(),e.TgZ(14,"div",2),e.TgZ(15,"mat-form-field",3),e.TgZ(16,"input",5),e.NdJ("ngModelChange",function(u){return i.ngModelValue2=u}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",1),e.TgZ(18,"div"),e._uU(19," 3) Getting value using template variable #variable "),e.qZA(),e.TgZ(20,"div"),e._uU(21),e.qZA(),e.TgZ(22,"div",2),e.TgZ(23,"mat-form-field",3),e.TgZ(24,"input",6,7),e.NdJ("keyup",function(){e.CHM(s);const u=e.MAs(25);return i.onKeyup(u.value)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&n&&(e.xp6(5),e.hij(" Variable value: ",i.ngModelValue," "),e.xp6(3),e.Q6J("ngModel",i.ngModelValue),e.xp6(5),e.hij(" Variable value: ",i.ngModelValue2," "),e.xp6(3),e.Q6J("ngModel",i.ngModelValue2),e.xp6(5),e.hij(" Variable value: ",i.valueFromTemplateVariable," "))},directives:[l.xw,l.Wh,l.SQ,m.KE,T.Nt,h.Fj,h.JJ,h.On],styles:["input[_ngcontent-%COMP%]{width:100%}.parent[_ngcontent-%COMP%]{width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),t})();var a=r(8583),_=r(4453),C=r(9374),A=r(4514);function M(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Cool Text "),e.qZA())}function I(t,o){1&t&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2," Cool Text "),e.qZA(),e.BQk())}function F(t,o){1&t&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2," Cool Text "),e.qZA(),e.BQk())}function Q(t,o){1&t&&e._uU(0," No text right now\n")}let j=(()=>{class t{constructor(){this.showText=!1}ngOnInit(){}toggleShow(){this.showText=!this.showText}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["selector-name"]],decls:26,vars:5,consts:[["fxLayout","row","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","5px",1,"w-100"],[4,"ngIf"],[1,"example-form","w-50"],["nz-button","",3,"click"],[4,"ngIf","ngIfElse"],["noText",""]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e._uU(3," 1) Using Ng If with div "),e.qZA(),e.YNc(4,M,2,0,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e.NdJ("click",function(){return i.toggleShow()}),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",1),e.TgZ(9,"div"),e._uU(10," 2) Using Ng If with ng-container "),e.qZA(),e.YNc(11,I,3,0,"ng-container",2),e.TgZ(12,"div",3),e.TgZ(13,"div",3),e.TgZ(14,"button",4),e.NdJ("click",function(){return i.toggleShow()}),e._uU(15,"Toggle Text"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",1),e.TgZ(17,"div"),e._uU(18," 3) Using Ng If with else block "),e.qZA(),e.YNc(19,F,3,0,"ng-container",5),e.TgZ(20,"div",3),e.TgZ(21,"div",3),e.TgZ(22,"button",4),e.NdJ("click",function(){return i.toggleShow()}),e._uU(23,"Toggle Text"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(24,Q,1,0,"ng-template",null,6,e.W1O)),2&n){const s=e.MAs(25);e.xp6(4),e.Q6J("ngIf",i.showText),e.xp6(3),e.hij("Toggle Text ",i.showText,""),e.xp6(4),e.Q6J("ngIf",i.showText),e.xp6(8),e.Q6J("ngIf",i.showText)("ngIfElse",s)}},directives:[l.xw,l.Wh,l.SQ,a.O5,_.ix,C.dQ,A.w],styles:[""]}),t})();var J=r(480);function L(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"nz-alert",6),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.MGl("nzMessage","You picked ",n,""),e.Q6J("nzType",n)}}function k(t,o){if(1&t&&(e.ynx(0),e.YNc(1,L,2,2,"div",5),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngSwitchCase",n)}}function V(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"nz-alert",7),e.qZA())}let H=(()=>{class t{constructor(){this.options=["success","info","warning"],this.randResult=-1}ngOnInit(){}toggle(){Math.random(),this.randResult=Math.floor(3*Math.random()),this.choice=this.options[this.randResult]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["selector-name"]],decls:9,vars:3,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],["nz-button","",3,"click"],[3,"ngSwitch"],[4,"ngFor","ngForOf"],[4,"ngSwitchDefault"],[4,"ngSwitchCase"],[3,"nzType","nzMessage"],["nzType","info","nzMessage","No selection is made... default"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"button",1),e.NdJ("click",function(){return i.toggle()}),e._uU(3,"Make a random selection"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",2),e.YNc(7,k,2,1,"ng-container",3),e.YNc(8,V,2,0,"div",4),e.qZA(),e.qZA()),2&n&&(e.xp6(5),e.Oqu(i.randResult),e.xp6(1),e.Q6J("ngSwitch",i.choice),e.xp6(1),e.Q6J("ngForOf",i.options))},directives:[l.xw,l.Wh,l.SQ,_.ix,C.dQ,A.w,a.RF,a.sg,a.ED,a.n9,J.r],styles:[""]}),t})();var y=r(8030);let P=(()=>{class t{constructor(){this.classArray=[],this.styleObj={color:"red","font-size.em":"3"}}ngOnInit(){this.classArray.push("text-primary","border border-success","font-weight-bold")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["selector-name"]],decls:14,vars:6,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],[1,"ml-3"],[1,"card","mt-3",3,"ngClass"],[1,"mt-3",3,"ngStyle"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._uU(2," Ng Class Array: "),e.TgZ(3,"span",1),e._uU(4),e.qZA(),e.TgZ(5,"div",2),e._uU(6," Cool Text "),e.qZA(),e.qZA(),e.TgZ(7,"div"),e._uU(8," Ng Style "),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"json"),e.qZA(),e.TgZ(12,"div",3),e._uU(13," Cool Text "),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Oqu(i.classArray),e.xp6(1),e.Q6J("ngClass",i.classArray),e.xp6(5),e.Oqu(e.lcZ(11,4,i.styleObj)),e.xp6(2),e.Q6J("ngStyle",i.styleObj))},directives:[l.xw,l.Wh,l.SQ,a.mk,y.oO,a.PC,y.Zl],pipes:[a.Ts],styles:[".card[_ngcontent-%COMP%]{padding:30px;font-size:40px}"]}),t})();const E=["madeBy"];let q=(()=>{class t{constructor(){this.date=0}ngOnInit(){}updateDate(){this.date=(new Date).getTime()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-viewchild-child1"]],viewQuery:function(n,i){if(1&n&&e.Gf(E,5),2&n){let s;e.iGM(s=e.CRH())&&(i.madeBy=s.first)}},decls:8,vars:2,consts:[[1,""],[1,"border"],[1,"border","success","mb-1"],["madeBy",""],[1,"mt-2"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2,3),e._uU(5," Made by KQ (this div can not be query'd from parent level) "),e.qZA(),e.TgZ(6,"div",4),e._uU(7),e.qZA(),e.qZA()),2&n){const s=e.MAs(4);let c;e.xp6(2),e.hij(" Hello I am Child One Component. Current time is ",i.date," "),e.xp6(5),e.hij(" Made By element ref: ",null!==(c=s)&&void 0!==c?c:"Undefined"," (from current level) ")}},styles:[""]}),t})();const G=["madeBy"];let w=(()=>{class t{constructor(){this.date=0}ngOnInit(){}updateDate(){this.date=(new Date).getTime()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-viewchild-child2"]],viewQuery:function(n,i){if(1&n&&e.Gf(G,5),2&n){let s;e.iGM(s=e.CRH())&&(i.madeBy=s.first)}},decls:3,vars:1,consts:[[1,""],[1,"border"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.hij(" Hello I am Child Two Component. Current time is ",i.date," "))},styles:[""]}),t})();var d=r(1095);const B=["madeBy"];function Y(t,o){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}function R(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-core-viewchild-child2"),e.qZA())}function X(t,o){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}let z=(()=>{class t{constructor(){this.viewSequence=[],this.childOneExist=!1,this.childTwos=["1","2"],this.child2Sequence=[],this.viewSequence.push("Constructor. Child One Component status:  "+this.childOneComp)}ngOnInit(){this.viewSequence.push("Ng On Init. Child One Component status:  "+this.childOneComp)}ngAfterViewInit(){var n,i;this.viewSequence.push("Ng After View Init. Child One Component status:  "+this.childOneComp),this.child2Sequence.push("View Children, children count: "+(null===(n=this.childrenTwos)||void 0===n?void 0:n.length)),null===(i=this.childrenTwos)||void 0===i||i.changes.subscribe(s=>{this.child2Sequence.push("Changes occured for ViewChildren query list"),console.log(this.childrenTwos,this.child2Sequence)})}ngAfterViewChecked(){}updateChildOneDate(){this.childOneComp&&this.childOneComp.updateDate()}addAChildTwo(){this.childTwos.push("AA")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-viewchild"]],viewQuery:function(n,i){if(1&n&&(e.Gf(q,5),e.Gf(B,5),e.Gf(w,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.childOneComp=s.first),e.iGM(s=e.CRH())&&(i.madeBy=s.first),e.iGM(s=e.CRH())&&(i.childrenTwos=s)}},decls:33,vars:4,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],[1,"font-weight-bold","mb-2"],[4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"click"],[1,"mt-3"],[1,"w-100"],["fxLayout","row"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3," Life Cycle Status for View Child: "),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,Y,2,1,"li",2),e.qZA(),e.qZA(),e.TgZ(6,"div"),e._uU(7," Child One is a component. Update its date property by pressing the button. "),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"button",3),e.NdJ("click",function(){return i.updateChildOneDate()}),e._uU(10," Updare Child One's date property"),e.qZA(),e.TgZ(11,"div"),e._uU(12," This will only update the first one because ViewChild() will point to first matching selector. "),e.qZA(),e.qZA(),e.TgZ(13,"div"),e.TgZ(14,"div"),e._uU(15," 1/2 Child One Component "),e.qZA(),e._UZ(16,"app-core-viewchild-child1"),e.TgZ(17,"div",4),e._uU(18," 2/2 Child One Component "),e.qZA(),e._UZ(19,"app-core-viewchild-child1"),e.qZA(),e.TgZ(20,"div"),e._uU(21),e.qZA(),e._UZ(22,"hr",5),e.TgZ(23,"div",4),e._uU(24," View Children: "),e.qZA(),e.TgZ(25,"div"),e._uU(26," Children component: "),e.qZA(),e.TgZ(27,"button",3),e.NdJ("click",function(){return i.addAChildTwo()}),e._uU(28," Add another child two component"),e.qZA(),e.TgZ(29,"div",6),e.YNc(30,R,2,0,"div",2),e.qZA(),e.TgZ(31,"div",4),e.YNc(32,X,2,1,"div",2),e.qZA(),e.qZA()),2&n){let s;e.xp6(5),e.Q6J("ngForOf",i.viewSequence),e.xp6(16),e.hij(" Made By element ref: ",null!==(s=i.madeBy)&&void 0!==s?s:"Undefined"," (from parent level) "),e.xp6(9),e.Q6J("ngForOf",i.childTwos),e.xp6(2),e.Q6J("ngForOf",i.child2Sequence)}},directives:[l.xw,l.Wh,l.SQ,a.sg,d.lW,q,w],styles:[""]}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-value-display"]],inputs:{value:"value"},decls:2,vars:1,template:function(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",i.value,"\n"))},styles:[""]}),t})();const W=["interest"];function K(t,o){if(1&t&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}const $=[[["app-core-value-display",8,"name"]],[["",8,"age"]],[["","userinterest",""]],"*"],ee=["app-core-value-display.name",".age","[userinterest]","*"];let te=(()=>{class t{constructor(){this.log=[]}ngOnInit(){var n;this.log.push("After ng on init, content child of ValueDisplayComponent is: "+this.contentChildA+", value is:"+(null===(n=this.contentChildA)||void 0===n?void 0:n.value))}ngAfterContentInit(){var n,i;this.log.push("After content init, content child of ValueDisplayComponent is: "+this.contentChildA+", value is: "+(null===(n=this.contentChildA)||void 0===n?void 0:n.value)),this.log.push("After content init, ContentChildren for ValueDisplayComponent found: "+(null===(i=this.displayChildren)||void 0===i?void 0:i.length)+" "),this.interestChildren&&this.interestChildren.forEach(s=>{this.log.push("After content init, ContentChildren for #interest found: "+s.nativeElement.outerHTML+" ")})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-user-a"]],contentQueries:function(n,i,s){if(1&n&&(e.Suo(s,v,5),e.Suo(s,v,4),e.Suo(s,W,4)),2&n){let c;e.iGM(c=e.CRH())&&(i.contentChildA=c.first),e.iGM(c=e.CRH())&&(i.displayChildren=c),e.iGM(c=e.CRH())&&(i.interestChildren=c)}},ngContentSelectors:ee,decls:27,vars:1,consts:[[1,"parent"],[1,"mb-3"],["fxLayout","row"],[1,"mt-3"],["class","mt-1",4,"ngFor","ngForOf"],[1,"mt-1"]],template:function(n,i){1&n&&(e.F$t($),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2," I am a child component displaying value that is projected from parent. "),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"div"),e._uU(5," User Name (selected by selector name and css class: app-core-value-display.name): "),e.qZA(),e.TgZ(6,"div"),e.Hsn(7),e.qZA(),e.qZA(),e.TgZ(8,"div",2),e.TgZ(9,"div"),e._uU(10," User Age (selected by css class: .age): "),e.qZA(),e.TgZ(11,"div"),e.Hsn(12,1),e.qZA(),e.qZA(),e.TgZ(13,"div",2),e.TgZ(14,"div"),e._uU(15," User Interest (selected by reference name: userinterest): "),e.qZA(),e.TgZ(16,"div"),e.Hsn(17,2),e.qZA(),e.qZA(),e.TgZ(18,"div",2),e.TgZ(19,"div"),e._uU(20," Other info (selected by catch all): "),e.qZA(),e.TgZ(21,"div"),e.Hsn(22,3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",3),e.TgZ(24,"div"),e._uU(25," Events: "),e.qZA(),e.YNc(26,K,2,1,"div",4),e.qZA()),2&n&&(e.xp6(26),e.Q6J("ngForOf",i.log))},directives:[l.xw,a.sg],styles:[".parent[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px}"]}),t})(),ne=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-projection"]],decls:39,vars:4,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],["fxLayout","row","fxLayoutGap","20px"],[1,"example-full-width"],["matInput","","placeholder","Ex. Kevin","value","Kevin"],["userName",""],["matInput","","placeholder","Ex. 21","value","19"],["userAge",""],["matInput","","placeholder","Ex. cars","value","Cars"],["userInterest",""],["matInput","","placeholder","Ex. cars","value","Cool"],["other",""],[1,"name",3,"value"],[1,"age",3,"value"],["userinterest",""],["interest",""]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._uU(2," Project user information using ng-content projection "),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div"),e.TgZ(5,"div"),e.TgZ(6,"mat-form-field",2),e.TgZ(7,"mat-label"),e._uU(8,"Enter user name"),e.qZA(),e._UZ(9,"input",3,4),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"mat-form-field",2),e.TgZ(13,"mat-label"),e._uU(14,"Enter user age"),e.qZA(),e._UZ(15,"input",5,6),e.qZA(),e.qZA(),e.TgZ(17,"div"),e.TgZ(18,"mat-form-field",2),e.TgZ(19,"mat-label"),e._uU(20,"Enter user interest"),e.qZA(),e._UZ(21,"input",7,8),e.qZA(),e.qZA(),e.TgZ(23,"div"),e.TgZ(24,"mat-form-field",2),e.TgZ(25,"mat-label"),e._uU(26,"Enter other info"),e.qZA(),e._UZ(27,"input",9,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div"),e.TgZ(30,"app-core-user-a"),e._UZ(31,"app-core-value-display",11),e._UZ(32,"app-core-value-display",12),e.TgZ(33,"div",13,14),e._uU(35),e.qZA(),e.TgZ(36,"div",null,14),e._uU(38),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const s=e.MAs(10),c=e.MAs(16),u=e.MAs(22),Ue=e.MAs(28);e.xp6(31),e.Q6J("value",s.value),e.xp6(1),e.Q6J("value",c.value),e.xp6(3),e.hij(" ",u.value," "),e.xp6(3),e.hij(" ",Ue.value," ")}},directives:[l.xw,l.Wh,l.SQ,m.KE,m.hX,T.Nt,te,v],styles:[""]}),t})();function ie(t,o){if(1&t&&(e._UZ(0,"app-template-pic",6),e.TgZ(1,"div",7),e._uU(2),e.qZA()),2&t){const i=o.version;e.Q6J("url",o.payload),e.xp6(2),e.hij(" Version (",i,") ")}}function oe(t,o){if(1&t&&(e._UZ(0,"app-template-desc",8),e.TgZ(1,"div",7),e._uU(2),e.qZA()),2&t){const i=o.version;e.Q6J("userDesc",o.payload),e.xp6(2),e.hij(" Version (",i,") ")}}function se(t,o){if(1&t&&(e.ynx(0),e.YNc(1,ie,3,2,"ng-template",null,3,e.W1O),e.YNc(3,oe,3,2,"ng-template",null,4,e.W1O),e.TgZ(5,"app-template-user",5),e._uU(6),e.qZA(),e.BQk()),2&t){const n=o.$implicit,i=o.index,s=e.MAs(2),c=e.MAs(4);e.xp6(5),e.Q6J("userPicTpl",s)("userDescTpl",c)("user",n),e.xp6(1),e.hij(" ",i+1+":"," ")}}let U=(()=>{class t{constructor(){this.users=[{name:"Kevin",picUrl:"111",desc:"Software dev",registered:!0},{name:"Ben",picUrl:"222",desc:"System dev",registered:!1},{name:"Jack",picUrl:"333",desc:"Devops dev",registered:!0}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template"]],decls:7,vars:1,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent"],[1,"font-weight-bold","mb-2"],[4,"ngFor","ngForOf"],["userPic",""],["userDesc",""],[3,"userPicTpl","userDescTpl","user"],[3,"url"],[1,"text-muted"],[3,"userDesc"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3," Using ng-template via templateOutlet "),e.qZA(),e.TgZ(4,"div"),e._uU(5," The user pic and user desc components are templates being passed into user component. "),e.qZA(),e.qZA(),e.YNc(6,se,7,4,"ng-container",2),e.qZA()),2&n&&(e.xp6(6),e.Q6J("ngForOf",i.users))},styles:[""]}),t})(),Z=(()=>{class t{constructor(n,i){this.renderer=n,this.el=i,this.highlightOn=!1}onMouseEnter(n){this.highlightOn=!0,this.renderer.addClass(this.el.nativeElement,"highlight"),this.renderer.addClass(this.el.nativeElement,"entered")}onMouseLeave(n){this.highlightOn=!1,this.renderer.removeClass(this.el.nativeElement,"highlight")}ngOnChanges(n){}toggleBorder(){this.highlightOn?this.renderer.removeClass(this.el.nativeElement,"highlight"):this.renderer.addClass(this.el.nativeElement,"highlight"),this.highlightOn=!this.highlightOn}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Qsj),e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","highlight",""]],hostBindings:function(n,i){1&n&&e.NdJ("mouseenter",function(c){return i.onMouseEnter(c)})("mouseleave",function(c){return i.onMouseLeave(c)})},exportAs:["hl"],features:[e.TTD]}),t})(),le=(()=>{class t{constructor(n,i){this.templateRef=n,this.vc=i,console.log("created")}ngOnChanges(n){console.log(this.unless,"  value"),this.unless?this.vc.clear():this.vc.createEmbeddedView(this.templateRef)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Rgc),e.Y36(e.s_b))},t.\u0275dir=e.lG2({type:t,selectors:[["","ngxUnless",""]],inputs:{unless:["ngxUnless","unless"]},features:[e.TTD]}),t})();const ce=["hlDirective"],x=["content"];function re(t,o){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}function ae(t,o){1&t&&(e.TgZ(0,"div",7),e._uU(1," Only show unless... "),e.qZA())}function pe(t,o){1&t&&(e.TgZ(0,"div",7),e._uU(1," Only show unless... "),e.qZA())}let ue=(()=>{class t{constructor(){this.highlight=!1,this.logs=[],this.unless=!0,this.unless2="dadada"}ngOnInit(){this.logs.push("Init.. highlight directive is: "+this.highlightDirective)}manuallyHighlight(){this.highlightDirective&&this.highlightDirective.toggleBorder()}ngAfterViewInit(){var n;this.logs.push("After view init.. highlight directive is: "+this.highlightDirective),console.log(this.highlightDirective),console.log(null===(n=this.displayContent)||void 0===n?void 0:n.nativeElement),console.log(this.highlightDirectiveThruDiv)}toggleUnless(){this.unless=!this.unless}toggleUnless2(){this.unless2="dadada"===this.unless2?0:"dadada"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-directives"]],viewQuery:function(n,i){if(1&n&&(e.Gf(ce,5),e.Gf(x,5,Z),e.Gf(x,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.highlightDirective=s.first),e.iGM(s=e.CRH())&&(i.highlightDirectiveThruDiv=s.first),e.iGM(s=e.CRH())&&(i.displayContent=s.first)}},decls:28,vars:3,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent","mb-5"],[1,"font-weight-bold","mb-2"],["highlight","",1,"my-5","content"],["hlDirective","hl","content",""],["mat-stroked-button","","color","primary",3,"click"],[4,"ngFor","ngForOf"],["class","my-5 content",4,"ngxUnless"],[1,"my-5","content"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3," Creating own directives and using view child to get directive instance "),e.qZA(),e.TgZ(4,"div",2,3),e._uU(7," Mouse over me to highlight "),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"button",4),e.NdJ("click",function(){return i.manuallyHighlight()}),e._uU(10,"Manually Highlight"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"ul"),e.YNc(13,re,2,1,"li",5),e.qZA(),e.qZA(),e.TgZ(14,"div"),e.TgZ(15,"div",1),e._uU(16," Creating own structrual directives called ngxUnless "),e.qZA(),e.YNc(17,ae,2,0,"div",6),e.TgZ(18,"div"),e.TgZ(19,"button",4),e.NdJ("click",function(){return i.toggleUnless()}),e._uU(20,"Toggle unless"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div"),e.TgZ(22,"div",1),e._uU(23," Creating own structrual directives called ngxUnless "),e.qZA(),e.YNc(24,pe,2,0,"div",6),e.TgZ(25,"div"),e.TgZ(26,"button",4),e.NdJ("click",function(){return i.toggleUnless2()}),e._uU(27,"Toggle unless"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(13),e.Q6J("ngForOf",i.logs),e.xp6(4),e.Q6J("ngxUnless",i.unless),e.xp6(7),e.Q6J("ngxUnless",i.unless2))},directives:[l.xw,l.Wh,l.SQ,Z,d.lW,a.sg,le],styles:[".content[_ngcontent-%COMP%]{height:5rem;border:1px solid #ccc}.highlight[_ngcontent-%COMP%]{border:3px solid red}"]}),t})();const de=["*"];let ge=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-encap-child"]],ngContentSelectors:de,decls:4,vars:0,consts:[[1,"title"],[1,"content"]],template:function(n,i){1&n&&(e.F$t(),e.TgZ(0,"div",0),e._uU(1," I am a Child Component.\n"),e.qZA(),e.TgZ(2,"div",1),e.Hsn(3),e.qZA())},styles:["[_nghost-%COMP%]{color:#fff}.title[_ngcontent-%COMP%]{color:#000}  .child-parent .child-title{background-color:#00f}  .child-parent .child-content{background-color:green}  .child-parent .title{color:#000}.parent[_nghost-%COMP%]   .content[_ngcontent-%COMP%]     .footer-content, .parent   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]     .footer-content{font-size:25px;color:#000}"]}),t})(),me=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-css-encap"]],decls:20,vars:0,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent","mb-5"],[1,"font-weight-bold","mb-2"],["highlight","",1,"my-5","content"],["hlDirective","hl","content",""],[1,"child-parent"],[1,"title","mb-2"],[1,"child-title","mb-2"],[1,"child-content","mb-2"],[1,"footer-content"],[1,"content","mt-3"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3," Using CSS Encapsulation modes to apply css styles for projected content "),e.qZA(),e.TgZ(4,"div",2,3),e._uU(7," Content below is projected into the child component "),e.qZA(),e.qZA(),e.TgZ(8,"app-encap-child"),e.TgZ(9,"div",4),e.TgZ(10,"div",5),e._uU(11," My color is set inside child.component.scss, not parent component "),e.qZA(),e.TgZ(12,"div",6),e._uU(13," This text is projected into the Child Component from parent component. "),e.qZA(),e.TgZ(14,"div",7),e._uU(15," Brown Fox Jumped Over White Rabbit. "),e.qZA(),e.TgZ(16,"div",8),e._uU(17," Footer (css set using :host-context) "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",9),e._uU(19," More content outside the child, not affected because of host-content "),e.qZA(),e.qZA())},directives:[l.xw,l.Wh,l.SQ,Z,ge],styles:[""]}),t})(),p=(()=>{class t{constructor(){this.userName="Bekah"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),he=(()=>{class t{constructor(n){this.ns=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services-child2"]],decls:9,vars:1,consts:[["mat-stroked-button","",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div"),e._uU(2," Using top level service "),e.qZA(),e._uU(3),e.TgZ(4,"div"),e.TgZ(5,"button",0),e.NdJ("click",function(){return i.ns.userName="Frank"}),e._uU(6,"Change name to Frank"),e.qZA(),e.TgZ(7,"button",0),e.NdJ("click",function(){return i.ns.userName="Jane"}),e._uU(8,"Change name to Jane"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.hij(" Service's user name: ",i.ns.userName," "))},directives:[d.lW],styles:[""]}),t})(),ve=(()=>{class t{constructor(n){this.ns=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services-child"]],features:[e._Bn([p])],decls:11,vars:1,consts:[[1,"my-2"],["mat-stroked-button","",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._uU(2," Child component with their own provider for service. "),e.qZA(),e._uU(3),e.TgZ(4,"div"),e.TgZ(5,"button",1),e.NdJ("click",function(){return i.ns.userName="Kevin"}),e._uU(6,"Change name to Kevin"),e.qZA(),e.TgZ(7,"button",1),e.NdJ("click",function(){return i.ns.userName="Bekah"}),e._uU(8,"Change name to Bekah"),e.qZA(),e.qZA(),e.TgZ(9,"div"),e._uU(10," Changing the name will not affect other components with their own instance. "),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.hij(" Service's user name: ",i.ns.userName," "))},directives:[d.lW],styles:[""]}),t})();const Ze=[{path:"",component:N,children:[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:S,data:{pageTitle:"Overview"}},{path:"component",component:D,data:{pageTitle:"Components"}},{path:"ngif",component:j,data:{pageTitle:"Ng If"}},{path:"ngswitch",component:H,data:{pageTitle:"Ng Switch"}},{path:"ngstylengclass",component:P,data:{pageTitle:"Ng Style"}},{path:"viewchild",component:z,data:{pageTitle:"View Child"}},{path:"projection",component:ne,data:{pageTitle:"Projection"}},{path:"template",component:U,data:{pageTitle:"Template"}},{path:"directives",component:ue,data:{pageTitle:"Directives"}},{path:"encap",component:me,data:{pageTitle:"Css Encap"}},{path:"services",component:(()=>{class t{constructor(n){this.ns=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services"]],decls:16,vars:1,consts:[["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","30px",1,"parent","mb-5"],[1,"font-weight-bold","mb-2"],[1,"my-5","content"],[1,"mb-2"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3," Services Hierarchy "),e.qZA(),e.TgZ(4,"div",2),e._uU(5," Services bubbles up in a hierarchical way. "),e.TgZ(6,"div"),e._uU(7," If the service is not found at lowest level, it will go up till it reaches the top. "),e.qZA(),e.qZA(),e.TgZ(8,"div",3),e.TgZ(9,"div"),e._uU(10," Service injected via module provider. Using top level service "),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"div"),e._UZ(13,"app-services-child2"),e.qZA(),e.qZA(),e._UZ(14,"app-services-child"),e._UZ(15,"app-services-child"),e.qZA()),2&n&&(e.xp6(11),e.hij(" Service's user name: ",i.ns.userName," "))},directives:[l.xw,l.Wh,l.SQ,he,ve],styles:[""]}),t})(),data:{pageTitle:"Services"}}]}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Ze)],g.Bz]}),t})(),Te=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-desc"]],inputs:{userDesc:"userDesc"},decls:2,vars:1,template:function(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",i.userDesc,"\n"))},styles:[""]}),t})(),_e=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-pic"]],inputs:{url:"url"},decls:2,vars:1,template:function(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n&&(e.xp6(1),e.hij(" Picture Url: ",i.url,"\n"))},styles:[""]}),t})();function Ce(t,o){1&t&&e.GkF(0)}function Ae(t,o){1&t&&e.GkF(0)}const O=function(t){return{payload:t,version:"1"}},ye=["*"];let qe=(()=>{class t{constructor(){this.userPicTpl=null,this.userDescTpl=null}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-user"]],inputs:{userPicTpl:"userPicTpl",userDescTpl:"userDescTpl",user:"user"},ngContentSelectors:ye,decls:5,vars:8,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){1&n&&(e.F$t(),e.TgZ(0,"div"),e._uU(1," User "),e.Hsn(2,0,["[select]","userIndex"]),e.qZA(),e.YNc(3,Ce,1,0,"ng-container",0),e.YNc(4,Ae,1,0,"ng-container",0)),2&n&&(e.xp6(3),e.Q6J("ngTemplateOutlet",i.userPicTpl)("ngTemplateOutletContext",e.VKq(4,O,null==i.user?null:i.user.picUrl)),e.xp6(1),e.Q6J("ngTemplateOutlet",i.userDescTpl)("ngTemplateOutletContext",e.VKq(6,O,null==i.user?null:i.user.desc)))},directives:[a.tP],styles:[""]}),t})(),we=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[p],imports:[[fe,b.n]]}),t})();e.B6R(U,[l.xw,l.Wh,l.SQ,a.sg,_e,Te,qe],[])}}]);