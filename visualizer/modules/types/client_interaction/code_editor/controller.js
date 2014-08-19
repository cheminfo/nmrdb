define(["modules/default/defaultcontroller"],function(a){function b(){}return b.prototype=$.extend(!0,{},a),b.prototype.moduleInformation={moduleName:"Code editor",description:"Write code in any language and send the content to another module",author:"Michaël Zasso",date:"23.01.2014",license:"MIT"},b.prototype.references={value:{label:"String containing the code"}},b.prototype.events={onEditorChange:{label:"The value in the editor has changed",refVariable:["value"]},onButtonClick:{label:"The button was clicked",refAction:["value"],refVariable:["value"]}},b.prototype.variablesIn=["value"],b.prototype.actionsIn={},b.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{mode:{type:"combo",title:"Mode",options:[{title:"Text",key:"text"},{title:"Javascript",key:"javascript"},{title:"HTML",key:"html"},{title:"XML",key:"xml"}],"default":"text"},btnvalue:{type:"text",title:"Button text","default":"Send script"},iseditable:{title:"Display editor","default":"editable",type:"checkbox",options:{editable:"Show the code editor"}},hasButton:{title:"Display button","default":"button",type:"checkbox",options:{button:"Show the button"}},script:{type:"jscode",title:"Code",mode:"html"}}}}}},b.prototype.configFunctions={},b.prototype.configAliases={mode:["groups","group",0,"mode",0],btnvalue:["groups","group",0,"btnvalue",0],iseditable:["groups","group",0,"iseditable",0],hasButton:["groups","group",0,"hasButton",0],script:["groups","group",0,"script",0]},b.prototype.onEditorChanged=function(a){this.createDataFromEvent("onEditorChange","value",a)},b.prototype.onButtonClick=function(a){this.createDataFromEvent("onButtonClick","value",a),this.sendAction("value",a,"onButtonClick")},b});