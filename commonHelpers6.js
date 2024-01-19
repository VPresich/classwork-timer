import"./assets/styles-0c304372.js";import{f as a}from"./assets/fetch-data-async-9b6a0ad0.js";import{U as n}from"./assets/constants-7d677b7f.js";import{c as s,a as c}from"./assets/create-msg-41c53447.js";import"./assets/vendor-32231325.js";function i(r){return r.reduce((t,{title:e,completed:o})=>t+`<li>
        <div>${e}</div>
        <div>${o?"Done":"In progress"}</div>  
      </li>
      `,"")}const f=document.querySelector(".todos-list");async function m(){try{const r=await a(n);d(r)}catch(r){u(r)}}function d(r){f.innerHTML=i(r),s("It's ok!")}function u(r){console.error(r.message),c(r.message)}m();
//# sourceMappingURL=commonHelpers6.js.map
