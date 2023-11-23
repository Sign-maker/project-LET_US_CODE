import"./assets/styles-4d2a7aff.js";const e=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0}];function p(t){return t.map(({category:s,img:r,is10PercentOff:l,name:a,price:i,size:o,_id:n})=>`<li class="cart-item" data-id="${n}">
      <img class="cart-img-product" src="${r}" alt="${a}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${a}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${s}</span>  Size: <span class="cart-text-black">${o}</span></p>
          <p class="cart-product-price">$${i}</p>
      </div>
      <button class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}const c=document.querySelector(".cart-list");c.innerHTML=p(e);console.log(e.length>3);function d(t){t.length>3&&(c.style.oveflow="overlay")}d(e);
//# sourceMappingURL=commonHelpers.js.map
