var svgedit=svgedit||{};!function(){svgedit.coords||(svgedit.coords={});var a=[0,"z","M","m","L","l","C","c","Q","q","A","a","H","h","V","v","S","s","T","t"],b=null;svgedit.coords.init=function(a){b=a},svgedit.coords.remapElement=function(c,d,e){var f,g,h=function(a,b){return svgedit.math.transformPoint(a,b,e)},i=function(a){return e.a*a},j=function(a){return e.d*a},k=b.getGridSnapping()&&"svg"===c.parentNode.parentNode.localName,l=function(){var a;if(k)for(a in d)d[a]=svgedit.utilities.snapToGrid(d[a]);svgedit.utilities.assignAttributes(c,d,1e3,!0)},m=svgedit.utilities.getBBox(c);for(f=0;2>f;f++){g=0===f?"fill":"stroke";var n=c.getAttribute(g);if(n&&0===n.indexOf("url(")&&(e.a<0||e.d<0)){var o=svgedit.utilities.getRefElem(n),p=o.cloneNode(!0);if(e.a<0){var q=p.getAttribute("x1"),r=p.getAttribute("x2");p.setAttribute("x1",-(q-1)),p.setAttribute("x2",-(r-1))}if(e.d<0){var s=p.getAttribute("y1"),t=p.getAttribute("y2");p.setAttribute("y1",-(s-1)),p.setAttribute("y2",-(t-1))}p.id=b.getDrawing().getNextId(),svgedit.utilities.findDefs().appendChild(p),c.setAttribute(g,"url(#"+p.id+")")}}var u,v,w=c.tagName;if("g"===w||"text"===w||"tspan"==w||"use"===w)if(1!=e.a||0!=e.b||0!=e.c||1!=e.d||0==e.e&&0==e.f)u=svgedit.transformlist.getTransformList(c),v=svgroot.createSVGTransform(),v.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(u).matrix,e)),u.clear(),u.appendItem(v);else{var x=svgedit.math.transformListToTransform(c).matrix,y=svgedit.math.matrixMultiply(x.inverse(),e,x);d.x=parseFloat(d.x)+y.e,d.y=parseFloat(d.y)+y.f}var z,A,B,C,D;switch(w){case"foreignObject":case"rect":case"image":"image"===w&&(e.a<0||e.d<0)?(u=svgedit.transformlist.getTransformList(c),v=svgroot.createSVGTransform(),v.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(u).matrix,e)),u.clear(),u.appendItem(v)):(B=h(d.x,d.y),d.width=i(d.width),d.height=j(d.height),d.x=B.x+Math.min(0,d.width),d.y=B.y+Math.min(0,d.height),d.width=Math.abs(d.width),d.height=Math.abs(d.height)),l();break;case"ellipse":z=h(d.cx,d.cy),d.cx=z.x,d.cy=z.y,d.rx=i(d.rx),d.ry=j(d.ry),d.rx=Math.abs(d.rx),d.ry=Math.abs(d.ry),l();break;case"circle":z=h(d.cx,d.cy),d.cx=z.x,d.cy=z.y;var E=svgedit.math.transformBox(m.x,m.y,m.width,m.height,e),F=E.tr.x-E.tl.x,G=E.bl.y-E.tl.y;d.r=Math.min(F/2,G/2),d.r&&(d.r=Math.abs(d.r)),l();break;case"line":B=h(d.x1,d.y1),C=h(d.x2,d.y2),d.x1=B.x,d.y1=B.y,d.x2=C.x,d.y2=C.y;case"text":case"tspan":case"use":l();break;case"g":var H=$(c).data("gsvg");H&&svgedit.utilities.assignAttributes(H,d,1e3,!0);break;case"polyline":case"polygon":for(D=d.points.length,f=0;D>f;++f)A=d.points[f],A=h(A.x,A.y),d.points[f].x=A.x,d.points[f].y=A.y;D=d.points.length;var I="";for(f=0;D>f;++f)A=d.points[f],I+=A.x+","+A.y+" ";c.setAttribute("points",I);break;case"path":var J,K=c.pathSegList;for(D=K.numberOfItems,d.d=[],f=0;D>f;++f)J=K.getItem(f),d.d[f]={type:J.pathSegType,x:J.x,y:J.y,x1:J.x1,y1:J.y1,x2:J.x2,y2:J.y2,r1:J.r1,r2:J.r2,angle:J.angle,largeArcFlag:J.largeArcFlag,sweepFlag:J.sweepFlag};D=d.d.length;var L=d.d[0],M=h(L.x,L.y);for(d.d[0].x=M.x,d.d[0].y=M.y,f=1;D>f;++f)if(J=d.d[f],g=J.type,g%2==0){var N=void 0!=J.x?J.x:M.x,O=void 0!=J.y?J.y:M.y;A=h(N,O),B=h(J.x1,J.y1),C=h(J.x2,J.y2),J.x=A.x,J.y=A.y,J.x1=B.x,J.y1=B.y,J.x2=C.x,J.y2=C.y,J.r1=i(J.r1),J.r2=j(J.r2)}else J.x=i(J.x),J.y=j(J.y),J.x1=i(J.x1),J.y1=j(J.y1),J.x2=i(J.x2),J.y2=j(J.y2),J.r1=i(J.r1),J.r2=j(J.r2);var P="";for(D=d.d.length,f=0;D>f;++f)switch(J=d.d[f],g=J.type,P+=a[g],g){case 13:case 12:P+=J.x+" ";break;case 15:case 14:P+=J.y+" ";break;case 3:case 5:case 19:case 2:case 4:case 18:P+=J.x+","+J.y+" ";break;case 7:case 6:P+=J.x1+","+J.y1+" "+J.x2+","+J.y2+" "+J.x+","+J.y+" ";break;case 9:case 8:P+=J.x1+","+J.y1+" "+J.x+","+J.y+" ";break;case 11:case 10:P+=J.r1+","+J.r2+" "+J.angle+" "+ +J.largeArcFlag+" "+ +J.sweepFlag+" "+J.x+","+J.y+" ";break;case 17:case 16:P+=J.x2+","+J.y2+" "+J.x+","+J.y+" "}c.setAttribute("d",P)}}}();