(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"87Ii":function(t,e,n){"use strict";n.r(e);var o=n("3Pt+"),r=n("ofXK"),a=n("tyNb"),i=n("fXoL"),c=n("IYfF"),l=n("Wp6s"),p=n("kmnG"),m=n("qFsG");const s=[{path:"",component:(()=>{class t{constructor(t){this.authSvc=t,this.currentImage="https://picsum.photos/id/113/150/150",this.profileForm=new o.d({displayName:new o.b("",o.o.required),email:new o.b({value:"",disabled:!0},o.o.required),photoURL:new o.b("",o.o.required)})}ngOnInit(){this.authSvc.userData$.subscribe(t=>{this.initValuesForm(t)})}onSaveUser(t){this.authSvc.preSaveUserProfile(t,this.image)}initValuesForm(t){t.photoURL&&(this.currentImage=t.photoURL),this.profileForm.patchValue({displayName:t.displayName,email:t.email})}handleImage(t){this.image=t}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(c.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-profile"]],decls:20,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"profile-card"],[1,"label","bottom"],[3,"src","click"],["hidden","","type","file","formControlName","photoURL",3,"change"],["inputImageProfile",""],["matInput","","placeholder","Name","formControlName","displayName"],["matInput","","placeholder","Email","formControlName","email"],[1,"mat-dialog-actions"],["type","submit","value","Save",1,"mat-flat-button"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"form",0),i.ec("ngSubmit",(function(t){return e.onSaveUser(e.profileForm.value)})),i.Wb(1,"mat-card",1),i.Wb(2,"mat-card-header"),i.Wb(3,"div",2),i.Wb(4,"p"),i.Fc(5,"Change"),i.Vb(),i.Wb(6,"img",3),i.ec("click",(function(e){return i.xc(t),i.uc(8).click()})),i.Vb(),i.Wb(7,"input",4,5),i.ec("change",(function(t){return e.handleImage(null==t?null:null==t.target?null:t.target.files[0])})),i.Vb(),i.Vb(),i.Vb(),i.Wb(9,"mat-card-content"),i.Wb(10,"mat-form-field"),i.Wb(11,"mat-label"),i.Fc(12,"Name"),i.Vb(),i.Rb(13,"input",6),i.Vb(),i.Wb(14,"mat-form-field"),i.Wb(15,"mat-label"),i.Fc(16,"Email"),i.Vb(),i.Rb(17,"input",7),i.Vb(),i.Wb(18,"div",8),i.Rb(19,"input",9),i.Vb(),i.Vb(),i.Vb(),i.Vb()}2&t&&(i.oc("formGroup",e.profileForm),i.Db(6),i.oc("src",e.currentImage,i.yc))},directives:[o.p,o.k,o.e,l.a,l.d,o.a,o.j,o.c,l.c,p.a,p.d,m.a],styles:[".profile-card[_ngcontent-%COMP%]{width:100%;height:100vh}.profile-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;overflow:hidden;position:relative;margin:20px;text-align:center;border-radius:50%}.profile-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;width:100%;background:#e9e9e9;color:#f5f5f5;text-transform:uppercase;-webkit-transition:all .5s ease;transition:all .5s ease}.profile-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:150px;height:150px;border-radius:50%;border:2px solid #f5f5f5}.profile-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{border:2px solid #e9e9e9;cursor:pointer}.profile-card[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{bottom:-50%}.profile-card[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{bottom:0}.profile-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center}.profile-card[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%], .profile-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:60%;display:block;margin:0 auto}.profile-card[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]{background:#7b1fa2;padding:.4rem;color:#fff}.profile-card[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%]{width:100%;min-height:150px;margin-top:3rem}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(s)],a.f]}),t})();var d=n("vvyD");n.d(e,"ProfileModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)},imports:[[r.c,b,d.a,o.n]]}),t})()}}]);