import"./assets/styles-b7f1743f.js";function d(t){return t.map(({category:e,img:r,is10PercentOff:i,name:a,price:o,size:u,_id:p})=>`<li class="cart-item" data-id="${p}">
      <img class="cart-img-product" src="${r}" alt="${a}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${a}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${e}</span>  Size: <span class="cart-text-black">${u}</span></p>
          <p class="cart-product-price">$${o}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}let c=[];const g=document.querySelector(".nav-span"),n=document.querySelector(".cart-list");n.addEventListener("click",f);function l(){c=JSON.parse(localStorage.getItem("popularProducts"))??[],n.innerHTML=d(c),s(c),console.log("Total price:",s(c)??0),m(c.length)}l();function m(t){g.textContent=t}function s(t){if(t.length)return t.reduce((e,r)=>e+=r.price,0)}function f(t){if(!t.target.closest(".cart-product-close-btn"))return;const r=t.target.closest("li").dataset.id,a=(JSON.parse(localStorage.getItem("popularProducts"))??[]).filter(o=>o._id!==r);localStorage.setItem("popularProducts",JSON.stringify(a)),l()}
//# sourceMappingURL=commonHelpers.js.map
