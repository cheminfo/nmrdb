define(["jquery","src/util/api","src/util/datatraversing"],function(a,b){return{setModule:function(a){this.module=a},init:function(){this.initImpl()},initImpl:function(){this.resolveReady()},inDom:function(){},sendAction:function(a,c,d){var e,f,g,h=this.module.actions_out();if(h)for(e=h.length-1;e>=0;e--)h[e].rel===a&&(d&&d===h[e].event||!d)&&(g=h[e].name,f=h[e].jpath,c&&f&&c.getChild?c.getChild(f).done(function(a){b.executeAction(g,a),b.doAction(g,a)}):(b.executeAction(g,c),b.doAction(g,c)))},setVarFromEvent:function(a,c,d,e,f){var g,h=0,i=!0;if(g=this.module.vars_out())for(;h<g.length;h++)g[h].event!=a||g[h].rel!=c&&c||(i&&f&&(i=!1,f.call(this)),g[h].jpath=g[h].jpath||[],"string"==typeof g[h].jpath&&(g[h].jpath=g[h].jpath.split("."),g[h].jpath.shift()),b.setVar(g[h].name,this.module.getVariableFromRel(d),e.concat(g[h].jpath),g[h].filter))},createDataFromEvent:function(a,c,d,e){var f,g=0,h=!0;if(f=this.module.vars_out())for(;g<f.length;g++)f[g].event!=a||f[g].rel!=c&&c||(h&&e&&(h=!1,d=e.call(this)),b.createDataJpath(f[g].name,d,f[g].jpath,f[g].filter))},allVariablesFor:function(a,b,c){var d,e=0;if(d=this.module.vars_out())for(;e<d.length;e++)d[e].event!=a||d[e].rel!=b&&b||c(d[e])},"export":function(){},print:function(){return this.module.getDomContent()[0].innerHTML},configurationStructure:function(){},configFunctions:{},configAliases:{},events:{},variablesIn:[],resolveReady:function(){this.module._resolveController()}}});