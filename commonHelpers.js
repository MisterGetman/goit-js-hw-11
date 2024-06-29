import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=t=>`<li class="gallery-item">
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
          </li>`;function u(t){return t.map(p).join("")}function f(t){const o="44691469-d7e9dab06c3e716fb34c6ceb9";return fetch(`https://pixabay.com/api?${(r=>new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}))(t).toString()}`)}const c=document.querySelector("form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader-wrapper"),g=t=>{t.preventDefault(),l.classList.toggle("hidden"),n.innerHTML="";const o=c.keyWord.value.trim();if(o==="")return;(()=>f(o).then(r=>r.json()).then(({hits:r})=>{r.length>0?(n.insertAdjacentHTML("afterbegin",u(r)),new d(".gallery a",{captionsData:"alt",captionDelay:250}).show()):m.show({title:"<b>Oops!</b>",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"tomato",position:"center"})}).catch(r=>console.log(r)).finally(()=>l.classList.toggle("hidden")))()};c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
