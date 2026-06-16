import{a as f,S as d,i}from"./assets/vendor-r3xvX9o-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(n){return f.get(`https://pixabay.com/api/?key=56333257-5e55ad218ba23a27bfc212fa1&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(){c.innerHTML=""}function g(n){const o=n.map(t=>`
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
    `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function h(){u.style.display="block"}function L(){u.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",n=>{n.preventDefault();const o=l.elements["search-text"].value.trim();o&&(y(),h(),p(o).then(t=>{const s=t.data.hits;if(s.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(s)}).catch(()=>{i.error({message:"Something went wrong. Try again!"})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
