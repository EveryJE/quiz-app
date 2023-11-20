"use strict";(self.webpackChunkkoala_quiz=self.webpackChunkkoala_quiz||[]).push([[418],{1418:(Ct,v,a)=>{a.r(v),a.d(v,{QuizPageComponent:()=>Mt});var p=a(6814),A=a(6321),I=a(4825),f=a(617),t=a(5879),_=(a(2495),a(2831),a(3680)),y=(a(7394),a(3019),a(8645),a(7131)),P=a(6385);a(7849),a(6028),a(6223),a(9773);let gt=(()=>{class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#i=this.\u0275mod=t.oAB({type:c});static#e=this.\u0275inj=t.cJS({imports:[y.Q8,p.ez,_.BQ,_.si,_.us,P.t]})}return c})();var pt=a(9862);let _t=(()=>{class c{constructor(i){this.http=i}getSampleuestions(i="angular"){return this.http.get(i="assets/questions/"+i+".json")}static#t=this.\u0275fac=function(e){return new(e||c)(t.LFG(pt.eN))};static#i=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),bt=(()=>{class c{constructor(){}displayTime(i){let e,d,l;return e=Math.floor(i/60)%60,d=i%60,l=Math.floor(i/3600)%12,`${l}:${e}:${d}`}static#t=this.\u0275fac=function(e){return new(e||c)};static#i=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var wt=a(2058),ut=a(9737);function xt(c,n){if(1&c){const i=t.EpF();t.TgZ(0,"div",24),t.NdJ("click",function(){const l=t.CHM(i).$implicit,o=t.oxw().$implicit,m=t.oxw();return t.KtG(m.checkAnswer(l.key,o))}),t.TgZ(1,"div"),t._UZ(2,"input",25),t.qZA(),t.TgZ(3,"label",26),t._uU(4),t.qZA()()}if(2&c){const i=n.$implicit,e=t.oxw().$implicit;t.Q6J("id",e.number+"-"+i),t.xp6(2),t.Q6J("id",e.number+"-"+i.key)("name",e.number),t.xp6(1),t.Q6J("for",e.number+"-"+i.key),t.xp6(1),t.AsE(" ",i.key,". ",i.value," ")}}function vt(c,n){if(1&c&&(t.TgZ(0,"div",20)(1,"p",21),t._uU(2),t.qZA(),t.TgZ(3,"div",22),t.YNc(4,xt,5,6,"div",23),t.ALo(5,"keyvalue"),t.qZA()()),2&c){const i=n.$implicit,e=t.oxw();t.Q6J("hidden",i.number!==e.currentQuestionNumber),t.xp6(2),t.AsE("",i.number,". ",i.question,""),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,4,i.options))}}const ft=function(c){return{"bg-[var(--tertiary)] text-white":c}};function kt(c,n){if(1&c){const i=t.EpF();t.TgZ(0,"span",27),t.NdJ("click",function(){const l=t.CHM(i).$implicit,o=t.oxw();return t.KtG(o.jumpToQuestion(l.questionNumber))}),t._uU(1),t.qZA()}if(2&c){const i=n.$implicit;t.Q6J("ngClass",t.VKq(2,ft,i.tackled)),t.xp6(1),t.Oqu(i.questionNumber)}}const yt=function(c){return{"text-red-600":c}};let Mt=(()=>{class c{constructor(i,e,d,l){this.question=i,this.extraFunctions=e,this.router=d,this.userDetails=l,this.quizId=this.router.snapshot.params.id,this.quizLogo="assets/frameworkImg/"+this.quizId+".png",this.userName="",this.questions=[],this.currentQuestionNumber=1,this.totalQuestions=0,this.points=0,this.timeLeft=0,this.showTimeLeft="",this.ansProgress=[],this.qtnStatus=[],this.quizSubmited=!1,this.displayTime=this.extraFunctions.displayTime}ngOnInit(){this.userName=this.userDetails.getUserName(),this.getAllQuestions(),this.startCounter()}getAllQuestions(){this.question.getSampleuestions(this.quizId).subscribe(i=>{this.qtnStatus=[],this.ansProgress=[],this.questions=i,this.totalQuestions=this.questions.length;for(let e=1;e<=this.totalQuestions;e++)this.qtnStatus.push({questionNumber:e,tackled:!1});console.log(this.qtnStatus)})}startCounter(){this.timeLeft=600,this.interval=function T(c=0,n=A.z){return c<0&&(c=0),(0,I.H)(c,c,n)}(1e3).subscribe(i=>{this.timeLeft--,this.showTimeLeft=this.displayTime(this.timeLeft)})}nextQuestion(){this.currentQuestionNumber<this.totalQuestions&&this.currentQuestionNumber++,console.log(this.ansProgress),console.log("this.currentQuestionNumber: ",this.currentQuestionNumber,"this.totalQuestions: ",this.totalQuestions)}finishQuiz(){this.quizSubmited=!0,console.log("quiz hidden ",this.quizSubmited)}prevQuestion(){this.currentQuestionNumber>1&&this.currentQuestionNumber--,console.log(this.ansProgress)}refQuestion(){confirm("Do you still want to refresh quiz? .this will clear all your quiz progress")&&(this.currentQuestionNumber=1,this.timeLeft=600,this.points=0,this.getAllQuestions())}jumpToQuestion(i){this.currentQuestionNumber=i}checkAnswer(i,e){const d=this.ansProgress.find(o=>o.questionNumber===e.number),l=this.qtnStatus.find(o=>o.questionNumber==e.number);i===e.answer?d?d.points=1:this.ansProgress.push({questionNumber:e.number,points:1}):d?d.points=0:this.ansProgress.push({questionNumber:e.number,points:0}),l&&(l.tackled=!0),this.points=this.ansProgress.reduce((o,m)=>o+m.points,0)}static#t=this.\u0275fac=function(e){return new(e||c)(t.Y36(_t),t.Y36(bt),t.Y36(wt.gz),t.Y36(ut.n))};static#i=this.\u0275cmp=t.Xpm({type:c,selectors:[["quiz-quiz-page"]],standalone:!0,features:[t.jDz],decls:39,vars:13,consts:[[1,"section"],[1,"quiz-description"],[1,"rec-top"],["alt","Image Description",1,"quizLogo",3,"src"],[1,"devider"],[3,"ngClass"],[1,"rec-warns"],[1,"qtn-badge"],[1,"badge-left"],[1,"flex","flex-row","gap-3"],["class","w-[100vw] md:w-[50vw] p-5",3,"hidden",4,"ngFor","ngForOf"],[1,"question-nav"],[1,"nav-btn","btn",3,"click"],[1,"nav-btn",3,"click"],[3,"hidden"],[3,"hidden","click"],[1,"text-[1rem]"],[1,"badge-right","p-5"],[1,"inner-container"],["class","justify-center items-center flex w-8 h-8 ring-1 ring-white active:scale-80 btn",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"w-[100vw]","md:w-[50vw]","p-5",3,"hidden"],[1,"text-lg","md:text-[1.5rem]"],[1,"flex","gap-2","flex-col","py-2"],["class","flex items-start gap-2  md:text-xl w-fit",3,"id","click",4,"ngFor","ngForOf"],[1,"flex","items-start","gap-2","md:text-xl","w-fit",3,"id","click"],["type","radio",1,"appearance-none","border","border-gray-300","rounded-full","h-5","w-5","checked:bg-[var(--tertiary)]","checked:border-transparent","cursor-pointer",3,"id","name"],[1,"text-[--text-300]","cursor-pointer","w-fit",3,"for"],[1,"justify-center","items-center","flex","w-8","h-8","ring-1","ring-white","active:scale-80","btn",3,"ngClass","click"]],template:function(e,d){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"div"),t._uU(5),t.qZA()(),t._UZ(6,"div",4),t.TgZ(7,"div",5)(8,"div",6)(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14," time left\u231a:"),t.TgZ(15,"span",5),t._uU(16),t.qZA()()()(),t._UZ(17,"div",4),t.TgZ(18,"div",7)(19,"div",8)(20,"div",9),t.YNc(21,vt,6,6,"div",10),t.qZA(),t.TgZ(22,"div",11)(23,"div",12),t.NdJ("click",function(){return d.prevQuestion()}),t.TgZ(24,"mat-icon"),t._uU(25,"skip_previous"),t.qZA()(),t.TgZ(26,"div",13),t.NdJ("click",function(){return d.refQuestion()}),t.TgZ(27,"mat-icon"),t._uU(28,"autorenew"),t.qZA()(),t.TgZ(29,"div",12),t.NdJ("click",function(){return d.nextQuestion()}),t.TgZ(30,"div",14)(31,"mat-icon"),t._uU(32,"skip_next"),t.qZA()(),t.TgZ(33,"div",15),t.NdJ("click",function(){return d.finishQuiz()}),t.TgZ(34,"p",16),t._uU(35,"Finish"),t.qZA()()()()(),t.TgZ(36,"div",17)(37,"div",18),t.YNc(38,kt,2,4,"span",19),t.qZA()()()()()),2&e&&(t.xp6(3),t.s9C("src",d.quizLogo,t.LSH),t.xp6(2),t.hij("welcome ",d.userName,""),t.xp6(5),t.hij("point :",d.points,""),t.xp6(2),t.AsE("question ",d.currentQuestionNumber," out of ",d.totalQuestions,""),t.xp6(3),t.Q6J("ngClass",t.VKq(11,yt,d.timeLeft<590)),t.xp6(1),t.Oqu(d.showTimeLeft),t.xp6(5),t.Q6J("ngForOf",d.questions),t.xp6(9),t.Q6J("hidden",d.currentQuestionNumber>=d.totalQuestions),t.xp6(3),t.Q6J("hidden",d.currentQuestionNumber<d.totalQuestions),t.xp6(5),t.Q6J("ngForOf",d.qtnStatus))},dependencies:[p.ez,p.mk,p.sg,p.Nd,f.Ps,f.Hw,gt],styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 350px){.container[_ngcontent-%COMP%]{max-width:350px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.section[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]   .quiz-description[_ngcontent-%COMP%]   .rec-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;background-color:var(--tertiary);padding:.25rem}.section[_ngcontent-%COMP%]   .quiz-description[_ngcontent-%COMP%]   .rec-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4rem;border-radius:9999px;background-color:#fff4;padding:.5rem}.section[_ngcontent-%COMP%]   .quiz-description[_ngcontent-%COMP%]   .rec-warns[_ngcontent-%COMP%]{display:flex;height:-moz-fit-content;height:fit-content;flex-direction:row;align-items:center;justify-content:space-around;padding:1rem;padding-bottom:0}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}@media (min-width: 768px){.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]{flex-direction:row}}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .question-nav[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-evenly}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .question-nav[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%]{display:flex;height:2.5rem;width:2rem;-webkit-user-select:none;user-select:none;align-items:center;font-size:2rem;color:var(--tertiary)}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .question-nav[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%]:active{--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .question-nav[_ngcontent-%COMP%]   .badge-left[_ngcontent-%COMP%]{display:flex;min-height:50vh;width:100%;flex-direction:column;justify-content:space-around}@media (min-width: 768px){.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .question-nav[_ngcontent-%COMP%]   .badge-left[_ngcontent-%COMP%]{width:50vw}}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .badge-right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}@media (min-width: 768px){.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .badge-right[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}}.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .badge-right[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;gap:0px}@media (min-width: 768px){.section[_ngcontent-%COMP%]   .qtn-badge[_ngcontent-%COMP%]   .badge-right[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{height:50vh;flex-direction:column}}"]})}return c})()}}]);