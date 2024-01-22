import"./assets/styles-2330ef24.js";import{f as i}from"./assets/fetch-data-async-fad340f3.js";import{A as l,E as d,a as p}from"./assets/constants-0f6b14ca.js";import{c as m,a as v}from"./assets/create-msg-2c2204d9.js";import"./assets/vendor-60fbd1ed.js";async function f(a){const s={key:p,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},n=`${l}?${new URLSearchParams(s).toString()}`;try{const e=await i(n);if(!e.hits.length)throw new Error(d);return e.hits}catch(e){console.log(e.message)}}const u=a=>{const{largeImageURL:s,previewURL:n,tags:e,likes:r,views:c,comments:t,downloads:o}=a;return`<li class='card'> 
            <a class='card-link' href='${s}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${n}'
                      alt='${e}'                                                          
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${r}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${c}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${t}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${o}</span>    
                </div>
            </div>
        </li>`};function g(a){return a.map(u).join("")}function h(a,s){const n=g(a);s.innerHTML="",s.insertAdjacentHTML("beforeend",n)}const k=document.querySelector(".images-list");async function w(){try{const a=await f("cats");I(a)}catch(a){$(a)}}function I(a){h(a,k),m("It's ok!")}function $(a){console.error(a.message),v(a.message)}w();
//# sourceMappingURL=commonHelpers.js.map
