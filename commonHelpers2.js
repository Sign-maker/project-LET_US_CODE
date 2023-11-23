import{S as d}from"./assets/local-storage-api-c1a4955d.js";import{a as n}from"./assets/vendor-a61d8330.js";n.defaults.baseURL="https://food-boutique.b.goit.study/api";class m{constructor(){}async getProductCategories(){const{data:s}=await n("/products/categories");return s}async getProducts(s){const{data:e}=await n("/products",{params:{...s}});return e}async getProductDetails(s){const{data:e}=await n(`/products/${s}`);return e}async getPopularProducts(){const{data:s}=await n("/products/popular");return s}async getDiscountedProducts(){const{data:s}=await n("/products/discount");return s}async subscribeToNewsletter(s){return await n.post("/subscription",s,{headers:{"Content-Type":"application/json"}})}async placeOrder(s){const{data:e}=await n.post("/orders",s,{headers:{"Content-Type":"application/json"}});return e}}function A(t){return t.map(({category:s,img:e,is10PercentOff:o,name:c,popularity:a,price:r,size:l,_id:g})=>`<li class="products-card-item" data-id="${g}">
                <a class="products-card-link" href="#"><img class="product-image" src="${e}" alt="${c}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${c}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${s}</span>Size:<span class="product-text-black"> ${l}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${a}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${r}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="./icons.svg#icon-shopping-cart"></use>

                            <use
                              href="./icons.svg#icon-check"
                              class="popular-desc-added is-hidden"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function x(t,s){t.innerHTML=A(s)}const E="filter-storage",O="category-storage",T="product-storage",$="popularity-storage",D="discount-storage",I="shop-storage",R={keyword:null,category:null,page:1,limit:9},q=document.querySelector(".product-card-list"),p=new m,y=new d(E),M=new d(O),f=new d(T),_=new d($),N=new d(D);new d(I);const G=y.getItem??R;H(G);function H(t){B(),j(t),F(),V()}async function B(){try{const t=await p.getProductCategories();M.setValue(t)}catch(t){console.log(t)}finally{}}async function j(t){try{const s=await p.getProducts(t);f.setValue(s),y.setValue(t),x(q,f.getValue().results)}catch(s){console.log(s)}finally{}}async function F(){try{const t=await p.getPopularProducts();_.setValue(t)}catch(t){console.log(t)}finally{}}async function V(){try{const t=await p.getDiscountedProducts();N.setValue(t)}catch(t){console.log(t)}finally{}}const i=new m;async function z(){try{const t=await i.getProductCategories();console.log("productCategories",t);const s={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},e=await i.getProducts(s);console.log("products",e);const o="640c2dd963a319ea671e3676",c=await i.getProductDetails(o);console.log("productsDetails",c);const a=await i.getPopularProducts();console.log("popularProducts",a);const r=await i.getDiscountedProducts();console.log("discountedProducts",r);const l={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},g=await i.placeOrder(l);console.log("placeOrder",g);const L={email:"test@gmail.com"},C=await i.subscribeToNewsletter(L);console.log("subscribeToNewsletter",C)}catch(t){console.log("помилка",t.response.data.message)}finally{}}z();const v=new m,b=document.querySelector(".popular-list"),w=document.querySelector(".discount-list");async function U(){try{const t=await v.getPopularProducts();P("popularProducts",t),b.innerHTML=W(t)}catch{}}U();async function K(){try{const t=await v.getDiscountedProducts();P("discountProducts",t),w.innerHTML=Q(t)}catch{}}K();b.addEventListener("click",Y);function Y(t){!t.target.closest("li")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}w.addEventListener("click",J);function J(t){!t.target.closest("li")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}function P(t,s){localStorage.setItem(`${t}`,JSON.stringify(s))}function W(t){return t.map(s=>{const{_id:e,name:o,img:c,category:a,size:r,popularity:l}=s;return`<li class="popular-item" data-id="${e}">
        <div class="popular-img-wrapper">
          <img
            src="${c}"
            alt="${o}"
            class="popular-img"
          />
        </div>
        <div class="popular-desc-wrapper">
          <h3 class="popular-desc-name">${o}</h3>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${a}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${r}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${l}</span>
            </h4>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="./icons.svg#icon-shopping-cart"
              class="popular-desc-basket "
            ></use>
            <use
              href="./icons.svg#icon-check"
              class="popular-desc-added is-hidden"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function Q(t){return t.slice(0,2).map(e=>{const{_id:o,name:c,img:a,price:r}=e;return`<li class="discount-item" data-id="${o}">
        <div class="discount-img-wrapper">
          <img
            src="${a}"
            alt="${c}"
            class="discount-img"
          />
        </div>
        <div class="discount-desc-wrapper">
          <p class="discount-desc-text">${c}</p>
          <div class="discount-box">
            <p class="discount-desc-text">$${r}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="./icons.svg#icon-shopping-cart"
                  class="discount-desc-basket is-hidden"
                ></use>
                <use
                  href="./icons.svg#icon-check"
                  class="discount-desc-added "
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="./icons.svg#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const u=document.querySelector(".modal-prod-wrapper");function X(t){console.log(t),u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
<div class="modal-prod-card">
<button type="button" class="modal-prod-close-btn">
  <svg class="modal-prod-close-icon" width="22" height="22">
    <use href="./img/icons.svg#icon-close"></use>
  </svg>
</button>
<div class="modal-prod-information-wrap">
<div class="modal-prod-img-wrap">   
    <img class="modal-prod-img" src="" alt="product picture" />
</div> 
<div class="modal-prod-name-wrap">
<h2 class="modal-prod-name">Pumpkin</h2>
<ul class="modal-prod-list">
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Category:</h3>
  </li>
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Size:</h3>
  </li>
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Popularity</h3>
  </li>
</ul>
<p class="modal-prod-desc">A round, orange vegetable with a thick shell and seeds inside. It is often used in cooking and baking for its sweet and earthy flavor.</p>
</div>
</div>
<div class="modal-prod-price-elem">
<p class="modal-prod-price">&#36;2.99</p>
<button class="modal-prod-add-btn">
    <p class="modal-prod-add-text">Add to </p>
    <svg class="modal-prod-basket-icon" >
      <use href="./img/icons.svg#icon-shopping-cart"></use>
    </svg>
</button>
</div>
</div>
`,document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",k),window.addEventListener("keydown",S)}function h(){u.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",k),window.removeEventListener("keydown",S)}function k(t){t.target===u&&h()}function S(t){t.keyCode===27&&h()}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".custom-select").forEach(s=>{const e=s.querySelector(".selected-option"),o=s.querySelector(".select-options"),c=o.querySelectorAll("li");e.addEventListener("click",function(){const a=this.getAttribute("aria-expanded")==="true"||!1;this.setAttribute("aria-expanded",!a),o.setAttribute("aria-hidden",a)}),c.forEach(a=>{a.addEventListener("click",function(){e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")}),a.addEventListener("keydown",function(r){(r.key==="Enter"||r.key===" ")&&(e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"))})}),s.addEventListener("blur",function(){e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")})})});document.querySelector(".modal-order-wrap");const Z=document.querySelector(".product-card-list");Z.addEventListener("click",tt);function tt(t){if(t.preventDefault(),t.target.nodeName==="IMG"||t.target.nodeName==="H4")X();else return}
//# sourceMappingURL=commonHelpers2.js.map
