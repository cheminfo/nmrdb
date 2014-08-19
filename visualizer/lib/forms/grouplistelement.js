define(["jquery","./groupelement"],function(a,b){var c=function(){};return c.prototype=new b,c.prototype.makeDom=function(b){!b&&this.dom&&this.updateDom();var c,d,e,f=this,g=a("<div />").addClass("form-group-list");return this.group.getTitle()&&g.append('<div class="form-groupelement-title">'+this.getTitle()+"</div>"),f.fieldElementsDom=f.fieldElementsDom||{},this.group.eachFields(function(b){b.isDisplayed()&&(c=a("<div />").addClass("form-field-list-"+b.getType()),d=a("<label />").html(b.getTitle(!0)),c.append(d),e=a("<div />").addClass("form-field-list-elements"),c.append(e),g.append(c),f.fieldElementsDom[b.getName()]=e)}),this.updateDom(),this.dom=g,this.dom},c.prototype.updateDom=function(){var a=this;return a.fieldElementsDom=a.fieldElementsDom||{},this.group.eachFields(function(b){a.fieldElementsDom[b.getName()]&&(a.fieldElementsDom[b.getName()].children().detach(),a.eachFieldElements(b.getName(),function(c){a.fieldElementsDom[b.getName()].append(c.getDom())}))}),this.group.form.redoTabIndices(),this.dom},c.prototype._makeDomTpl=function(){var b=this;return this.dom=this.group._tplClean.clone(),b.fieldElementsDom=b.fieldElementsDom||{},this.dom.find(".form-dyn").each(function(c,d){d=a(d);var e=d.attr("data-form-content").split(":");switch(e[0]){case"field":if(b.fieldElements[e[1]])switch(e[2]){case"dom":b.fieldElementsDom[e[1]]=d;break;case"label":d.html(b.group.fields[e[1]].name)}}}),this.updateDom(),this.dom},c.prototype.condDisplay=function(a,b){this.eachFieldElements(a,function(){b?this.fieldElementsDom[a].parent().show():this.fieldElementsDom[a].parent().hide()})},c.prototype.getFieldIndex=function(a){var b=a.field.getName();if(!this.fieldElements[b])return this.form.throwError("Cannot get field index. Field name "+b+" doesn't exist");var c=this.fieldElements[b].indexOf(a);return 0>c?this.form.throwError("Cannot get field index. Cannot find field element"):c},c.prototype.getValue=function(a,b){var c,d,e,b={};for(c in this.fieldElements)for(d=0,e=this.fieldElements[c].length,b[c]=[];e>d;d++)b[c].push(this.fieldElements[c][d].extractValue());return b},c.prototype.duplicateFieldElement=function(a){var b=this,c=a.field.getName(),d=this.getFieldIndex(a);if(d!==!1){var e=this.group.getField(c).makeElement().done(function(a){a.setDefaultOr(),a.group=b.group,a.groupElement=b,b.fieldElements[c].splice(d+1,0,a)});return e}},c.prototype.removeFieldElement=function(a){var b=a.field.getName(),c=this.getFieldIndex(a);c!==!1&&(a.field.removeElement(a),this.fieldElements[b].splice(c,1))},c.prototype.getExpanderInfosFor=function(a){var b=(a.name,a._dom.position()),c=this.group.form.dom.find(".form-sections-wrapper").position();return{width:a._dom.innerWidth(),left:b.left+c.left,top:b.top+c.top+a._dom.height()-1}},c.prototype.redoTabIndices=function(){var a=this;this.group.eachFields(function(b){a.eachFieldElements(b.getName(),function(a){a.redoTabIndices()})})},c});