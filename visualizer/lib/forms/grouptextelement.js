define(["jquery","./groupelement"],function(a,b){var c=function(){this.duplicators=[]};return c.prototype=new b,c.prototype.fill=function(b){return this.value=b,this.dom&&this.dom.html(this.value),a.Deferred().resolve()},c.prototype.inDom=function(){},c.prototype.getFieldElement=function(){},c.prototype._getElement=function(){},c.prototype.getFieldElements=function(){},c.prototype.eachFieldElements=function(){},c.prototype.makeDom=function(){return this.dom=a("<div />"),this.value&&this.dom.html(this.value),this.dom},c.prototype._makeDomTpl=function(){},c.prototype.visible=function(){},c.prototype.updateDom=function(){return this.dom},c.prototype.makeDuplicator=function(){},c.prototype.duplicate=function(){},c.prototype.remove=function(){},c.prototype.getValue=function(){},c.prototype.redoTabIndices=function(){},c});