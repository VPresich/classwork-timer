import"./assets/styles-0c304372.js";const e=document.createElement("div");e.id="lightboxWnd";document.body.appendChild(e);const c=document.querySelectorAll("img");console.log(c);c.forEach(t=>{t.addEventListener("click",d=>{e.classList.add("active");const i=document.createElement("img");for(i.src=t.src;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(i)})});e.addEventListener("click",t=>{t.target===t.currentTarget&&e.classList.remove("active")});
//# sourceMappingURL=commonHelpers3.js.map