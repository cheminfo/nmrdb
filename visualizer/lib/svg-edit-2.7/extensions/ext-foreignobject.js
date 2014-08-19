svgEditor.addExtension("foreignObject",function(a){function b(a){var b=$("#fc_rules");b.length||(b=$('<style id="fc_rules"></style>').appendTo("head")),b.text(a?" #tool_topath { display: none !important; }":""),$("#foreignObject_panel").toggle(a)}function c(a){$("#tool_source_save, #tool_source_cancel").toggle(!a),$("#foreign_save, #foreign_cancel").toggle(a)}function d(b){var c=g[0];try{var d=k.text2xml('<svg xmlns="'+j.SVG+'" xmlns:xlink="'+j.XLINK+'">'+b+"</svg>");a.sanitizeSvg(d.documentElement),c.parentNode.replaceChild(m.importNode(d.documentElement.firstChild,!0),c),a.call("changed",[c]),svgCanvas.clearSelection()}catch(e){return console.log(e),!1}return!0}function e(){var b=g[0];if(b&&!l){l=!0,c(!0),b.removeAttribute("fill");var d=a.svgToString(b,0);$("#svg_source_textarea").val(d),$("#svg_source_editor").fadeIn(),n(),$("#svg_source_textarea").focus()}}function f(b,c){svgCanvas.changeSelectedAttribute(b,c),a.call("changed",g)}var g,h,i,j=svgedit.NS,k=svgedit.utilities,l=(a.svgcontent,a.addSvgElementFromJson,!1),m=a.svgroot.parentNode.ownerDocument,n=function(){var a=$("#svg_source_container").height()-80;$("#svg_source_textarea").css("height",a)};return{name:"foreignObject",svgicons:svgEditor.curConfig.extPath+"foreignobject-icons.xml",buttons:[{id:"tool_foreign",type:"mode",title:"Foreign Object Tool",events:{click:function(){svgCanvas.setMode("foreign")}}},{id:"edit_foreign",type:"context",panel:"foreignObject_panel",title:"Edit ForeignObject Content",events:{click:function(){e()}}}],context_tools:[{type:"input",panel:"foreignObject_panel",title:"Change foreignObject's width",id:"foreign_width",label:"w",size:3,events:{change:function(){f("width",this.value)}}},{type:"input",panel:"foreignObject_panel",title:"Change foreignObject's height",id:"foreign_height",label:"h",events:{change:function(){f("height",this.value)}}},{type:"input",panel:"foreignObject_panel",title:"Change foreignObject's font size",id:"foreign_font_size",label:"font-size",size:2,defval:16,events:{change:function(){f("font-size",this.value)}}}],callback:function(){$("#foreignObject_panel").hide();var a=function(){$("#svg_source_editor").hide(),l=!1,$("#svg_source_textarea").blur(),c(!1)};setTimeout(function(){$("#tool_source_save").clone().hide().attr("id","foreign_save").unbind().appendTo("#tool_source_back").click(function(){l&&(d($("#svg_source_textarea").val())?a():$.confirm("Errors found. Revert to original?",function(b){return b?void a():!1}))}),$("#tool_source_cancel").clone().hide().attr("id","foreign_cancel").unbind().appendTo("#tool_source_back").click(function(){a()})},3e3)},mouseDown:function(b){b.event;if("foreign"==svgCanvas.getMode()){h=!0,i=a.addSvgElementFromJson({element:"foreignObject",attr:{x:b.start_x,y:b.start_y,id:a.getNextId(),"font-size":16,width:"48",height:"20",style:"pointer-events:inherit"}});var c=m.createElementNS(j.MATH,"math");c.setAttributeNS(j.XMLNS,"xmlns",j.MATH),c.setAttribute("display","inline");var d=m.createElementNS(j.MATH,"mi");d.setAttribute("mathvariant","normal"),d.textContent="Φ";var e=m.createElementNS(j.MATH,"mo");e.textContent="∪";var f=m.createElementNS(j.MATH,"mi");return f.textContent="ℳ",c.appendChild(d),c.appendChild(e),c.appendChild(f),i.appendChild(c),{started:!0}}},mouseUp:function(a){a.event;if("foreign"==svgCanvas.getMode()&&h){var b=$(i).attr(["width","height"]),c=0!=b.width||0!=b.height;return svgCanvas.addToSelection([i],!0),{keep:c,element:i}}},selectedChanged:function(a){g=a.elems;for(var c=g.length;c--;){var d=g[c];d&&"foreignObject"===d.tagName?a.selectedElement&&!a.multiselected?($("#foreign_font_size").val(d.getAttribute("font-size")),$("#foreign_width").val(d.getAttribute("width")),$("#foreign_height").val(d.getAttribute("height")),b(!0)):b(!1):b(!1)}},elementChanged:function(a){a.elems[0]}}});