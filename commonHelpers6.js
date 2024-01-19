import"./assets/styles-0c304372.js";import{f as n}from"./assets/fetch-data-async-9b6a0ad0.js";import{U as s,c as a,b as c}from"./assets/create-msg-d6a7a79e.js";import"./assets/vendor-32231325.js";function i(t){return t.reduce((e,{title:r,completed:o})=>e+`<li>
        <div>${r}</div>
        <div>${o?"Done":"In progress"}</div>  
      </li>
      `,"")}const d=document.querySelector(".todos-list");async function f(){try{const t=await n(s);u(t)}catch(t){m(t)}}function u(t){d.innerHTML=i(t),a("It's ok!")}function m(t){console.error(t.message),c(t.message)}f();
//# sourceMappingURL=commonHelpers6.js.map
