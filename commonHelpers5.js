import"./assets/styles-2330ef24.js";import{f as n}from"./assets/fetch-data-async-fad340f3.js";const i="https://pokeapi.co/api/v2/",l=async t=>{const r=`${i}pokemon/${t}`;return n(r)};function p({name:t,sprites:r,weight:e,height:a,abilities:c}){const o=c.map(({ability:s})=>` <li class ="list-group-item">${s.name}</li>`).join("");return`
     <div class="card">
        <div class="card-img-top">
          <img src="${r.front_default}" alt="${t}" />
        </div>
        <div class="card-body">
          <h2 class="card-title">Name: ${t}</h2>
          <p class="card-text">Weight: ${e}</p>
          <p class="card-text">Height: ${a}</p>
          <p class="card-text"><b>Artist:</b></p>
          <ul class="list-group">
            ${o}
          </ul>
        </div>
      </div>
      `}const d=(t,r)=>{const e=p(t);r.innerHTML=e},u=document.querySelector(".card-container"),m=document.querySelector(".search-form");m.addEventListener("submit",f);async function f(t){t.preventDefault();const r=t.currentTarget,e=r.search.value;try{const a=await l(e);d(a,u)}catch(a){console.log(a)}finally{r.reset()}}
//# sourceMappingURL=commonHelpers5.js.map
