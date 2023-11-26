import{S as _,F as P,a as p}from"./assets/subscription-ad8fb349.js";import"./assets/vendor-bb007519.js";const n="/project-LET_US_CODE/assets/icons-b681127c.svg";function A(t){return t.map(({category:e,img:o,is10PercentOff:c,name:s,popularity:r,price:a,size:l,_id:g})=>`<li class="products-card-item" data-id="${g}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${s}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${s}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${l}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${r}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${a}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${n}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${n}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function I(t,e){t.innerHTML=A(e)}function j(t,e){t.innerHTML=R(e)}function M(t,e){t.innerHTML=D(e)}function R(t){return t.map(e=>{const{_id:o,name:c,img:s,category:r,size:a,popularity:l}=e;return`<li class="popular-item js-card-item" data-id="${o}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${s}"
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
            Category: <span class="popular-desc-span">${r}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${a}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${l}</span>
            </h4>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn js-add-btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="${n}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${n}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function D(t){return t.slice(0,2).map(o=>{const{_id:c,name:s,img:r,price:a}=o;return`<li class="discount-item" data-id="${c}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${r}"
            alt="${s}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text">${s}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${a}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${n}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${n}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${n}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const G="filter-storage",F="category-storage",N="product-storage",V="popularity-storage",H="discount-storage",U="shop-storage",z={keyword:null,category:null,page:1,limit:9},W=document.querySelector(".product-card-list"),Y=document.querySelector(".popular-list"),Q=document.querySelector(".discount-list"),J=document.querySelector(".content-wrapper"),K=document.querySelector(".js-header-navSpan"),y=new P,$=new p(G),X=new p(F),w=new p(N),S=new p(V),k=new p(H),m=new _(U);J.addEventListener("click",at);const Z=$.getItem??z;tt(Z);function tt(t){et(),ot(t),st(),ct()}C(m.getAllProducts());async function et(){try{const t=await y.getProductCategories();X.setValue(t)}catch(t){console.log(t)}finally{}}async function ot(t){try{const e=await y.getProducts(t);w.setValue(e),$.setValue(t),I(W,w.getValue().results)}catch(e){console.log(e)}finally{}}async function st(){try{const t=await y.getPopularProducts();S.setValue(t),j(Y,S.getValue())}catch(t){console.log(t)}finally{}}async function ct(){try{const t=await y.getDiscountedProducts();k.setValue(t),M(Q,k.getValue())}catch(t){console.log(t)}finally{}}async function rt(){const t=document.getElementsByClassName("js-card-item");console.log(t)}rt();function at(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if(nt(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const s=w.getValue().results,r=S.getValue(),a=k.getValue(),l=b(s,o),g=b(r,o),f=b(a,o);switch("object"){case typeof l:m.setProduct(l);break;case typeof g:m.setProduct(g);break;case typeof f:m.setProduct(f);break;default:alert("Нет таких значений")}C(m.getAllProducts()),console.log(o)}function nt(t){return m.getAllProducts().some(o=>o._id===t)}function b(t,e){return t.find(c=>c._id===e)}function C(t){let e=t.length;K.textContent=e}const u=new P;async function lt(){try{const t=await u.getProductCategories();console.log("productCategories",t);const e={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},o=await u.getProducts(e);console.log("products",o);const c="640c2dd963a319ea671e3676",s=await u.getProductDetails(c);console.log("productsDetails",s);const r=await u.getPopularProducts();console.log("popularProducts",r);const a=await u.getDiscountedProducts();console.log("discountedProducts",a);const l={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},g=await u.placeOrder(l);console.log("placeOrder",g);const f={email:"12345@cdfbgdfgbhdfgh.com"},q=await u.subscribeToNewsletter(f);console.log("subscribeToNewsletter",q)}catch(t){console.log("помилка",t.response.data.message)}finally{}}lt();const dt=document.querySelector(".product-card-list");dt.addEventListener("click",it);function it(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;pt(o)}else return}const v=document.querySelector(".modal-prod-wrapper"),ut="shop-storage";new p(ut);async function pt(t){console.log(t);const o=await new P().getProductDetails(t);gt(o)}async function gt(t){try{v.classList.add("modal-active"),document.body.classList.add("stop-scroll"),v.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${n}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <h2 class="modal-prod-name">${t.name}</h2>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Category: ${t.category}</h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Size: ${t.size}</h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Popularity: ${t.popularity}</h3>
    </li>
  </ul>
  <p class="modal-prod-desc">${t.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${t.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text" data-ation = ''>Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${n}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>addToCart(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>L()),window.addEventListener("click",x),window.addEventListener("keydown",O)}catch(e){console.error(e)}}function L(){v.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",x),window.removeEventListener("keydown",O)}function x(t){t.target===v&&L()}function O(t){t.keyCode===27&&L()}const d=document.querySelector(".custom-select-ctg"),mt=d.querySelector(".categories-btn"),ft=d.querySelectorAll(".text-options"),vt=d.querySelector(".selected-option");mt.addEventListener("click",()=>{d.classList.toggle("active")});ft.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;vt.value=e,d.classList.remove("active"),console.log(e)})});const i=document.querySelector(".custom-select-sort"),ht=i.querySelector(".sort-btn"),yt=i.querySelectorAll(".text-options-sort"),bt=i.querySelector(".selected-option");ht.addEventListener("click",()=>{i.classList.toggle("active")});yt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;bt.value=e,i.classList.remove("active")})});document.addEventListener("click",function(t){const e=d.contains(t.target),o=i.contains(t.target);e||d.classList.remove("active"),o||i.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(d.classList.remove("active"),i.classList.remove("active"))});const wt="shop-storage";new p(wt);const h=document.querySelector(".modal-order-wrap"),St=document.querySelector(".open");St.addEventListener("click",()=>kt());function kt(t){console.log(t),h.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),h.innerHTML=`
    <div class="modal-order-succ">
    <button type="button" class="modal-order-succ-btn">
      <svg class="modal-prod-close-icon">
        <use href="./img/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-prod-close-img-wrap">
      <img class="modal-prod-close-img" src="" alt="product picture" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="68"
        viewBox="0 0 185 68"
        fill="none"
        class="modal-prod-close-shadow"
      >
        <g filter="url(#filter0_f_185_1243)">
          <ellipse
            cx="92.5"
            cy="34"
            rx="72.5"
            ry="14"
            fill="#010101"
            fill-opacity="0.1"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_185_1243"
            x="0"
            y="0"
            width="185"
            height="68"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_185_1243"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <h2 class="modal-order-succ-title">Order success</h2>
    <p class="modal-order-succ-text">
      Thank you for shopping at Food Boutique. Your order has been received and
      is now being freshly prepared just for you! Get ready to indulge in
      nourishing goodness, delivered right to your doorstep. We're thrilled to
      be part of your journey to better health and happiness.
    </p>
  </div>
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",E),window.addEventListener("click",T),window.addEventListener("keydown",B)}function E(){h.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",T),window.removeEventListener("keydown",B)}function T(t){t.target===h&&E()}function B(t){t.keyCode===27&&E()}
//# sourceMappingURL=commonHelpers2.js.map
