$wnd.jsme.runAsyncCallback5('q(209,197,{});function lP(){lP=r;mP=new No(td,new nP)}function oP(a){a.a.stopPropagation();a.a.preventDefault()}function nP(){}q(210,209,{},nP);_.Uc=function(){oP(this)};_.Xc=function(){return mP};var mP;function pP(){pP=r;qP=new No(yd,new rP)}function rP(){}q(211,209,{},rP);_.Uc=function(){oP(this)};_.Xc=function(){return qP};var qP;function sP(){sP=r;tP=new No(Bd,new uP)}function uP(){}q(212,209,{},uP);_.Uc=function(){oP(this)};_.Xc=function(){return tP};var tP;\nfunction vP(){vP=r;wP=new No(Cd,new xP)}function xP(){}q(213,209,{},xP);_.Uc=function(a){var b,c,d,e;this.a.stopPropagation();this.a.preventDefault();d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;yP(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(kg),a.a.b.a.a.e.ob[Eg]=null!=b?b:l)};_.Xc=function(){return wP};var wP;function zP(a,b,c){Es(a.ob,c.b);mq(!a.lb?a.lb=new Bq(a):a.lb,c,b)}\nfunction AP(a){var b=$doc.createElement(qd);fI($f,b.tagName);this.ob=b;this.b=new aJ(this.ob);this.ob[Vc]="gwt-HTML";$I(this.b,a,!0);iJ(this)}q(331,332,{14:1,16:1,18:1,19:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,31:1,32:1,33:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,46:1,48:1,50:1,54:1,59:1,69:1,70:1,71:1,74:1,78:1,81:1,82:1,84:1},AP);function BP(){Fv();var a=$doc.createElement("textarea");!Lr&&(Lr=new Kr);!Jr&&(Jr=new Ir);this.ob=a;this.ob[Vc]="gwt-TextArea"}q(371,372,zh,BP);\nfunction CP(a,b){var c,d;c=$doc.createElement(vg);d=$doc.createElement(jg);d[wc]=a.a.a;d.style[Fg]=a.b.a;var e=(Nr(),Or(d));c.appendChild(e);Mr(a.d,c);xt(a,b,d)}function DP(){vu.call(this);this.a=(yu(),Fu);this.b=(Gu(),Ju);this.e[Rc]=Ya;this.e[Qc]=Ya}q(380,325,rh,DP);_.Id=function(a){var b;b=Xm(a.ob);(a=Bt(this,a))&&this.d.removeChild(Xm(b));return a};\nfunction EP(a){try{a.v=!1;var b,c,d,e,f;d=a.gb;c=a._;d||(a.ob.style[Gg]=ge,a._=!1,a.Vd());b=a.ob;b.style[qe]=0+(go(),uf);b.style[qg]=Za;e=gn()-Sm(a.ob,hf)>>1;f=fn()-Sm(a.ob,gf)>>1;SK(a,Ni(hn($doc)+e,0),Ni(jn($doc)+f,0));d||((a._=c)?(sv(a.ob,Gf),a.ob.style[Gg]=Hg,ji(a.fb,200)):a.ob.style[Gg]=Hg)}finally{a.v=!0}}function FP(a){a.f=(new dK(a.i)).mc.Ke();Vs(a.f,new GP(a),(To(),To(),Uo));a.d=E(HP,m,61,[a.f])}\nfunction IP(){mL();var a,b,c,d,e,f;JL.call(this,(aM(),bM),null,!0);this.Cg();this.cb=!0;a=new AP(this.j);this.e=new BP;this.e.ob.style[Jg]=cb;Js(this.e,cb);this.Ag();dL(this,"400px");f=new DP;f.ob.style[fe]=cb;f.e[Rc]=10;c=(yu(),zu);f.a=c;CP(f,a);CP(f,this.e);e=new Nu;e.e[Rc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Ku(e,a);CP(f,e);rL(this,f);mK(this,!1);this.Bg()}q(622,623,hG,IP);_.Ag=function(){FP(this)};_.Bg=function(){var a=this.e;a.ob.readOnly=!0;var b=Ms(a.ob)+"-readonly";Is(a.vd(),b,!0)};\n_.Cg=function(){lK(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function GP(a){this.a=a}q(625,1,{},GP);_.Zc=function(){tL(this.a,!1)};_.a=null;function JP(a){this.a=a}q(626,1,{},JP);\n_.Cc=function(){Rs(this.a.e.ob,!0);this.a.e.ob.focus();var a=this.a.e,b;b=Tm(a.ob,Eg).length;if(0<b&&a.jb){if(0>b)throw new ZC("Length must be a positive integer. Length: "+b);if(b>Tm(a.ob,Eg).length)throw new ZC("From Index: 0  To Index: "+b+"  Text Length: "+Tm(a.ob,Eg).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function KP(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";lK(a.H.b,"Paste")}function LP(a){mL();IP.call(this);this.c=a}\nq(628,622,hG,LP);_.Ag=function(){FP(this);this.a=(new dK(this.b)).mc.Ke();Vs(this.a,new MP(this),(To(),To(),Uo));this.d=E(HP,m,61,[this.a,this.f])};_.Bg=function(){Js(this.e,"150px")};_.Cg=function(){KP(this)};_.Vd=function(){IL(this);Dm((Am(),Bm),new NP(this))};_.a=null;_.b=null;_.c=null;function OP(a){mL();LP.call(this,a)}q(627,628,hG,OP);\n_.Bg=function(){Js(this.e,"150px");var a=new PP(this),b=this.e;zP(b,new QP,(pP(),pP(),qP));zP(b,new RP,(lP(),lP(),mP));zP(b,new SP,(sP(),sP(),tP));zP(b,new TP(a),(vP(),vP(),wP))};_.Cg=function(){KP(this);this.j+=" Or drag and drop a file on it."};q(631,1,{});q(630,631,{});_.b=null;_.c=1;_.d=-1;function PP(a){this.a=a;this.b=new UP(this);this.c=this.d=1}q(629,630,{},PP);_.a=null;function UP(a){this.a=a}q(632,1,{},UP);_.Dg=function(a){this.a.a.e.ob[Eg]=null!=a?a:l};_.a=null;\nfunction MP(a){this.a=a}q(636,1,{},MP);_.Zc=function(){if(this.a.c){var a=this.a.c,b;b=new Ay(a.a,0,Tm(this.a.e.ob,Eg));PD(a.a.a,b.a)}tL(this.a,!1)};_.a=null;function NP(a){this.a=a}q(637,1,{},NP);_.Cc=function(){Rs(this.a.e.ob,!0);this.a.e.ob.focus()};_.a=null;q(638,1,yh);_.Qc=di;_.Rc=function(){var a,b;a=new VP(this.a);void 0!=$wnd.FileReader?b=new OP(a):b=new LP(a);fL(b);EP(b)};_.a=null;function VP(a){this.a=a}q(639,1,{},VP);_.a=null;q(640,1,yh);_.Qc=di;\n_.Rc=function(){var a;a=new IP;var b=this.a,c;Ev(a.e,b);b=(c=dD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Js(a.e,20*(10>b?b:10)+uf);Dm((Am(),Bm),new JP(a));fL(a);EP(a)};_.a=null;function yP(a,b){a.onloadend=function(a){b.Dg(a.target.result)}}function TP(a){this.a=a}q(645,1,{},TP);_.a=null;function QP(){}q(646,1,{},QP);function RP(){}q(647,1,{},RP);function SP(){}q(648,1,{},SP);X(631);X(630);X(645);X(646);X(647);X(648);X(209);X(211);X(210);X(212);X(213);X(622);var HP=NC(787,jO);X(628);X(627);X(638);X(639);X(640);\nX(625);X(626);X(636);X(637);X(629);X(632);X(331);X(380);X(371);x(dG)(5);function di(){};\n//@ sourceURL=5.js\n')
