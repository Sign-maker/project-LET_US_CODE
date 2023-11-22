import"./assets/styles-2ce34a97.js";import{a}from"./assets/vendor-a61d8330.js";a.defaults.baseURL="https://food-boutique.b.goit.study/api";class d{constructor(){}async getProductCategories(){const{data:s}=await a("/products/categories");return s}async getProducts(s){const{data:o}=await a("/products",{params:{...s}});return o}async getProductDetails(s){const{data:o}=await a(`/products/${s}`);return o}async getPopularProducts(){const{data:s}=await a("/products/popular");return s}async getDiscountedProducts(){const{data:s}=await a("/products/discount");return s}async subscribeToNewsletter(s){return await a.post("/subscription",s,{headers:{"Content-Type":"application/json"}})}async placeOrder(s){const{data:o}=await a.post("/orders",s,{headers:{"Content-Type":"application/json"}});return o}}const c=new d;async function b(){try{const t=await c.getProductCategories();console.log("productCategories",t);const s={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},o=await c.getProducts(s);console.log("products",o);const e="640c2dd963a319ea671e3676",r=await c.getProductDetails(e);console.log("productsDetails",r);const i=await c.getPopularProducts();console.log("popularProducts",i);const n=await c.getDiscountedProducts();console.log("discountedProducts",n);const u={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},l=await c.placeOrder(u);console.log("placeOrder",l);const g={email:"test@gmail.com"},m=await c.subscribeToNewsletter(g);console.log("subscribeToNewsletter",m)}catch{}finally{}}b();const p=new d,h=document.querySelector(".popular-list"),y=document.querySelector(".discount-list");async function P(){try{const t=await p.getPopularProducts();h.innerHTML=v(t)}catch{}}P();async function w(){try{const t=await p.getDiscountedProducts();y.innerHTML=f(t)}catch{}}w();function v(t){return t.map(s=>{const{_id:o,name:e,img:r,category:i,size:n,popularity:u}=s;return`<li class="popular-item" id="${o}">
        <div class="popular-img-wrapper">
          <img
            src="${r}"
            alt="${e}"
            class="popular-img"
          />
        </div>
        <div class="popular-desc-wrapper">
          <h3 class="popular-desc-name">${e}</h3>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${i}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${n}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${u}</span>
            </h4>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <!-- href="/ice-cream/icons.0b4e5a1c.svg#icon-arrow-right" -->
            <use
              href="../img/icons.svg#icon-shopping-cart"
              class="popular-desc-basket "
            ></use>
            <use
              href="./img/icons.svg#icon-check"
              class="popular-desc-added is-hidden"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function f(t){return t.slice(0,2).map(o=>{const{_id:e,name:r,img:i,price:n}=o;return`<li class="discount-item" id="${e}">
        <div class="discount-img-wrapper">
          <img
            src="${i}"
            alt="${r}"
            class="discount-img"
          />
        </div>
        <div class="discount-desc-wrapper">
          <p class="discount-desc-text">${r}</p>
          <div class="discount-box">
            <p class="discount-desc-text">$${n}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="../img/icons.svg#icon-shopping-cart"
                  class="discount-desc-basket is-hidden"
                ></use>
                <use
                  href="./img/icons.svg#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="../img/icons.svg#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}
//# sourceMappingURL=commonHelpers2.js.map
