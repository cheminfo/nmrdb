svgEditor.addExtension("Connector",function(a){function b(a,b,c,d){d&&(d-=0,c=$.extend({},c),c.width+=d,c.height+=d,c.x-=d/2,c.y-=d/2);var e,f=c.x+c.width/2,g=c.y+c.height/2,h=a-f,i=b-g,j=Math.abs(i/h);return e=j<c.height/c.width?c.width/2/Math.abs(h):c.height/2/Math.abs(i),{x:f+h*e,y:g+i*e}}function c(a,b){var c=!!b.getAttribute("marker-"+a),d=5*b.getAttribute("stroke-width");return c?d:0}function d(a){var b=$("#connector_rules");b.length||(b=$('<style id="connector_rules"></style>').appendTo("head")),b.text(a?"#tool_clone, #tool_topath, #tool_angle, #xy_panel { display: none !important; }":""),$("#connector_panel").toggle(a)}function e(a,b,c,d,f){var g,h=a.points,i=q.createSVGPoint();i.x=c,i.y=d,"end"===b&&(b=h.numberOfItems-1);try{h.replaceItem(i,b)}catch(j){var k=a.getAttribute("points").split(" ");for(g=0;g<k.length;g++)g===b&&(k[g]=c+","+d);a.setAttribute("points",k.join(" "))}if(f){var l=h.getItem(0),m=h.getItem(h.numberOfItems-1);e(a,1,(m.x+l.x)/2,(m.y+l.y)/2)}}function f(a,d){for(var f=x.length;f--;){var g=x[f],h=g.connector,i=(g.elem,g.is_start?"start":"end"),j=A(h,i+"_bb");j.x=g.start_x+a,j.y=g.start_y+d,A(h,i+"_bb",j);var k=g.is_start?"end":"start",l=A(h,k+"_bb"),m=l.x+l.width/2,n=l.y+l.height/2,o=b(m,n,j,c(i,h));e(h,g.is_start?0:"end",o.x,o.y,!0);var p=b(o.x,o.y,A(h,k+"_bb"),c(k,h));e(h,g.is_start?"end":0,p.x,p.y,!0)}}function g(a){var b;a||(a=z);var c=$(p).find(y);x=[],c.each(function(){function c(){-1!==$.inArray(this,a)&&(d=!0)}var d,e=A(this,"c_start"),f=A(this,"c_end"),g=[s(e),s(f)];for(b=0;2>b;b++){var h=g[b];if(d=!1,$(h).parents().each(c),h&&h.parentNode){if(-1!==$.inArray(h,a)||d){var i=svgCanvas.getStrokedBBox([h]);x.push({elem:h,connector:this,is_start:0===b,start_x:i.x,start_y:i.y})}}else $(this).remove()}})}function h(a){var d,f;if(g(a),x.length)for(d=x.length;d--;){var h=x[d],i=h.connector,j=h.elem,k=(5*i.getAttribute("stroke-width"),h.is_start?"start":"end"),l=svgCanvas.getStrokedBBox([j]);l.x=h.start_x,l.y=h.start_y,A(i,k+"_bb",l);var m=(A(i,k+"_off"),h.is_start?"end":"start"),n=A(i,m+"_bb"),o=n.x+n.width/2,p=n.y+n.height/2,q=b(o,p,l,c(k,i));e(i,h.is_start?0:"end",q.x,q.y,!0);var r=b(q.x,q.y,A(i,m+"_bb"),c(m,i));if(e(i,h.is_start?"end":0,r.x,r.y,!0),-1!==navigator.userAgent.indexOf("AppleWebKit")){var s=i.points,t=s.numberOfItems,u=[];for(f=0;t>f;f++)q=s.getItem(f),u[f]=q.x+","+q.y;i.setAttribute("points",u.join(" "))}}}function i(){$(p).find("*").each(function(){var a=this.getAttributeNS(o,"connector");if(a){this.setAttribute("class",y.substr(1));var b=a.split(" "),c=svgCanvas.getStrokedBBox([s(b[0])]),d=svgCanvas.getStrokedBBox([s(b[1])]);$(this).data("c_start",b[0]).data("c_end",b[1]).data("start_bb",c).data("end_bb",d),svgCanvas.getEditorNS(!0)}})}var j,k,l,m,n,o,p=a.svgcontent,q=a.svgroot,r=a.getNextId,s=a.getElem,t=a.addSvgElementFromJson,u=a.selectorManager,v=svgEditor.curConfig,w=!1,x=[],y=".se_connector",z=[],A=$.data,B={en:[{id:"mode_connect",title:"Connect two objects"}],fr:[{id:"mode_connect",title:"Connecter deux objets"}]};return function(){var a=svgCanvas.groupSelectedElements;svgCanvas.groupSelectedElements=function(){return svgCanvas.removeFromSelection($(y).toArray()),a.apply(this,arguments)};var b=svgCanvas.moveSelectedElements;svgCanvas.moveSelectedElements=function(){svgCanvas.removeFromSelection($(y).toArray());var a=b.apply(this,arguments);return h(),a},o=svgCanvas.getEditorNS()}(),{name:"Connector",svgicons:svgEditor.curConfig.imgPath+"conn.svg",buttons:[{id:"mode_connect",type:"mode",icon:svgEditor.curConfig.imgPath+"cut.png",title:"Connect two objects",includeWith:{button:"#tool_line",isDefault:!1,position:1},events:{click:function(){svgCanvas.setMode("connector")}}}],addLangData:function(a){return{data:B[a]}},mouseDown:function(a){var b=a.event;j=a.start_x,k=a.start_y;var c=svgCanvas.getMode();if("connector"==c){if(w)return;var d=b.target,e=$(d).parents();if(-1!==$.inArray(p,e)){var f=$(d).closest("foreignObject");m=f.length?f[0]:d;var h=svgCanvas.getStrokedBBox([m]),i=h.x+h.width/2,n=h.y+h.height/2;w=!0,l=t({element:"polyline",attr:{id:r(),points:i+","+n+" "+i+","+n+" "+j+","+k,stroke:"#"+v.initStroke.color,"stroke-width":m.stroke_width&&0!=m.stroke_width?m.stroke_width:v.initStroke.width,fill:"none",opacity:v.initStroke.opacity,style:"pointer-events:none"}}),A(l,"start_bb",h)}return{started:!0}}"select"==c&&g()},mouseMove:function(a){var d=svgCanvas.getZoom(),g=(a.event,a.mouse_x/d),h=a.mouse_y/d,i=g-j,m=h-k,n=svgCanvas.getMode();if("connector"==n&&w){var o=(3*l.getAttribute("stroke-width"),b(g,h,A(l,"start_bb"),c("start",l)));j=o.x,k=o.y,e(l,0,o.x,o.y,!0),e(l,"end",g,h,!0)}else if("select"==n){for(var p=z.length;p--;){var q=z[p];q&&A(q,"c_start")&&(svgCanvas.removeFromSelection([q]),svgCanvas.getTransformList(q).clear())}x.length&&f(i,m)}},mouseUp:function(a){var d=svgCanvas.getZoom(),f=a.event,g=(a.mouse_x/d,a.mouse_y/d,f.target);if("connector"==svgCanvas.getMode()){var h=$(g).closest("foreignObject");h.length&&(g=h[0]);var i=$(g).parents();if(g==m)return w=!0,{keep:!0,element:null,started:w};if(-1===$.inArray(p,i))return $(l).remove(),w=!1,{keep:!1,element:null,started:w};n=g;var q=m.id,r=n.id,s=q+" "+r,t=r+" "+q,v=$(p).find(y).filter(function(){var a=this.getAttributeNS(o,"connector");return a==s||a==t?!0:void 0});if(v.length)return $(l).remove(),{keep:!1,element:null,started:!1};var x=svgCanvas.getStrokedBBox([n]),z=b(j,k,x,c("start",l));return e(l,"end",z.x,z.y,!0),$(l).data("c_start",q).data("c_end",r).data("end_bb",x),o=svgCanvas.getEditorNS(!0),l.setAttributeNS(o,"se:connector",s),l.setAttribute("class",y.substr(1)),l.setAttribute("opacity",1),svgCanvas.addToSelection([l]),svgCanvas.moveToBottomSelectedElement(),u.requestSelector(l).showGrips(!1),w=!1,{keep:!0,element:l,started:w}}},selectedChanged:function(a){if($(p).find(y).length){"connector"==svgCanvas.getMode()&&svgCanvas.setMode("select"),z=a.elems;for(var b=z.length;b--;){var c=z[b];c&&A(c,"c_start")?(u.requestSelector(c).showGrips(!1),d(a.selectedElement&&!a.multiselected?!0:!1)):d(!1)}h()}},elementChanged:function(a){var b=a.elems[0];b&&"svg"===b.tagName&&"svgcontent"===b.id&&(p=b,i());var c;if(b&&(b.getAttribute("marker-start")||b.getAttribute("marker-mid")||b.getAttribute("marker-end"))){c=b.getAttribute("marker-start");var d=b.getAttribute("marker-mid"),e=b.getAttribute("marker-end");if(l=b,$(b).data("start_off",!!c).data("end_off",!!e),"line"===b.tagName&&d){var f=Number(b.getAttribute("x1")),g=Number(b.getAttribute("x2")),j=Number(b.getAttribute("y1")),k=Number(b.getAttribute("y2")),m=b.id,n=" "+(f+g)/2+","+(j+k)/2+" ",o=t({element:"polyline",attr:{points:f+","+j+n+g+","+k,stroke:b.getAttribute("stroke"),"stroke-width":b.getAttribute("stroke-width"),"marker-mid":d,fill:"none",opacity:b.getAttribute("opacity")||1}});$(b).after(o).remove(),svgCanvas.clearSelection(),o.id=m,svgCanvas.addToSelection([o]),b=o}}b.getAttribute("class")==y.substr(1)?(c=s(A(b,"c_start")),h([c])):h()},toolButtonStateUpdate:function(a){a.nostroke&&$("#mode_connect").hasClass("tool_button_current")&&svgEditor.clickSelect(),$("#mode_connect").toggleClass("disabled",a.nostroke)}}});