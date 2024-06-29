import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const p=e=>`<li class="gallery-item">
            <a href="${e.largeImageURL}">
              <img
                class="gallery-item-img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                width="360"
              />
            </a>
            <ul class="img-info-list">
              <li>
                <p class="img-data-name">Likes</p>
                <p class="img-data">${e.likes}</p>
              </li>
              <li>
                <p class="img-data-name">Views</p>
                <p class="img-data">${e.views}</p>
              </li>
              <li>
                <p class="img-data-name">Comments</p>
                <p class="img-data">${e.comments}</p>
              </li>
              <li>
                <p class="img-data-name">Downloads</p>
                <p class="img-data">${e.downloads}</p>
              </li>
            </ul>
          </li>`;function u(e){return e.map(p).join("")}function f(e){if(e==="")return Promise.reject("Input can not be blank.");const o="44691469-d7e9dab06c3e716fb34c6ceb9";return fetch(`https://pixabay.com/api?${(r=>new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}))(e).toString()}`)}const n=document.querySelector("form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),y=e=>{e.preventDefault(),d.classList.toggle("hidden"),c.innerHTML="";const o=n.keyWord.value.trim();(()=>f(o).then(r=>r.json()).then(({hits:r})=>{r.length>0?(c.insertAdjacentHTML("afterbegin",u(r)),g.refresh()):l.show({title:"<b>Oops!</b>",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"tomato",position:"center"})}).catch(r=>{l.show({title:"<b>Error:</b>",message:r,backgroundColor:"tomato",position:"center"})}).finally(()=>{d.classList.toggle("hidden"),n.keyWord.value=""}))()};n.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
