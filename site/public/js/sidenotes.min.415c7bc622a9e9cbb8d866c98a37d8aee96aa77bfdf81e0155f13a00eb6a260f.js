document.addEventListener("DOMContentLoaded",()=>{if(!window.matchMedia("(min-width: 769px)").matches)return;document.querySelectorAll("sup").forEach(e=>{const t=e.querySelector("a[href^='#fn']");if(!t)return;if(e.nextElementSibling?.classList.contains("sidenote"))return;const o=t.textContent.trim()||e.textContent.trim(),i=t.getAttribute("href").slice(1),s=document.getElementById(i);if(!s)return;const n=document.createElement("span");n.className="sidenote",n.innerHTML=`
      <sup class="sidenote-number">${o}</sup>
      ${s.innerHTML.replace(/<a[^>]*>↩︎?<\/a>/,"")}
    `,e.after(n)})})