define(["jquery","./sectionelement","./group"],function(a,b,c){var d=function(a){this.name=a};return d.defaultOptions={},a.extend(d.prototype,{init:function(b){this.options=a.extend({},d.defaultOptions,b),this.splice=Array.prototype.splice,this.sections={},this.groups={},this.sub=[]},getName:function(){return this.name},setStructure:function(a){a.sections&&this._addSections(a.sections),a.groups&&this._addGroups(a.groups)},_addSections:function(a){this._addElements(a,this.sections,d)},_addGroups:function(a){this._addElements(a,this.groups,c)},_addElements:function(a,b,c){var d;for(d in a)this._addElement(a[d],b,c,d)},_addElement:function(a,b,c,d){if(!(a instanceof c)){var e=new c(d);e.init(a.options),e.sectionLevel=this.sectionLevel+1,e.section=this,e.form=this.form,e.setStructure(a),a=e}return b[a.getName()]?this.form.throwError('Cannot add Section / Group. "'+a.getName()+'" already exists'):void(b[a.getName()]=a)},eachGroups:function(a){var b;for(b in this.groups)a.call(this,this.groups[b])},eachSections:function(a){var b;for(b in this.sections)a.call(this,this.sections[b])},getValue:function(){var a={};return this.eachSubSections(function(b){a.push(b.getValue())}),a},getSection:function(a,b){var c=this.sections[a];return void 0==b?c:c.getSectionElement(b)},getSections:function(){return this.sections},getGroups:function(){return this.groups},sectionExists:function(a){return!!this.sections[a]},getGroup:function(a){return this.groups[a]||this.form.throwError("Cannot find group "+a+".")},groupExists:function(a){return!!this.groups[a]},makeElement:function(a){var c=new b;return c.init(a),c.section=this,this.sub.push(c),c},_setTpl:function(a){this._tpl=a,this.eachSections(function(a){a._setTpl(this._tpl.find('.form-section[data-form-sectionname="'+a.name+'"]'))}),this.eachGroups(function(a){a._setTpl(this._tpl.find('.form-group[data-form-groupname="'+a.name+'"]'))}),this._tplClean=this._tpl.clone(),this._tplClean.find(".form-section-group-container:eq(0)").empty(),this._tplClean.find(".form-section-section-container:eq(0)").empty()}}),Object.defineProperty(d.prototype,"form",{enumerable:!0,configurable:!1,get:function(){return this._form},set:function(a){this._form=a}}),Object.defineProperty(d.prototype,"name",{enumerable:!0,configurable:!1,get:function(){return this._name},set:function(a){this._name=a}}),Object.defineProperty(d.prototype,"section",{enumerable:!0,configurable:!1,get:function(){return this._section},set:function(a){this._section=a}}),d});