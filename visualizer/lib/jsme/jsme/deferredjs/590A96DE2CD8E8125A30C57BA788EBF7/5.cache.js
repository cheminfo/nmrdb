$wnd.jsme.runAsyncCallback5('q(209,197,{});function kP(){kP=r;lP=new Mo(sd,new mP)}function nP(a){a.a.stopPropagation();a.a.preventDefault()}function mP(){}q(210,209,{},mP);_.Uc=function(){nP(this)};_.Xc=function(){return lP};var lP;function oP(){oP=r;pP=new Mo(xd,new qP)}function qP(){}q(211,209,{},qP);_.Uc=function(){nP(this)};_.Xc=function(){return pP};var pP;function rP(){rP=r;sP=new Mo(Ad,new tP)}function tP(){}q(212,209,{},tP);_.Uc=function(){nP(this)};_.Xc=function(){return sP};var sP;\nfunction uP(){uP=r;vP=new Mo(Bd,new wP)}function wP(){}q(213,209,{},wP);_.Uc=function(a){var b,c,d,e;this.a.stopPropagation();this.a.preventDefault();d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;xP(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(jg),a.a.b.a.a.e.ob[Dg]=null!=b?b:l)};_.Xc=function(){return vP};var vP;function yP(a,b,c){Es(a.ob,c.b);mq(!a.lb?a.lb=new Bq(a):a.lb,c,b)}\nfunction zP(a){var b=$doc.createElement(pd);eI(Zf,b.tagName);this.ob=b;this.b=new $I(this.ob);this.ob[Uc]="gwt-HTML";ZI(this.b,a,!0);hJ(this)}q(331,332,{14:1,16:1,18:1,19:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,31:1,32:1,33:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,46:1,48:1,50:1,54:1,59:1,69:1,70:1,71:1,74:1,78:1,81:1,82:1,84:1},zP);function AP(){Fv();var a=$doc.createElement("textarea");!Lr&&(Lr=new Kr);!Jr&&(Jr=new Ir);this.ob=a;this.ob[Uc]="gwt-TextArea"}q(371,372,yh,AP);\nfunction BP(a,b){var c,d;c=$doc.createElement(ug);d=$doc.createElement(ig);d[vc]=a.a.a;d.style[Eg]=a.b.a;var e=(Nr(),Or(d));c.appendChild(e);Mr(a.d,c);xt(a,b,d)}function CP(){vu.call(this);this.a=(yu(),Fu);this.b=(Gu(),Ju);this.e[Qc]=Ya;this.e[Pc]=Ya}q(380,325,qh,CP);_.Id=function(a){var b;b=Wm(a.ob);(a=Bt(this,a))&&this.d.removeChild(Wm(b));return a};\nfunction DP(a){try{a.v=!1;var b,c,d,e,f;d=a.gb;c=a._;d||(a.ob.style[Fg]=fe,a._=!1,a.Vd());b=a.ob;b.style[pe]=0+(fo(),tf);b.style[pg]=Za;e=fn()-Rm(a.ob,gf)>>1;f=en()-Rm(a.ob,ff)>>1;RK(a,Mi(gn($doc)+e,0),Mi(hn($doc)+f,0));d||((a._=c)?(sv(a.ob,Ff),a.ob.style[Fg]=Gg,ii(a.fb,200)):a.ob.style[Fg]=Gg)}finally{a.v=!0}}function EP(a){a.f=(new cK(a.i)).mc.Ke();Vs(a.f,new FP(a),(So(),So(),To));a.d=E(GP,m,61,[a.f])}\nfunction HP(){lL();var a,b,c,d,e,f;IL.call(this,($L(),aM),null,!0);this.Cg();this.cb=!0;a=new zP(this.j);this.e=new AP;this.e.ob.style[Ig]=cb;Js(this.e,cb);this.Ag();cL(this,"400px");f=new CP;f.ob.style[ee]=cb;f.e[Qc]=10;c=(yu(),zu);f.a=c;BP(f,a);BP(f,this.e);e=new Nu;e.e[Qc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Ku(e,a);BP(f,e);qL(this,f);lK(this,!1);this.Bg()}q(622,623,gG,HP);_.Ag=function(){EP(this)};_.Bg=function(){var a=this.e;a.ob.readOnly=!0;var b=Ms(a.ob)+"-readonly";Is(a.vd(),b,!0)};\n_.Cg=function(){kK(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function FP(a){this.a=a}q(625,1,{},FP);_.Zc=function(){sL(this.a,!1)};_.a=null;function IP(a){this.a=a}q(626,1,{},IP);\n_.Cc=function(){Rs(this.a.e.ob,!0);this.a.e.ob.focus();var a=this.a.e,b;b=Sm(a.ob,Dg).length;if(0<b&&a.jb){if(0>b)throw new XC("Length must be a positive integer. Length: "+b);if(b>Sm(a.ob,Dg).length)throw new XC("From Index: 0  To Index: "+b+"  Text Length: "+Sm(a.ob,Dg).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function JP(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";kK(a.H.b,"Paste")}function KP(a){lL();HP.call(this);this.c=a}\nq(628,622,gG,KP);_.Ag=function(){EP(this);this.a=(new cK(this.b)).mc.Ke();Vs(this.a,new LP(this),(So(),So(),To));this.d=E(GP,m,61,[this.a,this.f])};_.Bg=function(){Js(this.e,"150px")};_.Cg=function(){JP(this)};_.Vd=function(){HL(this);Cm((zm(),Am),new MP(this))};_.a=null;_.b=null;_.c=null;function NP(a){lL();KP.call(this,a)}q(627,628,gG,NP);\n_.Bg=function(){Js(this.e,"150px");var a=new OP(this),b=this.e;yP(b,new PP,(oP(),oP(),pP));yP(b,new QP,(kP(),kP(),lP));yP(b,new RP,(rP(),rP(),sP));yP(b,new SP(a),(uP(),uP(),vP))};_.Cg=function(){JP(this);this.j+=" Or drag and drop a file on it."};q(631,1,{});q(630,631,{});_.b=null;_.c=1;_.d=-1;function OP(a){this.a=a;this.b=new TP(this);this.c=this.d=1}q(629,630,{},OP);_.a=null;function TP(a){this.a=a}q(632,1,{},TP);_.Dg=function(a){this.a.a.e.ob[Dg]=null!=a?a:l};_.a=null;\nfunction LP(a){this.a=a}q(634,1,{},LP);_.Zc=function(){if(this.a.c){var a=this.a.c,b;b=new xy(a.a,0,Sm(this.a.e.ob,Dg));oE(a.a,b)}sL(this.a,!1)};_.a=null;function MP(a){this.a=a}q(635,1,{},MP);_.Cc=function(){Rs(this.a.e.ob,!0);this.a.e.ob.focus()};_.a=null;q(636,1,xh);_.Rc=function(){var a,b;a=new UP(this.a);void 0!=$wnd.FileReader?b=new NP(a):b=new KP(a);eL(b);DP(b)};function UP(a){this.a=a}q(637,1,{},UP);_.a=null;q(638,1,xh);\n_.Rc=function(){var a;a=new HP;var b=this.a,c;Ev(a.e,b);b=(c=bD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Js(a.e,20*(10>b?b:10)+tf);Cm((zm(),Am),new IP(a));eL(a);DP(a)};function xP(a,b){a.onloadend=function(a){b.Dg(a.target.result)}}function SP(a){this.a=a}q(643,1,{},SP);_.a=null;function PP(){}q(644,1,{},PP);function QP(){}q(645,1,{},QP);function RP(){}q(646,1,{},RP);X(631);X(630);X(643);X(644);X(645);X(646);X(209);X(211);X(210);X(212);X(213);X(622);var GP=LC(785,iO);X(628);X(627);X(637);X(625);X(626);X(634);\nX(635);X(629);X(632);X(331);X(380);X(371);x(cG)(5);\n//@ sourceURL=5.js\n')