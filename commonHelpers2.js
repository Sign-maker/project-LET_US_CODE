import{S as n}from"./assets/local-storage-api-09954bfa.js";import{a as d}from"./assets/vendor-a61d8330.js";d.defaults.baseURL="https://food-boutique.b.goit.study/api";class b{constructor(){}async getProductCategories(){const{data:s}=await d("/products/categories");return s}async getProducts(s){const{data:e}=await d("/products",{params:{...s}});return e}async getProductDetails(s){const{data:e}=await d(`/products/${s}`);return e}async getPopularProducts(){const{data:s}=await d("/products/popular");return s}async getDiscountedProducts(){const{data:s}=await d("/products/discount");return s}async subscribeToNewsletter(s){return await d.post("/subscription",s,{headers:{"Content-Type":"application/json"}})}async placeOrder(s){const{data:e}=await d.post("/orders",s,{headers:{"Content-Type":"application/json"}});return e}}const l="/project-LET_US_CODE/assets/icons-9e2cefcb.svg";function $(t){return t.map(({category:s,img:e,is10PercentOff:o,name:a,popularity:c,price:r,size:u,_id:m})=>`<li class="products-card-item" data-id="${m}">
                <a class="products-card-link" href="#"><img class="product-image" src="${e}" alt="${a}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${a}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${s}</span>Size:<span class="product-text-black"> ${u}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${c}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${r}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${l}#icon-shopping-cart"></use>

                            <use
                              href="${l}#icon-check"
                              class="popular-desc-added is-hidden"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function E(t,s){t.innerHTML=$(s)}const A="filter-storage",x="category-storage",T="product-storage",O="popularity-storage",D="discount-storage",R="shop-storage",q={keyword:null,category:null,page:1,limit:9},I=document.querySelector(".product-card-list"),g=new b,y=new n(A),_=new n(x),f=new n(T),M=new n(O),V=new n(D);new n(R);const G=y.getItem??q;N(G);function N(t){j(),H(t),B(),F()}async function j(){try{const t=await g.getProductCategories();_.setValue(t)}catch(t){console.log(t)}finally{}}async function H(t){try{const s=await g.getProducts(t);f.setValue(s),y.setValue(t),E(I,f.getValue().results)}catch(s){console.log(s)}finally{}}async function B(){try{const t=await g.getPopularProducts();M.setValue(t)}catch(t){console.log(t)}finally{}}async function F(){try{const t=await g.getDiscountedProducts();V.setValue(t)}catch(t){console.log(t)}finally{}}const i=new b;async function U(){try{const t=await i.getProductCategories();console.log("productCategories",t);const s={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},e=await i.getProducts(s);console.log("products",e);const o="640c2dd963a319ea671e3676",a=await i.getProductDetails(o);console.log("productsDetails",a);const c=await i.getPopularProducts();console.log("popularProducts",c);const r=await i.getDiscountedProducts();console.log("discountedProducts",r);const u={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},m=await i.placeOrder(u);console.log("placeOrder",m);const L={email:"test@gmail.com"},C=await i.subscribeToNewsletter(L);console.log("subscribeToNewsletter",C)}catch(t){console.log("помилка",t.response.data.message)}finally{}}U();const v=new n("discount-storage"),z=new n("popularity-storage"),Y=new n("shop-storage"),w=document.querySelector(".popular-list"),P=document.querySelector(".discount-list");w.addEventListener("click",J);P.addEventListener("click",Q);K(w,z.getValue());W(P,v.getValue());function K(t,s){t.innerHTML=Z(s)}function W(t,s){t.innerHTML=tt(s)}function J(t){!t.target.closest("a")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}function Q(t){if(!t.target.closest("button"))return;const e=t.target.closest("li").dataset.id,o=v.getValue(),a=X(o,e);console.log(a),Y.setValue(a),t.target.closest("button").classList.add("is-added")}function X(t,s){return t.find(e=>e._id===s)}function Z(t){return t.map(s=>{const{_id:e,name:o,img:a,category:c,size:r,popularity:u}=s;return`<li class="popular-item" data-id="${e}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${a}"
            alt="${o}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${o}</h3>
          </a>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${c}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${r}</span>
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
            <use
              href="${l}#icon-shopping-cart"
              class="popular-desc-basket is-hidden"
            ></use>
            <use
              href="${l}#icon-check"
              class="popular-desc-added "
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function tt(t){return t.slice(0,2).map(e=>{const{_id:o,name:a,img:c,price:r}=e;return`<li class="discount-item" data-id="${o}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${c}"
            alt="${a}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text">${a}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${r}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${l}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${l}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${l}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const p=document.querySelector(".modal-prod-wrapper");function st(t){console.log(t),p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
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
`,document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",k),window.addEventListener("keydown",S)}function h(){p.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",k),window.removeEventListener("keydown",S)}function k(t){t.target===p&&h()}function S(t){t.keyCode===27&&h()}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".custom-select").forEach(s=>{const e=s.querySelector(".selected-option"),o=s.querySelector(".select-options"),a=o.querySelectorAll("li");e.addEventListener("click",function(){const c=this.getAttribute("aria-expanded")==="true"||!1;this.setAttribute("aria-expanded",!c),o.setAttribute("aria-hidden",c)}),a.forEach(c=>{c.addEventListener("click",function(){e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")}),c.addEventListener("keydown",function(r){(r.key==="Enter"||r.key===" ")&&(e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"))})}),s.addEventListener("blur",function(){e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")})})});document.querySelector(".modal-order-wrap");const et=document.querySelector(".product-card-list");et.addEventListener("click",ot);function ot(t){if(t.preventDefault(),t.target.nodeName==="IMG"||t.target.nodeName==="H4")st();else return}
//# sourceMappingURL=commonHelpers2.js.map
