!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,n){!function(t){"use strict";var d="power-id",o=0;function a(t,e,n){return this.tagName=t||"div",this.children=n||[],this.props=e||{},o+=1,this.props[d]=o,this}var u=[],r=function(t,e,n){return t.substr(!n||n<0?0:+n,e.length)===e},i=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},l=function(t){return(r(t,"on")?t.toLowerCase():"on".concat(t))in window},c=function(t){return t instanceof Element},h=function(t){return t&&t.constructor===a},s={},e={};["Array","Boolean","Date","Error","Function","Null","Number","Object","RegExp","String","Undefined"].forEach(function(t){var n=t.toLowerCase();s["[object ".concat(t,"]")]=n,e["is".concat(t)]=function(t){return(null===(e=t)?String(e):s[{}.toString.call(e)])===n;var e}});var p=e.isArray,f=e.isFunction,y=e.isObject,v=e.isString,m=function(e,t,n){var o=t.startsWith("on")?t.substring(2,t.length).toLowerCase():t;e.addEventListener(o,function(t){return n.call(e,t,e)})},b=function(t,e,n){if(!i(e,n)&&(v(e)&&(t.style.cssText=e),y(e))){if(y(n))for(var o in n)o in e||(t.style[o]="");for(var r in e)t.style[r]=e[r]}},g={htmlFor:"for",className:"class"},O=function(t){var e=document.createElement(t.tagName.name||t.tagName);return y(t.props)&&function(t,e){for(var n in e)"style"!==n?l(n)?m(t,n,e[n]):((o=n)in t||"class"===o||r(o,"data-")||r(o,"power-"))&&t.setAttribute(g[n]||n,e[n]):b(t,e[n]);var o}(e,t.props),t.children&&t.children.length&&function t(e,n){for(var o=0,r=n.length;o<r;o++){var i=n[o];h(i)?(u=i,e.appendChild(O(u))):p(i)?t(e,i):(a=i,e.appendChild(document.createTextNode(a)))}var a,u}(e,t.children),e},n=function t(e,n){if(f(e.tagName))return t(new e.tagName(e.props),n);if(!c(n))throw"You MUST provide a valid DOM element as your root.";if(!h(e)&&!e._power)return t(new e,n);e._power&&e.componentWillMount&&e.componentWillMount(e);var o=e._power?e.create():O(e);c(o)&&n.appendChild(o),e._power&&e.componentDidMount&&e.componentDidMount(e)};function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var j=function(t){for(var e=[].slice.call(arguments,1),n=0,o=e.length;n<o;n++){var r=e[n];for(var i in r)t[i]=r[i]}return t},P=function(t,e,n){var o=t.props[d];null===e.props&&(e.props={}),e.props[d]=t.props[d];var r=n.node.querySelector("[".concat(d,'="').concat(o,'"]'));t.tagName,e.tagName,S(t.props,e.props,r),_(t.children,e.children,r,n)},S=function(t,e,n){if(!i(t,e)){for(var o in i(t.style,e.style)||b(n,e.style,t.style),t)e[o]||n.removeAttribute(g[o]||o);for(var r in e)"style"===r||l(r)||t[r]&&e[r]===t[r]||n.setAttribute(g[r]||r,e[r])}},_=function t(e,n,o,r){for(var i=0,a=n.length;i<a;i++){var u=n[i];if(void 0===e[i]&&h(u)){u.props||(u.props={});var l=O(u,r);o.appendChild(l)}else if(v(u)&&u!==e[i]){var c=document.createTextNode(u);o.replaceChild(c,o.childNodes[i])}else h(u)?P(e[i],u,r):u.pop&&e[i]&&e[i].pop&&t(e[i],u,o,r)}for(var s,p=e.length-n.length,f=e.length-1;0<p;)(s=r.node.querySelector("[".concat(d,'="').concat(e[f].props[d],'"]')))&&s.parentNode&&s.parentNode.removeChild(s),f-=1,p-=1},C=["push","pop","shift","unshift","splice"],k=function(){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=this.constructor;this.componentWillInitialize&&this.componentWillInitialize(this),this._power=!0,this.name=e.name,this.state=f(this.getInitialState)?this.getInitialState():y(e.initialState)?e.initialState:{},this.props=f(this.getDefaultProps)?this.getDefaultProps():y(e.defaultProps)?e.defaultProps:{},t&&(this.props=j({},this.props,t)),this.componentDidInitialize&&this.componentDidInitialize(this)}return w(n.prototype,[{key:"create",value:function(){var r,t;return this.node=document.createElement(this.name),this.node.setAttribute("power-component",!0),this.componentVDom=this.render(),this.props=(t=(r=this).props,new Proxy(t,{get:function(t,e){var n=t[e],o={get:function(e,n){var t=e[n];return f(t)&&p(e)?function(){var t=Array.prototype[n].apply(e,arguments);return C.includes(n)&&r.shouldComponentUpdate(r.props,r.state)&&r.update(),t}:t}};return p(n)?new Proxy(n,o):n},set:function(t,e,n){var o=t[e];return r.shouldComponentUpdate(t,r.state)&&o!==n&&(t[e]=n,r.update()),!0}})),this.template=O(this.componentVDom,this),this.node.appendChild(this.template),this.node}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"setState",value:function(t,e){if(!i(t,this.state)){var n=t;if(f(n)&&(n=n.call(this,this.state,this.props)),n=j({},this.state,n),!this.shouldComponentUpdate(this.props,n))return!1;this.state=n,this.update(),f(e)&&e.call(this)}}},{key:"forceUpdate",value:function(t){this.update(),f(t)&&t.call(this)}},{key:"update",value:function(){this.componentWillUpdate&&this.componentWillUpdate(this);var t=this.render();this.patch(this.componentVDom,t),this.componentVDom=t,this.componentDidUpdate&&this.componentDidUpdate(this)}},{key:"patch",value:function(t,e){P(t,e,this)}},{key:"destroy",value:function(){this.componentWillUnmount&&this.componentWillUnmount(this),this.node.parentElement.removeChild(this.node),this.componentDidUnmount&&this.componentDidUnmount(this)}}]),n}(),D="1.0.0-beta",T={h:function(t,e){for(var n=[],o=arguments.length;2<o--;)u[u.length]=arguments[o];for(;u.length;){var r=u.pop();if(r.pop)for(var i=r.length;i--;)u[u.length]=r[i];else"boolean"==typeof r&&(r=null),"number"==typeof r&&(r=String(r)),"function"!=typeof r&&null===r&&(r=""),n[n.length]=r}return new a(t,e,n)},render:n,Component:k,version:D};t.default=T,t.render=n,t.Component=k,t.version=D,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";var o,r=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}}(n(0)),i=(o=n(2))&&o.__esModule?o:{default:o};n(3),(0,r.render)(r.default.h(i.default,null),document.getElementById("app"))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}}(n(0));function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var d=0,o=function(t){function a(t){var e,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),n=this,e=!(o=s(a).call(this,t))||"object"!==u(o)&&"function"!=typeof o?f(n):o;for(var r=[],i=1;i<=1e3;i++)r.push({val:"item ".concat(i),key:"".concat(d++)});return e.addTodo=e.addTodo.bind(f(f(e))),e.state={todos:r,hide:!1},e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,r.Component),e=a,(n=[{key:"addTodo",value:function(t){var e=t.keyCode||t.charCode,n=t.target;if(13===e){var o=l({},this.state),r=i(o.todos);r.push({value:n.value,id:d++}),o.todos=r,o.hide&&(o.hide=!1),this.setState(o,function(){n.value=""})}}},{key:"removeTodo",value:function(t){var e=l({},this.state),n=i(e.todos),o=n.indexOf(t);n.splice(o,1),e.todos=n,e.todos.length||(e.hide=!0),this.setState(e)}},{key:"renderTodos",value:function(){var n=this;return this.state.todos.map(function(t,e){return r.default.h("li",{key:t.key},r.default.h("label",{htmlFor:"item_".concat(t.key)},r.default.h("input",{type:"checkbox",id:"item_".concat(t.key)}),r.default.h("span",null,t.value)),r.default.h("button",{onClick:n.removeTodo.bind(n,t)},"×"))})}},{key:"render",value:function(){var t=this.state.hide?"hide":"",e={color:this.state.hide?"#cc0000":"#000"};return r.default.h("div",{id:"todos"},r.default.h("h1",{style:e},"Todo List"),r.default.h("input",{type:"text",onKeyUp:this.addTodo,placeholder:"What do you need to do today?"}),r.default.h("ul",{className:t},this.renderTodos()))}}])&&c(e.prototype,n),o&&c(e,o),a}();e.default=o},function(t,e,n){}]);
//# sourceMappingURL=app.178dd452b373892030e8.js.map