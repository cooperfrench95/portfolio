(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6SVQ":function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),s=i.n(n),a=i("zYID"),r=i("P4c3"),o=[{name:"ReactJS",key:1,image:"/static/images/React.png"},{name:"Javascript",key:2,image:"/static/images/Javascript.png"},{name:"Python",key:3,image:"/static/images/Python.png"},{name:"NodeJS",key:4,image:"/static/images/NodeJS.png"},{name:"Redux",key:5,image:"/static/images/redux.png"},{name:"Typescript",key:6,image:"/static/images/TypeScript.png"},{name:"HTML5",key:7,image:"/static/images/HTML5.png"},{name:"Linux",key:8,image:"/static/images/Linux.png"},{name:"SQL",key:9,image:"/static/images/SQL.png"},{name:"MongoDB",key:10,image:"/static/images/mongoDB.png"},{name:"Flask",key:11,image:"/static/images/Flask.svg"},{name:"Bootstrap",key:12,image:"/static/images/bootstrap.png"},{name:"CSS3",key:13,image:"/static/images/CSS3.png"},{name:"Sass",key:14,image:"/static/images/Sass.png"},{name:"Nginx",key:15,image:"/static/images/Nginx.png"},{name:"Selenium",key:16,image:"/static/images/selenium.png"},{name:"NextJS",key:17,image:"/static/images/nextJS.svg"},{name:"Git",key:18,image:"/static/images/git.svg"}];t.default=function(){return s.a.createElement("div",{className:"aboutPageMainDiv"},s.a.createElement(a.a,{location:"skills"}),s.a.createElement("div",{className:"homeDiv animated fadeIn"},s.a.createElement("div",{className:"skillsDiv animated fadeIn"},s.a.createElement(r.Trail,{config:{tension:600,friction:40},items:o,keys:function(e){return e.key},from:{transform:"scale(0.1)",opacity:0},to:{transform:"scale(1)",opacity:1}},function(e){return function(t){return s.a.createElement("div",{className:"eachSkillDiv",style:t},s.a.createElement("img",{className:"skillTrailImage",src:e.image,alt:e.name}),s.a.createElement("span",{className:"skillTrailItemName"},e.name))}}))))}},MHu7:function(e,t,i){"use strict";function n(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}i.r(t),i.d(t,"default",function(){return n})},P4c3:function(e,t,i){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var s=n(i("MHu7")),a=n(i("dw1l")),r=n(i("q1tI")),o=n(i("i8i4"));let l=void 0,d=void 0,c=[],h=e=>"undefined"!=typeof window&&window.requestAnimationFrame(e),p=e=>"undefined"!=typeof window&&window.cancelAnimationFrame(e),u=void 0,f=()=>Date.now(),m=void 0,g=void 0;const y=(e,t)=>d={fn:e,transform:t},v=e=>c=e,b=e=>l=e,k=e=>u=e,w=e=>m=e,x=e=>g=e;var S=Object.freeze({get bugfixes(){return l},get applyAnimatedValues(){return d},get colorNames(){return c},get requestFrame(){return h},get cancelFrame(){return p},get interpolation(){return u},get now(){return f},get defaultElement(){return m},get createAnimatedStyle(){return g},injectApplyAnimatedValues:y,injectColorNames:v,injectBugfixes:b,injectInterpolation:k,injectFrame:(e,t)=>{var i=[e,t];return h=i[0],p=i[1],i},injectNow:e=>f=e,injectDefaultElement:w,injectCreateAnimatedStyle:x});class A{attach(){}detach(){}getValue(){}getAnimatedValue(){return this.getValue()}addChild(e){}removeChild(e){}getChildren(){return[]}}const P=e=>Object.keys(e).map(t=>e[t]);class V extends A{constructor(){var e;super(...arguments),e=this,this.children=[],this.getChildren=(()=>this.children),this.getPayload=function(t){return void 0===t&&(t=void 0),void 0!==t&&e.payload?e.payload[t]:e.payload||e}}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class E extends V{constructor(){super(...arguments),this.payload=[],this.getAnimatedValue=(()=>this.getValue()),this.attach=(()=>this.payload.forEach(e=>e instanceof A&&e.addChild(this))),this.detach=(()=>this.payload.forEach(e=>e instanceof A&&e.removeChild(this)))}}class j extends V{constructor(){super(...arguments),this.payload={},this.getAnimatedValue=(()=>this.getValue(!0)),this.attach=(()=>P(this.payload).forEach(e=>e instanceof A&&e.addChild(this))),this.detach=(()=>P(this.payload).forEach(e=>e instanceof A&&e.removeChild(this)))}getValue(e){void 0===e&&(e=!1);const t={};for(const i in this.payload){const n=this.payload[i];(!e||n instanceof A)&&(t[i]=n instanceof A?n[e?"getAnimatedValue":"getValue"]():n)}return t}}class C extends j{constructor(e){super(),!(e=e||{}).transform||e.transform instanceof A||(e=d.transform(e)),this.payload=e}}const F={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};class O{static create(e,t,i){if("function"==typeof e)return e;if(u&&e.output&&"string"==typeof e.output[0])return u(e);if(Array.isArray(e))return O.create({range:e,output:t,extrapolate:i||"extend"});let n=e.output,s=e.range||[0,1],a=e.easing||(e=>e),r="extend",o=e.map;void 0!==e.extrapolateLeft?r=e.extrapolateLeft:void 0!==e.extrapolate&&(r=e.extrapolate);let l="extend";return void 0!==e.extrapolateRight?l=e.extrapolateRight:void 0!==e.extrapolate&&(l=e.extrapolate),e=>{let t=function(e,t){for(var i=1;i<t.length-1&&!(t[i]>=e);++i);return i-1}(e,s);return function(e,t,i,n,s,a,r,o,l){let d=l?l(e):e;if(d<t){if("identity"===r)return d;"clamp"===r&&(d=t)}if(d>i){if("identity"===o)return d;"clamp"===o&&(d=i)}if(n===s)return n;if(t===i)return e<=t?n:s;t===-1/0?d=-d:i===1/0?d-=t:d=(d-t)/(i-t);d=a(d),n===-1/0?d=-d:s===1/0?d+=n:d=d*(s-n)+n;return d}(e,s[t],s[t+1],n[t],n[t+1],a,r,l,o)}}}const R="[-+]?\\d*\\.?\\d+",T=R+"%";function I(){return"\\(\\s*("+Array.prototype.slice.call(arguments).join(")\\s*,\\s*(")+")\\s*\\)"}const M=new RegExp("rgb"+I(R,R,R)),D=new RegExp("rgba"+I(R,R,R,R)),U=new RegExp("hsl"+I(R,T,T)),q=new RegExp("hsla"+I(R,T,T,R)),N=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,L=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,W=/^#([0-9a-fA-F]{6})$/,$=/^#([0-9a-fA-F]{8})$/;function _(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function z(e,t,i){const n=i<.5?i*(1+t):i+t-i*t,s=2*i-n,a=_(s,n,e+1/3),r=_(s,n,e),o=_(s,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*r)<<16|Math.round(255*o)<<8}function K(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function J(e){return(parseFloat(e)%360+360)%360/360}function G(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function H(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function B(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=W.exec(e))?parseInt(t[1]+"ff",16)>>>0:F.hasOwnProperty(e)?F[e]:(t=M.exec(e))?(K(t[1])<<24|K(t[2])<<16|K(t[3])<<8|255)>>>0:(t=D.exec(e))?(K(t[1])<<24|K(t[2])<<16|K(t[3])<<8|G(t[4]))>>>0:(t=N.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$.exec(e))?parseInt(t[1],16)>>>0:(t=L.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=U.exec(e))?(255|z(J(t[1]),H(t[2]),H(t[3])))>>>0:(t=q.exec(e))?(z(J(t[1]),H(t[2]),H(t[3]))|G(t[4]))>>>0:null}(e);return null===t?e:`rgba(${(4278190080&(t=t||0))>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}const Q=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,X=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Y=new RegExp(`(${Object.keys(F).join("|")})`,"g");class Z extends E{constructor(e,t,i){super(),this.getValue=(()=>this.calc(...this.payload.map(e=>e.getValue()))),this.updateConfig=((e,t)=>this.calc=O.create(e,t)),this.interpolate=((e,t)=>new Z(this,e,t)),this.payload=e instanceof E&&!e.updateConfig?e.payload:Array.isArray(e)?e:[e],this.calc=O.create(t,i)}}class ee extends V{constructor(e){var t;super(),t=this,this.setValue=function(e,i){void 0===i&&(i=!0),t.value=e,i&&t.flush()},this.getValue=(()=>this.value),this.updateStyles=(()=>(function e(t,i){"function"==typeof t.update?i.add(t):t.getChildren().forEach(t=>e(t,i))})(this,this.animatedStyles)),this.updateValue=(e=>this.flush(this.value=e)),this.interpolate=((e,t)=>new Z(this,e,t)),this.value=e,this.animatedStyles=new Set,this.done=!1,this.startPosition=e,this.lastPosition=e,this.lastVelocity=void 0,this.lastTime=void 0,this.controller=void 0}flush(){0===this.animatedStyles.size&&this.updateStyles(),this.animatedStyles.forEach(e=>e.update())}prepare(e){void 0===this.controller&&(this.controller=e),this.controller===e&&(this.startPosition=this.value,this.lastPosition=this.value,this.lastVelocity=e.isActive?this.lastVelocity:void 0,this.lastTime=e.isActive?this.lastTime:void 0,this.done=!1,this.animatedStyles.clear())}}class te extends E{constructor(e){var t;super(),t=this,this.setValue=function(e,i){void 0===i&&(i=!0),Array.isArray(e)?e.length===t.payload.length&&e.forEach((e,n)=>t.payload[n].setValue(e,i)):t.payload.forEach((n,s)=>t.payload[s].setValue(e,i))},this.getValue=(()=>this.payload.map(e=>e.getValue())),this.interpolate=((e,t)=>new Z(this,e,t)),this.payload=e.map(e=>new ee(e))}}function ie(e,t){return null==e?t:e}function ne(e){return void 0!==e?Array.isArray(e)?e:[e]:[]}function se(e,t){if(typeof e!=typeof t)return!1;if("string"==typeof e||"number"==typeof e)return e===t;let i;for(i in e)if(!(i in t))return!1;for(i in t)if(e[i]!==t[i])return!1;return void 0!==i||e===t}function ae(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return"function"==typeof e?e(...i):e}function re(e){return Object.keys(e).map(t=>e[t])}function oe(e){const t=function(e){return e.to,e.from,e.config,e.native,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.impl,e.inject,e.delay,e.attach,e.destroyed,e.interpolateTo,e.autoStart,e.ref,s(e,["to","from","config","native","onStart","onRest","onFrame","children","reset","reverse","force","immediate","impl","inject","delay","attach","destroyed","interpolateTo","autoStart","ref"])}(e),i=Object.keys(e).reduce((i,n)=>void 0!==t[n]?i:a({},i,{[n]:e[n]}),{});return a({to:t},i)}function le(e,t){let i=t[0],n=t[1];return a({},e,{[i]:new(Array.isArray(n)?te:ee)(n)})}function de(e){const t=e.from,i=e.to,n=e.native,s=Object.entries(a({},t,i));return n?s.reduce(le,{}):a({},t,i)}function ce(e,t){return t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e}const he=e=>"auto"===e,pe=(e,t)=>(i,n)=>{let s=n[0],r=n[1];return a({},i,{[s]:"auto"===r?~s.indexOf("height")?t:e:r})};let ue={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const fe=["Webkit","Ms","Moz","O"];function me(e,t,i){return null==t||"boolean"==typeof t||""===t?"":i||"number"!=typeof t||0===t||ue.hasOwnProperty(e)&&ue[e]?(""+t).trim():t+"px"}ue=Object.keys(ue).reduce((e,t)=>(fe.forEach(i=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(i,t)]=e[t]),e),ue);const ge={};x(e=>new C(e)),w("div"),k(function(e){const t=e.output.map(e=>e.replace(X,B)).map(e=>e.replace(Y,B)),i=t[0].match(Q).map(()=>[]);t.forEach(e=>{e.match(Q).forEach((e,t)=>i[t].push(+e))});const n=t[0].match(Q).map((t,n)=>O.create(a({},e,{output:i[n]})));return e=>{let i=0;return t[0].replace(Q,()=>n[i++](e)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(e,t,i,n,s)=>`rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(n)}, ${s})`)}}),v(F),b(function(e,t){const i=e.from,n=e.to,s=e.children;if(!re(n).some(he)&&!re(i).some(he))return;let l=s(de(e));if(!l)return;Array.isArray(l)&&(l={type:"div",props:{children:l}});const d=l.props.style;return r.createElement(l.type,a({key:l.key?l.key:void 0},l.props,{style:a({},d,{position:"absolute",visibility:"hidden"}),ref:s=>{if(s){let r,l,d=o.findDOMNode(s),c=getComputedStyle(d);if("border-box"===c.boxSizing)r=d.offsetWidth,l=d.offsetHeight;else{const e=parseFloat(c.paddingLeft||0)+parseFloat(c.paddingRight||0),t=parseFloat(c.paddingTop||0)+parseFloat(c.paddingBottom||0),i=parseFloat(c.borderLeftWidth||0)+parseFloat(c.borderRightWidth||0),n=parseFloat(c.borderTopWidth||0)+parseFloat(c.borderBottomWidth||0);r=d.offsetWidth-e-i,l=d.offsetHeight-t-n}const h=pe(r,l);t(a({},e,{from:Object.entries(i).reduce(h,i),to:Object.entries(n).reduce(h,n)}))}}}))}),y((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const a=t.style,r=t.children,o=t.scrollTop,l=t.scrollLeft,d=s(t,["style","children","scrollTop","scrollLeft"]);void 0!==o&&(e.scrollTop=o),void 0!==l&&(e.scrollLeft=l),void 0!==r&&(e.textContent=r);for(let t in a)if(a.hasOwnProperty(t)){var i=0===t.indexOf("--"),n=me(t,a[t],i);"float"===t&&(t="cssFloat"),i?e.style.setProperty(t,n):e.style[t]=n}for(let t in d){const i=ge[t]||(ge[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()));void 0!==e.getAttribute(i)&&e.setAttribute(i,d[t])}}},e=>e);let ye=!1;const ve=new Set,be=()=>{let e=f();for(let t of ve){let i=!0,n=!0;for(let s=0;s<t.configs.length;s++){let a,r,o=t.configs[s];for(let s=0;s<o.animatedValues.length;s++){let l=o.animatedValues[s];if(l.done)continue;let d=o.fromValues[s],c=o.toValues[s],h=l.lastPosition,p=c instanceof A,u=Array.isArray(o.initialVelocity)?o.initialVelocity[s]:o.initialVelocity;if(p&&(c=c.getValue()),o.immediate||!p&&!o.decay&&d===c)l.updateValue(c),l.done=!0;else if(o.delay&&e-t.startTime<o.delay)i=!1;else if(n=!1,"string"!=typeof d&&"string"!=typeof c){if(void 0!==o.duration)h=d+o.easing((e-t.startTime-o.delay)/o.duration)*(c-d),a=e>=t.startTime+o.delay+o.duration;else if(o.decay)h=d+u/(1-.998)*(1-Math.exp(-(1-.998)*(e-t.startTime))),(a=Math.abs(l.lastPosition-h)<.1)&&(c=h);else{r=void 0!==l.lastTime?l.lastTime:e,u=void 0!==l.lastVelocity?l.lastVelocity:o.initialVelocity,e>r+64&&(r=e);let t=Math.floor(e-r);for(let e=0;e<t;++e){h+=1*(u+=1*((-o.tension*(h-c)+-o.friction*u)/o.mass)/1e3)/1e3}let i=!(!o.clamp||0===o.tension)&&(d<c?h>c:h<c),n=Math.abs(u)<=o.precision,s=0===o.tension||Math.abs(c-h)<=o.precision;a=i||n&&s,l.lastVelocity=u,l.lastTime=e}p&&!o.toValues[s].done&&(a=!1),a?(l.value!==c&&(h=c),l.done=!0):i=!1,l.updateValue(h),l.lastPosition=h}else l.updateValue(c),l.done=!0}!t.props.onFrame&&t.props.native||(t.animatedProps[o.name]=o.interpolation.getValue())}!t.props.onFrame&&t.props.native||(!t.props.native&&t.onUpdate&&t.onUpdate(),t.props.onFrame&&t.props.onFrame(t.animatedProps)),i&&(ve.delete(t),t.debouncedOnEnd({finished:!0,noChange:n}))}ve.size?h(be):ye=!1},ke=e=>{ve.has(e)||(ve.add(e),ye||h(be),ye=!0)},we=e=>{ve.has(e)&&ve.delete(e)};class xe{constructor(e,t){void 0===t&&(t={native:!0,interpolateTo:!0,autoStart:!0}),this.getValues=(()=>this.props.native?this.interpolations:this.animatedProps),this.dependents=new Set,this.isActive=!1,this.hasChanged=!1,this.props={},this.merged={},this.animations={},this.interpolations={},this.animatedProps={},this.configs=[],this.frame=void 0,this.startTime=void 0,this.lastTime=void 0,this.update(a({},e,t))}update(e){this.props=a({},this.props,e);let t=this.props.interpolateTo?oe(this.props):this.props,i=t.from,n=void 0===i?{}:i,s=t.to,r=void 0===s?{}:s,o=t.config,l=void 0===o?{}:o,d=t.delay,h=void 0===d?0:d,p=t.reverse,u=t.attach,f=t.reset,m=t.immediate,g=t.autoStart,y=t.ref;if(p){var v=[r,n];n=v[0],r=v[1]}this.hasChanged=!1;let b=u&&u(this),k=f?{}:this.merged;if(this.merged=a({},n,k,r),this.animations=Object.entries(this.merged).reduce((e,t,i)=>{let s=t[0],r=t[1],o=!f&&e[s]||{};const d="number"==typeof r,p="string"==typeof r&&!r.startsWith("#")&&!/\d/.test(r)&&!c[r],u=!d&&!p&&Array.isArray(r);let g=void 0!==n[s]?n[s]:r,y=d||u?r:p?r:1,v=ae(l,s);if(b&&(y=b.animations[s].parent),void 0===v.decay&&se(o.changes,r))return e;{let t,i;if(this.hasChanged=!0,d||p)t=i=o.parent||new ee(g);else if(u)t=i=o.parent||new te(g);else{const e=o.interpolation&&o.interpolation.calc(o.parent.value);o.parent?(t=o.parent).setValue(0,!1):t=new ee(0);const n={output:[void 0!==e?e:g,r]};o.interpolation?(i=o.interpolation,o.interpolation.updateConfig(n)):i=t.interpolate(n)}ae(m,s)&&t.setValue(r,!1);const n=ne(t.getPayload());return n.forEach(e=>e.prepare(this)),a({},e,{[s]:a({},o,{name:s,parent:t,interpolation:i,animatedValues:n,changes:r,fromValues:ne(t.getValue()),toValues:ne(b?y.getPayload():y),immediate:ae(m,s),delay:ie(v.delay,h||0),initialVelocity:ie(v.velocity,0),clamp:ie(v.clamp,!1),precision:ie(v.precision,.01),tension:ie(v.tension,170),friction:ie(v.friction,26),mass:ie(v.mass,1),duration:v.duration,easing:ie(v.easing,e=>e),decay:v.decay})})}},this.animations),this.hasChanged){this.configs=re(this.animations),this.animatedProps={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.animatedProps[e]=this.animations[e].interpolation.getValue()}for(var w=arguments.length,x=new Array(w>1?w-1:0),S=1;S<w;S++)x[S-1]=arguments[S];y||!g&&!x.length||this.start(...x);const A=x[0],P=x[1];return this.onEnd="function"==typeof A&&A,this.onUpdate=P,this.getValues()}start(e,t){return this.startTime=f(),this.isActive&&this.stop(),this.isActive=!0,this.onEnd="function"==typeof e&&e,this.onUpdate=t,this.props.onStart&&this.props.onStart(),ke(this),new Promise(e=>this.resolve=e)}stop(e){void 0===e&&(e=!1),e&&re(this.animations).forEach(e=>e.changes=void 0),this.debouncedOnEnd({finished:e})}destroy(){we(this),this.props={},this.merged={},this.animations={},this.interpolations={},this.animatedProps={},this.configs=[]}debouncedOnEnd(e){we(this),this.isActive=!1;const t=this.onEnd;this.onEnd=null,t&&t(e),this.resolve&&this.resolve(),this.resolve=null}}class Se extends j{constructor(e,t){super(),e.style&&(e=a({},e,{style:g(e.style)})),this.payload=e,this.update=t,this.attach()}}function Ae(e){class t extends r.Component{constructor(e){super(),this.callback=(()=>{if(this.node){!1===d.fn(this.node,this.propsAnimated.getAnimatedValue(),this)&&this.forceUpdate()}}),this.attachProps(e)}componentWillUnmount(){this.propsAnimated&&this.propsAnimated.detach()}setNativeProps(e){!1===d.fn(this.node,e,this)&&this.forceUpdate()}attachProps(e){e.forwardRef;let t=s(e,["forwardRef"]);const i=this.propsAnimated;this.propsAnimated=new Se(t,this.callback),i&&i.detach()}shouldComponentUpdate(e){const t=e.style,i=s(e,["style"]),n=this.props,a=n.style;return(!se(s(n,["style"]),i)||!se(a,t))&&(this.attachProps(e),!0)}render(){const t=this.propsAnimated.getValue(),i=(t.scrollTop,t.scrollLeft,s(t,["scrollTop","scrollLeft"]));return r.createElement(e,a({},i,{ref:e=>this.node=ce(e,this.props.forwardRef)}))}}return r.forwardRef((e,i)=>r.createElement(t,a({},e,{forwardRef:i})))}const Pe={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};class Ve extends r.Component{constructor(){super(...arguments),this.state={lastProps:{from:{},to:{}},propsChanged:!1,internal:!1},this.controller=new xe(null,null),this.didUpdate=!1,this.didInject=!1,this.finished=!0,this.start=(()=>{this.finished=!1;let e=this.mounted;this.controller.start(t=>this.finish(a({},t,{wasMounted:e})),this.update)}),this.stop=(()=>this.controller.stop(!0)),this.update=(()=>this.mounted&&this.setState({internal:!0})),this.finish=(e=>{let t=e.finished,i=e.noChange,n=e.wasMounted;this.finished=!0,this.mounted&&t&&(!this.props.onRest||!n&&i||this.props.onRest(this.controller.merged),this.mounted&&this.didInject&&(this.afterInject=de(this.props),this.setState({internal:!0})),this.mounted&&(this.didInject||this.props.after)&&this.setState({internal:!0}),this.didInject=!1)})}componentDidMount(){this.componentDidUpdate(),this.mounted=!0}componentWillUnmount(){this.mounted=!1,this.stop()}static getDerivedStateFromProps(e,t){let i=t.internal,n=t.lastProps;const s=e.from,a=e.to,r=e.reset,o=e.force;return{propsChanged:!se(a,n.to)||!se(s,n.from)||r&&!i||o&&!i,lastProps:e,internal:!1}}render(){const e=this.props.children,t=this.state.propsChanged;if(this.props.inject&&t&&!this.injectProps){const e=this.props.inject(this.props,e=>{this.injectProps=e,this.setState({internal:!0})});if(e)return e}(this.injectProps||t)&&(this.didInject=!1,this.injectProps?(this.controller.update(this.injectProps),this.didInject=!0):t&&this.controller.update(this.props),this.didUpdate=!0,this.afterInject=void 0,this.injectProps=void 0);let i=a({},this.controller.getValues(),this.afterInject);return this.finished&&(i=a({},i,this.props.after)),Object.keys(i).length?e(i):null}componentDidUpdate(){this.didUpdate&&this.start(),this.didUpdate=!1}}Ve.defaultProps={from:{},to:{},config:Pe.default,native:!1,immediate:!1,reset:!1,force:!1,inject:l};class Ee extends r.PureComponent{constructor(){super(...arguments),this.first=!0,this.instances=new Set,this.hook=((e,t,i,n)=>(this.instances.add(e),(n?t===i-1:0===t)?void 0:Array.from(this.instances)[n?t+1:t-1]))}render(){const e=this.props,t=e.items,i=e.children,n=e.from,o=void 0===n?{}:n,l=e.initial,d=e.reverse,c=e.keys,h=e.delay,p=e.onRest,u=s(e,["items","children","from","initial","reverse","keys","delay","onRest"]),f=ne(t);return ne(f).map((e,t)=>r.createElement(Ve,a({onRest:0===t?p:null,key:"function"==typeof c?c(e):ne(c)[t],from:this.first&&void 0!==l?l||{}:o},u,{delay:0===t&&h||void 0,attach:e=>this.hook(e,t,f.length,d),children:n=>{const s=i(e,t);return s?s(n):null}})))}componentDidUpdate(e){this.first=!1,e.items!==this.props.items&&this.instances.clear()}}Ee.defaultProps={keys:e=>e};class je extends r.PureComponent{constructor(){var e;super(...arguments),e=this,this.guid=0,this.state={props:{},resolve:()=>null,last:!0,index:0},this.next=function(t,i,n){return void 0===i&&(i=!0),void 0===n&&(n=0),e.running=!0,new Promise(s=>{e.mounted&&e.setState(e=>({props:t,resolve:s,last:i,index:n}),()=>e.running=!1)})}}componentDidMount(){this.mounted=!0,this.componentDidUpdate({})}componentWillUnmount(){this.mounted=!1}componentDidUpdate(e){var t=this;const i=this.props,n=i.states,s=i.filter,a=i.state;if((e.state!==this.props.state||this.props.reset&&!this.running||!se(n[a],e.states[e.state]))&&n&&a&&n[a]){const e=++this.guid,i=n[a];if(i)if(Array.isArray(i)){let t=Promise.resolve();for(let n=0;n<i.length;n++){let a=n,r=i[a],o=a===i.length-1;t=t.then(()=>e===this.guid&&this.next(s(r),o,a))}}else if("function"==typeof i){let n=0;i(function(i,a){return void 0===a&&(a=!1),e===t.guid&&t.next(s(i),a,n++)},()=>h(()=>this.instance&&this.instance.stop()),this.props)}else this.next(s(n[a]))}}render(){const e=this.state,t=e.props,i=e.resolve,n=e.last,o=e.index;if(!t||0===Object.keys(t).length)return null;let l=this.props,d=(l.state,l.filter,l.states,l.config),c=l.primitive,h=l.onRest,p=l.forwardRef,u=s(l,["state","filter","states","config","primitive","onRest","forwardRef"]);return Array.isArray(d)&&(d=d[o]),r.createElement(c,a({ref:e=>this.instance=ce(e,p),config:d},u,t,{onRest:e=>{i(e),h&&n&&h(e)}}))}}je.defaultProps={state:"__default"};const Ce=r.forwardRef((e,t)=>r.createElement(je,a({},e,{forwardRef:t})));Ce.create=(e=>(function(t,i){return void 0===i&&(i=(e=>e)),("function"==typeof t||Array.isArray(t))&&(t={__default:t}),n=>r.createElement(je,a({primitive:e,states:t,filter:i},n))})),Ce.Spring=(e=>Ce.create(Ve)(e,oe)),Ce.Trail=(e=>Ce.create(Ee)(e,oe));let Fe=0,Oe=e=>{let t=e.items,i=e.keys,n=s(e,["items","keys"]);return t=ne(void 0!==t?t:null),i="function"==typeof i?t.map(i):ne(i),a({items:t,keys:i.map(e=>String(e))},n)};class Re extends r.PureComponent{componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}constructor(e){super(e),this.destroyItem=((e,t,i)=>n=>{const s=this.props,a=s.onRest,r=s.onDestroyed;this.mounted&&(r&&r(e),this.setState(e=>{return{deleted:e.deleted.filter(e=>e.key!==t)}}),a&&a(e,i,n))}),this.state={first:!0,transitions:[],current:{},deleted:[],prevProps:e}}static getDerivedStateFromProps(e,t){let i=t.first,n=t.prevProps,r=s(t,["first","prevProps"]),o=Oe(e),l=o.items,d=o.keys,c=o.initial,h=o.from,p=o.enter,u=o.leave,f=o.update,m=o.trail,g=void 0===m?0:m,y=o.unique,v=o.config,b=Oe(n),k=b.keys,w=b.items,x=a({},r.current),S=[...r.deleted],A=Object.keys(x),P=new Set(A),V=new Set(d),E=d.filter(e=>!P.has(e)),j=r.transitions.filter(e=>!e.destroyed&&!V.has(e.originalKey)).map(e=>e.originalKey),C=d.filter(e=>P.has(e)),F=0;E.forEach(e=>{y&&S.find(t=>t.originalKey===e)&&(S=S.filter(t=>t.originalKey!==e));const t=d.indexOf(e),n=l[t];x[e]={state:"enter",originalKey:e,key:y?String(e):Fe++,item:n,trail:F+=g,config:ae(v,n,"enter"),from:ae(i&&void 0!==c?c||{}:h,n),to:ae(p,n)}}),j.forEach(e=>{const t=k.indexOf(e),i=w[t];S.push(a({},x[e],{state:"leave",destroyed:!0,left:k[Math.max(0,t-1)],right:k[Math.min(k.length,t+1)],trail:F+=g,config:ae(v,i,"leave"),to:ae(u,i)})),delete x[e]}),C.forEach(e=>{const t=d.indexOf(e),i=l[t];x[e]=a({},x[e],{item:i,state:"update",trail:F+=g,config:ae(v,i,"update"),to:ae(f,i)})});let O=d.map(e=>x[e]);return S.forEach(e=>{let t,i=e.left,n=e.right,a=s(e,["left","right"]);-1!==(t=O.findIndex(e=>e.originalKey===i))&&(t+=1),-1===t&&(t=O.findIndex(e=>e.originalKey===n)),-1===t&&(t=S.findIndex(e=>e.originalKey===i)),-1===t&&(t=S.findIndex(e=>e.originalKey===n)),t=Math.max(0,t),O=[...O.slice(0,t),a,...O.slice(t)]}),{first:i&&0===E.length,transitions:O,current:x,deleted:S,prevProps:e}}render(){const e=this.props,t=(e.initial,e.from,e.enter,e.leave,e.update,e.onDestroyed,e.keys,e.items,e.onFrame),i=e.onRest,n=e.onStart,o=(e.trail,e.config,e.children),l=(e.unique,e.reset),d=s(e,["initial","from","enter","leave","update","onDestroyed","keys","items","onFrame","onRest","onStart","trail","config","children","unique","reset"]);return this.state.transitions.map((e,s)=>{let c=e.state,h=e.key,p=e.item,u=e.from,f=e.to,m=e.trail,g=e.config,y=e.destroyed;return r.createElement(Ce,a({reset:l&&"enter"===c,primitive:Ve,state:c,filter:oe,states:{[c]:f},key:h,onRest:y?this.destroyItem(p,h,c):i&&(e=>i(p,c,e)),onStart:n&&(()=>n(p,c)),onFrame:t&&(e=>t(p,c,e)),delay:m,config:g},d,{from:u,children:e=>{const t=o(p,c,s);return t?t(e):null}}))})}}Re.defaultProps={keys:e=>e,unique:!1,reset:!1};const Te=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].reduce((e,t)=>(e[t]=Ae(t),e),Ae);t.Spring=Ve,t.Keyframes=Ce,t.Transition=Re,t.Trail=Ee,t.Controller=xe,t.config=Pe,t.animated=Te,t.interpolate=((e,t,i)=>e&&new Z(e,t,i)),t.Globals=S},dw1l:function(e,t,i){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}i.r(t),i.d(t,"default",function(){return n})},ofEh:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){var e=i("6SVQ");return{page:e.default||e}}])}},[["ofEh",1,0]]]);