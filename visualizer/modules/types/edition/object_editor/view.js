define(["modules/default/defaultview","src/util/util","components/jsoneditor/jsoneditor.min","src/util/context","jquery"],function(a,b,c,d,e){function f(){this._id=b.getNextUniqueId()}return b.loadCss("components/jsoneditor/jsoneditor.min.css"),f.prototype=e.extend(!0,{},a,{init:function(){var a=this;this.dom||(this.dom=e('<div id="'+this._id+'"></div>').css({height:"100%",width:"100%"}),this.module.getDomContent().html(this.dom),d.listen(this.module.getDomWrapper().get(0),[],function(b){var c=e("<li><a>Change editor type</a></li>"),d=e("<ul/>").appendTo(c),f={Read:"view",Edit:"tree",Text:"text"};for(var g in f){var h=e("<li>").appendTo(d);h.html("<a>"+g+"</a>")}e(b).append(c),c.bind("click",function(b){var c=f[b.target.text];a.editor.setMode(c),a.module.definition.configuration.groups.group[0].editable[0]=c})}))},blank:{value:function(){this.editor.set({})}},inDom:function(){var a=this;this.dom.empty();var b=this.module.getConfiguration("editable");this.expand=!!this.module.getConfiguration("expanded",!1)[0],this.storeObject=!!this.module.getConfiguration("storeObject",!1)[0],this.changeInputData(DataObject.check(JSON.parse(this.module.getConfiguration("storedObject")))),this.editor=new c(document.getElementById(this._id),{mode:b,change:function(){a.module.controller.sendValue(a.editor.get())},module:this.module}),this.update.value.call(this,this.inputData),this.resolveReady()},update:{value:function(a){this.changeInputData(a);var b=a.resurrect();this.editor.set(b),this.expand&&this.editor.expandAll(),this.module.controller.sendValue(b)}},changeInputData:function(a){if(this.inputData!==a){{this.module.getId()}this.inputData=a}}}),f});