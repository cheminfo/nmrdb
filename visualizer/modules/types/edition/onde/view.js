define(["modules/default/defaultview","src/util/util","jquery","components/onde/src/onde","forms/button"],function(a,b,c,d,e){function f(){this._id=b.getNextUniqueId()}return b.loadCss("components/onde/src/onde.css"),f.prototype=c.extend(!0,{},a,{init:function(){var a=this;this.dom=c('<form id="'+this._id+'">').css({height:"100%",width:"100%",textAlign:"center"}).append(c('<div class="onde-panel">'));var b=this.module.getConfiguration("hasButton")||[];b[0]&&this.dom.append(new e(this.module.getConfiguration("button_text"),function(){a.exportForm()},{color:"green"}).render().css({marginTop:"10px"})),this.dom.on("submit",function(b){return b.preventDefault(),a.exportForm(),!1}),this.inputVal={}},blank:{},inDom:function(){this.module.getDomContent().html(this.dom),this.initForm(),this.resolveReady()},initForm:function(){this.form=new d.Onde(this.dom),this.renderForm()},update:{inputValue:function(a){this.inputObj=a,this.inputVal=a.resurrect(),this.renderForm()},schema:function(a){this.module.controller.inputSchema=a,this.renderForm()}},renderForm:function(){var a=this.module.controller.getSchema();this.form.render(a,this.inputVal,{})},exportForm:function(){var a=this.form.getData();a.errorCount||this.module.controller.onSubmit(a.data)}}),f});