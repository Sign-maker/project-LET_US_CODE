import{S as l}from"./assets/subscription-ca120d78.js";import"./assets/vendor-bb007519.js";const g="shop-storage";new l(g);function m(t){return t.map(({category:r,img:e,name:c,price:n,size:u,_id:p})=>`<li class="cart-item" data-id="${p}">
      <img class="cart-img-product" src="${e}" alt="${c}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${c}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${r}</span>  Size: <span class="cart-text-black">${u}</span></p>
          <p class="cart-product-price">$${n}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}let o=[];const S=document.querySelector(".nav-span"),s=document.querySelector(".cart-list"),a=new l("shop-storage");s.addEventListener("click",h);const f=document.querySelector(".js-delete-all-btn");f.addEventListener("click",()=>{s.innerHTML="",a.removeAllProducts(),d(0)});function i(){o=a.getAllProducts()??[],s.innerHTML=m(o),b(o),d(o.length)}i();function d(t){S.textContent=t}function b(t){if(t.length)return t.reduce((r,e)=>r+=e.price,0)}function h(t){if(!t.target.closest(".cart-product-close-btn"))return;const e=t.target.closest("li").dataset.id,c=a.getAllProducts().filter(n=>n._id!==e);a.setAllProduct(c),i()}
//# sourceMappingURL=commonHelpers.js.map
