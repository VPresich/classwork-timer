import"./assets/styles-0c304372.js";import{T as n}from"./assets/constants-8296491b.js";const h=[{name:"Mark Guerrero",photo:{fileName:"card-1@1x.jpg",alt:"Photo of Mark Guerrero"},position:"Product Designer"},{name:"Tom Ford",photo:{fileName:"card-2@1x.jpg",alt:"Photo of Tom Ford"},position:"Frontend Developer"},{name:"Camila Garcia",photo:{fileName:"card-3@1x.jpg",alt:"Photo of Camila Garcia"},position:"Marketing"},{name:"Daniel Wilson",photo:{fileName:"card-4@1x.jpg",alt:"Photo of Daniel Wilson"},position:"UI Designer"}],f="/classwork-timer/assets/icons-ad39d7a4.svg",l=(e,a)=>{const{iconContainerClass:o,iconLinkClass:i,iconClass:t,iconWidth:m,iconHeight:d}=a;return e.reduce((p,s)=>p+`
        <li class="${o}">
                <a class="${i}" target="_blank" href="${s.url}">
                    <svg class="${t}" 
                    width="${m}" height="${d}" aria-label="${s.label}">
                    <use href="${f}${s.id}"></use>
                    </svg>
                </a>
        </li>
    `,"")},r=[{url:"https://www.instagram.com/",id:"#instagram",label:"instagram icon"},{url:"https://www.twitter.com/",id:"#twitter",label:"twitter icon"},{url:"https://www.facebook.com/",id:"#facebook",label:"facebook icon"},{url:"https://www.linkedin.com/",id:"#linkedin",label:"linkedin icon"}];function c(e,a){const o=e+a;console.log(o);const i=new URL(o,import.meta.url).href;return console.log(i),i}const u={iconContainerClass:"social-icon-container",iconLinkClass:"social-link",iconClass:"social-icon",iconWidth:16,iconHeight:16},g=e=>e.reduce((a,{name:o,photo:i,position:t})=>a+`
        <li class="team-card">
          <img src="${c(n,i.fileName)}" 
               alt="${i.alt}" width="264" height="260">
          <div class="team-card-label">
              <p class="team-card-position">${c(n,i.fileName)}</p>
              <h3 class="team-card-name">${o}</h3>
              <p class="team-card-position">${t}</p>
              <ul class = "social-links">${l(r,u)}</ul>
          </div>
        </li>
      `,""),k=(e,a)=>{const o=g(e);a.innerHTML="",a.insertAdjacentHTML("beforeend",o)},w=document.querySelector(".team");k(h,w);const C=(e,a,o)=>{const i=l(e,a);o.innerHTML="",o.insertAdjacentHTML("beforeend",i)},$={iconContainerClass:"footer-social-icon-container",iconLinkClass:"footer-social-link",iconClass:"footer-social-icon",iconWidth:24,iconHeight:24},b=document.querySelector(".footer-social-links");C(r,$,b);
//# sourceMappingURL=commonHelpers2.js.map
