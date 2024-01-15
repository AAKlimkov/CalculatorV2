(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},738:e=>{e.exports=function(e){return e[1]}},426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(738),a=n.n(r),o=n(705),i=n.n(o)()(a());i.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-weight: normal;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #e0e0e0;\n}\n\n.calculator-grid {\n  width: 300px;\n  background-color: rgb(137 99 8);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n  user-select: none;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: #222;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 10px;\n  color: white;\n  font-size: 2rem;\n  text-align: right;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  min-height: 85px;\n}\n\n.calculator-grid button {\n  background-color: #0f4201;\n  border: none;\n  color: gray;\n  font-size: 1.5rem;\n  margin: 5px;\n  padding: 15px 0;\n  border-radius: 8px;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.calculator-grid button:hover {\n  opacity: 0.8;\n}\n\n.calculator-grid .btn-operation {\n  background-color: #1a9f9f;\n  color: white;\n}\n.btn-operation:hover {\n  background-color: #1a9f9f;\n  opacity: 0.9;\n}\n\n.calculator-grid .btn-equals {\n  grid-column: span 1;\n  background-color: #ad0303;\n}\n\n.calculator-grid .previous-operand,\n.calculator-grid .current-operand {\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.calculator-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(60px, auto);\n}\n\n.calculator-grid .btn-clear,\n.calculator-grid .btn-delete,\n.calculator-grid .btn-sign {\n  background-color: #f1f301;\n}\n\n.output .previous-operand {\n  font-size: 1.2rem;\n  opacity: 0.5;\n}\n\n.output .current-operand {\n  font-size: 2.4rem;\n}\n\n.calculator-grid button {\n  width: 100%;\n  height: 100%;\n}\n\n.calculator-grid .btn-clear,\n.calculator-grid .btn-sign {\n  font-size: 1.2rem;\n}\n\n@media (max-width: 350px) {\n  .calculator-grid {\n    width: 90%;\n    grid-template-columns: repeat(4, 22%);\n    justify-content: space-between;\n  }\n}\n",""]);const c=i},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var u=e[c],l=r.base?u[0]+r.base:u[0],s=o[l]||0,d="".concat(l," ").concat(s);o[l]=s+1;var p=n(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var b=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:b,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var u=r(e,a),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),u=n.n(c),l=n(216),s=n.n(l),d=n(589),p=n.n(d),f=n(426),b={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r){var a,o,i=null;try{i=document.createElement(e)}catch(e){throw new Error("Unable to create HTMLElement! Provide a proper tag name.")}t&&(a=i.classList).add.apply(a,function(e){if(Array.isArray(e))return y(e)}(o=t.split(" "))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||m(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n&&Array.isArray(n)?n.forEach((function(e){return e&&i.appendChild(e)})):n&&"object"===h(n)?i.appendChild(n):n&&"string"==typeof n&&(i.innerHTML=n),r&&r.appendChild(i);for(var c=arguments.length,u=new Array(c>4?c-4:0),l=4;l<c;l++)u[l-4]=arguments[l];return u.length&&u.forEach((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];""===r?i.setAttribute(n,""):i.dataset[n]=r})),i}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function O(e){var t=function(e,t){if("object"!=g(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:String(t)}function w(e){var t=document.querySelector(".previous-operand"),n=document.querySelector(".current-operand");t.textContent=e.previousOperand,n.textContent=e.currentOperand}b.styleTagTransform=p(),b.setAttributes=u(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=s(),t()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var k,S,E=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.displayValue="0",this.currentOperand="0",this.previousOperand=null,this.operation=null}var t,n;return t=e,(n=[{key:"enterNumber",value:function(e){if("equal"===this.operation)return this.operation=null,this.displayValue=e,void(this.currentOperand=e);"0"===this.displayValue||"0"===this.currentOperand?(this.displayValue=e,this.currentOperand=e):(this.displayValue+=e,this.currentOperand+=e)}},{key:"delete",value:function(){"0"!==this.currentOperand&&(this.currentOperand=this.currentOperand.toString().slice(0,-1),""!==this.currentOperand&&"-"!==this.currentOperand||(this.currentOperand="0"),this.displayValue=this.currentOperand)}},{key:"decimal",value:function(){this.displayValue.includes(".")||("0"===this.displayValue||null===this.currentOperand?(this.displayValue="0.",this.currentOperand="0."):(this.displayValue+=".",this.currentOperand+="."))}},{key:"clear",value:function(){this.displayValue="0",this.currentOperand="0",this.previousOperand=null,this.operation=null}},{key:"chooseOperation",value:function(e){"0"===this.currentOperand?this.previousOperand&&(this.operation=e,this.previousOperand=this.previousOperand.toString().slice(0,-1)+this.operation):(null!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand+this.operation,this.currentOperand="0")}},{key:"compute",value:function(){var e,t=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);switch(this.operation){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"%":e=t/100*n;break;case"/":if(0===n)return this.clear(),void(this.displayValue="Error");e=t/n;break;default:return}this.currentOperand=e.toString(),this.displayValue=this.currentOperand,this.previousOperand="",this.operation="equal"}},{key:"changeSign",value:function(){this.currentOperand.startsWith("-")?this.currentOperand=this.currentOperand.substring(1):"0"!==this.currentOperand?this.currentOperand="-".concat(this.currentOperand):this.currentOperand="0",this.displayValue=this.currentOperand}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());k=v("div","calculator-grid",null,document.body),S=v("div","output",null,k),v("div","previous-operand",null,S,["data-previous-operand",""]),v("div","current-operand","0",S,["data-current-operand",""]),[{text:"AC",data:["role","clear"],class:"btn-clear"},{text:"DEL",data:["role","delete"],class:"btn-delete"},{text:"%",data:["role","operation"],class:"btn-operation"},{text:"/",data:["role","operation"],class:"btn-operation span-two"},{text:"9",data:["role","number"],class:"btn-number"},{text:"8",data:["role","number"],class:"btn-number"},{text:"7",data:["role","number"],class:"btn-number"},{text:"*",data:["role","operation"],class:"btn-operation span-two"},{text:"6",data:["role","number"],class:"btn-number"},{text:"4",data:["role","number"],class:"btn-number"},{text:"5",data:["role","number"],class:"btn-number"},{text:"+",data:["role","operation"],class:"btn-operation span-two"},{text:"3",data:["role","number"],class:"btn-number"},{text:"2",data:["role","number"],class:"btn-number"},{text:"1",data:["role","number"],class:"btn-number"},{text:"-",data:["role","operation"],class:"btn-operation span-two"},{text:".",data:["role","decimal"],class:"btn-decimal"},{text:"0",data:["role","number"],class:"btn-number"},{text:"+/-",data:["role","sign-change"],class:"btn-sign"},{text:"=",data:["role","equals"],class:"btn-equals"}].forEach((function(e){var t=e.text,n=e.data,r=e.class;v("button",void 0===r?"":r,t,k,n)})),document.addEventListener("DOMContentLoaded",(function(){!function(e,t){document.querySelectorAll('[data-role="number"]').forEach((function(n){n.addEventListener("click",(function(){e.enterNumber(n.textContent),t(e)}))})),document.querySelectorAll('[data-role="operation"]').forEach((function(n){n.addEventListener("click",(function(){e.chooseOperation(n.textContent),t(e)}))})),document.querySelector('[data-role="clear"]').addEventListener("click",(function(){e.clear(),t(e)})),document.querySelector('[data-role="equals"]').addEventListener("click",(function(){e.compute(),t(e)})),document.querySelector('[data-role="delete"]').addEventListener("click",(function(){e.delete(),t(e)})),document.querySelector('[data-role="decimal"]').addEventListener("click",(function(){e.decimal(),t(e)})),document.querySelector('[data-role="sign-change"]').addEventListener("click",(function(){e.changeSign(),t(e)})),document.addEventListener("keydown",(function(n){switch(n.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":e.enterNumber(n.key);break;case"+":case"-":case"*":case"/":e.chooseOperation(n.key);break;case"Enter":case"=":e.compute();break;case"Escape":e.clear();break;case"Backspace":e.delete();break;case".":e.decimal()}t(e)}))}(E,w)}))})()})();