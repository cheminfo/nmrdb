requirejs.config({paths:{svgsanitize:"lib/svg-edit-2.7/sanitize"},shim:{svgsanitize:["lib/svg-edit-2.7/svgedit","lib/svg-edit-2.7/browser","lib/svg-edit-2.7/svgutils"],"lib/svg-edit-2.7/svgutils":["lib/svg-edit-2.7/browser","lib/svg-edit-2.7/svgtransformlist","lib/svg-edit-2.7/units"],"lib/svg-edit-2.7/svgtransformlist":["lib/svg-edit-2.7/browser"]}}),define(["require","lodash","modules/default/defaultview","src/util/typerenderer","src/util/util","src/util/datatraversing","lib/svg-edit-2.7/embedapi","svgsanitize"],function(a,b,c,d){function e(){var a=this;this.svgCanvas=null,this.iframeLoaded=$.Deferred(),this.iframeLoaded.done(function(){a.svgCanvas.zoomChanged(window,"canvas")})}var f=b.throttle(function(){function a(a){c[0].module.definition.configuration.groups.group[0].svgcode=[a],c[0].module.controller.onChange(a)}function b(b,c){return c?void console.error("Unable to get svg from iframe"):void a(b)}var c=arguments;if(c[0]._configCheckBox("editable","isEditable"))setTimeout(function(){c[0].svgCanvas.getSvgString()(b)},0);else{var d=c[0].dom.clone(),e=d[0].getAttribute("viewBox").split(" ");d.attr("width",e[2]).attr("height",e[3]).removeAttr("viewBox"),d=d.wrap("<p/>").parent().html(),a(d)}},1e3),g=["animate","set","animateMotion","animateColor","animateTransform"],h={begin:"indefinite",options:{clearOnEnd:!0,persistOnEnd:!1}},i=["options","tag","attributes"],j=["click","mouseenter","mouseleave"],l={};return e.prototype=$.extend(!0,{},c,{init:function(){var a=this;if(console.log("svg editor init"),this._configCheckBox("editable","isEditable"))this.dom&&this.dom.remove(),this.svgCanvas=null,this.dom=$('<iframe src="lib/svg-edit-2.7/svg-editor.html?extensions=ext-xdomain-messaging.js'+window.location.href.replace(/\?(.*)$/,"&$1")+'"></iframe>'),this.module.getDomContent().html(this.dom),this.dom.bind("load",function(){var b=a.dom[0];a.svgCanvas=new EmbeddedSVGEdit(b),a.iframeDoc=b.contentDocument||b.contentWindow.document,a.svgEditor=b.contentWindow.svgEditor,b.contentWindow.svgedit.options={},a.svgCanvas.bind("changed",function(){console.log("svgCanvas changed"),a.svgEditor.showSaveWarning=!1,a._saveSvg()}),a._loadSvg(),a.iframeLoaded.resolve(),a.resolveReady(),a.onResize(),console.log("resolve ready")});else{var b=d.toScreen({type:"svg",value:a.module.getConfiguration("svgcode")},this.module);b.always(function(b){a.dom=b||$("<svg></svg>"),console.log("rendered",a.dom),a.module.getDomContent().html(a.dom),a.resolveReady()})}},inDom:function(){console.log("in dom")},onResize:function(){console.log("on resize"),this._configCheckBox("editable","isEditable")&&this.dom&&(console.log("on resize apply"),this.dom.height(this.height).width(this.width),this.svgCanvas&&this.svgCanvas.zoomChanged(window,"canvas"))},blank:function(){console.log("blank")},update:{svgModifier:function(a){var b=this;b.modifySvgFromArray(a,!0)}},addAnimation:function(a,c){var d=this;if(c.attributes){{a.attr("id")}if(c.tag=c.tag||"animate",-1!==g.indexOf(c.tag)){c.attributes instanceof Array||(c.attributes=[c.attributes]),c=b.defaults(c,h);var e={};for(k in c)-1===i.indexOf(k)&&(e[k]=b.cloneDeep(c[k]));for(var f=0;f<c.attributes.length;f++){var j=document.createElementNS("http://www.w3.org/2000/svg",c.tag);c.attributes[f]=b.defaults(c.attributes[f],e);for(var l in c.attributes[f])j.setAttributeNS(null,l,c.attributes[f][l]);a.append(j),$animations=a.children(":last-child"),$animations.each(function(){this.addEventListener("endEvent",function(){if(c.options.persistOnEnd){"animate"===c.tag?a.attr(this.getAttribute("attributeName"),this.getAttribute("to")):console.warn("Could not persist animation")}if(c.options.clearOnEnd){var b=this,e=c.options.clearOnEnd.timeout||0;setTimeout(function(){$(b).remove(),d._saveSvg()},e)}}),this.addEventListener("repeatEvent",function(){}),this.addEventListener("beginEvent",function(){}),"indefinite"===c.begin&&this.beginElement()})}}}},addAnimations:function(a,b){if(b instanceof Array)for(var c=0;c<b.length;c++)this.addAnimation(a,b[c]);else this.addAnimation(a,b)},addAttributes:function(){},removeStyleProperties:function(a,b){a.each(function(){for(var a in b)this.style.removeProperty(a)})},modifySvgFromArray:function(a,b){var c=this;a instanceof Array||(a=[a]),this.$svgcontent=this._configCheckBox("editable","isEditable")?$(c.iframeDoc).find("#svgcontent"):c.dom,c.module._data=[];for(var d=0;d<a.length;d++)this.modifySvgFromObject(a[d],b);c._saveSvg()},modifySvgFromObject:function(a,b){function c(){console.log("mouse enter callback"),console.log(a.info._dataChange),f.module.controller.onHover(a.info||{}),console.log(a.info._dataChange)}function d(){}function e(){f.module.controller.onClick(a.info||{})}var f=this,g=a.selector;if(g){a.info&&(f.module._data=a.info);var h,i=this.$svgcontent;if(h=i.find(g),0===h.length&&(h=i.find("#"+g)),0===h.length)return void console.warn("The svg element to modify was not found",g);if(a.innerVal&&h.html(a.innerVal),a.attributes&&!a.animation)h.attr(a.attributes),h.each(function(){}),f.removeStyleProperties(h,a.attributes);else if(a.animation&&!a.attributes)f.addAnimations(h,a.animation);else if(a.attributes&&a.animation&&!a.animation.attributes){a.animation.attributes=[];for(var k in a.attributes){var l={};l.attributeName=k,l.to=a.attributes[k],a.animation.attributes.push(l)}delete a.attributes,f.addAnimations(h,a.animation)}else a.attributes&&a.animation&&a.animation.attributes&&(h.attr(a.attributes),f.removeStyleProperties(h,a.attributes),f.addAnimations(h,a.animation));b&&!function(b){b.off("mouseenter.svgeditor.varout").off("mouseleave.svgeditor.varout").off("click.svgeditor.varout"),a.info&&b.on("mouseenter.svgeditor.varout",c).on("mouseleave.svgeditor.varout",d).on("click.svgeditor.varout",e);for(var g=0;g<j.length;g++)a.hasOwnProperty(j[g])&&!function(c){b.off(c),b.on(c,function(){a[c].selector||(a[c].selector=a.selector),f.modifySvgFromArray(a[c],!0)})}(j[g])}(h)}},_clearEventCallbacks:function(a){for(var b=0;b<a.length;b++)if(a.selector)for(var c=0;c<j.length;c++)$(a.selector).off(j[c]+".svgeditor.svgmodifier")},getDom:function(){return this.dom},_loadSvg:function(){var a=this.module.getConfiguration("svgcode");this.svgCanvas.setSvgString(a),this.module.controller.onChange(a)},_saveSvg:function(){f(this)},_configCheckBox:function(a,c){return this.module.getConfiguration(a)&&b.find(this.module.getConfiguration(a),function(a){return a===c})},memorizeAnim:function(a,b){b&&a.attributes&&a.attributes.to&&a.attributes.attributeName&&(l[b]=l[b]||{},l[b][a.attributes.attributeName]=l[b][a.attributes.attributeName]||{},l[b][a.attributes.attributeName].to=a.attributes.to)},rememberAnim:function(a,b){a.attributes&&!a.attributes.from&&b&&l[b]&&l[b][a.attributes.attributeName]&&l[b][a.attributes.attributeName].to&&(a.attributes.from=l[b][a.attributes.attributeName].to)}}),e});