import{S as n}from"./assets/local-storage-api-57177191.js";const m="shop-storage";new n(m);function f(t){return t.map(({category:c,img:r,is10PercentOff:u,name:a,price:o,size:d,_id:g})=>`<li class="cart-item" data-id="${g}">
      <img class="cart-img-product" src="${r}" alt="${a}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${a}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${c}</span>  Size: <span class="cart-text-black">${d}</span></p>
          <p class="cart-product-price">$${o}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}let e=[];const S=document.querySelector(".nav-span"),l=document.querySelector(".cart-list"),i=new n("shop-storage");l.addEventListener("click",b);function p(){JSON.parse(localStorage.getItem("shop-storage"));const t=[];t.push(i.getValue()),e=t,l.innerHTML=f(e),s(e),console.log("Total price:",s(e)??0),C(e.length)}p();function C(t){S.textContent=t}function s(t){if(t.length)return t.reduce((c,r)=>c+=r.price,0)}function b(t){if(!t.target.closest(".cart-product-close-btn"))return;const r=t.target.closest("li").dataset.id,a=(i.getValue()??[]).filter(o=>o._id!==r);localStorage.setItem("popularProducts",JSON.stringify(a)),p()}
//# sourceMappingURL=commonHelpers.js.map
