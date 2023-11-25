import{S as u,a as m}from"./assets/local-storage-api-e7e78594.js";const y="shop-storage";new u(y);const f=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0}];function i(t){return t.map(({category:r,img:e,name:c,price:o,size:s,_id:g})=>`<li class="cart-item" data-id="${g}">
      <img class="cart-img-product" src="${e}" alt="${c}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${c}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${r}</span>  Size: <span class="cart-text-black">${s}</span></p>
          <p class="cart-product-price">$${o}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}const S=document.querySelector(".cart-list");S.innerHTML=i(f);let a=[];const h=document.querySelector(".nav-span"),l=document.querySelector(".cart-list"),p=new m("shop-storage");l.addEventListener("click",P);function d(){JSON.parse(localStorage.getItem("shop-storage"));const t=[];t.push(p.getValue()),a=t,l.innerHTML=i(a),n(a),console.log("Total price:",n(a)??0),C(a.length)}d();function C(t){h.textContent=t}function n(t){if(t.length)return t.reduce((r,e)=>r+=e.price,0)}function P(t){if(!t.target.closest(".cart-product-close-btn"))return;const e=t.target.closest("li").dataset.id,o=(p.getValue()??[]).filter(s=>s._id!==e);localStorage.setItem("popularProducts",JSON.stringify(o)),d()}
//# sourceMappingURL=commonHelpers.js.map
