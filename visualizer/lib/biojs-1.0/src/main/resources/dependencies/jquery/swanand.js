!function(a){function b(b){m.parent||(m.parent=a('<div id="'+b.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(),a.fn.bgiframe&&m.parent.bgiframe(),m.title=a("h3",m.parent),m.body=a("div.body",m.parent),m.url=a("div.url",m.parent))}function c(b){return a.data(b,"tooltip")}function d(b){c(this).delay?l=setTimeout(f,c(this).delay):f(),o=!!c(this).track,a(document.body).bind("mousemove",g),g(b)}function e(){if(!a.tooltip.blocked&&this!=j&&(this.tooltipText||c(this).bodyHandler)){if(j=this,k=this.tooltipText,c(this).bodyHandler){m.title.hide();var b=c(this).bodyHandler.call(this);b.nodeType||b.jquery?m.body.empty().append(b):m.body.html(b),m.body.show()}else if(c(this).showBody){var e=k.split(c(this).showBody);m.title.html(e.shift()).show(),m.body.empty();for(var f,g=0;f=e[g];g++)g>0&&m.body.append("<br/>"),m.body.append(f);m.body.hideWhenEmpty()}else m.title.html(k).show(),m.body.hide();c(this).showURL&&a(this).url()?m.url.html(a(this).url().replace("http://","")).show():m.url.hide(),m.parent.addClass(c(this).extraClass),c(this).fixPNG&&m.parent.fixPNG(),d.apply(this,arguments)}}function f(){l=null,n&&a.fn.bgiframe||!c(j).fade?m.parent.show():m.parent.is(":animated")?m.parent.stop().show().fadeTo(c(j).fade,j.tOpacity):m.parent.is(":visible")?m.parent.fadeTo(c(j).fade,j.tOpacity):m.parent.fadeIn(c(j).fade),g()}function g(b){if(!(a.tooltip.blocked||b&&"OPTION"==b.target.tagName)){if(!o&&m.parent.is(":visible")&&a(document.body).unbind("mousemove",g),null==j)return void a(document.body).unbind("mousemove",g);m.parent.removeClass("viewport-right").removeClass("viewport-bottom");var d=m.parent[0].offsetLeft,e=m.parent[0].offsetTop;if(b){d=b.pageX+c(j).left,e=b.pageY+c(j).top;var f="auto";if(c(j).positionLeft&&(f=a(window).width()-d,d="auto"),m.parent.css({left:d,right:f,top:e}),c(j).bodyHandler){m.title.hide();var i=c(j).bodyHandler.call(j);i.nodeType||i.jquery?m.body.empty().append(i):m.body.html(i),m.body.show()}}var k=h(),l=m.parent[0];k.x+k.cx<l.offsetLeft+l.offsetWidth&&(d-=l.offsetWidth+20+c(j).left,m.parent.css({left:d+"px"}).addClass("viewport-right")),k.y+k.cy<l.offsetTop+l.offsetHeight&&(e-=l.offsetHeight+20+c(j).top,m.parent.css({top:e+"px"}).addClass("viewport-bottom"))}}function h(){return{x:a(window).scrollLeft(),y:a(window).scrollTop(),cx:a(window).width(),cy:a(window).height()}}function i(){function b(){m.parent.removeClass(d.extraClass).hide().css("opacity","")}if(!a.tooltip.blocked){l&&clearTimeout(l),j=null;var d=c(this);n&&a.fn.bgiframe||!d.fade?b():m.parent.is(":animated")?m.parent.stop().fadeTo(d.fade,0,b):m.parent.stop().fadeOut(d.fade,b),c(this).fixPNG&&m.parent.unfixPNG()}}var j,k,l,m={},n=a.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),o=!1;a.tooltip={blocked:!1,defaults:{delay:200,fade:!1,showURL:!0,extraClass:"",top:15,left:15,id:"tooltip"},block:function(){a.tooltip.blocked=!a.tooltip.blocked}},a.fn.extend({tooltip:function(c){return c=a.extend({},a.tooltip.defaults,c),b(c),this.each(function(){a.data(this,"tooltip",c),this.tOpacity=m.parent.css("opacity"),this.tooltipText=this.title,a(this).removeAttr("title"),this.alt=""}).mouseover(e).mouseout(i).click(i)},fixPNG:n?function(){return this.each(function(){var b=a(this).css("backgroundImage");b.match(/^url\(["']?(.*\.png)["']?\)$/i)&&(b=RegExp.$1,a(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+b+"')"}).each(function(){var b=a(this).css("position");"absolute"!=b&&"relative"!=b&&a(this).css("position","relative")}))})}:function(){return this},unfixPNG:n?function(){return this.each(function(){a(this).css({filter:"",backgroundImage:""})})}:function(){return this},hideWhenEmpty:function(){return this.each(function(){a(this)[a(this).html()?"show":"hide"]()})},url:function(){return this.attr("href")||this.attr("src")}})}(jQuery);