!function(){function a(a){var b=a.matrix,c="";switch(a.type){case 1:c="matrix("+[b.a,b.b,b.c,b.d,b.e,b.f].join(",")+")";break;case 2:c="translate("+b.e+","+b.f+")";break;case 3:c=b.a==b.d?"scale("+b.a+")":"scale("+b.a+","+b.d+")";break;case 4:var d=0,e=0;if(0!=a.angle){var f=1-b.a;e=(f*b.f+b.b*b.e)/(f*f+b.b*b.b),d=(b.e-b.b*e)/f}c="rotate("+a.angle+" "+d+","+e+")"}return c}svgedit.transformlist||(svgedit.transformlist={});var b=document.createElementNS(svgedit.NS.SVG,"svg"),c={};svgedit.transformlist.SVGTransformList=function(d){this._elem=d||null,this._xforms=[],this._update=function(){{var c,d="";b.createSVGMatrix()}for(c=0;c<this.numberOfItems;++c){var e=this._list.getItem(c);d+=a(e)+" "}this._elem.setAttribute("transform",d)},this._list=this,this._init=function(){var a=this._elem.getAttribute("transform");if(a)for(var c=/\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/,d=!0;d;)if(d=a.match(c),a=a.replace(c,""),d&&d[1]){var e=d[1],f=e.split(/\s*\(/),g=f[0],h=f[1].match(/\s*(.*?)\s*\)/);h[1]=h[1].replace(/(\d)-/g,"$1 -");var i=h[1].split(/[, ]+/),j="abcdef".split(""),k=b.createSVGMatrix();$.each(i,function(a,b){i[a]=parseFloat(b),"matrix"==g&&(k[j[a]]=i[a])});var l=b.createSVGTransform(),m="set"+g.charAt(0).toUpperCase()+g.slice(1),n="matrix"==g?[k]:i;"scale"==g&&1==n.length?n.push(n[0]):"translate"==g&&1==n.length?n.push(0):"rotate"==g&&1==n.length&&n.push(0,0),l[m].apply(l,n),this._list.appendItem(l)}},this._removeFromOtherLists=function(a){if(a){var b,d=!1;for(b in c){var e,f,g=c[b];for(e=0,f=g._xforms.length;f>e;++e)if(g._xforms[e]==a){d=!0,g.removeItem(e);break}if(d)break}}},this.numberOfItems=0,this.clear=function(){this.numberOfItems=0,this._xforms=[]},this.initialize=function(a){this.numberOfItems=1,this._removeFromOtherLists(a),this._xforms=[a]},this.getItem=function(a){if(a<this.numberOfItems&&a>=0)return this._xforms[a];throw{code:1}},this.insertItemBefore=function(a,b){var c=null;if(b>=0)if(b<this.numberOfItems){this._removeFromOtherLists(a);var d,e=new Array(this.numberOfItems+1);for(d=0;b>d;++d)e[d]=this._xforms[d];e[d]=a;var f;for(f=d+1;d<this.numberOfItems;++f,++d)e[f]=this._xforms[d];this.numberOfItems++,this._xforms=e,c=a,this._list._update()}else c=this._list.appendItem(a);return c},this.replaceItem=function(a,b){var c=null;return b<this.numberOfItems&&b>=0&&(this._removeFromOtherLists(a),this._xforms[b]=a,c=a,this._list._update()),c},this.removeItem=function(a){if(a<this.numberOfItems&&a>=0){var b,c,d=this._xforms[a],e=new Array(this.numberOfItems-1);for(b=0;a>b;++b)e[b]=this._xforms[b];for(c=b;c<this.numberOfItems-1;++c,++b)e[c]=this._xforms[b+1];return this.numberOfItems--,this._xforms=e,this._list._update(),d}throw{code:1}},this.appendItem=function(a){return this._removeFromOtherLists(a),this._xforms.push(a),this.numberOfItems++,this._list._update(),a}},svgedit.transformlist.resetListMap=function(){c={}},svgedit.transformlist.removeElementFromListMap=function(a){a.id&&c[a.id]&&delete c[a.id]},svgedit.transformlist.getTransformList=function(a){if(!svgedit.browser.supportsNativeTransformLists()){var b=a.id||"temp",d=c[b];return d&&"temp"!==b||(c[b]=new svgedit.transformlist.SVGTransformList(a),c[b]._init(),d=c[b]),d}return a.transform?a.transform.baseVal:a.gradientTransform?a.gradientTransform.baseVal:a.patternTransform?a.patternTransform.baseVal:null}}();