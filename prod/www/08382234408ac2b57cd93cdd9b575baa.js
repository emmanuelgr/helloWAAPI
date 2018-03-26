// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

!function(a,b){var c={},d={},e={};!function(a,b){function c(a){if("number"==typeof a)return a;var b={};for(var c in a)b[c]=a[c];return b}function d(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=x}function e(){return a.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function f(b,c,e){var f=new d;return c&&(f.fill="both",f.duration="auto"),"number"!=typeof b||isNaN(b)?void 0!==b&&Object.getOwnPropertyNames(b).forEach(function(c){if("auto"!=b[c]){if(("number"==typeof f[c]||"duration"==c)&&("number"!=typeof b[c]||isNaN(b[c])))return;if("fill"==c&&-1==v.indexOf(b[c]))return;if("direction"==c&&-1==w.indexOf(b[c]))return;if("playbackRate"==c&&1!==b[c]&&a.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;f[c]=b[c]}}):f.duration=b,f}function g(a){return"number"==typeof a&&(a=isNaN(a)?{duration:0}:{duration:a}),a}function h(b,c){return b=a.numericTimingToObject(b),f(b,c)}function i(a,b,c,d){return a<0||a>1||c<0||c>1?x:function(e){function f(a,b,c){return 3*a*(1-c)*(1-c)*c+3*b*(1-c)*c*c+c*c*c}if(e<=0){var g=0;return a>0?g=b/a:!b&&c>0&&(g=d/c),g*e}if(e>=1){var h=0;return c<1?h=(d-1)/(c-1):1==c&&a<1&&(h=(b-1)/(a-1)),1+h*(e-1)}for(var i=0,j=1;i<j;){var k=(i+j)/2,l=f(a,c,k);if(Math.abs(e-l)<1e-5)return f(b,d,k);l<e?i=k:j=k}return f(b,d,k)}}function j(a,b){return function(c){if(c>=1)return 1;var d=1/a;return(c+=b*d)-c%d}}function k(a){C||(C=document.createElement("div").style),C.animationTimingFunction="",C.animationTimingFunction=a;var b=C.animationTimingFunction;if(""==b&&e())throw new TypeError(a+" is not a valid value for easing");return b}function l(a){if("linear"==a)return x;var b=E.exec(a);if(b)return i.apply(this,b.slice(1).map(Number));var c=F.exec(a);return c?j(Number(c[1]),{start:y,middle:z,end:A}[c[2]]):B[a]||x}function m(a){return Math.abs(n(a)/a.playbackRate)}function n(a){return 0===a.duration||0===a.iterations?0:a.duration*a.iterations}function o(a,b,c){if(null==b)return G;var d=c.delay+a+c.endDelay;return b<Math.min(c.delay,d)?H:b>=Math.min(c.delay+a,d)?I:J}function p(a,b,c,d,e){switch(d){case H:return"backwards"==b||"both"==b?0:null;case J:return c-e;case I:return"forwards"==b||"both"==b?a:null;case G:return null}}function q(a,b,c,d,e){var f=e;return 0===a?b!==H&&(f+=c):f+=d/a,f}function r(a,b,c,d,e,f){var g=a===1/0?b%1:a%1;return 0!==g||c!==I||0===d||0===e&&0!==f||(g=1),g}function s(a,b,c,d){return a===I&&b===1/0?1/0:1===c?Math.floor(d)-1:Math.floor(d)}function t(a,b,c){var d=a;if("normal"!==a&&"reverse"!==a){var e=b;"alternate-reverse"===a&&(e+=1),d="normal",e!==1/0&&e%2!=0&&(d="reverse")}return"normal"===d?c:1-c}function u(a,b,c){var d=o(a,b,c),e=p(a,c.fill,b,d,c.delay);if(null===e)return null;var f=q(c.duration,d,c.iterations,e,c.iterationStart),g=r(f,c.iterationStart,d,c.iterations,e,c.duration),h=s(d,c.iterations,g,f),i=t(c.direction,h,g);return c._easingFunction(i)}var v="backwards|forwards|both|none".split("|"),w="reverse|alternate|alternate-reverse".split("|"),x=function(a){return a};d.prototype={_setMember:function(b,c){this["_"+b]=c,this._effect&&(this._effect._timingInput[b]=c,this._effect._timing=a.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=a.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(a){this._setMember("delay",a)},get delay(){return this._delay},set endDelay(a){this._setMember("endDelay",a)},get endDelay(){return this._endDelay},set fill(a){this._setMember("fill",a)},get fill(){return this._fill},set iterationStart(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterationStart must be a non-negative number, received: "+timing.iterationStart);this._setMember("iterationStart",a)},get iterationStart(){return this._iterationStart},set duration(a){if("auto"!=a&&(isNaN(a)||a<0)&&e())throw new TypeError("duration must be non-negative or auto, received: "+a);this._setMember("duration",a)},get duration(){return this._duration},set direction(a){this._setMember("direction",a)},get direction(){return this._direction},set easing(a){this._easingFunction=l(k(a)),this._setMember("easing",a)},get easing(){return this._easing},set iterations(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterations must be non-negative, received: "+a);this._setMember("iterations",a)},get iterations(){return this._iterations}};var y=1,z=.5,A=0,B={ease:i(.25,.1,.25,1),"ease-in":i(.42,0,1,1),"ease-out":i(0,0,.58,1),"ease-in-out":i(.42,0,.58,1),"step-start":j(1,y),"step-middle":j(1,z),"step-end":j(1,A)},C=null,D="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",E=new RegExp("cubic-bezier\\("+D+","+D+","+D+","+D+"\\)"),F=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,G=0,H=1,I=2,J=3;a.cloneTimingInput=c,a.makeTiming=f,a.numericTimingToObject=g,a.normalizeTimingInput=h,a.calculateActiveDuration=m,a.calculateIterationProgress=u,a.calculatePhase=o,a.normalizeEasing=k,a.parseEasingFunction=l}(c),function(a,b){function c(a,b){return a in k?k[a][b]||b:b}function d(a){return"display"===a||0===a.lastIndexOf("animation",0)||0===a.lastIndexOf("transition",0)}function e(a,b,e){if(!d(a)){var f=h[a];if(f){i.style[a]=b;for(var g in f){var j=f[g],k=i.style[j];e[j]=c(j,k)}}else e[a]=c(a,b)}}function f(a){var b=[];for(var c in a)if(!(c in["easing","offset","composite"])){var d=a[c];Array.isArray(d)||(d=[d]);for(var e,f=d.length,g=0;g<f;g++)e={},e.offset="offset"in a?a.offset:1==f?1:g/(f-1),"easing"in a&&(e.easing=a.easing),"composite"in a&&(e.composite=a.composite),e[c]=d[g],b.push(e)}return b.sort(function(a,b){return a.offset-b.offset}),b}function g(b){function c(){var a=d.length;null==d[a-1].offset&&(d[a-1].offset=1),a>1&&null==d[0].offset&&(d[0].offset=0);for(var b=0,c=d[0].offset,e=1;e<a;e++){var f=d[e].offset;if(null!=f){for(var g=1;g<e-b;g++)d[b+g].offset=c+(f-c)*g/(e-b);b=e,c=f}}}if(null==b)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||(b=f(b));for(var d=b.map(function(b){var c={};for(var d in b){var f=b[d];if("offset"==d){if(null!=f){if(f=Number(f),!isFinite(f))throw new TypeError("Keyframe offsets must be numbers.");if(f<0||f>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==d){if("add"==f||"accumulate"==f)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=f)throw new TypeError("Invalid composite mode "+f+".")}else f="easing"==d?a.normalizeEasing(f):""+f;e(d,f,c)}return void 0==c.offset&&(c.offset=null),void 0==c.easing&&(c.easing="linear"),c}),g=!0,h=-1/0,i=0;i<d.length;i++){var j=d[i].offset;if(null!=j){if(j<h)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");h=j}else g=!1}return d=d.filter(function(a){return a.offset>=0&&a.offset<=1}),g||c(),d}var h={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),j={thin:"1px",medium:"3px",thick:"5px"},k={borderBottomWidth:j,borderLeftWidth:j,borderRightWidth:j,borderTopWidth:j,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:j,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};a.convertToArrayForm=f,a.normalizeKeyframes=g}(c),function(a){var b={};a.isDeprecated=function(a,c,d,e){var f=e?"are":"is",g=new Date,h=new Date(c);return h.setMonth(h.getMonth()+3),!(g<h&&(a in b||console.warn("Web Animations: "+a+" "+f+" deprecated and will stop working on "+h.toDateString()+". "+d),b[a]=!0,1))},a.deprecated=function(b,c,d,e){var f=e?"are":"is";if(a.isDeprecated(b,c,d,e))throw new Error(b+" "+f+" no longer supported. "+d)}}(c),function(){if(document.documentElement.animate){var a=document.documentElement.animate([],0),b=!0;if(a&&(b=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(c){void 0===a[c]&&(b=!0)})),!b)return}!function(a,b,c){function d(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])if("offset"!=d&&"easing"!=d&&"composite"!=d){var e={offset:a[c].offset,easing:a[c].easing,value:a[c][d]};b[d]=b[d]||[],b[d].push(e)}for(var f in b){var g=b[f];if(0!=g[0].offset||1!=g[g.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return b}function e(c){var d=[];for(var e in c)for(var f=c[e],g=0;g<f.length-1;g++){var h=g,i=g+1,j=f[h].offset,k=f[i].offset,l=j,m=k;0==g&&(l=-1/0,0==k&&(i=h)),g==f.length-2&&(m=1/0,1==j&&(h=i)),d.push({applyFrom:l,applyTo:m,startOffset:f[h].offset,endOffset:f[i].offset,easingFunction:a.parseEasingFunction(f[h].easing),property:e,interpolation:b.propertyInterpolation(e,f[h].value,f[i].value)})}return d.sort(function(a,b){return a.startOffset-b.startOffset}),d}b.convertEffectInput=function(c){var f=a.normalizeKeyframes(c),g=d(f),h=e(g);return function(a,c){if(null!=c)h.filter(function(a){return c>=a.applyFrom&&c<a.applyTo}).forEach(function(d){var e=c-d.startOffset,f=d.endOffset-d.startOffset,g=0==f?0:d.easingFunction(e/f);b.apply(a,d.property,d.interpolation(g))});else for(var d in g)"offset"!=d&&"easing"!=d&&"composite"!=d&&b.clear(a,d)}}}(c,d),function(a,b,c){function d(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a,b,c){h[c]=h[c]||[],h[c].push([a,b])}function f(a,b,c){for(var f=0;f<c.length;f++){e(a,b,d(c[f]))}}function g(c,e,f){var g=c;/-/.test(c)&&!a.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(g=d(c)),"initial"!=e&&"initial"!=f||("initial"==e&&(e=i[g]),"initial"==f&&(f=i[g]));for(var j=e==f?[]:h[g],k=0;j&&k<j.length;k++){var l=j[k][0](e),m=j[k][0](f);if(void 0!==l&&void 0!==m){var n=j[k][1](l,m);if(n){var o=b.Interpolation.apply(null,n);return function(a){return 0==a?e:1==a?f:o(a)}}}}return b.Interpolation(!1,!0,function(a){return a?f:e})}var h={};b.addPropertiesHandler=f;var i={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};b.propertyInterpolation=g}(c,d),function(a,b,c){function d(b){var c=a.calculateActiveDuration(b),d=function(d){return a.calculateIterationProgress(c,d,b)};return d._totalDuration=b.delay+c+b.endDelay,d}b.KeyframeEffect=function(c,e,f,g){var h,i=d(a.normalizeTimingInput(f)),j=b.convertEffectInput(e),k=function(){j(c,h)};return k._update=function(a){return null!==(h=i(a))},k._clear=function(){j(c,null)},k._hasSameTarget=function(a){return c===a},k._target=c,k._totalDuration=i._totalDuration,k._id=g,k}}(c,d),function(a,b){function c(a,b){return!(!b.namespaceURI||-1==b.namespaceURI.indexOf("/svg"))&&(g in a||(a[g]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(a.navigator.userAgent)),a[g])}function d(a,b,c){c.enumerable=!0,c.configurable=!0,Object.defineProperty(a,b,c)}function e(a){this._element=a,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=a.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=c(window,a),this._savedTransformAttr=null;for(var b=0;b<this._style.length;b++){var d=this._style[b];this._surrogateStyle[d]=this._style[d]}this._updateIndices()}function f(a){if(!a._webAnimationsPatchedStyle){var b=new e(a);try{d(a,"style",{get:function(){return b}})}catch(b){a.style._set=function(b,c){a.style[b]=c},a.style._clear=function(b){a.style[b]=""}}a._webAnimationsPatchedStyle=a.style}}var g="_webAnimationsUpdateSvgTransformAttr",h={cssText:1,length:1,parentRule:1},i={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},j={removeProperty:1,setProperty:1};e.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(a){for(var b={},c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;this._surrogateStyle.cssText=a,this._updateIndices();for(var c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;for(var d in b)this._isAnimatedProperty[d]||this._style.setProperty(d,this._surrogateStyle.getPropertyValue(d))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(a){return function(){return this._surrogateStyle[a]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(b,c){this._style[b]=c,this._isAnimatedProperty[b]=!0,this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",a.transformToSvgMatrix(c)))},_clear:function(b){this._style[b]=this._surrogateStyle[b],this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[b]}};for(var k in i)e.prototype[k]=function(a,b){return function(){var c=this._surrogateStyle[a].apply(this._surrogateStyle,arguments);return b&&(this._isAnimatedProperty[arguments[0]]||this._style[a].apply(this._style,arguments),this._updateIndices()),c}}(k,k in j);for(var l in document.documentElement.style)l in h||l in i||function(a){d(e.prototype,a,{get:function(){return this._surrogateStyle[a]},set:function(b){this._surrogateStyle[a]=b,this._updateIndices(),this._isAnimatedProperty[a]||(this._style[a]=b)}})}(l);a.apply=function(b,c,d){f(b),b.style._set(a.propertyName(c),d)},a.clear=function(b,c){b._webAnimationsPatchedStyle&&b.style._clear(a.propertyName(c))}}(d),function(a){window.Element.prototype.animate=function(b,c){var d="";return c&&c.id&&(d=c.id),a.timeline._play(a.KeyframeEffect(this,b,c,d))}}(d),function(a,b){function c(a,b,d){if("number"==typeof a&&"number"==typeof b)return a*(1-d)+b*d;if("boolean"==typeof a&&"boolean"==typeof b)return d<.5?a:b;if(a.length==b.length){for(var e=[],f=0;f<a.length;f++)e.push(c(a[f],b[f],d));return e}throw"Mismatched interpolation arguments "+a+":"+b}a.Interpolation=function(a,b,d){return function(e){return d(c(a,b,e))}}}(d),function(a,b){function c(a,b,c){return Math.max(Math.min(a,c),b)}function d(b,d,e){var f=a.dot(b,d);f=c(f,-1,1);var g=[];if(1===f)g=b;else for(var h=Math.acos(f),i=1*Math.sin(e*h)/Math.sqrt(1-f*f),j=0;j<4;j++)g.push(b[j]*(Math.cos(e*h)-f*i)+d[j]*i);return g}var e=function(){function a(a,b){for(var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d=0;d<4;d++)for(var e=0;e<4;e++)for(var f=0;f<4;f++)c[d][e]+=b[d][f]*a[f][e];return c}function b(a){return 0==a[0][2]&&0==a[0][3]&&0==a[1][2]&&0==a[1][3]&&0==a[2][0]&&0==a[2][1]&&1==a[2][2]&&0==a[2][3]&&0==a[3][2]&&1==a[3][3]}function c(c,d,e,f,g){for(var h=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],i=0;i<4;i++)h[i][3]=g[i];for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[3][i]+=c[j]*h[j][i];var k=f[0],l=f[1],m=f[2],n=f[3],o=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];o[0][0]=1-2*(l*l+m*m),o[0][1]=2*(k*l-m*n),o[0][2]=2*(k*m+l*n),o[1][0]=2*(k*l+m*n),o[1][1]=1-2*(k*k+m*m),o[1][2]=2*(l*m-k*n),o[2][0]=2*(k*m-l*n),o[2][1]=2*(l*m+k*n),o[2][2]=1-2*(k*k+l*l),h=a(h,o);var p=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];e[2]&&(p[2][1]=e[2],h=a(h,p)),e[1]&&(p[2][1]=0,p[2][0]=e[0],h=a(h,p)),e[0]&&(p[2][0]=0,p[1][0]=e[0],h=a(h,p));for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[i][j]*=d[i];return b(h)?[h[0][0],h[0][1],h[1][0],h[1][1],h[3][0],h[3][1]]:h[0].concat(h[1],h[2],h[3])}return c}();a.composeMatrix=e,a.quat=d}(d),function(a,b,c){a.sequenceNumber=0;var d=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};b.Animation=function(b){this.id="",b&&b._id&&(this.id=b._id),this._sequenceNumber=a.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=b,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},b.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,b.timeline._animations.push(this))},_tickCurrentTime:function(a,b){a!=this._currentTime&&(this._currentTime=a,this._isFinished&&!b&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(a){a=+a,isNaN(a)||(b.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-a/this._playbackRate),this._currentTimePending=!1,this._currentTime!=a&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(a,!0),b.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(a){a=+a,isNaN(a)||this._paused||this._idle||(this._startTime=a,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),b.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(a){if(a!=this._playbackRate){var c=this.currentTime;this._playbackRate=a,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)),null!=c&&(this.currentTime=c)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,b.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._isFinished=!0,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),b.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(a,b){"function"==typeof b&&"finish"==a&&this._finishHandlers.push(b)},removeEventListener:function(a,b){if("finish"==a){var c=this._finishHandlers.indexOf(b);c>=0&&this._finishHandlers.splice(c,1)}},_fireEvents:function(a){if(this._isFinished){if(!this._finishedFlag){var b=new d(this,this._currentTime,a),c=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){c.forEach(function(a){a.call(b.target,b)})},0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(a,b){this._idle||this._paused||(null==this._startTime?b&&(this.startTime=a-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((a-this._startTime)*this.playbackRate)),b&&(this._currentTimePending=!1,this._fireEvents(a))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var a=this._effect._target;return a._activeAnimations||(a._activeAnimations=[]),a._activeAnimations},_markTarget:function(){var a=this._targetAnimations();-1===a.indexOf(this)&&a.push(this)},_unmarkTarget:function(){var a=this._targetAnimations(),b=a.indexOf(this);-1!==b&&a.splice(b,1)}}}(c,d),function(a,b,c){function d(a){var b=j;j=[],a<q.currentTime&&(a=q.currentTime),q._animations.sort(e),q._animations=h(a,!0,q._animations)[0],b.forEach(function(b){b[1](a)}),g(),l=void 0}function e(a,b){return a._sequenceNumber-b._sequenceNumber}function f(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function g(){o.forEach(function(a){a()}),o.length=0}function h(a,c,d){p=!0,n=!1,b.timeline.currentTime=a,m=!1;var e=[],f=[],g=[],h=[];return d.forEach(function(b){b._tick(a,c),b._inEffect?(f.push(b._effect),b._markTarget()):(e.push(b._effect),b._unmarkTarget()),b._needsTick&&(m=!0);var d=b._inEffect||b._needsTick;b._inTimeline=d,d?g.push(b):h.push(b)}),o.push.apply(o,e),o.push.apply(o,f),m&&requestAnimationFrame(function(){}),p=!1,[g,h]}var i=window.requestAnimationFrame,j=[],k=0;window.requestAnimationFrame=function(a){var b=k++;return 0==j.length&&i(d),j.push([b,a]),b},window.cancelAnimationFrame=function(a){j.forEach(function(b){b[0]==a&&(b[1]=function(){})})},f.prototype={_play:function(c){c._timing=a.normalizeTimingInput(c.timing);var d=new b.Animation(c);return d._idle=!1,d._timeline=this,this._animations.push(d),b.restart(),b.applyDirtiedAnimation(d),d}};var l=void 0,m=!1,n=!1;b.restart=function(){return m||(m=!0,requestAnimationFrame(function(){}),n=!0),n},b.applyDirtiedAnimation=function(a){if(!p){a._markTarget();var c=a._targetAnimations();c.sort(e),h(b.timeline.currentTime,!1,c.slice())[1].forEach(function(a){var b=q._animations.indexOf(a);-1!==b&&q._animations.splice(b,1)}),g()}};var o=[],p=!1,q=new f;b.timeline=q}(c,d),function(a,b){function c(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*b[d];return c}function d(a,b){return[a[0]*b[0]+a[4]*b[1]+a[8]*b[2]+a[12]*b[3],a[1]*b[0]+a[5]*b[1]+a[9]*b[2]+a[13]*b[3],a[2]*b[0]+a[6]*b[1]+a[10]*b[2]+a[14]*b[3],a[3]*b[0]+a[7]*b[1]+a[11]*b[2]+a[15]*b[3],a[0]*b[4]+a[4]*b[5]+a[8]*b[6]+a[12]*b[7],a[1]*b[4]+a[5]*b[5]+a[9]*b[6]+a[13]*b[7],a[2]*b[4]+a[6]*b[5]+a[10]*b[6]+a[14]*b[7],a[3]*b[4]+a[7]*b[5]+a[11]*b[6]+a[15]*b[7],a[0]*b[8]+a[4]*b[9]+a[8]*b[10]+a[12]*b[11],a[1]*b[8]+a[5]*b[9]+a[9]*b[10]+a[13]*b[11],a[2]*b[8]+a[6]*b[9]+a[10]*b[10]+a[14]*b[11],a[3]*b[8]+a[7]*b[9]+a[11]*b[10]+a[15]*b[11],a[0]*b[12]+a[4]*b[13]+a[8]*b[14]+a[12]*b[15],a[1]*b[12]+a[5]*b[13]+a[9]*b[14]+a[13]*b[15],a[2]*b[12]+a[6]*b[13]+a[10]*b[14]+a[14]*b[15],a[3]*b[12]+a[7]*b[13]+a[11]*b[14]+a[15]*b[15]]}function e(a){var b=a.rad||0;return((a.deg||0)/360+(a.grad||0)/400+(a.turn||0))*(2*Math.PI)+b}function f(a){switch(a.t){case"rotatex":var b=e(a.d[0]);return[1,0,0,0,0,Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1];case"rotatey":var b=e(a.d[0]);return[Math.cos(b),0,-Math.sin(b),0,0,1,0,0,Math.sin(b),0,Math.cos(b),0,0,0,0,1];case"rotate":case"rotatez":var b=e(a.d[0]);return[Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var c=a.d[0],d=a.d[1],f=a.d[2],b=e(a.d[3]),g=c*c+d*d+f*f;if(0===g)c=1,d=0,f=0;else if(1!==g){var h=Math.sqrt(g);c/=h,d/=h,f/=h}var i=Math.sin(b/2),j=i*Math.cos(b/2),k=i*i;return[1-2*(d*d+f*f)*k,2*(c*d*k+f*j),2*(c*f*k-d*j),0,2*(c*d*k-f*j),1-2*(c*c+f*f)*k,2*(d*f*k+c*j),0,2*(c*f*k+d*j),2*(d*f*k-c*j),1-2*(c*c+d*d)*k,0,0,0,0,1];case"scale":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[a.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,a.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,a.d[0],0,0,0,0,1];case"scale3d":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,a.d[2],0,0,0,0,1];case"skew":var l=e(a.d[0]),m=e(a.d[1]);return[1,Math.tan(m),0,0,Math.tan(l),1,0,0,0,0,1,0,0,0,0,1];case"skewx":var b=e(a.d[0]);return[1,0,0,0,Math.tan(b),1,0,0,0,0,1,0,0,0,0,1];case"skewy":var b=e(a.d[0]);return[1,Math.tan(b),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":var c=a.d[0].px||0,d=a.d[1].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,0,1];case"translatex":var c=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,0,0,1];case"translatey":var d=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,d,0,1];case"translatez":var f=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,f,1];case"translate3d":var c=a.d[0].px||0,d=a.d[1].px||0,f=a.d[2].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,f,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,a.d[0].px?-1/a.d[0].px:0,0,0,0,1];case"matrix":return[a.d[0],a.d[1],0,0,a.d[2],a.d[3],0,0,0,0,1,0,a.d[4],a.d[5],0,1];case"matrix3d":return a.d}}function g(a){return 0===a.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:a.map(f).reduce(d)}function h(a){return[i(g(a))]}var i=function(){function a(a){return a[0][0]*a[1][1]*a[2][2]+a[1][0]*a[2][1]*a[0][2]+a[2][0]*a[0][1]*a[1][2]-a[0][2]*a[1][1]*a[2][0]-a[1][2]*a[2][1]*a[0][0]-a[2][2]*a[0][1]*a[1][0]}function b(b){for(var c=1/a(b),d=b[0][0],e=b[0][1],f=b[0][2],g=b[1][0],h=b[1][1],i=b[1][2],j=b[2][0],k=b[2][1],l=b[2][2],m=[[(h*l-i*k)*c,(f*k-e*l)*c,(e*i-f*h)*c,0],[(i*j-g*l)*c,(d*l-f*j)*c,(f*g-d*i)*c,0],[(g*k-h*j)*c,(j*e-d*k)*c,(d*h-e*g)*c,0]],n=[],o=0;o<3;o++){for(var p=0,q=0;q<3;q++)p+=b[3][q]*m[q][o];n.push(p)}return n.push(1),m.push(n),m}function d(a){return[[a[0][0],a[1][0],a[2][0],a[3][0]],[a[0][1],a[1][1],a[2][1],a[3][1]],[a[0][2],a[1][2],a[2][2],a[3][2]],[a[0][3],a[1][3],a[2][3],a[3][3]]]}function e(a,b){for(var c=[],d=0;d<4;d++){for(var e=0,f=0;f<4;f++)e+=a[f]*b[f][d];c.push(e)}return c}function f(a){var b=g(a);return[a[0]/b,a[1]/b,a[2]/b]}function g(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}function h(a,b,c,d){return[c*a[0]+d*b[0],c*a[1]+d*b[1],c*a[2]+d*b[2]]}function i(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function j(j){var k=[j.slice(0,4),j.slice(4,8),j.slice(8,12),j.slice(12,16)];if(1!==k[3][3])return null;for(var l=[],m=0;m<4;m++)l.push(k[m].slice());for(var m=0;m<3;m++)l[m][3]=0;if(0===a(l))return null;var n,o=[];k[0][3]||k[1][3]||k[2][3]?(o.push(k[0][3]),o.push(k[1][3]),o.push(k[2][3]),o.push(k[3][3]),n=e(o,d(b(l)))):n=[0,0,0,1];var p=k[3].slice(0,3),q=[];q.push(k[0].slice(0,3));var r=[];r.push(g(q[0])),q[0]=f(q[0]);var s=[];q.push(k[1].slice(0,3)),s.push(c(q[0],q[1])),q[1]=h(q[1],q[0],1,-s[0]),r.push(g(q[1])),q[1]=f(q[1]),s[0]/=r[1],q.push(k[2].slice(0,3)),s.push(c(q[0],q[2])),q[2]=h(q[2],q[0],1,-s[1]),s.push(c(q[1],q[2])),q[2]=h(q[2],q[1],1,-s[2]),r.push(g(q[2])),q[2]=f(q[2]),s[1]/=r[2],s[2]/=r[2];var t=i(q[1],q[2]);if(c(q[0],t)<0)for(var m=0;m<3;m++)r[m]*=-1,q[m][0]*=-1,q[m][1]*=-1,q[m][2]*=-1;var u,v,w=q[0][0]+q[1][1]+q[2][2]+1;return w>1e-4?(u=.5/Math.sqrt(w),v=[(q[2][1]-q[1][2])*u,(q[0][2]-q[2][0])*u,(q[1][0]-q[0][1])*u,.25/u]):q[0][0]>q[1][1]&&q[0][0]>q[2][2]?(u=2*Math.sqrt(1+q[0][0]-q[1][1]-q[2][2]),v=[.25*u,(q[0][1]+q[1][0])/u,(q[0][2]+q[2][0])/u,(q[2][1]-q[1][2])/u]):q[1][1]>q[2][2]?(u=2*Math.sqrt(1+q[1][1]-q[0][0]-q[2][2]),v=[(q[0][1]+q[1][0])/u,.25*u,(q[1][2]+q[2][1])/u,(q[0][2]-q[2][0])/u]):(u=2*Math.sqrt(1+q[2][2]-q[0][0]-q[1][1]),v=[(q[0][2]+q[2][0])/u,(q[1][2]+q[2][1])/u,.25*u,(q[1][0]-q[0][1])/u]),[p,r,s,v,n]}return j}();a.dot=c,a.makeMatrixDecomposition=h,a.transformListToMatrix=g}(d),function(a){function b(a,b){var c=a.exec(b);if(c)return c=a.ignoreCase?c[0].toLowerCase():c[0],[c,b.substr(c.length)]}function c(a,b){b=b.replace(/^\s*/,"");var c=a(b);if(c)return[c[0],c[1].replace(/^\s*/,"")]}function d(a,d,e){a=c.bind(null,a);for(var f=[];;){var g=a(e);if(!g)return[f,e];if(f.push(g[0]),e=g[1],!(g=b(d,e))||""==g[1])return[f,e];e=g[1]}}function e(a,b){for(var c=0,d=0;d<b.length&&(!/\s|,/.test(b[d])||0!=c);d++)if("("==b[d])c++;else if(")"==b[d]&&(c--,0==c&&d++,c<=0))break;var e=a(b.substr(0,d));return void 0==e?void 0:[e,b.substr(d)]}function f(a,b){for(var c=a,d=b;c&&d;)c>d?c%=d:d%=c;return c=a*b/(c+d)}function g(a){return function(b){var c=a(b);return c&&(c[0]=void 0),c}}function h(a,b){return function(c){return a(c)||[b,c]}}function i(b,c){for(var d=[],e=0;e<b.length;e++){var f=a.consumeTrimmed(b[e],c);if(!f||""==f[0])return;void 0!==f[0]&&d.push(f[0]),c=f[1]}if(""==c)return d}function j(a,b,c,d,e){for(var g=[],h=[],i=[],j=f(d.length,e.length),k=0;k<j;k++){var l=b(d[k%d.length],e[k%e.length]);if(!l)return;g.push(l[0]),h.push(l[1]),i.push(l[2])}return[g,h,function(b){var d=b.map(function(a,b){return i[b](a)}).join(c);return a?a(d):d}]}function k(a,b,c){for(var d=[],e=[],f=[],g=0,h=0;h<c.length;h++)if("function"==typeof c[h]){var i=c[h](a[g],b[g++]);d.push(i[0]),e.push(i[1]),f.push(i[2])}else!function(a){d.push(!1),e.push(!1),f.push(function(){return c[a]})}(h);return[d,e,function(a){for(var b="",c=0;c<a.length;c++)b+=f[c](a[c]);return b}]}a.consumeToken=b,a.consumeTrimmed=c,a.consumeRepeated=d,a.consumeParenthesised=e,a.ignore=g,a.optional=h,a.consumeList=i,a.mergeNestedRepeated=j.bind(null,null),a.mergeWrappedNestedRepeated=j,a.mergeList=k}(d),function(a){function b(b){function c(b){var c=a.consumeToken(/^inset/i,b);if(c)return d.inset=!0,c;var c=a.consumeLengthOrPercent(b);if(c)return d.lengths.push(c[0]),c;var c=a.consumeColor(b);return c?(d.color=c[0],c):void 0}var d={inset:!1,lengths:[],color:null},e=a.consumeRepeated(c,/^/,b);if(e&&e[0].length)return[d,e[1]]}function c(c){var d=a.consumeRepeated(b,/^,/,c);if(d&&""==d[1])return d[0]}function d(b,c){for(;b.lengths.length<Math.max(b.lengths.length,c.lengths.length);)b.lengths.push({px:0});for(;c.lengths.length<Math.max(b.lengths.length,c.lengths.length);)c.lengths.push({px:0});if(b.inset==c.inset&&!!b.color==!!c.color){for(var d,e=[],f=[[],0],g=[[],0],h=0;h<b.lengths.length;h++){var i=a.mergeDimensions(b.lengths[h],c.lengths[h],2==h);f[0].push(i[0]),g[0].push(i[1]),e.push(i[2])}if(b.color&&c.color){var j=a.mergeColors(b.color,c.color);f[1]=j[0],g[1]=j[1],d=j[2]}return[f,g,function(a){for(var c=b.inset?"inset ":" ",f=0;f<e.length;f++)c+=e[f](a[0][f])+" ";return d&&(c+=d(a[1])),c}]}}function e(b,c,d,e){function f(a){return{inset:a,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var g=[],h=[],i=0;i<d.length||i<e.length;i++){var j=d[i]||f(e[i].inset),k=e[i]||f(d[i].inset);g.push(j),h.push(k)}return a.mergeNestedRepeated(b,c,g,h)}var f=e.bind(null,d,", ");a.addPropertiesHandler(c,f,["box-shadow","text-shadow"])}(d),function(a,b){function c(a){return a.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function d(a,b,c){return Math.min(b,Math.max(a,c))}function e(a){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a))return Number(a)}function f(a,b){return[a,b,c]}function g(a,b){if(0!=a)return i(0,1/0)(a,b)}function h(a,b){return[a,b,function(a){return Math.round(d(1,1/0,a))}]}function i(a,b){return function(e,f){return[e,f,function(e){return c(d(a,b,e))}]}}function j(a){var b=a.trim().split(/\s*[\s,]\s*/);if(0!==b.length){for(var c=[],d=0;d<b.length;d++){var f=e(b[d]);if(void 0===f)return;c.push(f)}return c}}function k(a,b){if(a.length==b.length)return[a,b,function(a){return a.map(c).join(" ")}]}function l(a,b){return[a,b,Math.round]}a.clamp=d,a.addPropertiesHandler(j,k,["stroke-dasharray"]),a.addPropertiesHandler(e,i(0,1/0),["border-image-width","line-height"]),a.addPropertiesHandler(e,i(0,1),["opacity","shape-image-threshold"]),a.addPropertiesHandler(e,g,["flex-grow","flex-shrink"]),a.addPropertiesHandler(e,h,["orphans","widows"]),a.addPropertiesHandler(e,l,["z-index"]),a.parseNumber=e,a.parseNumberList=j,a.mergeNumbers=f,a.numberToString=c}(d),function(a,b){function c(a,b){if("visible"==a||"visible"==b)return[0,1,function(c){return c<=0?a:c>=1?b:"visible"}]}a.addPropertiesHandler(String,c,["visibility"])}(d),function(a,b){function c(a){a=a.trim(),f.fillStyle="#000",f.fillStyle=a;var b=f.fillStyle;if(f.fillStyle="#fff",f.fillStyle=a,b==f.fillStyle){f.fillRect(0,0,1,1);var c=f.getImageData(0,0,1,1).data;f.clearRect(0,0,1,1);var d=c[3]/255;return[c[0]*d,c[1]*d,c[2]*d,d]}}function d(b,c){return[b,c,function(b){function c(a){return Math.max(0,Math.min(255,a))}if(b[3])for(var d=0;d<3;d++)b[d]=Math.round(c(b[d]/b[3]));return b[3]=a.numberToString(a.clamp(0,1,b[3])),"rgba("+b.join(",")+")"}]}var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=e.height=1;var f=e.getContext("2d");a.addPropertiesHandler(c,d,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),a.consumeColor=a.consumeParenthesised.bind(null,c),a.mergeColors=d}(d),function(a,b){function c(a){function b(){var b=h.exec(a);g=b?b[0]:void 0}function c(){var a=Number(g);return b(),a}function d(){if("("!==g)return c();b();var a=f();return")"!==g?NaN:(b(),a)}function e(){for(var a=d();"*"===g||"/"===g;){var c=g;b();var e=d();"*"===c?a*=e:a/=e}return a}function f(){for(var a=e();"+"===g||"-"===g;){var c=g;b();var d=e();"+"===c?a+=d:a-=d}return a}var g,h=/([\+\-\w\.]+|[\(\)\*\/])/g;return b(),f()}function d(a,b){if("0"==(b=b.trim().toLowerCase())&&"px".search(a)>=0)return{px:0};if(/^[^(]*$|^calc/.test(b)){b=b.replace(/calc\(/g,"(");var d={};b=b.replace(a,function(a){return d[a]=null,"U"+a});for(var e="U("+a.source+")",f=b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+e,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),g=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],h=0;h<g.length;)g[h].test(f)?(f=f.replace(g[h],"$1"),h=0):h++;if("D"==f){for(var i in d){var j=c(b.replace(new RegExp("U"+i,"g"),"").replace(new RegExp(e,"g"),"*0"));if(!isFinite(j))return;d[i]=j}return d}}}function e(a,b){return f(a,b,!0)}function f(b,c,d){var e,f=[];for(e in b)f.push(e);for(e in c)f.indexOf(e)<0&&f.push(e);return b=f.map(function(a){return b[a]||0}),c=f.map(function(a){return c[a]||0}),[b,c,function(b){var c=b.map(function(c,e){return 1==b.length&&d&&(c=Math.max(c,0)),a.numberToString(c)+f[e]}).join(" + ");return b.length>1?"calc("+c+")":c}]}var g="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",h=d.bind(null,new RegExp(g,"g")),i=d.bind(null,new RegExp(g+"|%","g")),j=d.bind(null,/deg|rad|grad|turn/g);a.parseLength=h,a.parseLengthOrPercent=i,a.consumeLengthOrPercent=a.consumeParenthesised.bind(null,i),a.parseAngle=j,a.mergeDimensions=f;var k=a.consumeParenthesised.bind(null,h),l=a.consumeRepeated.bind(void 0,k,/^/),m=a.consumeRepeated.bind(void 0,l,/^,/);a.consumeSizePairList=m;var n=function(a){var b=m(a);if(b&&""==b[1])return b[0]},o=a.mergeNestedRepeated.bind(void 0,e," "),p=a.mergeNestedRepeated.bind(void 0,o,",");a.mergeNonNegativeSizePair=o,a.addPropertiesHandler(n,p,["background-size"]),a.addPropertiesHandler(i,e,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),a.addPropertiesHandler(i,f,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(d),function(a,b){function c(b){return a.consumeLengthOrPercent(b)||a.consumeToken(/^auto/,b)}function d(b){var d=a.consumeList([a.ignore(a.consumeToken.bind(null,/^rect/)),a.ignore(a.consumeToken.bind(null,/^\(/)),a.consumeRepeated.bind(null,c,/^,/),a.ignore(a.consumeToken.bind(null,/^\)/))],b);if(d&&4==d[0].length)return d[0]}function e(b,c){return"auto"==b||"auto"==c?[!0,!1,function(d){var e=d?b:c;if("auto"==e)return"auto";var f=a.mergeDimensions(e,e);return f[2](f[0])}]:a.mergeDimensions(b,c)}function f(a){return"rect("+a+")"}var g=a.mergeWrappedNestedRepeated.bind(null,f,e,", ");a.parseBox=d,a.mergeBoxes=g,a.addPropertiesHandler(d,g,["clip"])}(d),function(a,b){function c(a){return function(b){var c=0;return a.map(function(a){return a===k?b[c++]:a})}}function d(a){return a}function e(b){if("none"==(b=b.toLowerCase().trim()))return[];for(var c,d=/\s*(\w+)\(([^)]*)\)/g,e=[],f=0;c=d.exec(b);){if(c.index!=f)return;f=c.index+c[0].length;var g=c[1],h=n[g];if(!h)return;var i=c[2].split(","),j=h[0];if(j.length<i.length)return;for(var k=[],o=0;o<j.length;o++){var p,q=i[o],r=j[o];if(void 0===(p=q?{A:function(b){return"0"==b.trim()?m:a.parseAngle(b)},N:a.parseNumber,T:a.parseLengthOrPercent,L:a.parseLength}[r.toUpperCase()](q):{a:m,n:k[0],t:l}[r]))return;k.push(p)}if(e.push({t:g,d:k}),d.lastIndex==b.length)return e}}function f(a){return a.toFixed(6).replace(".000000","")}function g(b,c){if(b.decompositionPair!==c){b.decompositionPair=c;var d=a.makeMatrixDecomposition(b)}if(c.decompositionPair!==b){c.decompositionPair=b;var e=a.makeMatrixDecomposition(c)}return null==d[0]||null==e[0]?[[!1],[!0],function(a){return a?c[0].d:b[0].d}]:(d[0].push(0),e[0].push(1),[d,e,function(b){var c=a.quat(d[0][3],e[0][3],b[5]);return a.composeMatrix(b[0],b[1],b[2],c,b[4]).map(f).join(",")}])}function h(a){return a.replace(/[xy]/,"")}function i(a){return a.replace(/(x|y|z|3d)?$/,"3d")}function j(b,c){var d=a.makeMatrixDecomposition&&!0,e=!1;if(!b.length||!c.length){b.length||(e=!0,b=c,c=[]);for(var f=0;f<b.length;f++){var j=b[f].t,k=b[f].d,l="scale"==j.substr(0,5)?1:0;c.push({t:j,d:k.map(function(a){if("number"==typeof a)return l;var b={};for(var c in a)b[c]=l;return b})})}}var m=function(a,b){return"perspective"==a&&"perspective"==b||("matrix"==a||"matrix3d"==a)&&("matrix"==b||"matrix3d"==b)},o=[],p=[],q=[];if(b.length!=c.length){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]]}else for(var f=0;f<b.length;f++){var j,s=b[f].t,t=c[f].t,u=b[f].d,v=c[f].d,w=n[s],x=n[t];if(m(s,t)){if(!d)return;var r=g([b[f]],[c[f]]);o.push(r[0]),p.push(r[1]),q.push(["matrix",[r[2]]])}else{if(s==t)j=s;else if(w[2]&&x[2]&&h(s)==h(t))j=h(s),u=w[2](u),v=x[2](v);else{if(!w[1]||!x[1]||i(s)!=i(t)){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];break}j=i(s),u=w[1](u),v=x[1](v)}for(var y=[],z=[],A=[],B=0;B<u.length;B++){var C="number"==typeof u[B]?a.mergeNumbers:a.mergeDimensions,r=C(u[B],v[B]);y[B]=r[0],z[B]=r[1],A.push(r[2])}o.push(y),p.push(z),q.push([j,A])}}if(e){var D=o;o=p,p=D}return[o,p,function(a){return a.map(function(a,b){var c=a.map(function(a,c){return q[b][1][c](a)}).join(",");return"matrix"==q[b][0]&&16==c.split(",").length&&(q[b][0]="matrix3d"),q[b][0]+"("+c+")"}).join(" ")}]}var k=null,l={px:0},m={deg:0},n={matrix:["NNNNNN",[k,k,0,0,k,k,0,0,0,0,1,0,k,k,0,1],d],matrix3d:["NNNNNNNNNNNNNNNN",d],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",c([k,k,1]),d],scalex:["N",c([k,1,1]),c([k,1])],scaley:["N",c([1,k,1]),c([1,k])],scalez:["N",c([1,1,k])],scale3d:["NNN",d],skew:["Aa",null,d],skewx:["A",null,c([k,m])],skewy:["A",null,c([m,k])],translate:["Tt",c([k,k,l]),d],translatex:["T",c([k,l,l]),c([k,l])],translatey:["T",c([l,k,l]),c([l,k])],translatez:["L",c([l,l,k])],translate3d:["TTL",d]};a.addPropertiesHandler(e,j,["transform"]),a.transformToSvgMatrix=function(b){var c=a.transformListToMatrix(e(b));return"matrix("+f(c[0])+" "+f(c[1])+" "+f(c[4])+" "+f(c[5])+" "+f(c[12])+" "+f(c[13])+")"}}(d),function(a){function b(a){var b=Number(a);if(!(isNaN(b)||b<100||b>900||b%100!=0))return b}function c(b){return b=100*Math.round(b/100),b=a.clamp(100,900,b),400===b?"normal":700===b?"bold":String(b)}function d(a,b){return[a,b,c]}a.addPropertiesHandler(b,d,["font-weight"])}(d),function(a){function b(a){var b={};for(var c in a)b[c]=-a[c];return b}function c(b){return a.consumeToken(/^(left|center|right|top|bottom)\b/i,b)||a.consumeLengthOrPercent(b)}function d(b,d){var e=a.consumeRepeated(c,/^/,d);if(e&&""==e[1]){var f=e[0];if(f[0]=f[0]||"center",f[1]=f[1]||"center",3==b&&(f[2]=f[2]||{px:0}),f.length==b){if(/top|bottom/.test(f[0])||/left|right/.test(f[1])){var h=f[0];f[0]=f[1],f[1]=h}if(/left|right|center|Object/.test(f[0])&&/top|bottom|center|Object/.test(f[1]))return f.map(function(a){return"object"==typeof a?a:g[a]})}}}function e(d){var e=a.consumeRepeated(c,/^/,d);if(e){for(var f=e[0],h=[{"%":50},{"%":50}],i=0,j=!1,k=0;k<f.length;k++){var l=f[k];"string"==typeof l?(j=/bottom|right/.test(l),i={left:0,right:0,center:i,top:1,bottom:1}[l],h[i]=g[l],"center"==l&&i++):(j&&(l=b(l),l["%"]=(l["%"]||0)+100),h[i]=l,i++,j=!1)}return[h,e[1]]}}function f(b){var c=a.consumeRepeated(e,/^,/,b);if(c&&""==c[1])return c[0]}var g={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},h=a.mergeNestedRepeated.bind(null,a.mergeDimensions," ");a.addPropertiesHandler(d.bind(null,3),h,["transform-origin"]),a.addPropertiesHandler(d.bind(null,2),h,["perspective-origin"]),a.consumePosition=e,a.mergeOffsetList=h;var i=a.mergeNestedRepeated.bind(null,h,", ");a.addPropertiesHandler(f,i,["background-position","object-position"])}(d),function(a){function b(b){var c=a.consumeToken(/^circle/,b);if(c&&c[0])return["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),d,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],c[1]));var f=a.consumeToken(/^ellipse/,b);if(f&&f[0])return["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),e,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],f[1]));var g=a.consumeToken(/^polygon/,b);return g&&g[0]?["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),a.optional(a.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),a.consumeSizePairList,a.ignore(a.consumeToken.bind(void 0,/^\)/))],g[1])):void 0}function c(b,c){if(b[0]===c[0])return"circle"==b[0]?a.mergeList(b.slice(1),c.slice(1),["circle(",a.mergeDimensions," at ",a.mergeOffsetList,")"]):"ellipse"==b[0]?a.mergeList(b.slice(1),c.slice(1),["ellipse(",a.mergeNonNegativeSizePair," at ",a.mergeOffsetList,")"]):"polygon"==b[0]&&b[1]==c[1]?a.mergeList(b.slice(2),c.slice(2),["polygon(",b[1],g,")"]):void 0}var d=a.consumeParenthesised.bind(null,a.parseLengthOrPercent),e=a.consumeRepeated.bind(void 0,d,/^/),f=a.mergeNestedRepeated.bind(void 0,a.mergeDimensions," "),g=a.mergeNestedRepeated.bind(void 0,f,",");a.addPropertiesHandler(b,c,["shape-outside"])}(d),function(a,b){function c(a,b){b.concat([a]).forEach(function(b){b in document.documentElement.style&&(d[a]=b),e[b]=a})}var d={},e={};c("transform",["webkitTransform","msTransform"]),c("transformOrigin",["webkitTransformOrigin"]),c("perspective",["webkitPerspective"]),c("perspectiveOrigin",["webkitPerspectiveOrigin"]),a.propertyName=function(a){return d[a]||a},a.unprefixedPropertyName=function(a){return e[a]||a}}(d)}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){var a;if(window.performance&&performance.now)var a=function(){return performance.now()};else var a=function(){return Date.now()};var b=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},c=window.Element.prototype.animate;window.Element.prototype.animate=function(d,e){var f=c.call(this,d,e);f._cancelHandlers=[],f.oncancel=null;var g=f.cancel;f.cancel=function(){g.call(this);var c=new b(this,null,a()),d=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){d.forEach(function(a){a.call(c.target,c)})},0)};var h=f.addEventListener;f.addEventListener=function(a,b){"function"==typeof b&&"cancel"==a?this._cancelHandlers.push(b):h.call(this,a,b)};var i=f.removeEventListener;return f.removeEventListener=function(a,b){if("cancel"==a){var c=this._cancelHandlers.indexOf(b);c>=0&&this._cancelHandlers.splice(c,1)}else i.call(this,a,b)},f}}}(),function(a){var b=document.documentElement,c=null,d=!1;try{var e=getComputedStyle(b).getPropertyValue("opacity"),f="0"==e?"1":"0";c=b.animate({opacity:[f,f]},{duration:1}),c.currentTime=0,d=getComputedStyle(b).getPropertyValue("opacity")==f}catch(a){}finally{c&&c.cancel()}if(!d){var g=window.Element.prototype.animate;window.Element.prototype.animate=function(b,c){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||null===b||(b=a.convertToArrayForm(b)),g.call(this,b,c)}}}(c),function(a,b,c){function d(a){var c=b.timeline;c.currentTime=a,c._discardAnimations(),0==c._animations.length?f=!1:requestAnimationFrame(d)}var e=window.requestAnimationFrame;window.requestAnimationFrame=function(a){return e(function(c){b.timeline._updateAnimationsPromises(),a(c),b.timeline._updateAnimationsPromises()})},b.AnimationTimeline=function(){this._animations=[],this.currentTime=void 0},b.AnimationTimeline.prototype={getAnimations:function(){return this._discardAnimations(),this._animations.slice()},_updateAnimationsPromises:function(){b.animationsWithPromises=b.animationsWithPromises.filter(function(a){return a._updatePromises()})},_discardAnimations:function(){this._updateAnimationsPromises(),this._animations=this._animations.filter(function(a){return"finished"!=a.playState&&"idle"!=a.playState})},_play:function(a){var c=new b.Animation(a,this);return this._animations.push(c),b.restartWebAnimationsNextTick(),c._updatePromises(),c._animation.play(),c._updatePromises(),c},play:function(a){return a&&a.remove(),this._play(a)}};var f=!1;b.restartWebAnimationsNextTick=function(){f||(f=!0,requestAnimationFrame(d))};var g=new b.AnimationTimeline;b.timeline=g;try{Object.defineProperty(window.document,"timeline",{configurable:!0,get:function(){return g}})}catch(a){}try{window.document.timeline=g}catch(a){}}(0,e),function(a,b,c){b.animationsWithPromises=[],b.Animation=function(b,c){if(this.id="",b&&b._id&&(this.id=b._id),this.effect=b,b&&(b._animation=this),!c)throw new Error("Animation with null timeline is not supported");this._timeline=c,this._sequenceNumber=a.sequenceNumber++,this._holdTime=0,this._paused=!1,this._isGroup=!1,this._animation=null,this._childAnimations=[],this._callback=null,this._oldPlayState="idle",this._rebuildUnderlyingAnimation(),this._animation.cancel(),this._updatePromises()},b.Animation.prototype={_updatePromises:function(){var a=this._oldPlayState,b=this.playState;return this._readyPromise&&b!==a&&("idle"==b?(this._rejectReadyPromise(),this._readyPromise=void 0):"pending"==a?this._resolveReadyPromise():"pending"==b&&(this._readyPromise=void 0)),this._finishedPromise&&b!==a&&("idle"==b?(this._rejectFinishedPromise(),this._finishedPromise=void 0):"finished"==b?this._resolveFinishedPromise():"finished"==a&&(this._finishedPromise=void 0)),this._oldPlayState=this.playState,this._readyPromise||this._finishedPromise},_rebuildUnderlyingAnimation:function(){this._updatePromises();var a,c,d,e,f=!!this._animation;f&&(a=this.playbackRate,c=this._paused,d=this.startTime,e=this.currentTime,this._animation.cancel(),this._animation._wrapper=null,this._animation=null),(!this.effect||this.effect instanceof window.KeyframeEffect)&&(this._animation=b.newUnderlyingAnimationForKeyframeEffect(this.effect),b.bindAnimationForKeyframeEffect(this)),(this.effect instanceof window.SequenceEffect||this.effect instanceof window.GroupEffect)&&(this._animation=b.newUnderlyingAnimationForGroup(this.effect),b.bindAnimationForGroup(this)),this.effect&&this.effect._onsample&&b.bindAnimationForCustomEffect(this),f&&(1!=a&&(this.playbackRate=a),null!==d?this.startTime=d:null!==e?this.currentTime=e:null!==this._holdTime&&(this.currentTime=this._holdTime),c&&this.pause()),this._updatePromises()},_updateChildren:function(){if(this.effect&&"idle"!=this.playState){var a=this.effect._timing.delay;this._childAnimations.forEach(function(c){this._arrangeChildren(c,a),this.effect instanceof window.SequenceEffect&&(a+=b.groupChildDuration(c.effect))}.bind(this))}},_setExternalAnimation:function(a){if(this.effect&&this._isGroup)for(var b=0;b<this.effect.children.length;b++)this.effect.children[b]._animation=a,this._childAnimations[b]._setExternalAnimation(a)},_constructChildAnimations:function(){if(this.effect&&this._isGroup){var a=this.effect._timing.delay;this._removeChildAnimations(),this.effect.children.forEach(function(c){var d=b.timeline._play(c);this._childAnimations.push(d),d.playbackRate=this.playbackRate,this._paused&&d.pause(),c._animation=this.effect._animation,this._arrangeChildren(d,a),this.effect instanceof window.SequenceEffect&&(a+=b.groupChildDuration(c))}.bind(this))}},_arrangeChildren:function(a,b){null===this.startTime?a.currentTime=this.currentTime-b/this.playbackRate:a.startTime!==this.startTime+b/this.playbackRate&&(a.startTime=this.startTime+b/this.playbackRate)},get timeline(){return this._timeline},get playState(){return this._animation?this._animation.playState:"idle"},get finished(){return window.Promise?(this._finishedPromise||(-1==b.animationsWithPromises.indexOf(this)&&b.animationsWithPromises.push(this),this._finishedPromise=new Promise(function(a,b){this._resolveFinishedPromise=function(){a(this)},this._rejectFinishedPromise=function(){b({type:DOMException.ABORT_ERR,name:"AbortError"})}}.bind(this)),"finished"==this.playState&&this._resolveFinishedPromise()),this._finishedPromise):(console.warn("Animation Promises require JavaScript Promise constructor"),null)},get ready(){return window.Promise?(this._readyPromise||(-1==b.animationsWithPromises.indexOf(this)&&b.animationsWithPromises.push(this),this._readyPromise=new Promise(function(a,b){this._resolveReadyPromise=function(){a(this)},this._rejectReadyPromise=function(){b({type:DOMException.ABORT_ERR,name:"AbortError"})}}.bind(this)),"pending"!==this.playState&&this._resolveReadyPromise()),this._readyPromise):(console.warn("Animation Promises require JavaScript Promise constructor"),null)},get onfinish(){return this._animation.onfinish},set onfinish(a){this._animation.onfinish="function"==typeof a?function(b){b.target=this,a.call(this,b)}.bind(this):a},get oncancel(){return this._animation.oncancel},set oncancel(a){this._animation.oncancel="function"==typeof a?function(b){b.target=this,a.call(this,b)}.bind(this):a},get currentTime(){this._updatePromises();var a=this._animation.currentTime;return this._updatePromises(),a},set currentTime(a){this._updatePromises(),this._animation.currentTime=isFinite(a)?a:Math.sign(a)*Number.MAX_VALUE,this._register(),this._forEachChild(function(b,c){b.currentTime=a-c}),this._updatePromises()},get startTime(){return this._animation.startTime},set startTime(a){this._updatePromises(),this._animation.startTime=isFinite(a)?a:Math.sign(a)*Number.MAX_VALUE,this._register(),this._forEachChild(function(b,c){b.startTime=a+c}),this._updatePromises()},get playbackRate(){return this._animation.playbackRate},set playbackRate(a){this._updatePromises();var b=this.currentTime;this._animation.playbackRate=a,this._forEachChild(function(b){b.playbackRate=a}),null!==b&&(this.currentTime=b),this._updatePromises()},play:function(){this._updatePromises(),this._paused=!1,this._animation.play(),-1==this._timeline._animations.indexOf(this)&&this._timeline._animations.push(this),this._register(),b.awaitStartTime(this),this._forEachChild(function(a){var b=a.currentTime;a.play(),a.currentTime=b}),this._updatePromises()},pause:function(){this._updatePromises(),this.currentTime&&(this._holdTime=this.currentTime),this._animation.pause(),this._register(),this._forEachChild(function(a){a.pause()}),this._paused=!0,this._updatePromises()},finish:function(){this._updatePromises(),this._animation.finish(),this._register(),this._updatePromises()},cancel:function(){this._updatePromises(),this._animation.cancel(),this._register(),this._removeChildAnimations(),this._updatePromises()},reverse:function(){this._updatePromises();var a=this.currentTime;this._animation.reverse(),this._forEachChild(function(a){a.reverse()}),null!==a&&(this.currentTime=a),this._updatePromises()},addEventListener:function(a,b){var c=b;"function"==typeof b&&(c=function(a){a.target=this,b.call(this,a)}.bind(this),b._wrapper=c),this._animation.addEventListener(a,c)},removeEventListener:function(a,b){this._animation.removeEventListener(a,b&&b._wrapper||b)},_removeChildAnimations:function(){for(;this._childAnimations.length;)this._childAnimations.pop().cancel()},_forEachChild:function(b){var c=0;if(this.effect.children&&this._childAnimations.length<this.effect.children.length&&this._constructChildAnimations(),this._childAnimations.forEach(function(a){b.call(this,a,c),this.effect instanceof window.SequenceEffect&&(c+=a.effect.activeDuration)}.bind(this)),"pending"!=this.playState){var d=this.effect._timing,e=this.currentTime;null!==e&&(e=a.calculateIterationProgress(a.calculateActiveDuration(d),e,d)),(null==e||isNaN(e))&&this._removeChildAnimations()}}},window.Animation=b.Animation}(c,e),function(a,b,c){function d(b){this._frames=a.normalizeKeyframes(b)}function e(){for(var a=!1;i.length;)i.shift()._updateChildren(),a=!0;return a}var f=function(a){if(a._animation=void 0,a instanceof window.SequenceEffect||a instanceof window.GroupEffect)for(var b=0;b<a.children.length;b++)f(a.children[b])};b.removeMulti=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];d._parent?(-1==b.indexOf(d._parent)&&b.push(d._parent),d._parent.children.splice(d._parent.children.indexOf(d),1),d._parent=null,f(d)):d._animation&&d._animation.effect==d&&(d._animation.cancel(),d._animation.effect=new KeyframeEffect(null,[]),d._animation._callback&&(d._animation._callback._animation=null),d._animation._rebuildUnderlyingAnimation(),f(d))}for(c=0;c<b.length;c++)b[c]._rebuild()},b.KeyframeEffect=function(b,c,e,f){return this.target=b,this._parent=null,e=a.numericTimingToObject(e),this._timingInput=a.cloneTimingInput(e),this._timing=a.normalizeTimingInput(e),this.timing=a.makeTiming(e,!1,this),this.timing._effect=this,"function"==typeof c?(a.deprecated("Custom KeyframeEffect","2015-06-22","Use KeyframeEffect.onsample instead."),this._normalizedKeyframes=c):this._normalizedKeyframes=new d(c),this._keyframes=c,this.activeDuration=a.calculateActiveDuration(this._timing),this._id=f,this},b.KeyframeEffect.prototype={getFrames:function(){return"function"==typeof this._normalizedKeyframes?this._normalizedKeyframes:this._normalizedKeyframes._frames},set onsample(a){if("function"==typeof this.getFrames())throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");this._onsample=a,this._animation&&this._animation._rebuildUnderlyingAnimation()},get parent(){return this._parent},clone:function(){if("function"==typeof this.getFrames())throw new Error("Cloning custom effects is not supported.");var b=new KeyframeEffect(this.target,[],a.cloneTimingInput(this._timingInput),this._id);return b._normalizedKeyframes=this._normalizedKeyframes,b._keyframes=this._keyframes,b},remove:function(){b.removeMulti([this])}};var g=Element.prototype.animate;Element.prototype.animate=function(a,c){var d="";return c&&c.id&&(d=c.id),b.timeline._play(new b.KeyframeEffect(this,a,c,d))};var h=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.newUnderlyingAnimationForKeyframeEffect=function(a){if(a){var b=a.target||h,c=a._keyframes;"function"==typeof c&&(c=[]);var d=a._timingInput;d.id=a._id}else var b=h,c=[],d=0;return g.apply(b,[c,d])},b.bindAnimationForKeyframeEffect=function(a){a.effect&&"function"==typeof a.effect._normalizedKeyframes&&b.bindAnimationForCustomEffect(a)};var i=[];b.awaitStartTime=function(a){null===a.startTime&&a._isGroup&&(0==i.length&&requestAnimationFrame(e),i.push(a))};var j=window.getComputedStyle;Object.defineProperty(window,"getComputedStyle",{configurable:!0,enumerable:!0,value:function(){b.timeline._updateAnimationsPromises();var a=j.apply(this,arguments);return e()&&(a=j.apply(this,arguments)),b.timeline._updateAnimationsPromises(),a}}),window.KeyframeEffect=b.KeyframeEffect,window.Element.prototype.getAnimations=function(){return document.timeline.getAnimations().filter(function(a){return null!==a.effect&&a.effect.target==this}.bind(this))}}(c,e),function(a,b,c){function d(a){a._registered||(a._registered=!0,g.push(a),h||(h=!0,requestAnimationFrame(e)))}function e(a){var b=g;g=[],b.sort(function(a,b){return a._sequenceNumber-b._sequenceNumber}),b=b.filter(function(a){a();var b=a._animation?a._animation.playState:"idle";return"running"!=b&&"pending"!=b&&(a._registered=!1),a._registered}),g.push.apply(g,b),g.length?(h=!0,requestAnimationFrame(e)):h=!1}var f=(document.createElementNS("http://www.w3.org/1999/xhtml","div"),0);b.bindAnimationForCustomEffect=function(b){var c,e=b.effect.target,g="function"==typeof b.effect.getFrames();c=g?b.effect.getFrames():b.effect._onsample;var h=b.effect.timing,i=null;h=a.normalizeTimingInput(h);var j=function(){var d=j._animation?j._animation.currentTime:null;null!==d&&(d=a.calculateIterationProgress(a.calculateActiveDuration(h),d,h),isNaN(d)&&(d=null)),d!==i&&(g?c(d,e,b.effect):c(d,b.effect,b.effect._animation)),i=d};j._animation=b,j._registered=!1,j._sequenceNumber=f++,b._callback=j,d(j)};var g=[],h=!1;b.Animation.prototype._register=function(){this._callback&&d(this._callback)}}(c,e),function(a,b,c){function d(a){return a._timing.delay+a.activeDuration+a._timing.endDelay}function e(b,c,d){this._id=d,this._parent=null,this.children=b||[],this._reparent(this.children),c=a.numericTimingToObject(c),this._timingInput=a.cloneTimingInput(c),this._timing=a.normalizeTimingInput(c,!0),this.timing=a.makeTiming(c,!0,this),this.timing._effect=this,"auto"===this._timing.duration&&(this._timing.duration=this.activeDuration)}window.SequenceEffect=function(){e.apply(this,arguments)},window.GroupEffect=function(){e.apply(this,arguments)},e.prototype={_isAncestor:function(a){for(var b=this;null!==b;){if(b==a)return!0;b=b._parent}return!1},_rebuild:function(){for(var a=this;a;)"auto"===a.timing.duration&&(a._timing.duration=a.activeDuration),a=a._parent;this._animation&&this._animation._rebuildUnderlyingAnimation()},_reparent:function(a){b.removeMulti(a);for(var c=0;c<a.length;c++)a[c]._parent=this},_putChild:function(a,b){for(var c=b?"Cannot append an ancestor or self":"Cannot prepend an ancestor or self",d=0;d<a.length;d++)if(this._isAncestor(a[d]))throw{type:DOMException.HIERARCHY_REQUEST_ERR,name:"HierarchyRequestError",message:c};for(var d=0;d<a.length;d++)b?this.children.push(a[d]):this.children.unshift(a[d]);this._reparent(a),this._rebuild()},append:function(){this._putChild(arguments,!0)},prepend:function(){this._putChild(arguments,!1)},get parent(){return this._parent},get firstChild(){return this.children.length?this.children[0]:null},get lastChild(){return this.children.length?this.children[this.children.length-1]:null},clone:function(){for(var b=a.cloneTimingInput(this._timingInput),c=[],d=0;d<this.children.length;d++)c.push(this.children[d].clone());return this instanceof GroupEffect?new GroupEffect(c,b):new SequenceEffect(c,b)},remove:function(){b.removeMulti([this])}},window.SequenceEffect.prototype=Object.create(e.prototype),Object.defineProperty(window.SequenceEffect.prototype,"activeDuration",{get:function(){var a=0;return this.children.forEach(function(b){a+=d(b)}),Math.max(a,0)}}),window.GroupEffect.prototype=Object.create(e.prototype),Object.defineProperty(window.GroupEffect.prototype,"activeDuration",{get:function(){var a=0;return this.children.forEach(function(b){a=Math.max(a,d(b))}),a}}),b.newUnderlyingAnimationForGroup=function(c){var d,e=null,f=function(b){var c=d._wrapper;if(c&&"pending"!=c.playState&&c.effect)return null==b?void c._removeChildAnimations():0==b&&c.playbackRate<0&&(e||(e=a.normalizeTimingInput(c.effect.timing)),b=a.calculateIterationProgress(a.calculateActiveDuration(e),-1,e),isNaN(b)||null==b)?(c._forEachChild(function(a){a.currentTime=-1}),void c._removeChildAnimations()):void 0},g=new KeyframeEffect(null,[],c._timing,c._id);return g.onsample=f,d=b.timeline._play(g)},b.bindAnimationForGroup=function(a){a._animation._wrapper=a,a._isGroup=!0,b.awaitStartTime(a),a._constructChildAnimations(),a._setExternalAnimation(a)},b.groupChildDuration=d}(c,e),b.true=a}({},function(){return this}());
//# sourceMappingURL=web-animations-next.min.js.map
},{}],10:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports["default"] = {
    // text: "Hello there! ThisIs Emmanuel`s website, a Software Developer that make sh!t look good!"
    text: ""
};
},{}],11:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var STEPS = function STEPS(stepsAmount) {
    return "steps(" + stepsAmount + ",end)";
};
exports.STEPS = STEPS;
var BEZIER = function BEZIER(pX, pY, ppX, ppY) {
    return "cubic-bezier(" + pX + "," + pY + "," + ppX + "," + ppY + ")";
};
exports.BEZIER = BEZIER;
var s = {
    LINEAR: "linear",
    EASE_OUT: "ease-out",
    EASE_IN: "ease-in",
    EASE_IN_OUT: "ease-in-out",
    EASE_OUT1: "cubic-bezier(0, 0.8, 1, 1)",
    EASE_OUT2: "cubic-bezier(0, 1, 1, 1)",
    EASE_OUT3: "cubic-bezier(0, 1, 0.75, 1)",
    EASE_OUT4: "cubic-bezier(0, 1, 0.5, 1)",
    EASE_OUT5: "cubic-bezier(0, 1, 0.25, 1)",
    EASE_IN1: "cubic-bezier(0.8, 0, 1, 1)",
    EASE_IN2: "cubic-bezier(1, 0, 1, 1)",
    EASE_IN3: "cubic-bezier(1, 0, 1, 0.75)",
    EASE_IN4: "cubic-bezier(1, 0, 1, 0.5)",
    EASE_IN5: "cubic-bezier(1, 0, 1, 0.25)",
    HOLD_1: "cubic-bezier(0, .2, 1, .8)",
    HOLD_2: "cubic-bezier(0, .4, 1, .6)",
    HOLD_3: "cubic-bezier(0, .6, 1, .4)",
    HOLD_4: "cubic-bezier(0, .8, 1, .2)",
    HOLD_5: "cubic-bezier(0, 1, 1, 0)",
    STEPS1: "steps(1,end)",
    STEPS2: "steps(2,end)",
    STEPS3: "steps(3,end)",
    STEPS4: "steps(4,end)",
    STEPS5: "steps(5,end)",
    STEPS6: "steps(6,end)",
    STEPS7: "steps(7,end)",
    STEPS8: "steps(8,end)",
    STEPS9: "steps(9,end)"
};
exports.s = s;
var o = {
    ln: { easing: s.LINEAR },
    ot: { easing: s.EASE_OUT },
    "in": { easing: s.EASE_IN },
    io: { easing: s.EASE_IN_OUT },
    s1: { easing: s.STEPS1 },
    s2: { easing: s.STEPS2 },
    s3: { easing: s.STEPS3 },
    s4: { easing: s.STEPS4 },
    s5: { easing: s.STEPS5 },
    s6: { easing: s.STEPS6 },
    pi: { easing: s.EASE_OUT4 },
    p: { easing: s.HOLD_1 },
    po: { easing: s.EASE_IN4 }
};
exports.o = o;
},{}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  red: {
    W050: '#ffebee',
    W100: '#ffcdd2',
    W200: '#ef9a9a',
    W300: '#e57373',
    W400: '#ef5350',
    W500: '#f44336',
    W600: '#e53935',
    W700: '#d32f2f',
    W800: '#c62828',
    W900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  },
  pink: {
    W050: '#fce4ec',
    W100: '#f8bbd0',
    W200: '#f48fb1',
    W300: '#f06292',
    W400: '#ec407a',
    W500: '#e91e63',
    W600: '#d81b60',
    W700: '#c2185b',
    W800: '#ad1457',
    W900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  },
  purple: {
    W050: '#f3e5f5',
    W100: '#e1bee7',
    W200: '#ce93d8',
    W300: '#ba68c8',
    W400: '#ab47bc',
    W500: '#9c27b0',
    W600: '#8e24aa',
    W700: '#7b1fa2',
    W800: '#6a1b9a',
    W900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  },
  deepPurple: {
    W050: '#ede7f6',
    W100: '#d1c4e9',
    W200: '#b39ddb',
    W300: '#9575cd',
    W400: '#7e57c2',
    W500: '#673ab7',
    W600: '#5e35b1',
    W700: '#512da8',
    W800: '#4527a0',
    W900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea'
  },
  indigo: {
    W050: '#e8eaf6',
    W100: '#c5cae9',
    W200: '#9fa8da',
    W300: '#7986cb',
    W400: '#5c6bc0',
    W500: '#3f51b5',
    W600: '#3949ab',
    W700: '#303f9f',
    W800: '#283593',
    W900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  },
  blue: {
    W050: '#e3f2fd',
    W100: '#bbdefb',
    W200: '#90caf9',
    W300: '#64b5f6',
    W400: '#42a5f5',
    W500: '#2196f3',
    W600: '#1e88e5',
    W700: '#1976d2',
    W800: '#1565c0',
    W900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
    hex: '#2196f3'
  },
  lightBlue: {
    W050: '#e1f5fe',
    W100: '#b3e5fc',
    W200: '#81d4fa',
    W300: '#4fc3f7',
    W400: '#29b6f6',
    W500: '#03a9f4',
    W600: '#039be5',
    W700: '#0288d1',
    W800: '#0277bd',
    W900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  },
  cyan: {
    W050: '#e0f7fa',
    W100: '#b2ebf2',
    W200: '#80deea',
    W300: '#4dd0e1',
    W400: '#26c6da',
    W500: '#00bcd4',
    W600: '#00acc1',
    W700: '#0097a7',
    W800: '#00838f',
    W900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4'

  },
  teal: {
    W050: '#e0f2f1',
    W100: '#b2dfdb',
    W200: '#80cbc4',
    W300: '#4db6ac',
    W400: '#26a69a',
    W500: '#009688',
    W600: '#00897b',
    W700: '#00796b',
    W800: '#00695c',
    W900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5'

  },
  green: {
    W050: '#e8f5e9',
    W100: '#c8e6c9',
    W200: '#a5d6a7',
    W300: '#81c784',
    W400: '#66bb6a',
    W500: '#4caf50',
    W600: '#43a047',
    W700: '#388e3c',
    W800: '#2e7d32',
    W900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'

  },
  lightGreen: {
    W050: '#f1f8e9',
    W100: '#dcedc8',
    W200: '#c5e1a5',
    W300: '#aed581',
    W400: '#9ccc65',
    W500: '#8bc34a',
    W600: '#7cb342',
    W700: '#689f38',
    W800: '#558b2f',
    W900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17'

  },
  lime: {
    W050: '#f9fbe7',
    W100: '#f0f4c3',
    W200: '#e6ee9c',
    W300: '#dce775',
    W400: '#d4e157',
    W500: '#cddc39',
    W600: '#c0ca33',
    W700: '#afb42b',
    W800: '#9e9d24',
    W900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00'

  },
  yellow: {
    W050: '#fffde7',
    W100: '#fff9c4',
    W200: '#fff59d',
    W300: '#fff176',
    W400: '#ffee58',
    W500: '#ffeb3b',
    W600: '#fdd835',
    W700: '#fbc02d',
    W800: '#f9a825',
    W900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600'

  },
  amber: {
    W050: '#fff8e1',
    W100: '#ffecb3',
    W200: '#ffe082',
    W300: '#ffd54f',
    W400: '#ffca28',
    W500: '#ffc107',
    W600: '#ffb300',
    W700: '#ffa000',
    W800: '#ff8f00',
    W900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00'

  },
  orange: {
    W050: '#fff3e0',
    W100: '#ffe0b2',
    W200: '#ffcc80',
    W300: '#ffb74d',
    W400: '#ffa726',
    W500: '#ff9800',
    W600: '#fb8c00',
    W700: '#f57c00',
    W800: '#ef6c00',
    W900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'

  },
  deepOrange: {
    W050: '#fbe9e7',
    W100: '#ffccbc',
    W200: '#ffab91',
    W300: '#ff8a65',
    W400: '#ff7043',
    W500: '#ff5722',
    W600: '#f4511e',
    W700: '#e64a19',
    W800: '#d84315',
    W900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00'

  },
  brown: {
    W050: '#efebe9',
    W100: '#d7ccc8',
    W200: '#bcaaa4',
    W300: '#a1887f',
    W400: '#8d6e63',
    W500: '#795548',
    W600: '#6d4c41',
    W700: '#5d4037',
    W800: '#4e342e',
    W900: '#3e2723'

  },
  grey: {
    W050: '#fafafa',
    W100: '#f5f5f5',
    W200: '#eeeeee',
    W300: '#e0e0e0',
    W400: '#bdbdbd',
    W500: '#9e9e9e',
    W600: '#757575',
    W700: '#616161',
    W800: '#424242',
    W900: '#212121'

  },
  blueGrey: {
    W050: '#eceff1',
    W100: '#cfd8dc',
    W200: '#b0bec5',
    W300: '#90a4ae',
    W400: '#78909c',
    W500: '#607d8b',
    W600: '#546e7a',
    W700: '#455a64',
    W800: '#37474f',
    W900: '#263238'
  },
  black: { W001: '#000000' },
  white: { W001: '#ffffff' }
};
},{}],13:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var data = {
    world: null,
    dim: { w: null, h: null, min: null, max: null },
    player: null
};
var Model = /** @class */function () {
    function Model() {}
    Model.prototype.get = function () {
        return data;
    };
    Model.prototype.setDim = function (w, h) {
        data.dim.w = w;
        data.dim.h = h;
        data.dim.min = Math.min(w, h);
        data.dim.max = Math.max(w, h);
        return this;
    };
    return Model;
}();
exports["default"] = Model;
},{}],14:[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
exports.__esModule = true;
var esz = require("./Ease");
var Motion = /** @class */function () {
    function Motion(element, delay, endDelay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (endDelay === void 0) {
            endDelay = 0;
        }
        this.animationKeyFrames = [];
        this.interpolations = [];
        this.deltaTime = [];
        this.element = element;
        this.delay = delay;
        this.endDelay = endDelay;
        this.tim = {
            delay: this.delay,
            endDelay: this.endDelay,
            fill: "none"
        };
    }
    Motion.prototype.holdPrev = function (holdTime) {
        var i = this.interpolations.length - 1;
        this.animationKeyFrames.push(__assign({}, this.animationKeyFrames[i]));
        this.deltaTime.push(holdTime);
        this.interpolations.push(esz.s.LINEAR);
    };
    Motion.prototype.setFill = function (fill) {
        this.tim.fill = fill;
    };
    Motion.prototype.addKey = function (deltaTime, animationKeyFrame) {
        this.animationKeyFrames.push(__assign({ visibility: 'visible' }, animationKeyFrame));
        this.deltaTime.push(deltaTime);
        this.interpolations.push(esz.s.STEPS6);
    };
    Motion.prototype.setEas = function (interpolation) {
        var i = this.interpolations.length - 1;
        this.interpolations[i] = interpolation;
    };
    Motion.prototype.get = function () {
        var _this = this;
        var totalTime = this.deltaTime.reduce(function (a, b) {
            return a + b;
        });
        var currentTime = 0;
        this.animationKeyFrames.forEach(function (v, index, a) {
            currentTime += _this.deltaTime[index];
            v.offset = currentTime / totalTime;
            v.easing = _this.interpolations[index];
        });
        this.tim.duration = totalTime;
        // console.log(this.animationKeyFrames);
        var kfx = new KeyframeEffect(this.element, this.animationKeyFrames, this.tim);
        return kfx;
    };
    return Motion;
}();
exports["default"] = Motion;
},{"./Ease":11}],35:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Model_1 = require("./Model");
var dim = new Model_1["default"]().get().dim;
var Properties = /** @class */function () {
    function Properties() {
        // offset center to center of container
        this._origin = '';
        this._transforms = '';
        this._offset = "";
        this._opacity = -1;
        this._visable = -1;
    }
    /**Translation on X defaults to vmin as a unit */
    Properties.prototype.TX = function (x, unit) {
        if (x === void 0) {
            x = 0;
        }
        if (unit === void 0) {
            unit = 'vmin';
        }
        this._transforms += "translateX(" + x + unit + ") ";
        return this;
    };
    /**Translation on X defaults to vmin as a unit */
    Properties.prototype.TY = function (y, unit) {
        if (y === void 0) {
            y = 0;
        }
        if (unit === void 0) {
            unit = 'vmin';
        }
        this._transforms += "translateY(" + y + unit + ") ";
        return this;
    };
    /**Translation on X defaults to vmin as a unit */
    Properties.prototype.TZ = function (z, unit) {
        if (z === void 0) {
            z = 0;
        }
        if (unit === void 0) {
            unit = 'vmin';
        }
        this._transforms += "translateZ(" + z + unit + ") ";
        return this;
    };
    /**
     * Translation default unit is vmin
     * @param x defaults to 0
     * @param y  defaults to 0
     * @param z  defaults to 0
     */
    Properties.prototype.T = function (x, y, z, unit) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (z === void 0) {
            z = 0;
        }
        if (unit === void 0) {
            unit = 'vmin';
        }
        this._transforms += " translate3d( " + x + unit + " , " + y + unit + " , " + z + unit + " ) ";
        return this;
    };
    /**Rotation on X defaults to degrees */
    Properties.prototype.RX = function (x, unit) {
        if (x === void 0) {
            x = 0;
        }
        if (unit === void 0) {
            unit = 'deg';
        }
        this._transforms += "rotateX(" + x + unit + ") ";
        return this;
    };
    /**Rotation on Y defaults to degrees */
    Properties.prototype.RY = function (y, unit) {
        if (y === void 0) {
            y = 0;
        }
        if (unit === void 0) {
            unit = 'deg';
        }
        this._transforms += "rotateY(" + y + unit + ") ";
        return this;
    };
    /**Rotation on Z defaults to degrees */
    Properties.prototype.RZ = function (z, unit) {
        if (z === void 0) {
            z = 0;
        }
        if (unit === void 0) {
            unit = 'deg';
        }
        this._transforms += "rotateZ(" + z + unit + ") ";
        return this;
    };
    /**
     * Rotation default to 0,0,0
     * unit is deg
     * @param x default to 0
     * @param y default to 0
     * @param z default to 0
     */
    Properties.prototype.R = function (x, y, z, unit) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (z === void 0) {
            z = 0;
        }
        if (unit === void 0) {
            unit = 'deg';
        }
        this._transforms +=
        // `rotateX( ${x}${unit} ) rotateY( ${y}${unit} ) rotateZ( ${z}${unit} ) `;
        "rotateZ( " + x + unit + " ) rotateY( " + y + unit + " ) rotateX( " + z + unit + " ) ";
        return this;
    };
    Properties.prototype.RV = function (x, y, z, value, unit) {
        if (unit === void 0) {
            unit = 'deg';
        }
        this._transforms +=
        // `rotateX( ${x}${unit} ) rotateY( ${y}${unit} ) rotateZ( ${z}${unit} ) `;
        // `rotateZ( ${x}${unit} ) rotateY( ${y}${unit} ) rotateX( ${z}${unit} ) `;
        "rotate3d( " + x + "," + y + "," + z + "," + value + unit + " ) ";
        return this;
    };
    /**
     * Scale default to 1
     * @param x default to 1
     * @param y default to 1
     * @param z default to 1
     */
    Properties.prototype.SXYZ = function (x, y, z) {
        if (x === void 0) {
            x = 1;
        }
        if (y === void 0) {
            y = 1;
        }
        if (z === void 0) {
            z = 1;
        }
        this._transforms += "scaleX( " + x + " ) scaleY( " + y + " ) scaleZ( " + z + " ) ";
        return this;
    };
    Properties.prototype.S = function (v) {
        if (v === void 0) {
            v = 1;
        }
        this._transforms += "scale3d( " + v + " ," + v + " ," + v + " ) ";
        return this;
    };
    Properties.prototype.SX = function (x) {
        if (x === void 0) {
            x = 0;
        }
        this._transforms += "scaleX(" + x + ") ";
        return this;
    };
    Properties.prototype.SY = function (y) {
        if (y === void 0) {
            y = 0;
        }
        this._transforms += "scaleY(" + y + ") ";
        return this;
    };
    Properties.prototype.SZ = function (z) {
        if (z === void 0) {
            z = 0;
        }
        this._transforms += "scaleZ(" + z + ") ";
        return this;
    };
    /**
     * Offset translation
     * to position the pivot of an element.
     * Uses precentages for x and y as its relative to its own size.
     * Defaults to -50% -50% 0px
     * @param x default to -50%
     * @param y default to -50%
     * @param z default to 0px
     */
    Properties.prototype.F = function (x, y, z) {
        if (x === void 0) {
            x = -50;
        }
        if (y === void 0) {
            y = -50;
        }
        if (z === void 0) {
            z = '0px';
        }
        this._offset = "translate3d( " + x + "%,  " + y + "% , " + z + ") ";
        return this;
    };
    /**
     * Origin Offset middle of viewport
     */
    Properties.prototype.C = function () {
        this._origin = 'translate3d( 50vw, 50vh, 0) ';
        return this;
    };
    /**
     * Opacity value , default to 1
     * @param opacity 0 to 1 defaults to 1
     */
    Properties.prototype.O = function (opacity) {
        if (opacity === void 0) {
            opacity = 1;
        }
        this._opacity = opacity;
        return this;
    };
    /**Switch visability
     * 0 is hidden
     * 1 is vissible default
     */
    Properties.prototype.VIS = function (visability) {
        this._visable = visability;
        return this;
    };
    /**
     * Returns an object with ppopulated
     * fields
     */
    Properties.prototype.get = function () {
        var o = {};
        if (this._offset) {
            this._transforms += this._offset;
        }
        if (this._origin) {
            this._transforms = this._origin + this._transforms;
        }
        if (this._transforms) {
            o["transform"] = this._transforms;
        }
        if (this._opacity >= 0) {
            o["opacity"] = this._opacity;
        }
        if (this._visable >= 0) {
            o["hidden"] = true;
        }
        // console.log(o);
        return o;
    };
    Properties.prototype.SRT = function (tX, tY, tZ, rX, rY, rZ, sX, sY, sZ) {
        if (tX === void 0) {
            tX = 0;
        }
        if (tY === void 0) {
            tY = 0;
        }
        if (tZ === void 0) {
            tZ = 0;
        }
        if (rX === void 0) {
            rX = 0;
        }
        if (rY === void 0) {
            rY = 0;
        }
        if (rZ === void 0) {
            rZ = 0;
        }
        if (sX === void 0) {
            sX = 1;
        }
        if (sY === void 0) {
            sY = 1;
        }
        if (sZ === void 0) {
            sZ = 1;
        }
        this.T(tX, tY, tZ);
        this.R(rX, rY, rZ);
        this.SXYZ(sX, sY, sZ);
        return this;
    };
    return Properties;
}();
exports["default"] = Properties;
},{"./Model":13}],15:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var esz = require("./Ease");
var Model_1 = require("./Model");
var Motion_1 = require("./Motion");
var Properties_1 = require("./Properties");
function default_1() {
    var m = new Model_1["default"]().get();
    console.log(m.world);
    var cam1 = new Motion_1["default"](m.world, 0, 0, false);
    cam1.addKey(0, new Properties_1["default"]().C().T(0, 0, 0).R(0, 0, 0).get());
    cam1.setEas(esz.s.EASE_OUT);
    cam1.addKey(300, new Properties_1["default"]().C().T(0, 10, 0).R(0, -15, 0).get());
    cam1.setEas(esz.s.EASE_IN_OUT);
    cam1.addKey(1000, new Properties_1["default"]().C().T(0, 10, 10).R(8, -20, 9).get());
    cam1.setEas(esz.s.EASE_IN);
    cam1.addKey(222, new Properties_1["default"]().C().T(0, 0, 0).R(0, 0, 0).get());
    var cam2 = new Motion_1["default"](m.world, 0, 0, false);
    cam2.addKey(0, new Properties_1["default"]().C().T(0, 0, 0).R(0, 0, 0).get());
    cam2.setEas(esz.s.EASE_OUT);
    cam2.addKey(300, new Properties_1["default"]().C().T(9, 0, 0).R(0, 10, -11).get());
    cam2.setEas(esz.s.EASE_IN_OUT);
    cam2.addKey(1500, new Properties_1["default"]().C().T(5, 0, 0).R(8, 5, -11).get());
    cam2.setEas(esz.s.EASE_IN);
    cam2.addKey(222, new Properties_1["default"]().C().T(0, 0, 0).R(0, 0, 0).get());
    var cam3 = new Motion_1["default"](m.world, 0, 0, false);
    cam3.addKey(0, new Properties_1["default"]().C().T(0, 0, -10).R(-30, 0, 0).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(666, new Properties_1["default"]().C().T(0, 0, 0).R(5, 0, 0).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(666, new Properties_1["default"]().C().T(0, 0, 0).R(-5, 0, 0).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(999, new Properties_1["default"]().C().T(0, 0, -10).R(0, 0, 0).get());
    return { cam1: cam1, cam2: cam2, cam3: cam3 };
}
exports["default"] = default_1;
},{"./Ease":11,"./Model":13,"./Motion":14,"./Properties":35}],37:[function(require,module,exports) {
"use strict";
// var svgNS = "http://www.w3.org/2000/svg";

exports.__esModule = true;
function default_1(diameter, clr, parentSelector, className) {
    //   var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
    //   myCircle.setAttributeNS(null, "id", "circle");
    //   myCircle.setAttributeNS(null, "cx", `${radius * 2}`);
    //   myCircle.setAttributeNS(null, "cy", `${radius * 2}`);
    //   myCircle.setAttributeNS(null, "r", radius);
    //   myCircle.setAttributeNS(null, "fill", "black");
    //   myCircle.setAttributeNS(null, "stroke", "none");
    //   return myCircle;
    var radius = diameter * 0.5;
    var c = document.createElement("canvas");
    c.classList.add(className);
    c.setAttribute("width", "" + diameter);
    c.setAttribute("height", "" + diameter);
    var cntx = c.getContext("2d");
    cntx.imageSmoothingEnabled = false;
    cntx.beginPath();
    cntx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
    cntx.fillStyle = clr;
    cntx.fill();
    document.querySelector(parentSelector).appendChild(c);
    return c;
}
exports["default"] = default_1;
},{}],19:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
var Circle_1 = require("../geom/Circle");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    //
    var hello = new Motion_1["default"](document.querySelector('#hello'), delay);
    hello.addKey(0, new Properties_1["default"]().C().O(0).T(0, 0, -99).F().get());
    hello.setEas(esz.s.EASE_OUT3);
    hello.addKey(600, new Properties_1["default"]().C().O(1).T(0, 0, 0).F().get());
    hello.holdPrev(555);
    hello.setEas(esz.s.EASE_IN4);
    hello.addKey(555, new Properties_1["default"]().C().O(0).T(0, 0, -99).F().get());
    var there = new Motion_1["default"](document.querySelector('#there'), delay + 444);
    there.addKey(0, new Properties_1["default"]().C().O(0).TZ(-10).TY(5).RX(70).F(-50, 0).get());
    there.setEas(esz.s.EASE_OUT);
    there.addKey(700, new Properties_1["default"]().C().O(1).TZ(10).TY(5).RX(70).F(-50, 0).get());
    there.holdPrev(111);
    there.setEas(esz.s.EASE_IN);
    there.addKey(444, new Properties_1["default"]().C().O(0).TZ(-10).TY(5).RX(70).F(-50, 0).get());
    var circle1 = Circle_1["default"](256, Colors_1["default"].yellow.W700, '#bgs', 'circ');
    circle1.id = 'helloBg';
    var circleMotion1 = new Motion_1["default"](circle1, delay);
    circleMotion1.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    circleMotion1.setEas(esz.s.EASE_OUT4);
    circleMotion1.addKey(888, new Properties_1["default"]().C().S(1.4).F().get());
    // divMotion.addKey(1, new Props().C().S(3).O(0).F().get());
    // divMotion.holdPrev(666);
    // divMotion.addKey(1, new Props().C().S(0).O(0).F().get());
    // const papa = new Motion(document.getElementById('seq1'), delay);
    // papa.addKey(0, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
    // papa.setEas(esz.s.EASE_OUT);
    // papa.addKey(300, new Props().C().T(0, 10, 0).R(0, -15, 0).get());
    // papa.setEas(esz.s.EASE_IN_OUT);
    // papa.addKey(888, new Props().C().T(0, 10, 10).R(8, -20, 9).get());
    // papa.setEas(esz.s.EASE_IN);
    // papa.addKey(222, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
    var g = new GroupEffect([hello.get(), there.get(),
    // papa.get(),
    circleMotion1.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13,"../geom/Circle":37}],38:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Circle_1 = require("../geom/Circle");
function default_1(delay, scale, size, clr1, bgClr) {
    if (delay === void 0) {
        delay = 0;
    }
    if (scale === void 0) {
        scale = 1;
    }
    if (size === void 0) {
        size = 256;
    }
    if (clr1 === void 0) {
        clr1 = '#fff';
    }
    if (bgClr === void 0) {
        bgClr = '#000';
    }
    var circle1 = Circle_1["default"](size, clr1, '#bgs', 'ring');
    var motionCirc1 = new Motion_1["default"](circle1, delay);
    motionCirc1.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    motionCirc1.setEas(esz.s.EASE_OUT1);
    motionCirc1.addKey(666, new Properties_1["default"]().C().S(0.98 * scale).F().get());
    var circle2 = Circle_1["default"](size, bgClr, '#bgs', 'ring');
    var motionCirc2 = new Motion_1["default"](circle2, delay + 50);
    motionCirc2.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    motionCirc2.setEas(esz.s.EASE_OUT1);
    motionCirc2.addKey(666, new Properties_1["default"]().C().S(1 * scale).F().get());
    var g = new GroupEffect([motionCirc1.get(), motionCirc2.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../geom/Circle":37}],18:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
var Circle_1 = require("../geom/Circle");
var Ring_1 = require("./Ring");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var iamPapa = new Motion_1["default"](document.querySelector('#iamPapa'), delay + 666);
    iamPapa.addKey(0, new Properties_1["default"]().C().TX().RY(-360).S(0).get());
    iamPapa.setEas(esz.s.EASE_OUT4);
    iamPapa.addKey(666, new Properties_1["default"]().C().TX().RY(0).S().get());
    iamPapa.holdPrev(666);
    iamPapa.setEas(esz.s.EASE_OUT4);
    iamPapa.addKey(1222, new Properties_1["default"]().C().TX(-38).RY(-90).S(1).get());
    iamPapa.setEas(esz.s.EASE_IN3);
    iamPapa.addKey(666, new Properties_1["default"]().C().TX().RY(-90).S(0).get());
    var iam = new Motion_1["default"](document.querySelector('#iam'), delay + 666);
    iam.addKey(0, new Properties_1["default"]().O(0).T().RY().RX().S(0).F().get());
    iam.setEas(esz.s.EASE_OUT4);
    iam.addKey(500, new Properties_1["default"]().O().T().RY().RX().S().F().get());
    iam.holdPrev(888);
    iam.setEas(esz.s.EASE_OUT4);
    iam.addKey(444, new Properties_1["default"]().O().T().RY().RX(0).S().F(-100, -50).get());
    iam.holdPrev(333);
    var eme = new Motion_1["default"](document.querySelector('#eme'), delay + 2000);
    eme.addKey(0, new Properties_1["default"]().O(0).T(0, 0, 0).R(0, 90, 0).SX(0).F(0, -50).get());
    eme.setEas(esz.s.EASE_OUT3);
    eme.addKey(444, new Properties_1["default"]().O().T(0, 0, 0).R(0, 90, 0).SX(1).F(0, -50).get());
    eme.holdPrev(1444);
    var emmanuelGroupFX = new GroupEffect(Array.from(document.querySelectorAll('#eme > span')).map(function (el, index) {
        var emmanuelAnim = new Motion_1["default"](el, delay + index * 70 + 2222);
        emmanuelAnim.addKey(0, { opacity: 0, transform: "translatez(2vmin) rotateY(-120deg)" });
        emmanuelAnim.setEas(esz.s.LINEAR);
        emmanuelAnim.addKey(333, { opacity: 1, transform: "translatez(5vmin)  rotateY(0deg)" });
        emmanuelAnim.setEas(esz.s.EASE_IN_OUT);
        emmanuelAnim.holdPrev((7 - index) * 70 + 500);
        emmanuelAnim.addKey(333, { opacity: 1, transform: "translatez(5vmin)  rotateY(0deg)" });
        return emmanuelAnim.get();
    }));
    var circle1 = Circle_1["default"](256, Colors_1["default"].grey.W900, '#bgs', 'circ');
    var motionCirc1 = new Motion_1["default"](circle1, delay + 733);
    motionCirc1.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    motionCirc1.setEas(esz.s.EASE_OUT3);
    motionCirc1.addKey(999, new Properties_1["default"]().C().S(1.4).F().get());
    var ring = Ring_1["default"](delay + 2000, 1.3, 256, Colors_1["default"].yellow.W800, Colors_1["default"].grey.W900);
    var ring2 = Ring_1["default"](delay + 2200, 1, 256, Colors_1["default"].yellow.W800, Colors_1["default"].grey.W900);
    var circle2 = Circle_1["default"](256, Colors_1["default"].yellow.W800, '#bgs', 'circ');
    var motionCirc2 = new Motion_1["default"](circle2, delay + 2000);
    motionCirc2.addKey(0, new Properties_1["default"]().C().O(1).S(0).F().get());
    motionCirc2.setEas(esz.s.EASE_OUT3);
    motionCirc2.addKey(666, new Properties_1["default"]().C().O(1).S(0.7).F().get());
    motionCirc2.holdPrev(333);
    motionCirc2.setEas(esz.s.EASE_IN3);
    motionCirc2.addKey(666, new Properties_1["default"]().C().O(1).S(0).F().get());
    var g = new GroupEffect([iamPapa.get(), iam.get(), eme.get(), ring, ring2, emmanuelGroupFX, motionCirc1.get(), motionCirc2.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13,"../geom/Circle":37,"./Ring":38}],21:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var a = new Motion_1["default"](document.querySelector('#a'), delay);
    a.addKey(0, new Properties_1["default"]().C().O(0).TY(10).RX(-180).F().get());
    a.setEas(esz.s.EASE_OUT2);
    a.addKey(666, new Properties_1["default"]().C().O().TY(-10).RX().F().get());
    a.holdPrev(444);
    a.setEas(esz.s.EASE_IN2);
    a.addKey(555, new Properties_1["default"]().C().O(0).TY(30).RX(-90).F().get());
    var soft = new Motion_1["default"](document.querySelector('#software'), delay + 111);
    soft.addKey(0, new Properties_1["default"]().C().O(0).TY(20).RX(-180).F().get());
    soft.setEas(esz.s.EASE_OUT2);
    soft.addKey(666, new Properties_1["default"]().C().O().TY().RX().F().get());
    soft.holdPrev(222);
    soft.setEas(esz.s.EASE_IN2);
    soft.addKey(555, new Properties_1["default"]().C().O(0).TY(40).RX(-90).F().get());
    var dev = new Motion_1["default"](document.querySelector('#dev'), delay + 222);
    dev.addKey(0, new Properties_1["default"]().C().O(0).TY(30).RX(-180).F().get());
    dev.setEas(esz.s.EASE_OUT2);
    dev.addKey(666, new Properties_1["default"]().C().O().TY(10).RX().F().get());
    // dev.holdPrev(111);
    dev.setEas(esz.s.EASE_IN2);
    dev.addKey(555, new Properties_1["default"]().C().O(0).TY(50).RX(-90).F().get());
    var deDiv = document.createElement("div");
    deDiv.id = 'aSoft1';
    deDiv.classList.add('rect');
    document.querySelector('#bgs').appendChild(deDiv);
    deDiv.style.background = Colors_1["default"].yellow.W500;
    var divMotion1 = new Motion_1["default"](deDiv, delay + 0);
    divMotion1.addKey(0, new Properties_1["default"]().C().TY(100).O(0).S(10).F().get());
    divMotion1.addKey(1, new Properties_1["default"]().C().TY(100).O().S(10).F().get());
    divMotion1.setEas(esz.s.EASE_OUT5);
    divMotion1.addKey(1111, new Properties_1["default"]().C().TY(0).O().S(10).F().get());
    divMotion1.holdPrev(333);
    divMotion1.setEas(esz.s.EASE_IN3);
    divMotion1.addKey(555, new Properties_1["default"]().C().TY(100).O().S(10).F().get());
    var deDiv2 = document.createElement("div");
    deDiv2.id = 'aSoft2';
    deDiv2.classList.add('rect');
    document.querySelector('#bgs').appendChild(deDiv2);
    deDiv2.style.background = Colors_1["default"].yellow.W300;
    var divMotion2 = new Motion_1["default"](deDiv2, delay + 100);
    divMotion2.addKey(0, new Properties_1["default"]().C().TY(100).O(0).S(10).F().get());
    divMotion2.addKey(1, new Properties_1["default"]().C().TY(100).O().S(10).F().get());
    divMotion2.setEas(esz.s.EASE_OUT5);
    divMotion2.addKey(1111, new Properties_1["default"]().C().TY(0).O().S(10).F().get());
    divMotion2.holdPrev(111);
    divMotion2.setEas(esz.s.EASE_IN3);
    divMotion2.addKey(555, new Properties_1["default"]().C().TY(100).O().S(10).F().get());
    var deDiv3 = document.createElement("div");
    deDiv3.id = 'aSoft3';
    deDiv3.classList.add('rect');
    document.querySelector('#bgs').appendChild(deDiv3);
    deDiv3.style.background = Colors_1["default"].yellow.W200;
    var divMotion3 = new Motion_1["default"](deDiv3, delay + 200);
    divMotion3.addKey(0, new Properties_1["default"]().C().TY(100).O(0).S(10).F().get());
    divMotion3.addKey(1, new Properties_1["default"]().C().TY(100).O(1).S(10).F().get());
    divMotion3.setEas(esz.s.EASE_OUT5);
    divMotion3.addKey(1111, new Properties_1["default"]().C().TY(0).O(1).S(10).F().get());
    divMotion3.holdPrev(0);
    divMotion3.setEas(esz.s.EASE_IN3);
    divMotion3.addKey(555, new Properties_1["default"]().C().TY(100).O(1).S(10).F().get());
    var g = new GroupEffect([a.get(), soft.get(), dev.get(), divMotion1.get(), divMotion2.get(), divMotion3.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13}],39:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
var colors = [[Colors_1["default"].amber.W300, Colors_1["default"].amber.W500, Colors_1["default"].amber.W700, Colors_1["default"].amber.W900], [Colors_1["default"].green.W300, Colors_1["default"].green.W500, Colors_1["default"].green.W700, Colors_1["default"].green.W900], [Colors_1["default"].red.W300, Colors_1["default"].red.W500, Colors_1["default"].red.W700, Colors_1["default"].red.W900], [Colors_1["default"].pink.W300, Colors_1["default"].pink.W500, Colors_1["default"].pink.W700, Colors_1["default"].pink.W900], [Colors_1["default"].purple.W300, Colors_1["default"].purple.W500, Colors_1["default"].purple.W700, Colors_1["default"].purple.W900]];
function petal(i) {
    var div = document.createElement('div');
    div.classList.add('petal');
    div.style.position = 'absolute';
    div.style.backgroundColor = colors[1][i % colors.length];
    div.style.width = "3vmin";
    div.style.height = "3vmin";
    document.querySelector('#roses').appendChild(div);
    return div;
}
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var petals = [];
    for (var i = 0; i < 18; i++) {
        petals.push(petal(i));
    }
    console.log(petals);
    var emmanuelGroupFX = new GroupEffect(petals.map(function (el, i) {
        var roseAnim = new Motion_1["default"](el, delay + i * 60 + 0);
        roseAnim.addKey(0, new Properties_1["default"]().RZ(i * -40).RX().S(0).F(333, 333).C().get());
        roseAnim.setEas(esz.s.EASE_IN_OUT);
        var rot = 90;
        roseAnim.addKey(2222, new Properties_1["default"]().RZ(i * -40 + rot).RX(70).S(i % 2 ? -3 : -2).F(50, 50).C().get());
        roseAnim.holdPrev(444);
        roseAnim.setEas(esz.s.EASE_IN_OUT);
        rot += 90;
        rot += 90;
        roseAnim.addKey(2222, new Properties_1["default"]().RZ(i * -20 + rot).RX(0).S(i % 3 ? -1 : 1).F(-555, 0).C().get());
        roseAnim.setEas(esz.s.EASE_IN_OUT);
        // rot+=90;
        // rot+=90;
        // roseAnim.addKey( 3333, new Props().RZ(i-40 +rot).RX(0).S( (i%2?-1:1)).F(i*20, (petals.length-1)*20).C().get()  );
        // roseAnim.setEas(esz.s.EASE_IN_OUT);
        // rot+=180;
        rot += 90;
        roseAnim.addKey(2222, new Properties_1["default"]().RZ(i + rot).RX(999).S(0).F().C().get());
        return roseAnim.get();
    }));
    var g = new GroupEffect([emmanuelGroupFX]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13}],20:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var PartsS_1 = require("./PartsS");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var a = new Motion_1["default"](document.querySelector('#ageek'), delay);
    a.addKey(0, new Properties_1["default"]().C().O(0).T(0, 20, 0).F().get());
    a.setEas(esz.s.EASE_OUT3);
    a.addKey(555, new Properties_1["default"]().C().O(1).T(0, 0, 0).F().get());
    a.holdPrev(333);
    a.setEas(esz.s.EASE_IN_OUT);
    a.addKey(333, new Properties_1["default"]().C().O(0).T(0, 20, 0).F().get());
    // const geek = new Motion(document.querySelector('#geek'),delay+ 1100);
    // geek.addKey(0, new Props().C().O(1).TX(120).F().get());
    // geek.setEas(esz.s.STEPS1);
    // geek.addKey(555, new Props().C().O(1).TX(40).F().get());
    // geek.setEas(esz.s.STEPS1);
    // geek.addKey(555, new Props().C().O(1).TX(-40).F().get());
    // geek.setEas(esz.s.STEPS1);
    // geek.addKey(555, new Props().C().O(1).TX(-120).F().get());
    // geek.holdPrev(555)
    // geek.addKey(1, new Props().C().O(0).T().F().get());
    var geekGroupFx = new GroupEffect(Array.from(document.querySelectorAll('.geek')).map(function (el, i) {
        var x = i * 12 - 15;
        var emmanuelAnim = new Motion_1["default"](el, delay + i * 160 + 1100);
        emmanuelAnim.addKey(0, new Properties_1["default"]().C().T(x - 5, 50, 0).RZ(360).F(-50, -100).get());
        emmanuelAnim.setEas(esz.s.EASE_OUT5);
        emmanuelAnim.addKey(666, new Properties_1["default"]().C().T(x, 0, 0).RZ(0).F().get());
        emmanuelAnim.setEas(esz.s.EASE_IN5);
        emmanuelAnim.addKey(666, new Properties_1["default"]().C().T(x + 5, 50, 0).RZ(-180).F().get());
        return emmanuelAnim.get();
    }));
    var by = new Motion_1["default"](document.querySelector('#by'), delay + 3400);
    by.addKey(0, new Properties_1["default"]().C().O(0).T(0, 10, 0).S().F().get());
    by.setEas(esz.s.EASE_OUT);
    by.addKey(555, new Properties_1["default"]().C().O(1).T(0, 0, 0).S().F().get());
    by.holdPrev(888);
    by.setEas(esz.s.EASE_IN2);
    by.addKey(3333, new Properties_1["default"]().C().O(0).T(0, 0, 0).S(0).F().get());
    var nature = new Motion_1["default"](document.querySelector('#nature'), delay + 3600);
    nature.addKey(0, new Properties_1["default"]().C().O(0).T(5, 30, 0).S().F().get());
    nature.setEas(esz.s.EASE_OUT);
    nature.addKey(555, new Properties_1["default"]().C().O(1).T(5, 15, 0).S().F().get());
    nature.holdPrev(888);
    nature.setEas(esz.s.EASE_IN2);
    nature.addKey(3333, new Properties_1["default"]().C().O(0).T(0, 0, 0).S(0).F().get());
    var parts = PartsS_1["default"](delay + 3000);
    var g = new GroupEffect([a.get(),
    // geek.get(),
    geekGroupFx, by.get(), nature.get(), parts]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"./PartsS":39}],36:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Colors_1 = require("./Colors");
var Spinner = /** @class */function () {
    function Spinner(clrIndx, idPrefix, parentSelector, className) {
        // cnvs:HTMLDivElement;
        this.colors = [[Colors_1["default"].amber.W300, Colors_1["default"].amber.W500, Colors_1["default"].amber.W700, Colors_1["default"].amber.W900], [Colors_1["default"].red.W300, Colors_1["default"].red.W500, Colors_1["default"].red.W700, Colors_1["default"].red.W900], [Colors_1["default"].pink.W300, Colors_1["default"].pink.W500, Colors_1["default"].pink.W700, Colors_1["default"].pink.W900], [Colors_1["default"].purple.W300, Colors_1["default"].purple.W500, Colors_1["default"].purple.W700, Colors_1["default"].purple.W900]];
        var w = 9 * 20;
        var h = 8 * 20;
        var size = w + h;
        this.cnvs = document.createElement("canvas");
        this.cnvs.classList.add('spinner');
        this.cnvs.setAttribute('width', "" + size);
        this.cnvs.setAttribute('height', "" + size);
        var cntx = this.cnvs.getContext('2d');
        cntx.imageSmoothingEnabled = false;
        cntx.fillStyle = this.colors[clrIndx % this.colors.length][0];
        cntx.fillRect(0, 0, w, h);
        cntx.fillStyle = this.colors[clrIndx % this.colors.length][1];
        cntx.fillRect(w, 0, h, w);
        cntx.fillStyle = this.colors[clrIndx % this.colors.length][2];
        cntx.fillRect(h, w, w, h);
        cntx.fillStyle = this.colors[clrIndx % this.colors.length][3];
        cntx.fillRect(0, h, h, w);
        // this.cnvs = document.createElement("div");
        // this.cnvs.classList.add('spinner');
        // this.cnvs.style.width =  `${size}px`;
        // this.cnvs.style.height =  `${size}px`;
        // this.cnvs.style.backgroundPositionX = `${clrIndx*-17}px`
        // this.cnvs.style.position ='absolute';
        document.querySelector(parentSelector).appendChild(this.cnvs);
    }
    Spinner.prototype.get = function () {
        return this.cnvs;
    };
    return Spinner;
}();
exports["default"] = Spinner;
},{"./Colors":17}],23:[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
exports.__esModule = true;
var Motion_1 = require("../Motion");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Properties_1 = require("../Properties");
var Spinner_1 = require("../Spinner");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var kfs = [];
    for (var i = 0; i < 7; i++) {
        var mtn = new Motion_1["default"](new Spinner_1["default"](i, "spin" + i, "#spinners", "spinner").get(), delay + 150 * i);
        var s = 140;
        mtn.addKey(0, new Properties_1["default"]().C().S((i + 1) * s).RZ().O(1).F().get());
        mtn.setEas(esz.s.EASE_OUT5);
        mtn.addKey(1711, new Properties_1["default"]().C().S(0).RZ(720).O(1).F().get());
        kfs.push(mtn.get());
    }
    var creativeGrp = new Motion_1["default"](document.querySelector('#creative-group'), delay + 2400);
    creativeGrp.addKey(0, { color: Colors_1["default"].pink.W500 });
    creativeGrp.setEas(esz.s.EASE_OUT3);
    creativeGrp.addKey(1111, { color: Colors_1["default"].red.W500 });
    creativeGrp.setEas(esz.s.EASE_IN_OUT);
    creativeGrp.addKey(1111, { color: Colors_1["default"].deepOrange.W500 });
    creativeGrp.setEas(esz.s.EASE_IN_OUT);
    creativeGrp.addKey(1111, { color: Colors_1["default"].amber.W500 });
    creativeGrp.holdPrev(1111);
    var creative = new Motion_1["default"](document.querySelector('#creative'), delay + 2400);
    creative.addKey(0, __assign({ letterSpacing: '-6vmin' }, new Properties_1["default"]().C().F().O(0).get()));
    creative.setEas(esz.s.EASE_OUT3);
    creative.addKey(999, __assign({ letterSpacing: '1.5vmin' }, new Properties_1["default"]().C().F().O(1).get()));
    creative.setEas(esz.s.EASE_IN4);
    creative.addKey(999, __assign({ letterSpacing: '-6vmin' }, new Properties_1["default"]().C().F().O(0).get()));
    var by = new Motion_1["default"](document.querySelector('#byheart'), delay + 2600);
    by.addKey(0, new Properties_1["default"]().C().F().O(0).TY(6).get());
    by.setEas(esz.s.EASE_OUT3);
    by.addKey(666, new Properties_1["default"]().C().F().O(1).TY(9).get());
    by.holdPrev(111);
    by.setEas(esz.s.EASE_IN_OUT);
    by.addKey(444, new Properties_1["default"]().C().F().O(0).TY(9).get());
    var heart = new Motion_1["default"](document.querySelector('#heart'), delay + 2800);
    heart.addKey(0, __assign({}, new Properties_1["default"]().C().F().O(0).TY(15).get()));
    heart.setEas(esz.s.EASE_OUT2);
    heart.addKey(666, __assign({}, new Properties_1["default"]().C().F().O(1).TY(18).get()));
    heart.setEas(esz.s.EASE_IN_OUT);
    heart.addKey(444, __assign({}, new Properties_1["default"]().C().F().O(0).TY(18).get()));
    var g = new GroupEffect([new GroupEffect(kfs), creative.get(), creativeGrp.get(), by.get(), heart.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Ease":11,"../Colors":17,"../Properties":35,"../Spinner":36}],16:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Model_1 = require("./Model");
function default_1() {
    var m = new Model_1["default"]().get();
    document.addEventListener("dblclick", function (e) {
        location.reload();
    });
    var tmline = document.querySelector("#timeline");
    // document.onmousedown = togglePlayback;
    // function togglePlayback(e){
    //   if (m.player.playState == "running") {
    //     m.player.pause();
    //   } else {
    //     m.player.play();
    //   }
    // }
    var time = document.querySelector("#time");
    var scrolltainer = document.querySelector('#scrolltainer');
    var requestAnimationFrameID;
    var currentTimeRatio = 0;
    var manuallySettingScroll = true;
    function onTick(e) {
        manuallySettingScroll = true;
        // const c =  (scrolltainer.scrollHeight - scrolltainer.clientHeight) * currentTimeRatio;
        // scrolltainer.scrollTop = c;
        updateUIs();
        manuallySettingScroll = false;
        requestAnimationFrameID = requestAnimationFrame(onTick);
    }
    requestAnimationFrameID = requestAnimationFrame(onTick);
    scrolltainer.onscroll = onSroll;
    var timeoutID;
    function onSroll(e) {
        if (manuallySettingScroll) return;
        // console.log(e);
        // console.log('on scroll trigeered ');
        // cancelAnimationFrame(requestAnimationFrameID);
        // console.log(ssss.scrollTop + " " + ssss.scrollHeight + " " + ssss.clientHeight);
        if (m.player.playState == "running") {
            m.player.pause();
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function (e) {
                manuallySettingScroll = true;
                m.player.play();
            }, 100);
        }
        m.player.currentTime = scrolltainer.scrollTop / (scrolltainer.scrollHeight - scrolltainer.clientHeight) * m.player.effect.activeDuration;
        // requestAnimationFrameID = requestAnimationFrame(onTick);
    }
    ;
    function updateUIs() {
        time.textContent = Math.round(m.player.currentTime).toString();
        currentTimeRatio = m.player.currentTime / m.player.effect.activeDuration;
        tmline.style.transform = "translate(0, 100vh) scaleX(" + currentTimeRatio + ")  translate(0,-100%)";
    }
    m.player.onfinish = function () {
        scrolltainer.scrollTo(0, scrolltainer.scrollHeight);
    };
    // scrolltainer.addEventListener('scroll', onSroll);
    // const plaeryerTotalAnimations = player.timeline.getAnimations().length;
    // player.ready.then( ()=>requestAnimationFrame(onFrame));
    // function onFrame(timestamp) {
    // console.log( timestamp );
    // console.log( '>', player.timeline.getAnimations()[0].);
    // const remainingAnimations = plaeryerTotalAnimations - plaeryerTotalAnimations;
    // switch( remainingAnimations )
    // console.log( remainingAnimations);
    // requestAnimationFrame(onFrame);
    // }
    // const p2 = new Animation(bg3.get(),document.timeline);
    // p2.onfinish =  ()=>p2.reverse();
    // p2.play();
    //
}
exports["default"] = default_1;
},{"./Model":13}],22:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
var Circle_1 = require("../geom/Circle");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var circle1 = Circle_1["default"](256, Colors_1["default"].grey.W700, '#bgs', 'circ');
    var motionBg1 = new Motion_1["default"](circle1, delay);
    motionBg1.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    motionBg1.setEas(esz.s.EASE_OUT3);
    motionBg1.addKey(999, new Properties_1["default"]().C().S(1.4).F().get());
    var circle2 = Circle_1["default"](256, Colors_1["default"].grey.W800, '#bgs', 'circ');
    var motionBg2 = new Motion_1["default"](circle2, delay + 200);
    motionBg2.addKey(0, new Properties_1["default"]().C().O(1).S(0).F().get());
    motionBg2.setEas(esz.s.EASE_OUT4);
    motionBg2.addKey(333, new Properties_1["default"]().C().O(1).S(0.5).F().get());
    motionBg2.holdPrev(333);
    motionBg2.setEas(esz.s.EASE_IN3);
    motionBg2.addKey(666, new Properties_1["default"]().C().O(0).S(0).F().get());
    var circle3 = Circle_1["default"](256, Colors_1["default"].grey.W700, '#bgs', 'circ');
    var motionBg3 = new Motion_1["default"](circle3, delay + 200);
    motionBg3.addKey(0, new Properties_1["default"]().C().O(1).S(0).F().get());
    motionBg3.setEas(esz.s.EASE_OUT4);
    motionBg3.addKey(444, new Properties_1["default"]().C().O(1).S(0.45).F().get());
    motionBg3.holdPrev(333);
    motionBg3.setEas(esz.s.EASE_IN3);
    motionBg3.addKey(666, new Properties_1["default"]().C().O(0).S(0).F().get());
    var votis = Array.from(document.querySelectorAll('#votis span'));
    var votisGroupFX = new GroupEffect(votis.map(function (e, index) {
        var r = index * (180 / 8);
        var tY = -28;
        var m = new Motion_1["default"](e, index * 30 + delay + 400);
        m.addKey(0, new Properties_1["default"]().S(0.8).RZ(r).TY(tY).F(-50, -100).C().O(0).get());
        m.setEas(esz.s.EASE_OUT4);
        m.addKey(333, new Properties_1["default"]().S(1).RZ(r - 90).TY(tY).F(-50, -100).C().O(1).get());
        m.holdPrev(222);
        m.setEas(esz.s.EASE_IN1);
        m.addKey(444, new Properties_1["default"]().S(0.8).RZ(r - 180).TY(tY).F(-50, -100).C().O(0).get());
        return m.get();
    }));
    var g = new GroupEffect([motionBg1.get(), motionBg2.get(), motionBg3.get(), votisGroupFX]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13,"../geom/Circle":37}],24:[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Model_1 = require("../Model");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var paps = new Motion_1["default"](document.querySelector('#outro'), delay, 666);
    paps.addKey(0, new Properties_1["default"]().C().TX().RY(-360).S(0).F().get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(999, new Properties_1["default"]().C().TX().RY(0).S().F().get());
    // paps.holdPrev(2000);
    paps.setFill('forwards');
    var groupFX = new GroupEffect(Array.from(document.querySelectorAll('#outro  span')).map(function (el, index) {
        var emmanuelAnim = new Motion_1["default"](el, delay + index * 333 + 333, 666);
        emmanuelAnim.addKey(0, __assign({ opacity: 0 }, new Properties_1["default"]().TZ(0).get()));
        emmanuelAnim.setEas(esz.s.LINEAR);
        emmanuelAnim.addKey(333, __assign({ opacity: 1 }, new Properties_1["default"]().TZ(10).get()));
        // emmanuelAnim.holdPrev((7-index)*333);
        emmanuelAnim.setFill('forwards');
        return emmanuelAnim.get();
    }));
    var mailme = new Motion_1["default"](document.querySelector('#emailme'), delay + 999);
    mailme.addKey(0, new Properties_1["default"]().TY(28).S(0).F().C().get());
    mailme.setEas(esz.s.EASE_OUT4);
    mailme.addKey(999, new Properties_1["default"]().TY(28).S(1).F().C().get());
    mailme.setFill('forwards');
    var scrollUp = new Motion_1["default"](document.querySelector('#scroll-up'), delay + 3000);
    // me.setFill('both');
    scrollUp.addKey(0, new Properties_1["default"]().O(1).TX(50, 'vw').TY(100, 'vh').F().get());
    scrollUp.setEas(esz.s.EASE_OUT3);
    scrollUp.addKey(999, new Properties_1["default"]().O(1).TX(50, 'vw').TY(90, 'vh').F().get());
    scrollUp.setFill('forwards');
    console.log(paps.get().activeDuration);
    console.log(groupFX.activeDuration);
    var g = new GroupEffect([paps.get(), groupFX, mailme.get(), scrollUp.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Model":13}],40:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
function default_1() {
    var div = document.createElement('div');
    div.classList.add('grid');
    div.style.position = 'absolute';
    div.style.backgroundColor = 'black';
    div.style.opacity = '0.1';
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.transformStyle = 'preserve-3d';
    div.style.backgroundImage = "\n    linear-gradient(white 1px, transparent 1px),\n    linear-gradient(90deg, white 1px, transparent 1px),\n    linear-gradient(#aaa 1px, transparent 1px),\n    linear-gradient(90deg, #aaa 1px, transparent 1px)";
    div.style.backgroundSize = '100px 100px, 100px 100px, 10px 10px, 10px 10px';
    div.style.backgroundPosition = '-0.5px -0.5px, -0.5px -0.5px, -1px -1px, -1px -1px';
    return div;
}
exports["default"] = default_1;
},{}],25:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Motion_1 = require("../Motion");
var Properties_1 = require("../Properties");
var esz = require("../Ease");
var Colors_1 = require("../Colors");
var Model_1 = require("../Model");
var Circle_1 = require("../geom/Circle");
var Ring_1 = require("./Ring");
var Grid_1 = require("../geom/Grid");
function default_1(delay) {
    if (delay === void 0) {
        delay = 0;
    }
    var m = new Model_1["default"]().get();
    var grid = Grid_1["default"]();
    grid.style.visibility = 'visible';
    grid.style.position = 'absolute';
    grid.style.transformOrigin = '0 0';
    grid.style.transform = ' translate3d(50vw, 50vh,0) translate(-50%, -50%)';
    // document.querySelector('#world').appendChild(grid);
    var paps = new Motion_1["default"](document.querySelector('#hire'), delay);
    // paps.setFill('both');
    paps.addKey(0, new Properties_1["default"]().C().TY(0).RX(0).RY(0).S(0).get());
    paps.setEas(esz.s.EASE_OUT);
    paps.addKey(333, new Properties_1["default"]().C().TY(11).RX(-45).RY(90).S(1).get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(999, new Properties_1["default"]().C().TY(11).RX(-55).RY(90 + 360 - 45).S(1).get());
    paps.holdPrev(222);
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(999, new Properties_1["default"]().C().TY(11).RX(-45).RY(90 + 360 - 45 + 360).S(1.1).get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(222, new Properties_1["default"]().C().TY(11).RX(-45).RY(90 + 360 - 45 + 360).S(0.7).get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(222, new Properties_1["default"]().C().TY(11).RX(-45).RY(90 + 360 - 45 + 360).S(1.2).get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(999, new Properties_1["default"]().C().TY(11).RX(-45).RY(90 + 360 - 45 + 360).S(0.9).get());
    paps.setEas(esz.s.EASE_OUT4);
    paps.addKey(999, new Properties_1["default"]().C().TY(11).RX(-45).RY(90 + 360 - 45 + 360 + 360).S(1.4).get());
    paps.setEas(esz.s.EASE_IN4);
    paps.addKey(666, new Properties_1["default"]().C().TY(0).RX(-45).RY(90 + 360 - 45 + 360 + 360 - 360).S(0).get());
    var hi = new Motion_1["default"](document.querySelector('#hi'), delay);
    // hi.setFill('both');
    hi.addKey(0, new Properties_1["default"]().O().T(-11, 0, -11).RZ().RY(-270).RX(90).S(0).F(0, -100).get());
    hi.setEas(esz.s.EASE_OUT4);
    hi.addKey(666, new Properties_1["default"]().O().T(-11, 0, -11).RZ().RY(0).RX().S().F(0, -100).get());
    hi.holdPrev(999);
    hi.setEas(esz.s.EASE_IN_OUT);
    hi.addKey(444, new Properties_1["default"]().O().T(-11, -22, -11).RZ().RY(-90).RX(90).S().F(0, -100).get());
    hi.holdPrev(999);
    hi.setEas(esz.s.EASE_OUT4);
    hi.addKey(666, new Properties_1["default"]().O().T(-11, 0, -11).RZ().RY(0).RX().S().F(0, -100).get());
    hi.holdPrev(2222);
    var re = new Motion_1["default"](document.querySelector('#re'), delay + 150);
    // re.setFill('both');
    re.addKey(0, new Properties_1["default"]().O(1).T(11, 0, -11).RY(-180).RX(90).S(0).F(-100, 0).get());
    re.setEas(esz.s.EASE_OUT3);
    re.addKey(666, new Properties_1["default"]().O(1).T(11, 0, -11).RY(0).RX(90).S(1).F(-100, 0).get());
    re.holdPrev(999);
    re.setEas(esz.s.EASE_IN_OUT);
    re.addKey(444, new Properties_1["default"]().O(1).T(-11, -22, 11).RY(-90).RX(0).S(1).F(-100, 0).get());
    re.holdPrev(999);
    re.setEas(esz.s.EASE_OUT3);
    re.addKey(666, new Properties_1["default"]().O(1).T(11, 0, -11).RY(0).RX(90).S(1).F(-100, 0).get());
    re.holdPrev(2100);
    var me = new Motion_1["default"](document.querySelector('#me'), delay + 300);
    // me.setFill('both');
    me.addKey(0, new Properties_1["default"]().O(1).T(11, 0, -11).RX(-90).RY(90).S(0).F(0, -100).get());
    me.setEas(esz.s.EASE_OUT3);
    me.addKey(666, new Properties_1["default"]().O(1).T(11, 0, -11).RX(0).RY(-90).S(1).F(0, -100).get());
    me.holdPrev(999);
    me.setEas(esz.s.EASE_IN_OUT);
    me.addKey(444, new Properties_1["default"]().O(1).T(-11, 0, 11).RX(0).RY().S(1).F(0, -100).get());
    me.holdPrev(999);
    me.setEas(esz.s.EASE_OUT3);
    me.addKey(666, new Properties_1["default"]().O(1).T(11, 0, -11).RX(0).RY(-90).S(1).F(0, -100).get());
    me.holdPrev(2100);
    var circle1 = Circle_1["default"](128, Colors_1["default"].grey.W900, '#bgs', 'circ');
    var motionBg1 = new Motion_1["default"](circle1, delay + 4000);
    motionBg1.addKey(0, new Properties_1["default"]().C().S(0).F().get());
    motionBg1.setEas(esz.s.EASE_OUT3);
    motionBg1.addKey(999, new Properties_1["default"]().C().S(0.75).F().get());
    motionBg1.holdPrev(222);
    motionBg1.addKey(444, new Properties_1["default"]().C().S(0).F().get());
    var ring = Ring_1["default"](delay + 500, 1, 256, '#000', Colors_1["default"].grey.W800);
    var g = new GroupEffect([paps.get(), hi.get(), re.get(), me.get(), ring, motionBg1.get()]);
    return g;
}
exports["default"] = default_1;
},{"../Motion":14,"../Properties":35,"../Ease":11,"../Colors":17,"../Model":13,"../geom/Circle":37,"./Ring":38,"../geom/Grid":40}],12:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Colors_1 = require("./Colors");
var esz = require("./Ease");
var Model_1 = require("./Model");
var Motion_1 = require("./Motion");
var CameraMotions_1 = require("./CameraMotions");
var HelloThere_1 = require("./animations/HelloThere");
var Iam_1 = require("./animations/Iam");
var AsoftwareDev_1 = require("./animations/AsoftwareDev");
var AGeekByNature_1 = require("./animations/AGeekByNature");
var ByHeart_1 = require("./animations/ByHeart");
var Timeline_1 = require("./Timeline");
var Votis_1 = require("./animations/Votis");
var Contact_1 = require("./animations/Contact");
var Hire_1 = require("./animations/Hire");
//
function default_1() {
    var m = new Model_1["default"]().get();
    var world = document.querySelector("#world");
    // const grid = Grid();
    // world.appendChild(grid);
    // grid.animate(
    // [new Props().C().F().T().get(),
    //   new Props().C().F().T().get()],
    //   {duration:0,fill:'both'}
    // );
    // const spacers = Spacers();
    // world.appendChild(spacers);
    // spacers.animate(
    //   [new Props().C().T().get(),
    //    new Props().C().T().get()],
    //   {duration:0,fill:'both'}
    // );
    var motionBgClr = new Motion_1["default"](document.querySelector('#bgColor'), 0);
    motionBgClr.addKey(0, { backgroundColor: Colors_1["default"].grey.W700 });
    motionBgClr.holdPrev(888);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].yellow.W700 });
    motionBgClr.holdPrev(666);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].grey.W900 });
    motionBgClr.holdPrev(999);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].yellow.W800 });
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].grey.W700 });
    motionBgClr.holdPrev(555);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].yellow.W700 });
    motionBgClr.holdPrev(3000);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(2222, { backgroundColor: Colors_1["default"].yellow.W100 });
    motionBgClr.holdPrev(7000);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(1111, { backgroundColor: Colors_1["default"].grey.W900 });
    motionBgClr.holdPrev(2000);
    motionBgClr.setEas(esz.s.EASE_IN2);
    motionBgClr.addKey(999, { backgroundColor: Colors_1["default"].grey.W800 });
    motionBgClr.setFill('forwards');
    // motionBgClr.holdPrev(4400);
    var hellothere = HelloThere_1["default"](999);
    var iam = Iam_1["default"](hellothere.activeDuration - 700);
    var votis = Votis_1["default"](iam.activeDuration - 200);
    var aSoftDev = AsoftwareDev_1["default"](votis.activeDuration - 100);
    var aGeek = AGeekByNature_1["default"](aSoftDev.activeDuration - 100);
    var byHeart = ByHeart_1["default"](aGeek.activeDuration - 800);
    var hire = Hire_1["default"](byHeart.activeDuration - 2000);
    var contact = Contact_1["default"](hire.activeDuration - 490);
    //
    var text = new GroupEffect([hellothere, iam, votis, aSoftDev, aGeek, byHeart, hire, contact]);
    var cams = new SequenceEffect([CameraMotions_1["default"]().cam1.get(), CameraMotions_1["default"]().cam2.get(), CameraMotions_1["default"]().cam3.get()]);
    // const ring = Ring(0,1, 256,'#fff',Colors.grey.W900);
    // const parts = PartsS();
    var gfx = new GroupEffect([text,
    // cams,
    motionBgClr.get()]);
    m.player = new Animation(gfx, document.timeline);
    // m.player.onfinish = () => m.player.play();
    // m.player.playbackRate = 3;
    // m.player.reverse();
    m.player.pause();
    Timeline_1["default"]();
    m.player.play();
}
exports["default"] = default_1;
},{"./Colors":17,"./Ease":11,"./Model":13,"./Motion":14,"./CameraMotions":15,"./animations/HelloThere":19,"./animations/Iam":18,"./animations/AsoftwareDev":21,"./animations/AGeekByNature":20,"./animations/ByHeart":23,"./Timeline":16,"./animations/Votis":22,"./animations/Contact":24,"./animations/Hire":25}],4:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
require("/Users/emmanuel/Projects/websiteAnimated/node_modules/web-animations-js/web-animations-next.min.js");
var data_1 = require("./data");
var esz = require("./Ease");
var Presentation_1 = require("./Presentation");
var Model_1 = require("./Model");
var m;
var container;
function init() {
    // scroll
    // window.scrollTo(0,1);
    //
    container = document.getElementById("container");
    m = new Model_1["default"]().setDim(container.clientWidth, container.clientHeight);
    m.get().world = document.getElementById("world");
    // popText();
    // spinWorld();
    document.getElementById("world").ondragstart = function () {
        return false;
    };
    // setupResize();
    window.addEventListener("load", function () {
        setTimeout(function () {
            console.log("loaded");
        }, 0);
    });
    window.addEventListener("orientationchange", function () {
        this.document.location.reload();
    }, false);
    Presentation_1["default"]();
}
function spinWorld() {
    m.world.animate([{ transform: "rotate3d(0,1,0,-90deg)" }, { transform: "rotate3d( 0,1,0,90deg)" }], {
        duration: 2222,
        easing: esz.s.EASE_IN_OUT,
        iterations: Infinity,
        direction: "alternate",
        fill: "both"
    });
}
function popText() {
    var words = data_1["default"].text.split(" ");
    words.forEach(function (word, index) {
        var div = document.createElement("div");
        var divContent = document.createElement("div");
        div.appendChild(divContent);
        div.id = "word" + (index + 1);
        m.world.appendChild(div);
        var disected = words[index].split("").forEach(function (element, index) {
            var el = document.createElement("span");
            el.innerText = element;
            divContent.appendChild(el);
        });
    });
}
function setupResize() {
    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;
    function resizeThrottler() {
        console.log(resizeTimeout);
        m.get().player.pause();
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (resizeTimeout == null) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();
                // The actualResizeHandler will execute at a rate of 15fps
            }, 1000);
        }
    }
    function actualResizeHandler() {
        console.log("resizing");
        m.setDim(container.clientWidth, container.clientHeight);
        document.documentElement.style.setProperty("--vmin", m.get().dim.min);
        var v = document.documentElement.style.getPropertyValue("--vmin");
        console.log("value is " + v);
        document.location.reload();
    }
}
init();
},{"/Users/emmanuel/Projects/websiteAnimated/node_modules/web-animations-js/web-animations-next.min.js":7,"./data":10,"./Ease":11,"./Presentation":12,"./Model":13}]},{},[4])