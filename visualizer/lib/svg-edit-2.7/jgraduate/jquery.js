!function(){function a(a,b){if(d)for(var c in b)a.setAttribute(c,b[c]);else for(var c in b){var e=b[c],f=a[c];f&&"SVGLength"===f.constructor?f.baseVal.value=e:a.setAttribute(c,e)}}function b(b,d,e){var f=document.createElementNS(c.svg,b);return a(f,d),e&&e.appendChild(f),f}var c={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"};window.console||(window.console=new function(){this.log=function(){},this.dir=function(){}}),$.jGraduate={Paint:function(a){var b=a||{};if(this.alpha=isNaN(b.alpha)?100:b.alpha,b.copy)switch(this.type=b.copy.type,this.alpha=b.copy.alpha,this.solidColor=null,this.linearGradient=null,this.radialGradient=null,this.type){case"none":break;case"solidColor":this.solidColor=b.copy.solidColor;break;case"linearGradient":this.linearGradient=b.copy.linearGradient.cloneNode(!0);break;case"radialGradient":this.radialGradient=b.copy.radialGradient.cloneNode(!0)}else b.linearGradient?(this.type="linearGradient",this.solidColor=null,this.radialGradient=null,this.linearGradient=b.linearGradient.cloneNode(!0)):b.radialGradient?(this.type="radialGradient",this.solidColor=null,this.linearGradient=null,this.radialGradient=b.radialGradient.cloneNode(!0)):b.solidColor?(this.type="solidColor",this.solidColor=b.solidColor):(this.type="none",this.solidColor=null,this.linearGradient=null,this.radialGradient=null)}},jQuery.fn.jGraduateDefaults={paint:new $.jGraduate.Paint,window:{pickerTitle:"Drag markers to pick a paint"},images:{clientPath:"images/"},newstop:"inverse"};var d=navigator.userAgent.indexOf("Gecko/")>=0;jQuery.fn.jGraduate=function(a){var d=arguments;return this.each(function(){function e(a,c,d,e,f){var i=f||b("stop",{"stop-color":c,"stop-opacity":d,offset:a},v);f?(c=f.getAttribute("stop-color"),d=f.getAttribute("stop-opacity"),a=f.getAttribute("offset")):v.appendChild(i),null===d&&(d=1);var k="M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",n=b("path",{d:k,fill:"url(#jGraduate_trans)",transform:"translate("+(10+a*x)+", 26)"},ab),o=b("path",{d:k,fill:c,"fill-opacity":d,transform:"translate("+(10+a*x)+", 26)",stroke:"#000","stroke-width":1.5},ab);return $(o).mousedown(function(a){return g(this),db=bb,r.mousemove(j).mouseup(h),eb=fb.offset(),a.preventDefault(),!1}).data("stop",i).data("bg",n).dblclick(function(){$("div.jGraduate_LightBox").show();for(var a=this,b=+i.getAttribute("stop-opacity")||1,d=i.getAttribute("stop-color")||1,e=(255*parseFloat(b)).toString(16);e.length<2;)e="0"+e;c=d.substr(1)+e,$("#"+m+"_jGraduate_stopPicker").css({left:100,bottom:15}).jPicker({window:{title:"Pick the start color and opacity for the gradient"},images:{clientPath:l.images.clientPath},color:{active:c,alphaSupport:!0}},function(c){d=c.val("hex")?"#"+c.val("hex"):"none",b=null!==c.val("a")?c.val("a")/256:1,a.setAttribute("fill",d),a.setAttribute("fill-opacity",b),i.setAttribute("stop-color",d),i.setAttribute("stop-opacity",b),$("div.jGraduate_LightBox").hide(),$("#"+m+"_jGraduate_stopPicker").hide()},null,function(){$("div.jGraduate_LightBox").hide(),$("#"+m+"_jGraduate_stopPicker").hide()})}),$(v).find("stop").each(function(){var b=$(this);if(+this.getAttribute("offset")>a){if(!c){var d=this.getAttribute("stop-color"),e=this.getAttribute("stop-opacity");i.setAttribute("stop-color",d),o.setAttribute("fill",d),i.setAttribute("stop-opacity",null===e?1:e),o.setAttribute("fill-opacity",null===e?1:e)}return b.before(i),!1}}),e&&g(o),i}function f(){gb.setAttribute("display","none");var a=$(bb),b=a.data("stop"),c=a.data("bg");$([bb,b,c]).remove()}function g(a){bb&&bb.setAttribute("stroke","#000"),a.setAttribute("stroke","blue"),bb=a,bb.parentNode.appendChild(bb)}function h(){r.unbind("mousemove",j),"none"!==gb.getAttribute("display")&&f(),db=null}function i(){var a=jb?"rotate("+jb+","+kb+","+lb+") ":"";if(1===hb&&1===ib)v.removeAttribute("gradientTransform");else{var b=-kb*(hb-1),c=-lb*(ib-1);v.setAttribute("gradientTransform",a+"translate("+b+","+c+") scale("+hb+","+ib+")")}}function j(a){var b=a.pageX-eb.left,c=a.pageY-eb.top;b=10>b?10:b>x+10?x+10:b;var d="translate("+b+", 26)";-60>c||c>130?(gb.setAttribute("display","block"),gb.setAttribute("transform",d)):gb.setAttribute("display","none"),db.setAttribute("transform",d),$.data(db,"bg").setAttribute("transform",d);var e=$.data(db,"stop"),f=(b-10)/x;e.setAttribute("offset",f);var g=0;$(v).find("stop").each(function(){var a=this.getAttribute("offset"),b=$(this);g>a&&(b.prev().before(b),_=$(v).find("stop")),g=a})}var k=$(this),l=$.extend(!0,{},jQuery.fn.jGraduateDefaults,a),m=k.attr("id"),n="#"+k.attr("id")+" ";if(!n)return void alert("Container element must have an id attribute to maintain unique id strings for sub-elements.");var o=function(){switch(k.paint.type){case"radialGradient":k.paint.linearGradient=null;break;case"linearGradient":k.paint.radialGradient=null;break;case"solidColor":k.paint.radialGradient=k.paint.linearGradient=null}$.isFunction(k.okCallback)&&k.okCallback(k.paint),k.hide()},p=function(){$.isFunction(k.cancelCallback)&&k.cancelCallback(),k.hide()};$.extend(!0,k,{paint:new $.jGraduate.Paint({copy:l.paint}),okCallback:$.isFunction(d[1])&&d[1]||null,cancelCallback:$.isFunction(d[2])&&d[2]||null});var q=(k.position(),null),r=$(window);"none"==k.paint.type&&(k.paint=$.jGraduate.Paint({solidColor:"ffffff"})),k.addClass("jGraduate_Picker"),k.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="'+m+'_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');var s=$(n+"> .jGraduate_colPick"),t=$(n+"> .jGraduate_gradPick");t.html('<div id="'+m+'_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">'+l.window.pickerTitle+'</h2><div id="'+m+'_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="'+m+'_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+m+'_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label>y:</label><input type="text" id="'+m+'_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+m+'_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label>y:</label><input type="text" id="'+m+'_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+m+'_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label>y:</label><input type="text" id="'+m+'_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="'+m+'_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="'+m+'_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label>y:</label><input type="text" id="'+m+'_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="'+m+'_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="'+m+'_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="'+l.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+m+'_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="'+m+'_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="'+m+'_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="'+l.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+m+'_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="'+m+'_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="'+m+'_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="'+l.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+m+'_jGraduate_AngleInput" size="3" value="0"/>deg</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="'+m+'_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="'+m+'_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="'+l.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+m+'_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="'+m+'_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="'+m+'_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');var u,v,w,x=256,y=0,z=0,A=x-2*y,B=x-2*z,C={},D=145;$(".jGraduate_SliderBar").width(D);var E=$("#"+m+"_jGraduate_GradContainer")[0],F=b("svg",{id:m+"_jgraduate_svg",width:x,height:x,xmlns:c.svg},E);u=u||k.paint.type;var G=v=k.paint[u],H=k.paint.alpha,I="solidColor"===u;switch(u){case"solidColor":case"linearGradient":if(I||(v.id=m+"_lg_jgraduate_grad",G=v=F.appendChild(v)),b("radialGradient",{id:m+"_rg_jgraduate_grad"},F),"linearGradient"===u)break;case"radialGradient":I||(v.id=m+"_rg_jgraduate_grad",G=v=F.appendChild(v)),b("linearGradient",{id:m+"_lg_jgraduate_grad"},F)}if(I){G=v=$("#"+m+"_lg_jgraduate_grad")[0];var q=k.paint[u];e(0,"#"+q,1);var J=typeof l.newstop;if("string"===J)switch(l.newstop){case"same":e(1,"#"+q,1);break;case"inverse":for(var K="",L=0;6>L;L+=2){var M=(q.substr(L,2),(255-parseInt(q.substr(L,2),16)).toString(16));M.length<2&&(M=0+M),K+=M}e(1,"#"+K,1);break;case"white":e(1,"#ffffff",1);break;case"black":e(1,"#000000",1)}else if("object"===J){var N="opac"in l.newstop?l.newstop.opac:1;e(1,l.newstop.color||"#"+q,N)}}var O=parseFloat(G.getAttribute("x1")||0),P=parseFloat(G.getAttribute("y1")||0),Q=parseFloat(G.getAttribute("x2")||1),R=parseFloat(G.getAttribute("y2")||0),S=parseFloat(G.getAttribute("cx")||.5),T=parseFloat(G.getAttribute("cy")||.5),U=parseFloat(G.getAttribute("fx")||S),V=parseFloat(G.getAttribute("fy")||T),w=b("rect",{id:m+"_jgraduate_rect",x:y,y:z,width:A,height:B,fill:"url(#"+m+"_jgraduate_grad)","fill-opacity":H/100},F),W=$("<div/>").attr({"class":"grad_coord jGraduate_lg_field",title:"Begin Stop"}).text(1).css({top:P*x,left:O*x}).data("coord","start").appendTo(E),X=W.clone().text(2).css({top:R*x,left:Q*x}).attr("title","End stop").data("coord","end").appendTo(E),Y=$("<div/>").attr({"class":"grad_coord jGraduate_rg_field",title:"Center stop"}).text("C").css({top:T*x,left:S*x}).data("coord","center").appendTo(E),Z=Y.clone().text("F").css({top:V*x,left:U*x,display:"none"}).attr("title","Focus point").data("coord","focus").appendTo(E);Z[0].id=m+"_jGraduate_focusCoord";$(n+" .grad_coord");$.each(["x1","y1","x2","y2","cx","cy","fx","fy"],function(a,b){var c=v.getAttribute(b),d=isNaN(b[1]);c||(c=d?"0.5":"x2"===b?"1.0":"0.0"),C[b]=$("#"+m+"_jGraduate_"+b).val(c).change(function(){if(isNaN(parseFloat(this.value))||this.value<0?this.value=0:this.value>1&&(this.value=1),("f"!==b[0]||vb)&&(d&&"radialGradient"===u||!d&&"linearGradient"===u)&&v.setAttribute(b,this.value),d)var a="c"===b[0]?Y:Z;else var a="1"===b[1]?W:X;var c=b.indexOf("x")>=0?"left":"top";a.css(c,this.value*x)}).change()});var _,ab,bb,ab,cb,db,eb,fb=$("#"+m+"_jGraduate_StopSlider"),gb=b("path",{d:"m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",fill:"none",stroke:"#D00","stroke-width":5,display:"none"},cb),hb=1,ib=1,jb=0,kb=S,lb=T;cb=b("svg",{width:"100%",height:45},fb[0]);var mb=b("pattern",{width:16,height:16,patternUnits:"userSpaceOnUse",id:"jGraduate_trans"},cb),nb=b("image",{width:16,height:16},mb),ob=l.images.clientPath+"map-opacity.png";nb.setAttributeNS(c.xlink,"xlink:href",ob),$(cb).click(function(a){eb=fb.offset();var b=a.target;if("path"!==b.tagName){var c=a.pageX-eb.left-8;c=10>c?10:c>x+10?x+10:c,e(c/x,0,0,!0),a.stopPropagation()}}),$(cb).mouseover(function(){cb.appendChild(gb)}),ab=b("g",{},cb),b("line",{x1:10,y1:15,x2:x+10,y2:15,"stroke-width":2,stroke:"#000"},cb);var pb=t.find(".jGraduate_spreadMethod").change(function(){v.setAttribute("spreadMethod",$(this).val())}),qb=null,rb=function(a){var b=a.pageX-ub.left,c=a.pageY-ub.top;b=0>b?0:b>x?x:b,c=0>c?0:c>x?x:c,qb.css("left",b).css("top",c);var d=b/A,e=c/B,f=qb.data("coord"),g=v;switch(f){case"start":C.x1.val(d),C.y1.val(e),g.setAttribute("x1",d),g.setAttribute("y1",e);break;case"end":C.x2.val(d),C.y2.val(e),g.setAttribute("x2",d),g.setAttribute("y2",e);break;case"center":C.cx.val(d),C.cy.val(e),g.setAttribute("cx",d),g.setAttribute("cy",e),kb=d,lb=e,i();break;case"focus":C.fx.val(d),C.fy.val(e),g.setAttribute("fx",d),g.setAttribute("fy",e),i()}a.preventDefault()},sb=function(){qb=null,r.unbind("mousemove",rb).unbind("mouseup",sb)};if(_=v.getElementsByTagNameNS(c.svg,"stop"),2>tb){for(;2>tb;)v.appendChild(document.createElementNS(c.svg,"stop")),++tb;_=v.getElementsByTagNameNS(c.svg,"stop")}for(var tb=_.length,L=0;tb>L;L++)e(0,0,0,0,_[L]);pb.val(v.getAttribute("spreadMethod")||"pad");var ub,vb=!1;w.setAttribute("fill-opacity",H/100),$("#"+m+" div.grad_coord").mousedown(function(a){a.preventDefault(),qb=$(this);qb.offset();ub=qb.parent().offset(),r.mousemove(rb).mouseup(sb)}),$("#"+m+"_jGraduate_Ok").bind("click",function(){k.paint.type=u,k.paint[u]=v.cloneNode(!0),k.paint.solidColor=null,o()}),$("#"+m+"_jGraduate_Cancel").bind("click",function(){p()}),"radialGradient"===u&&(vb?Z.show():(Z.hide(),C.fx.val(""),C.fy.val(""))),$("#"+m+"_jGraduate_match_ctr")[0].checked=!vb;var wb,xb;$("#"+m+"_jGraduate_match_ctr").change(function(){vb=!this.checked,Z.toggle(vb),C.fx.val(""),C.fy.val("");var a=v;if(vb){var b=wb||.5,c=xb||.5;a.setAttribute("fx",b),a.setAttribute("fy",c),C.fx.val(b),C.fy.val(c)}else wb=a.getAttribute("fx"),xb=a.getAttribute("fy"),a.removeAttribute("fx"),a.removeAttribute("fy")});var _=v.getElementsByTagNameNS(c.svg,"stop"),tb=_.length;if(2>tb){for(;2>tb;)v.appendChild(document.createElementNS(c.svg,"stop")),++tb;_=v.getElementsByTagNameNS(c.svg,"stop")}var yb,zb=function(a){var b=yb.offset,c=yb.parent,d=a.pageX-b.left-parseInt(c.css("border-left-width"));d>D&&(d=D),0>=d&&(d=0);var e=d-5;switch(d/=D,yb.type){case"radius":d=Math.pow(2*d,2.5),d>.98&&1.02>d&&(d=1),.01>=d&&(d=.01),v.setAttribute("r",d);break;case"opacity":k.paint.alpha=parseInt(100*d),w.setAttribute("fill-opacity",d);break;case"ellip":hb=1,ib=1,.5>d?(d/=.5,hb=0>=d?.01:d):d>.5&&(d/=.5,d=2-d,ib=0>=d?.01:d),i(),d-=1,ib===d+1&&(d=Math.abs(d));break;case"angle":d-=.5,jb=d*=180,i(),d/=100}yb.elem.css({"margin-left":e}),d=Math.round(100*d),yb.input.val(d)},Ab=0,Bb=0;if("radialGradient"===u){var Cb=v.gradientTransform.baseVal;if(2===Cb.numberOfItems){var Db=Cb.getItem(0),Eb=Cb.getItem(1);if(2===Db.type&&3===Eb.type){var Fb=Eb.matrix;1!==Fb.a?Ab=Math.round(100*-(1-Fb.a)):1!==Fb.d&&(Ab=Math.round(100*(1-Fb.d)))}}else if(3===Cb.numberOfItems){var Gb=Cb.getItem(0),Db=Cb.getItem(1),Eb=Cb.getItem(2);if(4===Gb.type&&2===Db.type&&3===Eb.type){Bb=Math.round(Gb.angle);var Fb=Eb.matrix;1!==Fb.a?Ab=Math.round(100*-(1-Fb.a)):1!==Fb.d&&(Ab=Math.round(100*(1-Fb.d)))}}}var Hb={radius:{handle:"#"+m+"_jGraduate_RadiusArrows",input:"#"+m+"_jGraduate_RadiusInput",val:100*(v.getAttribute("r")||.5)},opacity:{handle:"#"+m+"_jGraduate_OpacArrows",input:"#"+m+"_jGraduate_OpacInput",val:k.paint.alpha||100},ellip:{handle:"#"+m+"_jGraduate_EllipArrows",input:"#"+m+"_jGraduate_EllipInput",val:Ab},angle:{handle:"#"+m+"_jGraduate_AngleArrows",input:"#"+m+"_jGraduate_AngleInput",val:Bb}};$.each(Hb,function(a,b){var c=$(b.handle);c.mousedown(function(d){var e=c.parent();yb={type:a,elem:c,input:$(b.input),parent:e,offset:e.offset()},r.mousemove(Ib).mouseup(Jb),d.preventDefault()}),$(b.input).val(b.val).change(function(){var b=+this.value,d=0,e="radialGradient"===u;switch(a){case"radius":e&&v.setAttribute("r",b/100),d=Math.pow(b/100,.4)/2*D;break;case"opacity":k.paint.alpha=b,w.setAttribute("fill-opacity",b/100),d=b*(D/100);break;case"ellip":if(hb=ib=1,0===b){d=.5*D;break}b>99.5&&(b=99.5),b>0?ib=1-b/100:hb=-(b/100)-1,d=D*((b+100)/2)/100,e&&i();break;case"angle":jb=b,d=jb/180,d+=.5,d*=D,e&&i()}d>D?d=D:0>d&&(d=0),c.css({"margin-left":d-5})}).change()});for(var Ib=function(a){zb(a),a.preventDefault()},Jb=function(){r.unbind("mousemove",Ib).unbind("mouseup",Jb),yb=null},Kb=(255*k.paint.alpha/100).toString(16);Kb.length<2;)Kb="0"+Kb;Kb=Kb.split(".")[0],q="none"==k.paint.solidColor?"":k.paint.solidColor+Kb,I||(q=_[0].getAttribute("stop-color")),$.extend($.fn.jPicker.defaults.window,{alphaSupport:!0,effects:{type:"show",speed:0}}),s.jPicker({window:{title:l.window.pickerTitle},images:{clientPath:l.images.clientPath},color:{active:q,alphaSupport:!0}},function(a){k.paint.type="solidColor",k.paint.alpha=a.val("ahex")?Math.round(a.val("a")/255*100):100,k.paint.solidColor=a.val("hex")?a.val("hex"):"none",k.paint.radialGradient=null,o()},null,function(){p()});var Lb=$(n+" .jGraduate_tabs li");Lb.click(function(){Lb.removeClass("jGraduate_tab_current"),$(this).addClass("jGraduate_tab_current"),$(n+" > div").hide();{var a=$(this).attr("data-type");$(n+" .jGraduate_gradPick").show()}if("rg"===a||"lg"===a){$(".jGraduate_"+a+"_field").show(),$(".jGraduate_"+("lg"===a?"rg":"lg")+"_field").hide(),$("#"+m+"_jgraduate_rect")[0].setAttribute("fill","url(#"+m+"_"+a+"_jgraduate_grad)"),u="lg"===a?"linearGradient":"radialGradient",$("#"+m+"_jGraduate_OpacInput").val(k.paint.alpha).change();var b=$("#"+m+"_"+a+"_jgraduate_grad")[0];if(v!==b){var c=$(v).find("stop");$(b).empty().append(c),v=b;var d=pb.val();v.setAttribute("spreadMethod",d)}vb="rg"===a&&null!=v.getAttribute("fx")&&!(S==U&&T==V),$("#"+m+"_jGraduate_focusCoord").toggle(vb),vb&&($("#"+m+"_jGraduate_match_ctr")[0].checked=!1)}else $(n+" .jGraduate_gradPick").hide(),$(n+" .jGraduate_colPick").show()}),$(n+" > div").hide(),Lb.removeClass("jGraduate_tab_current");var Mb;switch(k.paint.type){case"linearGradient":Mb=$(n+" .jGraduate_tab_lingrad");break;case"radialGradient":Mb=$(n+" .jGraduate_tab_radgrad");break;default:Mb=$(n+" .jGraduate_tab_color")}k.show(),setTimeout(function(){Mb.addClass("jGraduate_tab_current").click()},10)})}}(),function(){function a(a,d,e){if(a=document.createElementNS(b.svg,a),c)for(var f in d)a.setAttribute(f,d[f]);else for(f in d){var g=d[f],h=a[f];h&&"SVGLength"===h.constructor?h.baseVal.value=g:a.setAttribute(f,g)}return e&&e.appendChild(a),a}var b={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"};window.console||(window.console=new function(){this.log=function(){},this.dir=function(){}}),$.jGraduate={Paint:function(a){if(a=a||{},this.alpha=isNaN(a.alpha)?100:a.alpha,a.copy)switch(this.type=a.copy.type,this.alpha=a.copy.alpha,this.radialGradient=this.linearGradient=this.solidColor=null,this.type){case"solidColor":this.solidColor=a.copy.solidColor;break;case"linearGradient":this.linearGradient=a.copy.linearGradient.cloneNode(!0);break;case"radialGradient":this.radialGradient=a.copy.radialGradient.cloneNode(!0)}else a.linearGradient?(this.type="linearGradient",this.radialGradient=this.solidColor=null,this.linearGradient=a.linearGradient.cloneNode(!0)):a.radialGradient?(this.type="radialGradient",this.linearGradient=this.solidColor=null,this.radialGradient=a.radialGradient.cloneNode(!0)):a.solidColor?(this.type="solidColor",this.solidColor=a.solidColor):(this.type="none",this.radialGradient=this.linearGradient=this.solidColor=null)}},jQuery.fn.jGraduateDefaults={paint:new $.jGraduate.Paint,window:{pickerTitle:"Drag markers to pick a paint"},images:{clientPath:"images/"},newstop:"inverse"};var c=navigator.userAgent.indexOf("Gecko/")>=0;jQuery.fn.jGraduate=function(c){var d=arguments;return this.each(function(){function e(b,c,d,e,h){var j=h||a("stop",{"stop-color":c,"stop-opacity":d,offset:b},u);h?(c=h.getAttribute("stop-color"),d=h.getAttribute("stop-opacity"),b=h.getAttribute("offset")):u.appendChild(j),null===d&&(d=1),h=a("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",fill:"url(#jGraduate_trans)",transform:"translate("+(10+b*w)+", 26)"},R);var m=a("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",fill:c,"fill-opacity":d,transform:"translate("+(10+b*w)+", 26)",stroke:"#000","stroke-width":1.5},R);return $(m).mousedown(function(a){return f(this),U=S,q.mousemove(i).mouseup(g),V=W.offset(),a.preventDefault(),!1}).data("stop",j).data("bg",h).dblclick(function(){$("div.jGraduate_LightBox").show();for(var a=this,b=+j.getAttribute("stop-opacity")||1,d=j.getAttribute("stop-color")||1,e=(255*parseFloat(b)).toString(16);e.length<2;)e="0"+e;c=d.substr(1)+e,$("#"+l+"_jGraduate_stopPicker").css({left:100,bottom:15}).jPicker({window:{title:"Pick the start color and opacity for the gradient"},images:{clientPath:k.images.clientPath},color:{active:c,alphaSupport:!0}},function(c){d=c.val("hex")?"#"+c.val("hex"):"none",b=null!==c.val("a")?c.val("a")/256:1,a.setAttribute("fill",d),a.setAttribute("fill-opacity",b),j.setAttribute("stop-color",d),j.setAttribute("stop-opacity",b),$("div.jGraduate_LightBox").hide(),$("#"+l+"_jGraduate_stopPicker").hide()},null,function(){$("div.jGraduate_LightBox").hide(),$("#"+l+"_jGraduate_stopPicker").hide()})}),$(u).find("stop").each(function(){var a=$(this);if(+this.getAttribute("offset")>b){if(!c){var d=this.getAttribute("stop-color"),e=this.getAttribute("stop-opacity");j.setAttribute("stop-color",d),m.setAttribute("fill",d),j.setAttribute("stop-opacity",null===e?1:e),m.setAttribute("fill-opacity",null===e?1:e)}return a.before(j),!1}}),e&&f(m),j}function f(a){S&&S.setAttribute("stroke","#000"),a.setAttribute("stroke","blue"),S=a,S.parentNode.appendChild(S)}function g(){if(q.unbind("mousemove",i),"none"!==X.getAttribute("display")){X.setAttribute("display","none");var a=$(S),b=a.data("stop");a=a.data("bg"),$([S,b,a]).remove()}U=null}function h(){var a=_?"rotate("+_+","+ab+","+bb+") ":"";1===Y&&1===Z?u.removeAttribute("gradientTransform"):u.setAttribute("gradientTransform",a+"translate("+-ab*(Y-1)+","+-bb*(Z-1)+") scale("+Y+","+Z+")")}function i(a){var b=a.pageX-V.left;a=a.pageY-V.top,b=10>b?10:b>w+10?w+10:b;var c="translate("+b+", 26)";-60>a||a>130?(X.setAttribute("display","block"),X.setAttribute("transform",c)):X.setAttribute("display","none"),U.setAttribute("transform",c),$.data(U,"bg").setAttribute("transform",c),$.data(U,"stop").setAttribute("offset",(b-10)/w);var d=0;$(u).find("stop").each(function(){var a=this.getAttribute("offset"),b=$(this);d>a&&(b.prev().before(b),Q=$(u).find("stop")),d=a})}var j=$(this),k=$.extend(!0,{},jQuery.fn.jGraduateDefaults,c),l=j.attr("id"),m="#"+j.attr("id")+" ";if(m){var n=function(){switch(j.paint.type){case"radialGradient":j.paint.linearGradient=null;break;case"linearGradient":j.paint.radialGradient=null;break;case"solidColor":j.paint.radialGradient=j.paint.linearGradient=null}$.isFunction(j.okCallback)&&j.okCallback(j.paint),j.hide()},o=function(){$.isFunction(j.cancelCallback)&&j.cancelCallback(),j.hide()};$.extend(!0,j,{paint:new $.jGraduate.Paint({copy:k.paint}),okCallback:$.isFunction(d[1])&&d[1]||null,cancelCallback:$.isFunction(d[2])&&d[2]||null}),j.position();var p=null,q=$(window);"none"==j.paint.type&&(j.paint=$.jGraduate.Paint({solidColor:"ffffff"})),j.addClass("jGraduate_Picker"),j.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="'+l+'_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');var r=$(m+"> .jGraduate_colPick"),s=$(m+"> .jGraduate_gradPick");s.html('<div id="'+l+'_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">'+k.window.pickerTitle+'</h2><div id="'+l+'_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="'+l+'_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+l+'_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+l+'_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+l+'_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+l+'_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+l+'_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+l+'_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="'+l+'_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="'+l+'_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+l+'_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="'+l+'_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="'+l+'_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="'+k.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+l+'_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="'+l+'_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="'+l+'_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="'+k.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+l+'_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="'+l+'_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="'+l+'_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="'+k.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+l+'_jGraduate_AngleInput" size="3" value="0"/>deg</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="'+l+'_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="'+l+'_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="'+k.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+l+'_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="'+l+'_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="'+l+'_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');var t,u,v,w=256,x=w-0,y=w-0,z={};$(".jGraduate_SliderBar").width(145);var A=$("#"+l+"_jGraduate_GradContainer")[0],B=a("svg",{id:l+"_jgraduate_svg",width:w,height:w,xmlns:b.svg},A);t=t||j.paint.type;var C=u=j.paint[t],D=j.paint.alpha,E="solidColor"===t;switch(t){case"solidColor":case"linearGradient":if(E||(u.id=l+"_lg_jgraduate_grad",C=u=B.appendChild(u)),a("radialGradient",{id:l+"_rg_jgraduate_grad"},B),"linearGradient"===t)break;case"radialGradient":E||(u.id=l+"_rg_jgraduate_grad",C=u=B.appendChild(u)),a("linearGradient",{id:l+"_lg_jgraduate_grad"},B)}if(E){C=u=$("#"+l+"_lg_jgraduate_grad")[0],p=j.paint[t],e(0,"#"+p,1);var F=typeof k.newstop;if("string"===F)switch(k.newstop){case"same":e(1,"#"+p,1);break;case"inverse":F="";for(var G=0;6>G;G+=2){p.substr(G,2);var H=(255-parseInt(p.substr(G,2),16)).toString(16);H.length<2&&(H=0+H),F+=H}e(1,"#"+F,1);break;case"white":e(1,"#ffffff",1);break;case"black":e(1,"#000000",1)}else"object"===F&&e(1,k.newstop.color||"#"+p,"opac"in k.newstop?k.newstop.opac:1)}p=parseFloat(C.getAttribute("x1")||0),F=parseFloat(C.getAttribute("y1")||0),G=parseFloat(C.getAttribute("x2")||1),H=parseFloat(C.getAttribute("y2")||0);var I=parseFloat(C.getAttribute("cx")||.5),J=parseFloat(C.getAttribute("cy")||.5),K=parseFloat(C.getAttribute("fx")||I),L=parseFloat(C.getAttribute("fy")||J);v=a("rect",{id:l+"_jgraduate_rect",x:0,y:0,width:x,height:y,fill:"url(#"+l+"_jgraduate_grad)","fill-opacity":D/100},B);var M=$("<div/>").attr({"class":"grad_coord jGraduate_lg_field",title:"Begin Stop"}).text(1).css({top:F*w,left:p*w}).data("coord","start").appendTo(A),N=M.clone().text(2).css({top:H*w,left:G*w}).attr("title","End stop").data("coord","end").appendTo(A),O=$("<div/>").attr({"class":"grad_coord jGraduate_rg_field",title:"Center stop"}).text("C").css({top:J*w,left:I*w}).data("coord","center").appendTo(A),P=O.clone().text("F").css({top:L*w,left:K*w,display:"none"}).attr("title","Focus point").data("coord","focus").appendTo(A);P[0].id=l+"_jGraduate_focusCoord",$(m+" .grad_coord"),$.each(["x1","y1","x2","y2","cx","cy","fx","fy"],function(a,b){var c=u.getAttribute(b),d=isNaN(b[1]);c||(c=d?"0.5":"x2"===b?"1.0":"0.0"),z[b]=$("#"+l+"_jGraduate_"+b).val(c).change(function(){isNaN(parseFloat(this.value))||this.value<0?this.value=0:this.value>1&&(this.value=1),("f"!==b[0]||ib)&&(d&&"radialGradient"===t||!d&&"linearGradient"===t)&&u.setAttribute(b,this.value);
var a=d?"c"===b[0]?O:P:"1"===b[1]?M:N,c=b.indexOf("x")>=0?"left":"top";a.css(c,this.value*w)}).change()});var Q,R,S,T,U,V,W=$("#"+l+"_jGraduate_StopSlider"),X=a("path",{d:"m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",fill:"none",stroke:"#D00","stroke-width":5,display:"none"},T),Y=1,Z=1,_=0,ab=I,bb=J;T=a("svg",{width:"100%",height:45},W[0]),A=a("pattern",{width:16,height:16,patternUnits:"userSpaceOnUse",id:"jGraduate_trans"},T),a("image",{width:16,height:16},A).setAttributeNS(b.xlink,"xlink:href",k.images.clientPath+"map-opacity.png"),$(T).click(function(a){if(V=W.offset(),"path"!==a.target.tagName){var b=a.pageX-V.left-8;b=10>b?10:b>w+10?w+10:b,e(b/w,0,0,!0),a.stopPropagation()}}),$(T).mouseover(function(){T.appendChild(X)}),R=a("g",{},T),a("line",{x1:10,y1:15,x2:w+10,y2:15,"stroke-width":2,stroke:"#000"},T);var cb=s.find(".jGraduate_spreadMethod").change(function(){u.setAttribute("spreadMethod",$(this).val())}),db=null,eb=function(a){var b=a.pageX-hb.left,c=a.pageY-hb.top;b=0>b?0:b>w?w:b,c=0>c?0:c>w?w:c,db.css("left",b).css("top",c),b/=x,c/=y;var d=db.data("coord"),e=u;switch(d){case"start":z.x1.val(b),z.y1.val(c),e.setAttribute("x1",b),e.setAttribute("y1",c);break;case"end":z.x2.val(b),z.y2.val(c),e.setAttribute("x2",b),e.setAttribute("y2",c);break;case"center":z.cx.val(b),z.cy.val(c),e.setAttribute("cx",b),e.setAttribute("cy",c),ab=b,bb=c,h();break;case"focus":z.fx.val(b),z.fy.val(c),e.setAttribute("fx",b),e.setAttribute("fy",c),h()}a.preventDefault()},fb=function(){db=null,q.unbind("mousemove",eb).unbind("mouseup",fb)};if(Q=u.getElementsByTagNameNS(b.svg,"stop"),2>gb){for(;2>gb;)u.appendChild(document.createElementNS(b.svg,"stop")),++gb;Q=u.getElementsByTagNameNS(b.svg,"stop")}var gb=Q.length;for(G=0;gb>G;G++)e(0,0,0,0,Q[G]);cb.val(u.getAttribute("spreadMethod")||"pad");var hb,ib=!1;v.setAttribute("fill-opacity",D/100),$("#"+l+" div.grad_coord").mousedown(function(a){a.preventDefault(),db=$(this),db.offset(),hb=db.parent().offset(),q.mousemove(eb).mouseup(fb)}),$("#"+l+"_jGraduate_Ok").bind("click",function(){j.paint.type=t,j.paint[t]=u.cloneNode(!0),j.paint.solidColor=null,n()}),$("#"+l+"_jGraduate_Cancel").bind("click",function(){o()}),"radialGradient"===t&&(ib?P.show():(P.hide(),z.fx.val(""),z.fy.val(""))),$("#"+l+"_jGraduate_match_ctr")[0].checked=!ib;var jb,kb;if($("#"+l+"_jGraduate_match_ctr").change(function(){ib=!this.checked,P.toggle(ib),z.fx.val(""),z.fy.val("");var a=u;if(ib){var b=jb||.5,c=kb||.5;a.setAttribute("fx",b),a.setAttribute("fy",c),z.fx.val(b),z.fy.val(c)}else jb=a.getAttribute("fx"),kb=a.getAttribute("fy"),a.removeAttribute("fx"),a.removeAttribute("fy")}),Q=u.getElementsByTagNameNS(b.svg,"stop"),gb=Q.length,2>gb){for(;2>gb;)u.appendChild(document.createElementNS(b.svg,"stop")),++gb;Q=u.getElementsByTagNameNS(b.svg,"stop")}var lb;D=s=0,"radialGradient"===t&&(B=u.gradientTransform.baseVal,2===B.numberOfItems?(gb=B.getItem(0),B=B.getItem(1),2===gb.type&&3===B.type&&(gb=B.matrix,1!==gb.a?s=Math.round(100*-(1-gb.a)):1!==gb.d&&(s=Math.round(100*(1-gb.d))))):3===B.numberOfItems&&(A=B.getItem(0),gb=B.getItem(1),B=B.getItem(2),4===A.type&&2===gb.type&&3===B.type&&(D=Math.round(A.angle),gb=B.matrix,1!==gb.a?s=Math.round(100*-(1-gb.a)):1!==gb.d&&(s=Math.round(100*(1-gb.d)))))),s={radius:{handle:"#"+l+"_jGraduate_RadiusArrows",input:"#"+l+"_jGraduate_RadiusInput",val:100*(u.getAttribute("r")||.5)},opacity:{handle:"#"+l+"_jGraduate_OpacArrows",input:"#"+l+"_jGraduate_OpacInput",val:j.paint.alpha||100},ellip:{handle:"#"+l+"_jGraduate_EllipArrows",input:"#"+l+"_jGraduate_EllipInput",val:s},angle:{handle:"#"+l+"_jGraduate_AngleArrows",input:"#"+l+"_jGraduate_AngleInput",val:D}},$.each(s,function(a,b){var c=$(b.handle);c.mousedown(function(d){var e=c.parent();lb={type:a,elem:c,input:$(b.input),parent:e,offset:e.offset()},q.mousemove(mb).mouseup(nb),d.preventDefault()}),$(b.input).val(b.val).change(function(){var b=+this.value,d=0,e="radialGradient"===t;switch(a){case"radius":e&&u.setAttribute("r",b/100),d=Math.pow(b/100,.4)/2*145;break;case"opacity":j.paint.alpha=b,v.setAttribute("fill-opacity",b/100),d=1.45*b;break;case"ellip":if(Y=Z=1,0===b){d=72.5;break}b>99.5&&(b=99.5),b>0?Z=1-b/100:Y=-(b/100)-1,d=145*((b+100)/2)/100,e&&h();break;case"angle":_=b,d=_/180,d+=.5,d*=145,e&&h()}d>145?d=145:0>d&&(d=0),c.css({"margin-left":d-5})}).change()});var mb=function(a){var b=a.pageX-lb.offset.left-parseInt(lb.parent.css("border-left-width"));b>145&&(b=145),0>=b&&(b=0);var c=b-5;switch(b/=145,lb.type){case"radius":b=Math.pow(2*b,2.5),b>.98&&1.02>b&&(b=1),.01>=b&&(b=.01),u.setAttribute("r",b);break;case"opacity":j.paint.alpha=parseInt(100*b),v.setAttribute("fill-opacity",b);break;case"ellip":Z=Y=1,.5>b?(b/=.5,Y=0>=b?.01:b):b>.5&&(b/=.5,b=2-b,Z=0>=b?.01:b),h(),b-=1,Z===b+1&&(b=Math.abs(b));break;case"angle":b-=.5,_=b*=180,h(),b/=100}lb.elem.css({"margin-left":c}),b=Math.round(100*b),lb.input.val(b),a.preventDefault()},nb=function(){q.unbind("mousemove",mb).unbind("mouseup",nb),lb=null};for(s=(255*j.paint.alpha/100).toString(16);s.length<2;)s="0"+s;s=s.split(".")[0],p="none"==j.paint.solidColor?"":j.paint.solidColor+s,E||(p=Q[0].getAttribute("stop-color")),$.extend($.fn.jPicker.defaults.window,{alphaSupport:!0,effects:{type:"show",speed:0}}),r.jPicker({window:{title:k.window.pickerTitle},images:{clientPath:k.images.clientPath},color:{active:p,alphaSupport:!0}},function(a){j.paint.type="solidColor",j.paint.alpha=a.val("ahex")?Math.round(a.val("a")/255*100):100,j.paint.solidColor=a.val("hex")?a.val("hex"):"none",j.paint.radialGradient=null,n()},null,function(){o()});var ob=$(m+" .jGraduate_tabs li");ob.click(function(){ob.removeClass("jGraduate_tab_current"),$(this).addClass("jGraduate_tab_current"),$(m+" > div").hide();var a=$(this).attr("data-type");if($(m+" .jGraduate_gradPick").show(),"rg"===a||"lg"===a){$(".jGraduate_"+a+"_field").show(),$(".jGraduate_"+("lg"===a?"rg":"lg")+"_field").hide(),$("#"+l+"_jgraduate_rect")[0].setAttribute("fill","url(#"+l+"_"+a+"_jgraduate_grad)"),t="lg"===a?"linearGradient":"radialGradient",$("#"+l+"_jGraduate_OpacInput").val(j.paint.alpha).change();var b=$("#"+l+"_"+a+"_jgraduate_grad")[0];if(u!==b){var c=$(u).find("stop");$(b).empty().append(c),u=b,b=cb.val(),u.setAttribute("spreadMethod",b)}ib="rg"===a&&null!=u.getAttribute("fx")&&!(I==K&&J==L),$("#"+l+"_jGraduate_focusCoord").toggle(ib),ib&&($("#"+l+"_jGraduate_match_ctr")[0].checked=!1)}else $(m+" .jGraduate_gradPick").hide(),$(m+" .jGraduate_colPick").show()}),$(m+" > div").hide(),ob.removeClass("jGraduate_tab_current");var pb;switch(j.paint.type){case"linearGradient":pb=$(m+" .jGraduate_tab_lingrad");break;case"radialGradient":pb=$(m+" .jGraduate_tab_radgrad");break;default:pb=$(m+" .jGraduate_tab_color")}j.show(),setTimeout(function(){pb.addClass("jGraduate_tab_current").click()},10)}else alert("Container element must have an id attribute to maintain unique id strings for sub-elements.")})}}();