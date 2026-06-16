import{a as u,S as f,i}from"./assets/vendor-r3xvX9o-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(a){return u.get(`https://pixabay.com/api/?key=56333257-5e55ad218ba23a27bfc212fa1&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`)}const l=document.querySelector(".gallery"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function d(){l.innerHTML=""}function y(a){const o=a.map(t=>`
      <li>
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>

        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),m.refresh()}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const o=c.elements["search-text"].value.trim();o&&(d(),p(o).then(t=>{const n=t.data.hits;if(n.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(n)}).catch(()=>{i.error({message:"Something went wrong. Try again!"})}))});
//# sourceMappingURL=index.js.map
