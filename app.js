/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@power-js/core/dist/power.js":
/*!***************************************************!*\
  !*** ./node_modules/@power-js/core/dist/power.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";var f="power-id",o=0;function a(t,e,n){return this.tagName=t||"div",this.children=n||[],this.props=e||{},o+=1,this.props[f]=o,this}var s=[];var i=function(t,e,n){return t.substr(!n||n<0?0:+n,e.length)===e},r=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},p=function(t){return(i(t,"on")?t.toLowerCase():"on".concat(t))in window},l=function(t){return t instanceof Element},d=function(t){return t&&t.constructor===a},c={},e={};["Array","Boolean","Date","Error","Function","Null","Number","Object","RegExp","String","Undefined"].forEach(function(t){var n=t.toLowerCase();c["[object ".concat(t,"]")]=n,e["is".concat(t)]=function(t){return(null===(e=t)?String(e):c[{}.toString.call(e)])===n;var e}});var u=e.isArray,h=e.isFunction,m=e.isObject,v=e.isString,y=function(e,t,n){var o=t.startsWith("on")?t.substring(2,t.length).toLowerCase():t;e.addEventListener(o,function(t){return n.call(e,t,e)})},g=function(t,e,n){if(!r(e,n)&&(v(e)&&(t.style.cssText=e),m(e))){if(m(n))for(var o in n)o in e||(t.style[o]="");for(var i in e)t.style[i]=e[i]}},w={htmlFor:"for",className:"class"},b=function(t){var e=document.createElement(t.tagName.name||t.tagName);return m(t.props)&&function(t,e){for(var n in e)"style"!==n?p(n)?y(t,n,e[n]):((o=n)in t||"class"===o||i(o,"data-")||i(o,"power-"))&&t.setAttribute(w[n]||n,e[n]):g(t,e[n]);var o}(e,t.props),t.children&&t.children.length&&function t(e,n){for(var o=0,i=n.length;o<i;o++){var r=n[o];d(r)?(s=r,e.appendChild(b(s))):u(r)?t(e,r):(a=r,e.appendChild(document.createTextNode(a)))}var a,s}(e,t.children),e},n=function t(e,n){if(h(e.tagName))return t(new e.tagName(e.props),n);if(!l(n))throw"You MUST provide a valid DOM element as your root.";if(!d(e)&&!e._power)return t(new e,n);e._power&&e.componentWillMount&&e.componentWillMount(e);var o=e._power?e.create():b(e);l(o)&&n.appendChild(o),e._power&&e.componentDidMount&&e.componentDidMount(e)};function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var N=function(t){for(var e=[].slice.call(arguments,1),n=0,o=e.length;n<o;n++){var i=e[n];for(var r in i)t[r]=i[r]}return t},D=function(t,e,n){var o=t.props[f];null===e.props&&(e.props={}),e.props[f]=t.props[f];var i=n.node.querySelector("[".concat(f,'="').concat(o,'"]'));t.tagName,e.tagName,S(t.props,e.props,i),U(t.children,e.children,i,n)},S=function(t,e,n){if(!r(t,e)){for(var o in r(t.style,e.style)||g(n,e.style,t.style),t)e[o]||n.removeAttribute(w[o]||o);for(var i in e)"style"===i||p(i)||t[i]&&e[i]===t[i]||n.setAttribute(w[i]||i,e[i])}},U=function t(e,n,o,i){for(var r=0,a=n.length;r<a;r++){var s=n[r];if(void 0===e[r]&&d(s)){s.props||(s.props={});var p=b(s,i);o.appendChild(p)}else if(v(s)&&s!==e[r]){var l=document.createTextNode(s);o.replaceChild(l,o.childNodes[r])}else d(s)?D(e[r],s,i):s.pop&&e[r]&&e[r].pop&&t(e[r],s,o,i)}for(var c,u=e.length-n.length,h=e.length-1;0<u;)(c=i.node.querySelector("[".concat(f,'="').concat(e[h].props[f],'"]')))&&c.parentNode&&c.parentNode.removeChild(c),h-=1,u-=1},x=["push","pop","shift","unshift","splice"],E=function(){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=this.constructor;this.componentWillInitialize&&this.componentWillInitialize(this),this._power=!0,this.name=e.name,this.state=h(this.getInitialState)?this.getInitialState():m(e.initialState)?e.initialState:{},this.props=h(this.getDefaultProps)?this.getDefaultProps():m(e.defaultProps)?e.defaultProps:{},t&&(this.props=N({},this.props,t)),this.componentDidInitialize&&this.componentDidInitialize(this)}var t,e,o;return t=n,(e=[{key:"create",value:function(){var i,t;return this.node=document.createElement(this.name),this.node.setAttribute("power-component",!0),this.componentVDom=this.render(),this.props=(t=(i=this).props,new Proxy(t,{get:function(t,e){var n=t[e],o={get:function(e,n){var t=e[n];return h(t)&&u(e)?function(){var t=Array.prototype[n].apply(e,arguments);return x.includes(n)&&i.shouldComponentUpdate(i.props,i.state)&&i.update(),t}:t}};return u(n)?new Proxy(n,o):n},set:function(t,e,n){var o=t[e];return i.shouldComponentUpdate(t,i.state)&&o!==n&&(t[e]=n,i.update()),!0}})),this.template=b(this.componentVDom,this),this.node.appendChild(this.template),this.node}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"setState",value:function(t,e){if(!r(t,this.state)){var n=t;if(h(n)&&(n=n.call(this,this.state,this.props)),n=N({},this.state,n),!this.shouldComponentUpdate(this.props,n))return!1;this.state=n,this.update(),h(e)&&e.call(this)}}},{key:"forceUpdate",value:function(t){this.update(),h(t)&&t.call(this)}},{key:"update",value:function(){this.componentWillUpdate&&this.componentWillUpdate(this);var t=this.render();this.patch(this.componentVDom,t),this.componentVDom=t,this.componentDidUpdate&&this.componentDidUpdate(this)}},{key:"patch",value:function(t,e){D(t,e,this)}},{key:"destroy",value:function(){this.componentWillUnmount&&this.componentWillUnmount(this),this.node.parentElement.removeChild(this.node),this.componentDidUnmount&&this.componentDidUnmount(this)}}])&&C(t.prototype,e),o&&C(t,o),n}(),W="1.0.0-beta",k={h:function(t,e){for(var n=[],o=arguments.length;2<o--;)s[s.length]=arguments[o];for(;s.length;){var i=s.pop();if(i.pop)for(var r=i.length;r--;)s[s.length]=i[r];else"boolean"==typeof i&&(i=null),"number"==typeof i&&(i=String(i)),"function"!=typeof i&&null===i&&(i=""),n[n.length]=i}return new a(t,e,n)},render:n,Component:E,version:W};t.default=k,t.render=n,t.Component=E,t.version=W,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = _interopRequireWildcard(__webpack_require__(/*! @power-js/core */ "./node_modules/@power-js/core/dist/power.js"));

var _todo = _interopRequireDefault(__webpack_require__(/*! ./js/components/todo/todo */ "./src/js/components/todo/todo.js"));

__webpack_require__(/*! ./style/app.scss */ "./src/style/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _core.render)(_core.default.h(_todo.default, null), document.getElementById('app'));

/***/ }),

/***/ "./src/js/components/todo/todo.js":
/*!****************************************!*\
  !*** ./src/js/components/todo/todo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireWildcard(__webpack_require__(/*! @power-js/core */ "./node_modules/@power-js/core/dist/power.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var nodeId = 0;

var Todo =
/*#__PURE__*/
function (_Component) {
  _inherits(Todo, _Component);

  function Todo(props) {
    var _this;

    _classCallCheck(this, Todo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Todo).call(this, props));
    var todos = [];

    for (var i = 1; i <= 1000; i++) {
      todos.push({
        val: "item ".concat(i),
        key: "".concat(nodeId++)
      });
    }

    _this.addTodo = _this.addTodo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      todos: todos,
      hide: false
    };
    return _this;
  }

  _createClass(Todo, [{
    key: "addTodo",
    value: function addTodo(e) {
      var key = e.keyCode || e.charCode;
      var target = e.target;

      if (key === 13) {
        var state = _objectSpread({}, this.state);

        var _todos = _toConsumableArray(state.todos);

        _todos.push({
          value: target.value,
          key: nodeId++
        });

        state.todos = _todos;

        if (state.hide) {
          state.hide = false;
        }

        this.setState(state, function () {
          target.value = '';
        });
      }
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(todo) {
      var state = _objectSpread({}, this.state);

      var todos = _toConsumableArray(state.todos);

      var i = todos.indexOf(todo);
      todos.splice(i, 1);
      state.todos = todos;

      if (!state.todos.length) {
        state.hide = true;
      }

      this.setState(state);
    }
  }, {
    key: "renderTodos",
    value: function renderTodos() {
      var _this2 = this;

      return this.state.todos.map(function (todo, index) {
        return _core.default.h("li", {
          key: todo.key
        }, _core.default.h("label", {
          htmlFor: "item_".concat(todo.key)
        }, _core.default.h("input", {
          type: "checkbox",
          id: "item_".concat(todo.key)
        }), _core.default.h("span", null, todo.value)), _core.default.h("button", {
          onClick: _this2.removeTodo.bind(_this2, todo)
        }, "\xD7"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.state.hide ? 'hide' : '';
      var style = {
        color: this.state.hide ? '#cc0000' : '#000'
      };
      return _core.default.h("div", {
        id: "todos"
      }, _core.default.h("h1", {
        style: style
      }, "Todo List"), _core.default.h("input", {
        type: "text",
        onKeyUp: this.addTodo,
        placeholder: "What do you need to do today?"
      }), _core.default.h("ul", {
        className: classes
      }, this.renderTodos()));
    }
  }]);

  return Todo;
}(_core.Component);

var _default = Todo;
exports.default = _default;

/***/ }),

/***/ "./src/style/app.scss":
/*!****************************!*\
  !*** ./src/style/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map