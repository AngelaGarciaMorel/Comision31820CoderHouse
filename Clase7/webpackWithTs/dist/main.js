(()=>{"use strict";var e={130:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.firstName=e,this.lastName=t}getFullName(){return`${this.firstName} ${this.lastName}`}}},607:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(860)),o=s(r(130)),l=(0,a.default)(),n=new o.default("Alex","Pinaida");l.get("/",((e,t)=>{const r=(new Date).toLocaleDateString();t.send({time:r,name:n.getFullName()})})),l.listen(8080,(()=>{console.log("conectado al puerto: 8080")}))},860:e=>{e.exports=require("express")}},t={};!function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,r),o.exports}(607)})();