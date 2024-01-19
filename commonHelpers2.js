import"./assets/styles-0c304372.js";import{S as g,T as d}from"./assets/constants-3538af6f.js";const x=[{name:"Mark Guerrero",photo:{url:"card-1@1x.jpg",alt:"Photo of Mark Guerrero"},position:"Product Designer"},{name:"Tom Ford",photo:{url:"card-2@1x.jpg",alt:"Photo of Tom Ford"},position:"Frontend Developer"},{name:"Camila Garcia",photo:{url:"card-3@1x.jpg",alt:"Photo of Camila Garcia"},position:"Marketing"},{name:"Daniel Wilson",photo:{url:"card-4@1x.jpg",alt:"Photo of Daniel Wilson"},position:"UI Designer"}],n=(t,i)=>{const{iconContainerClass:o,iconLinkClass:e,iconClass:p,iconWidth:r,iconHeight:l}=i;return t.reduce((a,s)=>a+`
        <li class="${o}">
                <a class="${e}" target="_blank" href="${s.url}">
                    <svg class="${p}" 
                    width="${r}" height="${l}" aria-label="${s.label}">
                    <use href="${g+s.id}"></use>
                    </svg>
                </a>
        </li>
    `,"")},m=[{url:"https://www.instagram.com/",id:"#instagram",label:"instagram icon"},{url:"https://www.twitter.com/",id:"#twitter",label:"twitter icon"},{url:"https://www.facebook.com/",id:"#facebook",label:"facebook icon"},{url:"https://www.linkedin.com/",id:"#linkedin",label:"linkedin icon"}],j={iconContainerClass:"social-icon-container",iconLinkClass:"social-link",iconClass:"social-icon",iconWidth:16,iconHeight:16},f=t=>t.reduce((i,{name:o,photo:e,position:p})=>i+`
        <li class="team-card">
                  <img src="${d+e.url}" 
                      alt="${e.alt}" width="264" height="260">
                  <div class="team-card-label">
                      <h3 class="team-card-name">${o}</h3>
                      <p class="team-card-position">${p}</p>
                      <ul class = "social-links">${n(m,j)}</ul>
                  </div>
        </li>
      `,""),b=(t,i)=>{const o=f(t);i.innerHTML="",i.insertAdjacentHTML("beforeend",o)},w=document.querySelector(".team");b(x,w);const c=[{name:"Banking App",type:"App",imgSrc:"./img/portfolio/mobile/prj-mobile-1-1@1x.jpg",imgSrcset:`
        ./img/portfolio/desktop/prj-desktop-1-1@1x.jpg 360w,
        ./img/portfolio/desktop/prj-desktop-1-1@2x.jpg 720w,
        ./img/portfolio/tablet/prj-tablet-1-1@1x.jpg   356w,
        ./img/portfolio/tablet/prj-tablet-1-1@2x.jpg   712w,
        ./img/portfolio/mobile/prj-mobile-1-1@1x.jpg   288w,
        ./img/portfolio/mobile/prj-mobile-1-1@2x.jpg   576w
      `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task Manager App
     · Calorie Tracker App · Exotic Fruit Ecommerce App · Cloud Storage App`},{name:"Cashless Payment",type:"Marketing",imgSrc:"./img/portfolio/mobile/prj-mobile-1-2@1x.jpg",imgSrcset:`       
        ./img/portfolio/desktop/prj-desktop-1-2@1x.jpg 360w,
        ./img/portfolio/desktop/prj-desktop-1-2@2x.jpg 720w,
        ./img/portfolio/tablet/prj-tablet-1-2@1x.jpg   356w,
        ./img/portfolio/tablet/prj-tablet-1-2@2x.jpg   712w,
        ./img/portfolio/mobile/prj-mobile-1-2@1x.jpg   288w,
        ./img/portfolio/mobile/prj-mobile-1-2@2x.jpg   576w
        `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task
                    Manager App · Calorie Tracker App · Exotic Fruit Ecommerce
                    App · Cloud Storage App`},{name:"Meditation App",type:"App",imgSrc:"./img/portfolio/mobile/prj-mobile-1-3@1x.jpg",imgSrcset:`       
        ./img/portfolio/desktop/prj-desktop-1-3@1x.jpg 360w,
        ./img/portfolio/desktop/prj-desktop-1-3@2x.jpg 720w,
        ./img/portfolio/tablet/prj-tablet-1-3@1x.jpg   356w,
        ./img/portfolio/tablet/prj-tablet-1-3@2x.jpg   712w,
        ./img/portfolio/mobile/prj-mobile-1-3@1x.jpg   288w,
        ./img/portfolio/mobile/prj-mobile-1-3@2x.jpg   576w
        `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task
                    Manager App · Calorie Tracker App · Exotic Fruit Ecommerce
                    App · Cloud Storage App`},{name:"Taxi Service",type:"Marketing",imgSrc:"./img/portfolio/mobile/prj-mobile-2-1@1x.jpg",imgSrcset:`       
      ./img/portfolio/desktop/prj-desktop-2-1@1x.jpg 360w,
      ./img/portfolio/desktop/prj-desktop-2-1@2x.jpg 720w,
      ./img/portfolio/tablet/prj-tablet-2-1@1x.jpg   356w,
      ./img/portfolio/tablet/prj-tablet-2-1@2x.jpg   712w,
      ./img/portfolio/mobile/prj-mobile-2-1@1x.jpg   288w,
      ./img/portfolio/mobile/prj-mobile-2-1@2x.jpg   576w
        `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task
          Manager App · Calorie Tracker App · Exotic Fruit Ecommerce
          App · Cloud Storage App`},{name:"Screen Illustrations",type:"Design",imgSrc:"./img/portfolio/mobile/prj-mobile-2-2@1x.jpg",imgSrcset:`       
    ./img/portfolio/desktop/prj-desktop-2-2@1x.jpg 360w,
    ./img/portfolio/desktop/prj-desktop-2-2@2x.jpg 720w,
    ./img/portfolio/tablet/prj-tablet-2-2@1x.jpg   356w,
    ./img/portfolio/tablet/prj-tablet-2-2@2x.jpg   712w,
    ./img/portfolio/mobile/prj-mobile-2-2@1x.jpg   288w,
    ./img/portfolio/mobile/prj-mobile-2-2@2x.jpg   576w
        `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task
        Manager App · Calorie Tracker App · Exotic Fruit Ecommerce
        App · Cloud Storage App`},{name:"Online Courses",type:"Marketing",imgSrc:"./img/portfolio/mobile/prj-mobile-2-3@1x.jpg",imgSrcset:`       
      ./img/portfolio/desktop/prj-desktop-2-3@1x.jpg 360w,
      ./img/portfolio/desktop/prj-desktop-2-3@2x.jpg 720w,
      ./img/portfolio/tablet/prj-tablet-2-3@1x.jpg   356w,
      ./img/portfolio/tablet/prj-tablet-2-3@2x.jpg   712w,
      ./img/portfolio/mobile/prj-mobile-2-3@1x.jpg   288w,
      ./img/portfolio/mobile/prj-mobile-2-3@2x.jpg   576w
        `,sizes:"(min-width:1158px) 360px, (min-width:768px) 356px, (max-width:767px) 288px",overlayText:`14 Stylish and User-Friendly App Design Concepts · Task
        Manager App · Calorie Tracker App · Exotic Fruit Ecommerce
        App · Cloud Storage App`}],k=t=>t.reduce((i,{name:o,type:e,imgSrc:p,imgSrcset:r,sizes:l,overlayText:a})=>i+`
        <li class="portfolio-card">
        <a class="portfolio-card-link" href="#">
          <div class="portfolio-img-container">
            <img
              class="portfolio-img"
              srcset="${r}"
              sizes="${l}"
              src="${p}"
              alt="Photo of ${o} project"
            />
            <p class="portfolio-overlay">${a}</p>
          </div>
          <div class="portfolio-item-label">
            <h3 class="portfolio-item-name">${o}</h3>
            <p class="portfolio-item-type">${e}</p>
          </div>
        </a>
      </li>
      `,""),h=(t,i)=>{const o=k(t);console.log(o),i.innerHTML="",i.insertAdjacentHTML("beforeend",o)};console.log(c);const u=document.querySelector(".portfolio-cards");h(c,u);const A=(t,i,o)=>{const e=n(t,i);o.innerHTML="",o.insertAdjacentHTML("beforeend",e)},C={iconContainerClass:"footer-social-icon-container",iconLinkClass:"footer-social-link",iconClass:"footer-social-icon",iconWidth:24,iconHeight:24},T=document.querySelector(".footer-social-links");A(m,C,T);
//# sourceMappingURL=commonHelpers2.js.map
