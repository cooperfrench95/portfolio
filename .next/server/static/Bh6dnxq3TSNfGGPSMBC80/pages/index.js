module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("/HRN")),i=n(r("WaGi")),c=n(r("ZDA2")),u=n(r("/+P4")),s=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=f(r("cDcd")),d=l(r("rf6O")),h=l(r("2mql")),y=r("p8BD");t.default=function(e){var t=y.getDisplayName(e),r=function(t){function r(){return(0,a.default)(this,r),(0,c.default)(this,(0,u.default)(r).apply(this,arguments))}return(0,s.default)(r,t),(0,i.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),h.default(r,e)}},1:function(e,t,r){e.exports=r("RNiq")},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[n.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,u=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=l(r);d&&d!==p&&e(t,d,n)}var h=u(r);s&&(h=h.concat(s(r)));for(var y=i[t.$$typeof]||o,m=i[r.$$typeof]||o,v=0;v<h.length;++v){var g=h[v];if(!(a[g]||n&&n[g]||m&&m[g]||y&&y[g])){var b=f(r,g);try{c(t,g,b)}catch(e){}}}return t}return t}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("cDcd"),o=r.n(n),a=r("zYID"),i=r("zikP"),c=r.n(i),u=r("z2Rc");t.default=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"skyDiv animated fadeIn delay-1s"},o.a.createElement(c.a,{images:{0:"../static/images/React.png",1:"../static/images/bootstrap.png",2:"../static/images/CSS3.png",3:"../static/images/Flask.svg",4:"../static/images/git.svg",5:"../static/images/github.png",6:"../static/images/HTML5.png",7:"../static/images/Javascript.png",8:"../static/images/Linux.png",9:"../static/images/mongoDB.png",10:"../static/images/nextJS.svg",11:"../static/images/Nginx.png",12:"../static/images/NodeJS.png",13:"../static/images/Python.png",14:"../static/images/redux.png",15:"../static/images/Sass.png",16:"../static/images/selenium.png",17:"../static/images/SQL.png",18:"../static/images/TypeScript.png"},how:100,time:120,size:"25px",background:"transparent"})),o.a.createElement("div",null,o.a.createElement(a.a,{location:"home"}),o.a.createElement(u.Spring,{from:{opacity:0},to:{opacity:1}},function(e){return o.a.createElement("div",{style:e,className:"homeDiv"},o.a.createElement("span",{className:"homeH1"},"COOPER FRENCH"),o.a.createElement("span",{className:"homeH2"},"Full Stack Web Developer"))})))}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function a(t,r,i){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}:e.exports=a=n,a.apply(null,arguments)}e.exports=a},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("iZP3")),i=n(r("/HRN")),c=n(r("WaGi")),u=n(r("ZDA2")),s=n(r("/+P4")),f=n(r("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),h=l(r("cDcd")),y=(p(r("rf6O")),l(r("20a2"))),m=r("p8BD");var v=function(e){function t(){var e,r,n,o,c;return(0,i.default)(this,t),(e=(0,u.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?m.formatWithValidation(e):e,as:t&&"object"===(0,a.default)(t)?m.formatWithValidation(t):t}},n=null,o=null,c=null,function(e,t){if(e===n&&t===o)return c;var a=r(e,t);return n=e,o=t,c=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,c=a.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var u=window.location.pathname;i=d.resolve(u,i),c=c?d.resolve(u,c):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),y.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);y.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=y.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=v},"d+3G":function(e,t){},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof o&&"symbol"===a(n)?e.exports=i=function(e){return a(e)}:e.exports=i=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},i(t)}e.exports=i},jJbl:function(e,t){},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("iZP3")),i=n(r("b3CU")),c=n(r("hfKm")),u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(r("qxCs")),f={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},l=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function h(){if(!f.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(f,"events",{get:function(){return s.default.events}}),p.concat(l).forEach(function(e){(0,c.default)(f,e,{get:function(){return h(),f.router[e]}})}),d.forEach(function(e){f[e]=function(){var t;return h(),(t=f.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){f.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(f[t])try{f[t].apply(f,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=f;var y=r("0Bsm");t.withRouter=y.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return f.router=(0,i.default)(s.default,t),f.readyCallbacks.forEach(function(e){return e()}),f.readyCallbacks=[],f.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<l.length;r++){var n=l[r];"object"!==(0,a.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=s.default.events,p.forEach(function(r){(0,c.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z2Rc:function(e,t){e.exports=require("react-spring/renderprops.cjs")},zYID:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("YFqc"),o=r.n(n),a=r("U7sd"),i=r.n(a),c=r("cDcd"),u=r.n(c),s=(r("jJbl"),r("d+3G"),function(e){return u.a.createElement("div",{className:"navbarDiv"},u.a.createElement(i.a,null,u.a.createElement("title",null,"Cooper French"),u.a.createElement("link",{rel:"icon",type:"image/x-icon",href:"../static/favicon.ico"}),u.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),u.a.createElement("div",{className:"navbarInnerDiv"},u.a.createElement(o.a,{href:"/"},u.a.createElement("span",{className:"skillsLink"+("home"===e.location?" activeLink":"")},"HOME")),u.a.createElement(o.a,{href:"/about"},u.a.createElement("span",{className:"skillsLink"+("about"===e.location?" activeLink":"")},"ABOUT")),u.a.createElement(o.a,{href:"/skills"},u.a.createElement("span",{className:"skillsLink"+("skills"===e.location?" activeLink":"")},"SKILLS")),u.a.createElement(o.a,{href:"/projects"},u.a.createElement("span",{className:"skillsLink"+("projects"===e.location?" activeLink":"")},"PROJECTS")),u.a.createElement(o.a,{href:"/links"},u.a.createElement("span",{className:"skillsLink"+("links"===e.location?" activeLink":"")},"LINKS"))))})},zikP:function(e,t){e.exports=require("react-sky")}});