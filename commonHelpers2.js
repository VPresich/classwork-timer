import"./assets/styles-0c304372.js";import{T as d}from"./assets/constants-60c1b47f.js";const h=[{name:"Mark Guerrero",photo:{fileName:"card-1@1x.jpg",alt:"Photo of Mark Guerrero"},position:"Product Designer"},{name:"Tom Ford",photo:{fileName:"card-2@1x.jpg",alt:"Photo of Tom Ford"},position:"Frontend Developer"},{name:"Camila Garcia",photo:{fileName:"card-3@1x.jpg",alt:"Photo of Camila Garcia"},position:"Marketing"},{name:"Daniel Wilson",photo:{fileName:"card-4@1x.jpg",alt:"Photo of Daniel Wilson"},position:"UI Designer"}],p="/classwork-timer/assets/icons-ad39d7a4.svg",n=(a,i)=>{const{iconContainerClass:o,iconLinkClass:e,iconClass:t,iconWidth:l,iconHeight:r}=i;return a.reduce((m,s)=>m+`
        <li class="${o}">
                <a class="${e}" target="_blank" href="${s.url}">
                    <svg class="${t}" 
                    width="${l}" height="${r}" aria-label="${s.label}">
                    <use href="${p}${s.id}"></use>
                    </svg>
                </a>
        </li>
    `,"")},c=[{url:"https://www.instagram.com/",id:"#instagram",label:"instagram icon"},{url:"https://www.twitter.com/",id:"#twitter",label:"twitter icon"},{url:"https://www.facebook.com/",id:"#facebook",label:"facebook icon"},{url:"https://www.linkedin.com/",id:"#linkedin",label:"linkedin icon"}];function f(a,i){const o=a+i;console.log(o);const e=new URL(o,import.meta.url).href;return console.log(e),e}const u={iconContainerClass:"social-icon-container",iconLinkClass:"social-link",iconClass:"social-icon",iconWidth:16,iconHeight:16},g=a=>a.reduce((i,{name:o,photo:e,position:t})=>i+`
        <li class="team-card">
          <img src="${f(d,e.fileName)}" 
               alt="${e.alt}" width="264" height="260">
          <div class="team-card-label">
              <h3 class="team-card-name">${o}</h3>
              <p class="team-card-position">${t}</p>
              <ul class = "social-links">${n(c,u)}</ul>
          </div>
        </li>
      `,""),k=(a,i)=>{const o=g(a);i.innerHTML="",i.insertAdjacentHTML("beforeend",o)},w=document.querySelector(".team");k(h,w);const C=(a,i,o)=>{const e=n(a,i);o.innerHTML="",o.insertAdjacentHTML("beforeend",e)},$={iconContainerClass:"footer-social-icon-container",iconLinkClass:"footer-social-link",iconClass:"footer-social-icon",iconWidth:24,iconHeight:24},b=document.querySelector(".footer-social-links");C(c,$,b);
//# sourceMappingURL=commonHelpers2.js.map
