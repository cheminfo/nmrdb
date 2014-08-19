define(["jquery","./section","./sectionelement","./conditionalelementdisplayer"],function(a,b,c,d){var e=function(){};return e.defaultOptions={},e.prototype=new b,a.extend(e.prototype,{init:function(b){this.options=a.extend({},e.defaultOptions,b),this.splice=Array.prototype.splice,this.section=this,this.sections={},this.sectionElements={},this.allFields=[],this.allFieldElements=[],this._onStructureLoaded=a.Deferred(),this._onValueLoaded=a.Deferred(),this.sectionLevel=0,this.expander={},this.form=this,this.conditionalDisplayer=new d,this.buttons=[],this.buttonsDom=a("<div />").addClass("form-buttonzone"),this.buttonsDom.append(a("<div />").addClass("cleaner"))},triggerAction:function(){if(arguments[0]){var a=arguments[0];if("function"==typeof this.options[a]){{this.splice.call(arguments,0,1)}this.options[a].apply(this,arguments)}}},addFieldElement:function(a){this.allFieldElements.push(a)},fieldElementValueChanged:function(a){this.doneDom&&this.triggerAction("onValueChanged",a,this.getValue())},addField:function(a){this.allFields.push(a)},eachFields:function(a){return this._each(this.allFields,a)},eachFieldsElements:function(a){return this._each(this.allFieldElements,a)},_each:function(b,c){var d=this,e=0,f=b.length;a.when.apply(a.when,b).then(function(){for(;f>e;e++)c.call(d,arguments[e])})},setTpl:function(b){b=a(b),this._setTpl(b)},makeDomTpl:function(){this.doneDom=!0;var a=this._makeDomTpl();return this.dom.find(".buttons").html(this.buttonsDom),a},_makeDomTpl:c.prototype._makeDomTpl,makeDom:function(b){var c,d,e,f=this,g=a('<form class="forms" tabindex="1" />'),h=a("<div />").addClass("form-sections-wrapper");switch(this.tplMode=b||1,this.tplMode){case 1:this.sectionLvl1Buttons=a("<div />").addClass("form-section-select-wrapper").appendTo(g),this.sectionLvl1Buttons.on("click",".form-section-select",function(){a(this).siblings().removeClass("selected"),a(this).addClass("selected"),h.children().hide().eq(a(this).index()).show();for(var b=0,c=f.sectionElements[a(this).attr("data-section-name")],d=c.length;d>b;b++)c[b].visible()})}this.bindEvents(g);for(c in this.sectionElements)for(d=0,e=this.sectionElements[c].length;e>d;d++)h.append(this.sectionElements[c][d].makeDom());switch(this.doneDom=!0,g.append(h),this.tplMode){case 1:this.sectionLvl1Buttons.children().eq(0).trigger("click")}return g.append(this.buttonsDom),a.when.apply(a,this.allFieldElements).then(function(){for(var a=0,b=arguments.length;b>a;a++)f.conditionalDisplayer.changed(arguments[a])}),this.dom=g},bindEvents:function(a){var b=this;a.get(0).addEventListener("click",function(){b.hideExpander(),b._unselectField()},!1),a.get(0).addEventListener("submit",function(a){b.formSubmitted(a)},!1),a.get(0).addEventListener("keydown",function(a){b.tabPressed(a)},!1)},_unselectField:function(){this.selectedFieldElement&&this.selectedFieldElement.unSelect()},selectFieldElement:function(a){this._unselectField(),this.selectedFieldElement=a,this.hideExpander()},unSelectFieldElement:function(){this.selectedFieldElement=!1},getValue:function(){var a={sections:{}};return this._getValue(this.sectionElements,a.sections),a},_getValue:c.prototype._getValue,fill:function(b,c){var d=this;b=b||{},this._fillSections(b.sections,c),a.when.apply(a.when,this.allFieldElements).then(function(){d._onValueLoaded.resolve()})},_fillSections:c.prototype._fillSections,_fill:c.prototype._fill,getSectionElement:c.prototype.getSectionElement,_getElement:c.prototype._getElement,getSection:function(a){return this.sections[a]||this.throwError("Cannot find section "+a+".")},eachSectionElements:function(a){var b,c,d;for(b in this.sectionElements)for(c=0,d=this.sectionElements[b].length;d>c;c++)a.call(this,this.sectionElements[b][c])},tabPressed:function(a,b){if(9==a.keyCode){if(a.preventDefault(),a.stopPropagation(),!b){if(!this.selectedFieldElement)return;b=this.selectedFieldElement}b.unSelect();var c=this.tabIndexed.indexOf(b);return this.tabIndexed[c+(a.shiftKey?-1:1)].focus(),!0}},incrementTabIndex:function(a){return this.tabIndexed[++this.lastIndex]=a},redoTabIndices:function(){this.lastIndex=1,this.tabIndexed=[],this.eachSectionElements(function(a){a.redoTabIndices()})},inDom:function(){this.eachSectionElements(function(a){a.inDom()});var a,b,c=0;for(a in this.sectionElements)for(b=this.sectionElements[a].length;b>c;c++)this.sectionElements[a][c].visible();this.dom.focus(),this.redoTabIndices()},onReady:function(){return this._onValueLoaded},onLoaded:function(a){return this.onReady(a)},setStructure:function(a){a.sections&&this._addSections(a.sections),this.structureIsSet()},structureIsSet:function(){var b=this;a.when.apply(a,this.allFields).then(function(){b._onStructureLoaded.resolve()})},onStructureLoaded:function(){return this._onStructureLoaded},getExpanderDom:function(){return this.expander.dom||(this.expander.dom=a("<div />").addClass("form-expander").appendTo(this.dom).on("click",function(a){a.stopPropagation(),a.preventDefault()}))},setExpander:function(a){var b=this;this.expander.open?this.hideExpander(!0):this.getExpanderDom().hide(),this.getExpanderDom().children().detach(),this.getExpanderDom().html(a),this.getExpanderDom().stop(!0).show(),b.expander.open=!0},hideExpander:function(){this.expander.open&&(this.getExpanderDom().stop(!0).hide(),this.expander.open=!1)},addButton:function(a,b,c,d){var e=this;require(["forms/button"],function(f){var g=new f(a,c,b);e.buttons.push(g),g.clickOnSubmit=d,e.onReady().done(function(){e.buttonsDom.prepend(g.render())})})},throwError:function(a){return console.error(a),!1},formSubmitted:function(a){a.preventDefault();for(var b=0,c=this.buttons.length;c>b;b++)this.buttons[b].clickOnSubmit&&this.buttons[b].doClick()}}),e});