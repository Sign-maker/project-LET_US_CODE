import{S as i}from"./assets/local-storage-api-3eaa9f8b.js";const m="shop-storage";new i(m);const y=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0}];function l(t){return t.map(({category:a,img:e,name:c,price:o,size:s,_id:u})=>`<li class="cart-item" data-id="${u}">
      <img class="cart-img-product" src="${e}" alt="${c}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${c}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${a}</span>  Size: <span class="cart-text-black">${s}</span></p>
          <p class="cart-product-price">$${o}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}const f=document.querySelector(".cart-list");f.innerHTML=l(y);let r=[];const S=document.querySelector(".nav-span"),p=document.querySelector(".cart-list"),d=new i("shop-storage");p.addEventListener("click",C);function g(){JSON.parse(localStorage.getItem("shop-storage"));const t=[];t.push(d.getValue()),r=t,p.innerHTML=l(r),n(r),console.log("Total price:",n(r)??0),h(r.length)}g();function h(t){S.textContent=t}function n(t){if(t.length)return t.reduce((a,e)=>a+=e.price,0)}function C(t){if(!t.target.closest(".cart-product-close-btn"))return;const e=t.target.closest("li").dataset.id,o=(d.getValue()??[]).filter(s=>s._id!==e);localStorage.setItem("popularProducts",JSON.stringify(o)),g()}
//# sourceMappingURL=commonHelpers.js.map
