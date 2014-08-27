define(["jquery","src/util/context","src/util/api","src/util/util","src/util/fullscreen","src/util/debug","src/main/variables","src/main/grid"],function(a,b,c,d,e,f,g){function h(b){var c=b.definition.getChildSync("url",!0).get(),e="";return c.toString&&(c=c.toString()),c.indexOf("http://")>-1&&(e=".js"),b.viewReady=new Promise(function(a){b._resolveView=a}),b.controllerReady=new Promise(function(a){b._resolveController=a}),b.modelReady=new Promise(function(a){b._resolveModel=a}),b._onReady=Promise.all([b.viewReady,b.controllerReady,b.modelReady]),b._onReady.then(function(){b.updateAllView()},function(a){f.error("Caught error in module ready state",a)}).catch(function(a){f.error("Caught error while updating module",a)}),new Promise(function(f,g){return c?(d.loadCss(c+"style.css"),void require([c+"model"+e,c+"view"+e,c+"controller"+e],function(c,d,e){b.model=new c,b.view=new d,b.controller=new e,b.controller.moduleInformation&&(b.dom=a(b.buildDom()),b.domContent=b.dom.children().children(".ci-module-content"),b.domHeader=b.dom.children().children(".ci-module-header"),b.domLoading=b.dom.children().children(".ci-module-loading"),b.domWrapper=b.dom,b.view.setModule(b),b.controller.setModule(b),b.model.setModule(b),b.view.initDefault(),b.view.init(),b.controller.init(),b.model.init(),f(b))})):void g()})}var i=function(a){this.definition=DataObject.recursiveTransform(a),this.definition.configuration=this.definition.configuration||new DataObject,this.definition.layers=this.definition.layers||new DataObject,this.ready=h(this),this.ready.catch(function(a){f.error("Caught error in module initialization.",a)})};return i.prototype={buildDom:function(){var a="";return a+='<div class="ci-module-wrapper ci-module-displaywrapper ci-module-',a+=this.controller.moduleInformation.cssClass,a+='" data-module-id="',a+=this.definition.id,a+='"',a+=' style="z-index: ',a+=this.definition.zindex||0,a+='"',a+='><div class="ci-module"><div class="ci-module-header',a+='"><div class="ci-module-header-title">',a+=this.definition.title,a+="</div>",a+='<div class="ci-module-header-toolbar">',a+="<ul>",a+="</ul>",a+="</div>",a+='</div><div class="ci-module-content">',a+="</div>",a+='<div class="ci-module-loading">Loading ...</div>',a+="</div>"},onReady:function(){return this._onReady},updateView:function(a){this.onReady().then(function(){var b=c.getVariable(this.getNameFromRel(a));b&&this.view.update&&this.view.update[a]&&this.view.update[a].call(this.view,b[1],b[0][0])},function(a){f.error("Error during view update",a)})},updateAllView:function(){if(this.view.update&&this.definition)for(var a,b=this.vars_in(),d=0,e=b.length;e>d;d++)a=c.getVar(b[d].name),this.model.onVarChange(a)},getDomContent:function(){if("undefined"!=typeof this.domContent)return this.domContent;throw"The module has not been loaded yet"},getDomWrapper:function(){if("undefined"!=typeof this.domWrapper)return this.domWrapper;throw"The module has not been loaded yet"},getDomView:function(){if("function"==typeof this.view.getDom)return this.view.getDom();throw"The module's view doest not implement the getDom function"},getDomHeader:function(){if("undefined"!=typeof this.domHeader)return this.domHeader;throw"The module has not been loaded yet"},getAcceptedTypes:function(a){var b=this.controller.references;return b?b[a]:!1},getDataFromRel:function(a){return this.model&&this.model.data?this.model.data[a]||!1:void 0},getVariableFromRel:function(a){var b=this.getNameFromRel(a);return c.getVar(b)},getNameFromRel:function(a){for(var b=this.vars_in(),c=0,d=b.length;d>c;c++)if(b[c].rel==a)return b[c].name;return!1},getData:function(){return this.model.data},getDataRelFromName:function(a){for(var b=this.vars_in(),c=0,d=b.length,e=[];d>c;c++)b[c].name==a&&e.push(b[c].rel);return e},getActionRelFromName:function(a){for(var b=this.actions_in(),c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c].rel;return!1},inDom:function(){this.view.inDom(),this.controller.inDom(),this.model.inDom();var a=this;c.isViewLocked()||b.listen(this.getDomWrapper().get(0),[['<li name="fullscreen"><a><span class="ui-icon ui-icon-arrow-4-diag"></span> Fullscreen</a></li>',function(){a.enableFullscreen()}],['<li name="export"><a><span class="ui-icon ui-icon-suitcase"></span> Export</a></li>',function(){a.exportData()}],['<li name="print"><a><span class="ui-icon ui-icon-print"></span> Print</a></li>',function(){a.printView()}],['<li name="configuration"><a><span class="ui-icon ui-icon-gear"></span> Parameters</a></li>',function(){a.doConfig()}]])},enableFullscreen:function(){e.requestFullscreen(this)},toggleLayer:function(a){var b;if(b=this.getActiveLayer(a)){if(!b.display)return void this.hide();this.show(),this.setTitle(b.title),this.setDisplayWrapper(b.wrapper),this.setBackgroundColor(b.bgColor||[255,255,255,1]),this.activeLayerName=a;var c=require("src/main/grid");return c.setModuleSize(this),c.moduleResize(this),b}},eachLayer:function(a){for(var b in this.definition.layers)a(this.definition.layers[b],b)},setLayers:function(b,c){this.definition.layers=this.definition.layers||new DataObject;for(var d in b)this.definition.layers[d]||(this.definition.layers[d]=new DataObject,c?(a.extend(!0,this.definition.layers[d],i.prototype.emptyConfig),this.definition.layers[d].name=d):a.extend(!0,this.definition.layers[d],this.getActiveLayer(this.getActiveLayerName())),this.definition.layers[d]=this.definition.layers[d].duplicate())},getActiveLayerName:function(){return this.activeLayerName},getActiveLayer:function(a){return a?this.definition.layers[a]:!1},hide:function(){this.getDomWrapper().hide()},show:function(){this.getDomWrapper().show()},doConfig:function(){function b(a){if(a){var c=0,d=a.length,e=[];if(Array.isArray(a))for(;d>c;c++)e.push({key:a[c].file||"",title:a[c].name,children:b(a[c].children)});return e}}var d=this,e=a("<div></div>").dialog({modal:!0,position:["center",50],width:"80%",title:"Edit module preferences"});e.prev().remove(),e.parent().css("z-index",1e3);var f,h,i,j=this.controller.references,k=this.controller.events,l=0,m=c.getAllFilters();i=b(m);var n=[];for(h=g.getNames(),l=0,f=h.length;f>l;l++)n.push({title:h[l],label:h[l]});var o=[];for(h=c.getRepositoryActions().getKeys(),l=0,f=h.length;f>l;l++)o.push({title:h[l],label:h[l]});var p=d.controller.variablesIn,q=[];for(l=0,f=p.length;f>l;l++)j[p[l]]&&q.push({key:p[l],title:j[p[l]].label});var r=[],s=function(){for(var a in j)r[a]=d.model.getjPath(a)};s();var t=function(a,b){var c,d,e=0,f=[];if(!k[a])return{};switch(b){case"event":c=k[a].refVariable||[];break;case"action":c=k[a].refAction||[]}for(d=c.length;d>e;e++)f.push({key:c[e],title:j[c[e]].label});return f},u=[],v=[];for(l in k)k[l].refVariable&&u.push({title:k[l].label,key:l}),k[l].refAction&&v.push({title:k[l].label,key:l});var w=this.controller.actionsIn||{},x=[];for(l in w)x.push({title:w[l],key:l});var y={};d.eachLayer(function(a,b){y[b]=b}),require(["forms/form"],function(b){var c=new b({});c.init({onValueChanged:function(){}});var f={sections:{module_infos:{options:{title:"Module informations",icon:"info_rhombus"},groups:{group:{options:{type:"text"}}}},module_config:{options:{title:"General configuration",icon:"page_white_paint"},groups:{layerDisplay:{options:{title:"Display on layers",type:"list"},fields:{displayOn:{type:"checkbox",title:"Display on layers",options:y}}}},sections:{layer:{options:{title:"Shown on layers"},groups:{group:{options:{type:"list",multiple:!0,title:!0},fields:{layerName:{type:"text",multiple:!1,title:"Layer name",displayed:!1},moduletitle:{type:"text",multiple:!1,title:"Module title"},bgcolor:{type:"color",multiple:!1,title:"Background color"},modulewrapper:{type:"checkbox",title:"Module boundaries",options:{display:""}}}}}}}}}},g=d.controller.configurationStructure();g&&(f.sections.module_specific_config=a.extend(g,{options:{title:"Module configuration",icon:"page_white_wrench"}})),q.length>0&&(f.sections.vars_in={options:{title:"Variables in",icon:"basket_put"},groups:{group:{options:{type:"table",multiple:!0},fields:{rel:{type:"combo",title:"Reference",options:q},name:{type:"text",title:"From variable",options:n},filter:{type:"combo",title:"Filter variable",options:i}}}}}),u.length>0&&(f.sections.vars_out={options:{title:"Variables out",icon:"basket_remove"},groups:{group:{options:{type:"table",multiple:!0},fields:{event:{type:"combo",title:"Event",options:u},rel:{type:"combo",title:"Reference"},jpath:{type:"combo",title:"jPath",options:{},extractValue:function(a){var b=(a||"").split(".");return b.shift(),b},insertValue:function(a){return a=(a||[]).slice(0),a.unshift("element"),a.join(".")}},filter:{type:"combo",title:"Filter variable",options:i},name:{type:"text",title:"To variable"}}}}}),x.length>0&&(f.sections.actions_in={options:{title:"Actions in",icon:"door_in"},groups:{group:{options:{type:"table",multiple:!0},fields:{rel:{type:"combo",title:"Reference",options:x},name:{type:"text",title:"Action name",options:o}}}}}),v.length>0&&(f.sections.actions_out={options:{title:"Actions out",icon:"door_out"},groups:{group:{options:{type:"table",multiple:!0},fields:{event:{type:"combo",title:"On event",options:v},rel:{type:"combo",title:"Reference"},jpath:{type:"combo",title:"jPath",options:{},extractValue:function(a){if(a){var b=a.split(".");return b.shift(),b}},insertValue:function(a){return a=(a||[]).slice(0),a.unshift("element"),a.join(".")}},name:{type:"text",title:"Action name"}}}}}),c.setStructure(f),c.onStructureLoaded().done(function(){c.getSection("vars_out")&&(c.getSection("vars_out").getGroup("group").getField("event").options.onChange=function(b){b.groupElement&&a.when(b.groupElement.getFieldElementCorrespondingTo(b,"rel")).then(function(a){a&&a.setOptions(t(b.value,"event"))})},c.getSection("vars_out").getGroup("group").getField("rel").options.onChange=function(b){b.groupElement&&a.when(b.groupElement.getFieldElementCorrespondingTo(b,"jpath")).then(function(a){a&&a.setOptions(r[b.value])})}),c.getSection("actions_out")&&(c.getSection("actions_out").getGroup("group").getField("event").options.onChange=function(b){b.groupElement&&a.when(b.groupElement.getFieldElementCorrespondingTo(b,"rel")).then(function(a){a&&a.setOptions(t(b.value,"action"))})},c.getSection("actions_out").getGroup("group").getField("rel").options.onChange=function(b){b.groupElement&&a.when(b.groupElement.getFieldElementCorrespondingTo(b,"jpath")).then(function(a){a&&a.setOptions(r[b.value])})});var b='<table class="moduleInformation"><tr><td>Module name</td><td>'+d.controller.moduleInformation.moduleName+"</td></tr><tr><td></td><td><small>"+d.controller.moduleInformation.description+"</small></td></tr><tr><td>Module author</td><td>"+d.controller.moduleInformation.author+"</td></tr><tr><td>Creation date</td><td>"+d.controller.moduleInformation.date+"</td></tr><tr><td>Released under</td><td>"+d.controller.moduleInformation.license+"</td></tr></table>",e=[],f=[];d.eachLayer(function(a,b){a.display&&f.push(b),e.push({_title:b,layerName:[b],moduletitle:[a.title],bgcolor:[a.bgColor||[255,255,255,0]],modulewrapper:[a.wrapper===!0||void 0===a.wrapper?"display":""]})});var g={sections:{module_config:[{groups:{layerDisplay:[{displayOn:[f]}]},sections:{layer:[{groups:{group:e}}]}}],module_infos:[{groups:{group:[b]}}],module_specific_config:[d.definition.configuration||{}],vars_out:[{groups:{group:[d.vars_out()]}}],vars_in:[{groups:{group:[d.vars_in()]}}],actions_in:[{groups:{group:[d.actions_in()]}}],actions_out:[{groups:{group:[d.actions_out()]}}]}};c.fill(g)}),c.addButton("Cancel",{color:"blue"},function(){e.dialog("close")}),c.addButton("Save",{color:"green"},function(){var a=c.getValue().sections;d.definition.layers=d.definition.layers||{};for(var b=a.module_config[0].sections.layer[0].groups.group,f=a.module_config[0].groups.layerDisplay[0].displayOn[0],g=0,h=b.length;h>g;g++)d.definition.layers[b[g].layerName[0]].display=f.indexOf(b[g].layerName[0])>-1,d.definition.layers[b[g].layerName[0]].title=b[g].moduletitle[0],d.definition.layers[b[g].layerName[0]].bgColor=b[g].bgcolor[0],d.definition.layers[b[g].layerName[0]].wrapper=b[g].modulewrapper[0].indexOf("display")>-1;a.vars_out&&d.setSendVars(a.vars_out[0].groups.group[0]),a.vars_in&&d.setSourceVars(a.vars_in[0].groups.group[0]),a.actions_in&&d.setActionsIn(a.actions_in[0].groups.group[0]),a.actions_out&&d.setActionsOut(a.actions_out[0].groups.group[0]),a.module_specific_config&&(d.definition.configuration=a.module_specific_config[0]),d.view.unload&&d.view.unload(),d.controller.init(),d.view.init(),d.view.inDom(),d.toggleLayer(d.getActiveLayerName()),d.model.resetListeners(),d.updateAllView(),e.dialog("close"),document.getElementById("header").scrollIntoView(!0)}),c.onLoaded().done(function(){e.html(c.makeDom()),c.inDom()})})},getConfiguration:function(a,b){var c,d=this.definition.configuration,e=this.controller.configAliases[a];if(e){for(var f=0,g=e.length;g>f;f++)if(d=d[e[f]],"undefined"==typeof d){c=this._getConfigurationDefault(e,a);break}}else console.warn("Alias "+e+" not defined "),console.trace();return"undefined"==typeof c&&(c=this._doConfigurationFunction(d,a)),"undefined"==typeof c&&(c=b),c},getConfigurationCheckbox:function(a,b){var c=this.getConfiguration(a);return c instanceof Array?c.indexOf(b)>-1:void 0},_getConfigurationDefault:function(a,b){this._cfgStructure=this._cfgStructure||this.controller.configurationStructure();for(var c=this._cfgStructure,d=0,e=a.length;e>d;d++)if("number"!=typeof a[d])if(c.fields)d--,c=c.fields;else if(c=c[a[d]],!c)return console.warn("Error in configuration file - Alias is not a correct jPath"),!1;return this._doConfigurationFunction(c.default,b)},_doConfigurationFunction:function(a,b){if(this.controller.configFunctions[b])try{return this.controller.configFunctions[b](a)}catch(c){return a}return a},getValue:function(){return"function"==typeof this.model.getValue?this.model.getValue():void 0},getPosition:function(a){var b=this.getActiveLayer(a);return b.position},getSize:function(a){var b=this.getActiveLayer(a);return b.size},getWidthPx:function(){return this.getDomContent().innerWidth()},getHeightPx:function(){return this.getDomContent().innerHeight()},getId:function(){return this.definition.id},setId:function(a){this.definition.set("id",a)},setSourceVars:function(a){this.definition.set("vars_in",a,!0)},setSendVars:function(a){this.definition.set("vars_out",a,!0);a.length},setActionsIn:function(a){this.definition.set("actions_in",a,!0)},setActionsOut:function(a){this.definition.set("actions_out",a,!0)},vars_in:function(){return!this.definition.vars_in&&this.definition.dataSource&&(this.definition.vars_in=this.definition.dataSource,delete this.definition.dataSource),this.definition.vars_in=this.definition.vars_in||new DataArray},vars_out:function(){return!this.definition.vars_out&&this.definition.dataSend&&(this.definition.vars_out=this.definition.dataSend,delete this.definition.dataSend),this.definition.vars_out=this.definition.vars_out||{}},actions_in:function(){return!this.definition.actions_in&&this.definition.actionsIn&&(this.definition.actions_in=this.definition.actionsIn,delete this.definition.actionsIn),this.definition.actions_in=this.definition.actions_in||{}},actions_out:function(){return!this.definition.actions_out&&this.definition.actionsOut&&(this.definition.actions_out=this.definition.actionsOut,delete this.definition.actionsOut),this.definition.actions_out=this.definition.actions_out||{}},getDefinition:function(){return this.definition},getTitle:function(){return this.definition.title},setTitle:function(a){this.definition.set("title",a),this.domHeader.find(".ci-module-header-title").text(a)},exportData:function(){var b=this;a('<div class="ci-module-export"><textarea></textarea></div>').dialog({modal:!0,title:"Export data from module "+b.getTitle(),width:"70%",height:500}).children("textarea").text(b.controller["export"]())},printView:function(){var a=this.controller.print(),b=window.open("","","");b.document.write(a),b.document.close(),b.focus()},setBackgroundColor:function(a){this.domContent.get(0).style.backgroundColor="rgba("+a.join(",")+")"},setDisplayWrapper:function(a){this.getDomWrapper()[a===!0||void 0==a?"addClass":"removeClass"]("ci-module-displaywrapper");try{this.getDomWrapper().resizable(a===!0||void 0==a?"enable":"disable")}catch(b){}},blankVariable:function(a){for(var b=this.getDataRelFromName(a),c=0;c<b.length;c++)this.view.blank[b[c]]&&this.view.blank[b[c]].call(this.view,a)},startLoading:function(a){for(var b=this.getDataRelFromName(a),c=0;c<b.length;c++)this.view.startLoading(b[c])},endLoading:function(a){for(var b=this.getDataRelFromName(a),c=0;c<b.length;c++)this.view.endLoading(b[c])},get emptyConfig(){return new DataObject({position:{left:0,top:0},size:{width:20,height:20},zIndex:0,display:!0,title:"",bgColor:[255,255,255,0],wrapper:!0,created:!0})}},i});