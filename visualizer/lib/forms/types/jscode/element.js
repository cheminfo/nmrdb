define(["require","jquery","src/util/util","ace/ace"],function(a,b,c,d){var e=function(){};return e.prototype.__makeDom=function(){this._id=c.getNextUniqueId();var a=b("<div />"),d=b("<div />",{id:this._id,tabindex:1}).css({width:"100%",height:"200px",position:"relative",padding:0,margin:0}).addClass("field-list").appendTo(a);return this.fieldElement=d,this.input=d,this.dom=a,a},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.inDom=function(){var a=this,b=d.edit(a._id),c=this.field.options.mode||"javascript";b.setTheme("./theme/monokai"),b.setPrintMarginColumn(!1),b.getSession().setMode("./mode/"+c),b.getSession().on("change",function(){a.setValueSilent(b.getValue())}),this.editor=b,this.checkValue()},e.prototype.checkValue=function(){this.editor&&this.editor.setValue(this.value)},e});