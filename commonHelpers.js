import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p=t=>`<li class="gallery-item">
            <a href="${t.largeImageURL}">
              <img
                class="gallery-item-img"
                src="${t.webformatURL}"
                alt="${t.tags}"
                width="360"
              />
            </a>
            <ul class="img-info-list">
              <li>
                <p class="img-data-name">Likes</p>
                <p class="img-data">${t.likes}</p>
              </li>
              <li>
                <p class="img-data-name">Views</p>
                <p class="img-data">${t.views}</p>
              </li>
              <li>
                <p class="img-data-name">Comments</p>
                <p class="img-data">${t.comments}</p>
              </li>
              <li>
                <p class="img-data-name">Downloads</p>
                <p class="img-data">${t.downloads}</p>
              </li>
            </ul>
          </li>`;function u(t){return t.map(p).join("")}function f(t){const a="44691469-d7e9dab06c3e716fb34c6ceb9";return fetch(`https://pixabay.com/api?${(r=>new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}))(t).toString()}`)}const n=document.querySelector("form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper"),g=t=>{t.preventDefault(),d.classList.toggle("hidden"),c.innerHTML="";const a=n.keyWord.value.trim();if(a==="")return;(()=>f(a).then(r=>r.json()).then(({hits:r})=>{r.length>0?(c.insertAdjacentHTML("afterbegin",u(r)),new m(".gallery a",{captionsData:"alt",captionDelay:250}).show()):l.show({title:"<b>Oops!</b>",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"tomato",position:"center"})}).catch(r=>l.show({title:"<b>Error:</b>",message:r,backgroundColor:"tomato",position:"center"})).finally(()=>{d.classList.toggle("hidden"),n.keyWord.value=""}))()};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
