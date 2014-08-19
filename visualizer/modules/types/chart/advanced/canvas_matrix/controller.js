define(["modules/default/defaultcontroller","src/util/api"],function(a,b){function c(){}return c.prototype=$.extend(!0,{},a),c.prototype.moduleInformation={moduleName:"Matrix display",description:"Display an array of array as a colored matrix",author:"Norman Pellet",date:"24.12.2013",license:"MIT",cssClass:"canvas_matrix"},c.prototype.getMatrixElementFromEvent=function(a){var b;if(!(b=this.module.getDataFromRel("matrix")))return!1;var c=this.module.view.getPxPerCell(),d=this.module.view.getXYShift();a.offsetX=a.offsetX||a.pageX-$(a.target).offset().left,a.offsetY=a.offsetY||a.pageY-$(a.target).offset().top;var e=Math.floor((a.offsetX-d.x)/c),f=Math.floor((a.offsetY-d.y)/c);b=b.value;var g=b.xLabel,h=b.yLabel,i=b.data;return!i||!i[0]||0>e||0>f||f>i.length||e>i[0].length?!1:isNaN(e)||isNaN(f)||!i[f][e]?!1:[g[e],h[f],i[f][e]]},c.prototype.initimpl=function(){var a,c=(this.module,this);(a=this.module.vars_out())&&($(this.module.getDomContent()).on("mousemove","canvas",$.debounce(25,function(d){var e=c.getMatrixElementFromEvent(d);if(e){var f=!1;for(var g in a)if("onPixelHover"==a[g].event){if("col"==a[g].rel?f=e[0]:"row"==a[g].rel?f=e[1]:"intersect"==a[g].rel&&(f=e[2]),void 0===f)return;b.setVariable(a[g].name,f,a[g].jpath)}}})),$(this.module.getDomContent()).on("mousedown","canvas",function(d){var e=c.getMatrixElementFromEvent(d);if(e){var f,g=!1;for(f in a)"onPixelHover"==a[f].event&&("col"==a[f].rel?g=e[0]:"row"==a[f].rel?g=e[1]:"intersect"==a[f].rel&&(g=e[2]),b.setVariable(a[f].name,g,a[f].jpath))}}),this.resolveReady())},c.prototype.references={row:{label:"Row",description:"Sends the information description the row"},col:{label:"Column",description:"Sends the information description the column"},intersect:{label:"Intersection",description:"Sends the information description the intersection where the mouse is located"},matrix:{label:"Matrix",description:"A 2D array representing the matrix"}},c.prototype.variablesIn=["matrix"],c.prototype.events={onPixelHover:{label:"mouse hover pixel",description:"When the mouses moves over a new pixel of the data matrix",refVariable:["row","col","intersect"]},onPixelClick:{label:"click on a pixel",description:"When the users click on any pixel",refVariable:["row","col","intersect"]},onPixelDblClick:{label:"double click on a pixel",description:"When the user double clics on any pixel",refVariable:["row","col","intersect"]}},c.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{highcontrast:{"default":"true",type:"checkbox",title:"Contrast",options:{"true":"Take data min/max as boundaries"}},color:{type:"color",title:"Color",multiple:!0}}}}}},c.prototype.configAliases={colors:["groups","group",0,"color"],highContrast:["groups","group",0,"highcontrast",0,0]},c});