import"./assets/styles-0c304372.js";import{f as o}from"./assets/fetch-data-async-9b6a0ad0.js";import{A as l,E as d,a as p}from"./assets/constants-3538af6f.js";import{c as m,a as v}from"./assets/create-msg-41c53447.js";import"./assets/vendor-32231325.js";async function f(a){const s={key:p,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},e=`${l}?${new URLSearchParams(s).toString()}`,n=await o(e);if(!n.hits.length)throw new Error(d);return n.hits}const u=a=>{const{largeImageURL:s,previewURL:e,tags:n,likes:r,views:c,comments:t,downloads:i}=a;return`<li class='card'> 
            <a class='card-link' href='${s}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${e}'
                      alt='${n}'                                                          
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
                    <span class="value">${i}</span>    
                </div>
            </div>
        </li>`};function g(a){return a.map(u).join("")}function h(a,s){const e=g(a);s.innerHTML="",s.insertAdjacentHTML("beforeend",e)}const k=document.querySelector(".images-list");async function w(){try{const a=await f("qqqqqq");I(a)}catch(a){$(a)}}function I(a){h(a,k),m("It's ok!")}function $(a){console.error(a.message),v(a.message)}w();
//# sourceMappingURL=commonHelpers.js.map
