import"./assets/styles-2330ef24.js";import{f as a}from"./assets/fetch-data-async-fad340f3.js";import{U as n}from"./assets/constants-0f6b14ca.js";import{c as s,a as c}from"./assets/create-msg-2c2204d9.js";import"./assets/vendor-60fbd1ed.js";function i(r){return r.reduce((t,{title:e,completed:o})=>t+`<li>
        <div>${e}</div>
        <div>${o?"Done":"In progress"}</div>  
      </li>
      `,"")}const f=document.querySelector(".todos-list");async function m(){try{const r=await a(n);d(r)}catch(r){u(r)}}function d(r){f.innerHTML=i(r),s("It's ok!")}function u(r){console.error(r.message),c(r.message)}m();
//# sourceMappingURL=commonHelpers8.js.map
