function getClass(e,t){if(t=void 0===t?document:t,document.getElementsByClassName)return t.getElementsByClassName(e);for(var n=t.getElementsByTagName("*"),i=[],r=0;r<n.length;r++){var o=check(n[r].className,e);o&&i.push(n[r])}return i}function check(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)if(n[i]==t)return!0;return!1}function $(e,t){t=void 0===t?document:t;var n=e.charAt(0);return"."==n?getClass(e.slice(1),t):"#"==n?t.getElementById(e.slice(1)):/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(e)?t.getElementsByTagName(e):void 0}function setText(e,t){return t?e.innerText?e.innerText=t:e.textContent=t:e.innerText?e.innerText:e.textContent}function getStyle(e,t){return window.getComputedStyle?getComputedStyle(e,null)[t]:e.currentStyle[t]}function getchilds(e,t){var n=e.childNodes,i=[],t=t||!1;if(t){for(var r=0;r<obj.length;r++)(1==n[r].nodeType||3==n[r].nodeType&&0!=n[r].nodeValue.trim().length)&&i.push(n[r]);return i}for(var r=0;r<n.length;r++)1==n[r].nodeType&&i.push(n[r]);return i}function firstChild(e){var t=getchilds(e)[0];return t}function getNext(e){var t=e.nextSibling;if(null===t)return e;for(;1!=t.nodeType;)if(t=t.nextSibling,null==t)return!1;return t}function getPrevious(e){var t=e.PreviousSibling;if(null===t)return!1;for(;3==t.nodeType||8==t.nodeType;)if(t=t.PreviousSibling,null==t)return!1;return t}function insertAfter(e,t){var n=t.nextSibling;if(n){var i=t.parentNode;i.appendChild(e)}else{var i=t.parentNode;i.insertBefore(e,n)}}function appendBefore(e,t){var n=firstChild(e);e.insertBefore(t,n)}function appendAfter(e,t){e.appendChild(t)}function xian(e){var t=$(".top",e)[0],n=$(".bottom",e)[0],i=$(".left",e)[0],r=$(".right",e)[0];e.onmouseover=function(){animate(t,{width:e.offsetWidth}),animate(i,{height:e.offsetHeight}),animate(n,{width:e.offsetWidth}),animate(r,{height:e.offsetHeight})},e.onmouseout=function(){animate(t,{width:0}),animate(i,{height:0}),animate(n,{width:0}),animate(r,{height:0})}}
//# sourceMappingURL=function.js.map
