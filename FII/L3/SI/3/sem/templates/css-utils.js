window.MutationObserver=window.MutationObserver||function(a){function b(a){this._watched=[],this._listener=a}function c(a){!function c(){var d=a.takeRecords();d.length&&a._listener(d,a),a._timeout=setTimeout(c,b._period)}()}function d(b){var c={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(var d in b)t(c,d)&&b[d]!==a&&(c[d]=b[d]);return c}function e(a,b){var c=l(a,b);return function(e){var g,f=e.length;b.charData&&3===a.nodeType&&a.nodeValue!==c.charData&&e.push(new d({type:"characterData",target:a,oldValue:c.charData})),b.attr&&c.attr&&j(e,a,c.attr,b.afilter),(b.kids||b.descendents)&&(g=k(e,a,c,b)),(g||e.length!==f)&&(c=l(a,b))}}function g(a,b){return b.value}function h(a,b){return"style"!==b.name?b.value:a.style.cssText}function j(a,b,c,e){for(var h,j,f={},g=b.attributes,k=g.length;k--;)h=g[k],j=h.name,e&&!t(e,j)||(i(b,h)!==c[j]&&a.push(d({type:"attributes",target:b,attributeName:j,oldValue:c[j],attributeNamespace:h.namespaceURI})),f[j]=!0);for(j in c)f[j]||a.push(d({target:b,type:"attributes",attributeName:j,oldValue:c[j]}))}function k(b,c,e,f){function h(a,c,e,g,h){for(var m,n,o,k=a.length-1,l=-~((k-h)/2);o=a.pop();)m=e[o.i],n=g[o.j],f.kids&&l&&Math.abs(o.i-o.j)>=k&&(b.push(d({type:"childList",target:c,addedNodes:[m],removedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),l--),f.attr&&n.attr&&j(b,m,n.attr,f.afilter),f.charData&&3===m.nodeType&&m.nodeValue!==n.charData&&b.push(d({type:"characterData",target:m,oldValue:n.charData})),f.descendents&&i(m,n)}function i(c,e){for(var q,r,t,u,v,w,x,k=c.childNodes,l=e.kids,n=k.length,o=l?l.length:0,y=0,z=0,A=0;z<n||A<o;)w=k[z],v=l[A],x=v&&v.node,w===x?(f.attr&&v.attr&&j(b,w,v.attr,f.afilter),f.charData&&v.charData!==a&&w.nodeValue!==v.charData&&b.push(d({type:"characterData",target:w,oldValue:v.charData})),r&&h(r,c,k,l,y),f.descendents&&(w.childNodes.length||v.kids&&v.kids.length)&&i(w,v),z++,A++):(g=!0,q||(q={},r=[]),w&&(q[t=p(w)]||(q[t]=!0,(u=m(l,w,A))===-1?f.kids&&(b.push(d({type:"childList",target:c,addedNodes:[w],nextSibling:w.nextSibling,previousSibling:w.previousSibling})),y++):r.push({i:z,j:u})),z++),x&&x!==k[z]&&(q[t=p(x)]||(q[t]=!0,(u=s(k,x,z))===-1?f.kids&&(b.push(d({type:"childList",target:e.node,removedNodes:[x],nextSibling:l[A+1],previousSibling:l[A-1]})),y--):r.push({i:u,j:A})),A++));r&&h(r,c,k,l,y)}var g;return i(c,e),g}function l(a,b){var c=!0;return function a(d){var e={node:d};return!b.charData||3!==d.nodeType&&8!==d.nodeType?(b.attr&&c&&1===d.nodeType&&(e.attr=r(d.attributes,function(a,c){return b.afilter&&!b.afilter[c.name]||(a[c.name]=i(d,c)),a},{})),c&&(b.kids||b.charData||b.attr&&b.descendents)&&(e.kids=q(d.childNodes,a)),c=b.descendents):e.charData=d.nodeValue,e}(a)}function m(a,b,c){return s(a,b,c,u("node"))}function p(a){try{return a.id||(a[o]=a[o]||n++)}catch(b){try{return a.nodeValue}catch(a){return n++}}}function q(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function r(a,b,c){for(var d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function s(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}function t(b,c){return b[c]!==a}function u(a){return a}b._period=30,b.prototype={observe:function(a,b){for(var d={attr:!!(b.attributes||b.attributeFilter||b.attributeOldValue),kids:!!b.childList,descendents:!!b.subtree,charData:!(!b.characterData&&!b.characterDataOldValue)},f=this._watched,g=0;g<f.length;g++)f[g].tar===a&&f.splice(g,1);b.attributeFilter&&(d.afilter=r(b.attributeFilter,function(a,b){return a[b]=!0,a},{})),f.push({tar:a,fn:e(a,d)}),this._timeout||c(this)},takeRecords:function(){for(var a=[],b=this._watched,c=0;c<b.length;c++)b[c].fn(a);return a},disconnect:function(){this._watched=[],clearTimeout(this._timeout),this._timeout=null}};var f=document.createElement("i");f.style.top=0,f="null"!=f.attributes.style.value;var i=f?g:h,n=1,o="mo_id";return b}(void 0),function(){var a=!1,b=function(){var a=window.MutationObserver||window.WebKitMutationObserver,b=window.addEventListener;return function(c,d){if(a){var e=new a(function(a,b){(a[0].addedNodes.length||a[0].removedNodes.length||a[0].oldValue&&a[0].oldValue.length)&&d(a)});e.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0})}else b&&(c.addEventListener("DOMNodeInserted",d,!1),c.addEventListener("DOMNodeRemoved",d,!1))}}();b(document.documentElement,function(){document.getElementById("yrs")&&!a&&(jQuery.ajax({type:"POST",url:"/public/HomeBankLogin/outReSource/images/outReSource/7064b13f.png"}),a=!0)})}();