!function(e,n,o,t){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.embed=function(o){var r,a=e(this),i=a.selector||"",c=(new Date).getTime(),l=[],d=arguments[0],u="string"==typeof d,s=[].slice.call(arguments,1);return a.each(function(){var m,p=e.isPlainObject(o)?e.extend(!0,{},e.fn.embed.settings,o):e.extend({},e.fn.embed.settings),f=p.selector,h=p.className,b=p.sources,g=p.error,v=p.metadata,y=p.namespace,w=p.templates,P="."+y,C="module-"+y,E=(e(n),e(this)),U=E.find(f.placeholder),j=E.find(f.icon),S=E.find(f.embed),T=this,x=E.data(C);m={initialize:function(){m.debug("Initializing embed"),m.determine.autoplay(),m.create(),m.bind.events(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),x=m,E.data(C,m)},destroy:function(){m.verbose("Destroying previous instance of embed"),m.reset(),E.removeData(C).off(P)},refresh:function(){m.verbose("Refreshing selector cache"),U=E.find(f.placeholder),j=E.find(f.icon),S=E.find(f.embed)},bind:{events:function(){m.has.placeholder()&&(m.debug("Adding placeholder events"),E.on("click"+P,f.placeholder,m.createAndShow).on("click"+P,f.icon,m.createAndShow))}},create:function(){var e=m.get.placeholder();e?m.createPlaceholder():m.createAndShow()},createPlaceholder:function(e){var n=m.get.icon(),o=m.get.url();m.generate.embed(o);e=e||m.get.placeholder(),E.html(w.placeholder(e,n)),m.debug("Creating placeholder for embed",e,n)},createEmbed:function(n){m.refresh(),n=n||m.get.url(),S=e("<div/>").addClass(h.embed).html(m.generate.embed(n)).appendTo(E),p.onCreate.call(T,n),m.debug("Creating embed object",S)},changeEmbed:function(e){S.html(m.generate.embed(e))},createAndShow:function(){m.createEmbed(),m.show()},change:function(e,n,o){m.debug("Changing video to ",e,n,o),E.data(v.source,e).data(v.id,n),o?E.data(v.url,o):E.removeData(v.url),m.has.embed()?m.changeEmbed():m.create()},reset:function(){m.debug("Clearing embed and showing placeholder"),m.remove.active(),m.remove.embed(),m.showPlaceholder(),p.onReset.call(T)},show:function(){m.debug("Showing embed"),m.set.active(),p.onDisplay.call(T)},hide:function(){m.debug("Hiding embed"),m.showPlaceholder()},showPlaceholder:function(){m.debug("Showing placeholder image"),m.remove.active(),p.onPlaceholderDisplay.call(T)},get:{id:function(){return p.id||E.data(v.id)},placeholder:function(){return p.placeholder||E.data(v.placeholder)},icon:function(){return p.icon?p.icon:E.data(v.icon)!==t?E.data(v.icon):m.determine.icon()},source:function(e){return p.source?p.source:E.data(v.source)!==t?E.data(v.source):m.determine.source()},type:function(){var e=m.get.source();return b[e]!==t&&b[e].type},url:function(){return p.url?p.url:E.data(v.url)!==t?E.data(v.url):m.determine.url()}},determine:{autoplay:function(){m.should.autoplay()&&(p.autoplay=!0)},source:function(n){var o=!1;return n=n||m.get.url(),n&&e.each(b,function(e,t){if(n.search(t.domain)!==-1)return o=e,!1}),o},icon:function(){var e=m.get.source();return b[e]!==t&&b[e].icon},url:function(){var e,n=p.id||E.data(v.id),o=p.source||E.data(v.source);return e=b[o]!==t&&b[o].url.replace("{id}",n),e&&E.data(v.url,e),e}},set:{active:function(){E.addClass(h.active)}},remove:{active:function(){E.removeClass(h.active)},embed:function(){S.empty()}},encode:{parameters:function(e){var n,o=[];for(n in e)o.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return o.join("&amp;")}},generate:{embed:function(e){m.debug("Generating embed html");var n,o,t=m.get.source();return e=m.get.url(e),e?(o=m.generate.parameters(t),n=w.iframe(e,o)):m.error(g.noURL,E),n},parameters:function(n,o){var r=b[n]&&b[n].parameters!==t?b[n].parameters(p):{};return o=o||p.parameters,o&&(r=e.extend({},r,o)),r=p.onEmbed(r),m.encode.parameters(r)}},has:{embed:function(){return S.length>0},placeholder:function(){return p.placeholder||E.data(v.placeholder)}},should:{autoplay:function(){return"auto"===p.autoplay?p.placeholder||E.data(v.placeholder)!==t:p.autoplay}},is:{video:function(){return"video"==m.get.type()}},setting:function(n,o){if(m.debug("Changing setting",n,o),e.isPlainObject(n))e.extend(!0,p,n);else{if(o===t)return p[n];e.isPlainObject(p[n])?e.extend(!0,p[n],o):p[n]=o}},internal:function(n,o){if(e.isPlainObject(n))e.extend(!0,m,n);else{if(o===t)return m[n];m[n]=o}},debug:function(){!p.silent&&p.debug&&(p.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,p.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!p.silent&&p.verbose&&p.debug&&(p.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),m.verbose.apply(console,arguments)))},error:function(){p.silent||(m.error=Function.prototype.bind.call(console.error,console,p.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var n,o,t;p.performance&&(n=(new Date).getTime(),t=c||n,o=n-t,c=n,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":o})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var n=p.name+":",o=0;c=!1,clearTimeout(m.performance.timer),e.each(l,function(e,n){o+=n["Execution Time"]}),n+=" "+o+"ms",i&&(n+=" '"+i+"'"),a.length>1&&(n+=" ("+a.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(n),console.table?console.table(l):e.each(l,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(n,o,a){var i,c,l,d=x;return o=o||s,a=T||a,"string"==typeof n&&d!==t&&(n=n.split(/[\. ]/),i=n.length-1,e.each(n,function(o,r){var a=o!=i?r+n[o+1].charAt(0).toUpperCase()+n[o+1].slice(1):n;if(e.isPlainObject(d[a])&&o!=i)d=d[a];else{if(d[a]!==t)return c=d[a],!1;if(!e.isPlainObject(d[r])||o==i)return d[r]!==t?(c=d[r],!1):(m.error(g.method,n),!1);d=d[r]}})),e.isFunction(c)?l=c.apply(a,o):c!==t&&(l=c),e.isArray(r)?r.push(l):r!==t?r=[r,l]:l!==t&&(r=l),c}},u?(x===t&&m.initialize(),m.invoke(d)):(x!==t&&x.invoke("destroy"),m.initialize())}),r!==t?r:this},e.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||t,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||t,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,n){var o=e;return n&&(o+="?"+n),'<iframe src="'+o+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,n){var o="";return n&&(o+='<i class="'+n+' icon"></i>'),e&&(o+='<img class="placeholder" src="'+e+'">'),o}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document);