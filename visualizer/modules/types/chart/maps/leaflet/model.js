define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){function c(){}return c.prototype=$.extend(!0,{},a,{getjPath:function(a){var c;switch(a){case"item":c=this.module.data;break;default:return[]}var d=[];return b.getJPathsFromElement(c,d),d}}),c});