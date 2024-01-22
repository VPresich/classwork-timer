import"./assets/styles-2330ef24.js";const r="/classwork-timer/assets/icons-ad39d7a4.svg",d=(i,s)=>{const{iconContainerClass:o,iconLinkClass:t,iconClass:n,iconWidth:a,iconHeight:e}=s;return i.reduce((l,c)=>l+`
        <li class="${o}">
                <a class="${t}" target="_blank" href="${c.url}">
                    <svg class="${n}" 
                    width="${a}" height="${e}" aria-label="${c.label}">
                    <use href="${r}${c.id}"></use>
                    </svg>
                </a>
        </li>
    `,"")},w=(i,s,o)=>{const t=d(i,s);o.innerHTML="",o.insertAdjacentHTML("beforeend",t)},k=[{url:"https://www.instagram.com/",id:"#instagram",label:"instagram icon"},{url:"https://www.twitter.com/",id:"#twitter",label:"twitter icon"},{url:"https://www.facebook.com/",id:"#facebook",label:"facebook icon"},{url:"https://www.linkedin.com/",id:"#linkedin",label:"linkedin icon"}],h={iconContainerClass:"footer-social-icon-container",iconLinkClass:"footer-social-link",iconClass:"footer-social-icon",iconWidth:24,iconHeight:24},u=document.querySelector(".footer-social-links");w(k,h,u);
//# sourceMappingURL=commonHelpers2.js.map
