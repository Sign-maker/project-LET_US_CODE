import{S as a}from"./assets/local-storage-api-57177191.js";import{a as r,S as w}from"./assets/vendor-bb007519.js";r.defaults.baseURL="https://food-boutique.b.goit.study/api";class h{constructor(){}async getProductCategories(){const{data:s}=await r("/products/categories");return s}async getProducts(s){const{data:e}=await r("/products",{params:{...s}});return e}async getProductDetails(s){const{data:e}=await r(`/products/${s}`);return e}async getPopularProducts(){const{data:s}=await r("/products/popular");return s}async getDiscountedProducts(){const{data:s}=await r("/products/discount");return s}async subscribeToNewsletter(s){return await r.post("/subscription",s,{headers:{"Content-Type":"application/json"}})}async placeOrder(s){const{data:e}=await r.post("/orders",s,{headers:{"Content-Type":"application/json"}});return e}}const O=new h,x=document.querySelector('form[name="email_address"]');x.addEventListener("submit",async function(t){t.preventDefault();const s=t.currentTarget.elements["footer-input-email"],e=s.value;try{await O.subscribeToNewsletter({email:e}),s.value="",w.fire({icon:"success",title:"Successfully subscribed!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}catch(c){console.error("Error:",c),w.fire({icon:"error",title:"Error",text:"There was an error subscribing. Please try again.",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}});const p="/project-LET_US_CODE/assets/icons-9e2cefcb.svg";function D(t){return t.map(({category:s,img:e,is10PercentOff:c,name:o,popularity:l,price:d,size:g,_id:v})=>`<li class="products-card-item" data-id="${v}">
                <a class="products-card-link" href="#"><img class="product-image" src="${e}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${s}</span>Size:<span class="product-text-black"> ${g}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${l}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${p}#icon-shopping-cart"></use>

                            <use
                              href="${p}#icon-check"
                              class="popular-desc-added is-hidden"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function A(t,s){t.innerHTML=D(s)}const q="filter-storage",I="category-storage",R="product-storage",M="popularity-storage",_="discount-storage",B="shop-storage",V={keyword:null,category:null,page:1,limit:9},N=document.querySelector(".product-card-list"),f=new h,S=new a(q),G=new a(I),b=new a(R),j=new a(M),H=new a(_);new a(B);const F=S.getItem??V;U(F);function U(t){z(),Y(t),K(),W()}async function z(){try{const t=await f.getProductCategories();G.setValue(t)}catch(t){console.log(t)}finally{}}async function Y(t){try{const s=await f.getProducts(t);b.setValue(s),S.setValue(t),A(N,b.getValue().results)}catch(s){console.log(s)}finally{}}async function K(){try{const t=await f.getPopularProducts();j.setValue(t)}catch(t){console.log(t)}finally{}}async function W(){try{const t=await f.getDiscountedProducts();H.setValue(t)}catch(t){console.log(t)}finally{}}const u=new h;async function J(){try{const t=await u.getProductCategories();console.log("productCategories",t);const s={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},e=await u.getProducts(s);console.log("products",e);const c="640c2dd963a319ea671e3676",o=await u.getProductDetails(c);console.log("productsDetails",o);const l=await u.getPopularProducts();console.log("popularProducts",l);const d=await u.getDiscountedProducts();console.log("discountedProducts",d);const g={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},v=await u.placeOrder(g);console.log("placeOrder",v);const $={email:"test@gmail.com"},T=await u.subscribeToNewsletter($);console.log("subscribeToNewsletter",T)}catch(t){console.log("помилка",t.response.data.message)}finally{}}J();const P=new a("discount-storage"),Q=new a("popularity-storage"),X=new a("shop-storage"),k=document.querySelector(".popular-list"),L=document.querySelector(".discount-list");k.addEventListener("click",st);L.addEventListener("click",et);Z(k,Q.getValue());tt(L,P.getValue());function Z(t,s){t.innerHTML=ct(s)}function tt(t,s){t.innerHTML=at(s)}function st(t){!t.target.closest("a")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}function et(t){if(!t.target.closest("button"))return;const e=t.target.closest("li").dataset.id,c=P.getValue(),o=ot(c,e);console.log(o),X.setValue(o),t.target.closest("button").classList.add("is-added")}function ot(t,s){return t.find(e=>e._id===s)}function ct(t){return t.map(s=>{const{_id:e,name:c,img:o,category:l,size:d,popularity:g}=s;return`<li class="popular-item" data-id="${e}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${c}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${c}</h3>
          </a>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${l}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${d}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${g}</span>
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
              href="${p}#icon-shopping-cart"
              class="popular-desc-basket is-hidden"
            ></use>
            <use
              href="${p}#icon-check"
              class="popular-desc-added "
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function at(t){return t.slice(0,2).map(e=>{const{_id:c,name:o,img:l,price:d}=e;return`<li class="discount-item" data-id="${c}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${l}"
            alt="${o}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text">${o}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${d}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${p}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${p}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${p}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const m=document.querySelector(".modal-prod-wrapper");function rt(t){console.log(t),m.classList.add("modal-active"),document.body.classList.add("stop-scroll"),m.innerHTML=`
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
`,document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>y()),window.addEventListener("click",C),window.addEventListener("keydown",E)}function y(){m.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",C),window.removeEventListener("keydown",E)}function C(t){t.target===m&&y()}function E(t){t.keyCode===27&&y()}const n=document.querySelector(".custom-select-ctg"),nt=n.querySelector(".categories-btn"),it=n.querySelectorAll(".text-options"),lt=n.querySelector(".selected-option");nt.addEventListener("click",()=>{n.classList.toggle("active")});it.forEach(t=>{t.addEventListener("click",()=>{let s=t.innerText;lt.value=s,n.classList.remove("active"),console.log(s)})});const i=document.querySelector(".custom-select-sort"),dt=i.querySelector(".sort-btn"),ut=i.querySelectorAll(".text-options-sort"),pt=i.querySelector(".selected-option");dt.addEventListener("click",()=>{i.classList.toggle("active")});ut.forEach(t=>{t.addEventListener("click",()=>{let s=t.innerText;pt.value=s,i.classList.remove("active")})});document.addEventListener("click",function(t){const s=n.contains(t.target),e=i.contains(t.target);s||n.classList.remove("active"),e||i.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(n.classList.remove("active"),i.classList.remove("active"))});document.querySelector(".modal-order-wrap");const gt=document.querySelector(".product-card-list");gt.addEventListener("click",mt);function mt(t){if(t.preventDefault(),t.target.nodeName==="IMG"||t.target.nodeName==="H4")rt();else return}
//# sourceMappingURL=commonHelpers2.js.map
