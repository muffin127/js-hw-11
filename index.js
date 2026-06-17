import{a as f,S as d,i}from"./assets/vendor-CVWx-W0A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function p(n){return(await f.get(`https://pixabay.com/api/?key=56333257-5e55ad218ba23a27bfc212fa1&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`)).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(){l.innerHTML=""}function g(n){const o=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div>
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){u.style.display="block"}function L(){u.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",n=>{n.preventDefault();const o=c.elements["search-text"].value.trim();o&&(m(),h(),p(o).then(({hits:t})=>{if(t.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t)}).catch(()=>{i.error({message:"Something went wrong. Try again!"})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
