document.addEventListener("DOMContentLoaded",()=>{if(!window.matchMedia("(min-width: 769px)").matches)return;const e=document.querySelectorAll("sup[id^='fnref']");e.forEach(e=>{if(e.nextElementSibling?.classList.contains("sidenote"))return;const t=e.querySelector("a");if(!t)return;const o=t.textContent.trim(),i=t.getAttribute("href")?.slice(1),s=document.getElementById(i);if(!s)return;const n=document.createElement("span");n.className="sidenote",n.innerHTML=`
      <span class="sidenote-number">${o}</span>
      ${s.innerHTML.replace(/<a[^>]*>↩︎?<\/a>/,"")}
    `,e.after(n)})})