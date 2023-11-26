import{S as B,F as $,a as i}from"./assets/subscription-8d0b911f.js";import"./assets/vendor-bb007519.js";const c="/project-LET_US_CODE/assets/icons-b681127c.svg";function A(t){return t.map(({category:e,img:s,is10PercentOff:r,name:o,popularity:l,price:d,size:u,_id:g})=>`<li class="products-card-item" data-id="${g}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${u}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${l}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${c}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${c}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function j(t,e){t.innerHTML=A(e)}function M(t,e){t.innerHTML=I(e)}function R(t,e){t.innerHTML=G(e)}function I(t){return t.map(e=>{const{_id:s,name:r,img:o,category:l,size:d,popularity:u}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${r}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${r}</h3>
          </a>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${l}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${d}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${u}</span>
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
              href="${c}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${c}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function G(t){return t.slice(0,2).map(s=>{const{_id:r,name:o,img:l,price:d}=s;return`<li class="discount-item" data-id="${r}">
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
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${c}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${c}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${c}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const F="filter-storage",V="category-storage",H="product-storage",D="popularity-storage",N="discount-storage",U="shop-storage",z={keyword:null,category:null,page:1,limit:9},W=document.querySelector(".product-card-list"),Y=document.querySelector(".popular-list"),Q=document.querySelector(".discount-list"),J=document.querySelector(".content-wrapper"),K=document.querySelector(".js-header-navSpan"),v=new $,x=new i(F),X=new i(V),S=new i(H),w=new i(D),k=new i(N),p=new B(U);J.addEventListener("click",at);const Z=x.getItem??z;tt(Z);async function tt(t){await et(),await st(t),await ot(),await ct(),rt()}O(p.getAllProducts());async function et(){try{const t=await v.getProductCategories();X.setValue(t)}catch(t){console.log(t)}finally{}}async function st(t){try{const e=await v.getProducts(t);S.setValue(e),x.setValue(t),j(W,S.getValue().results)}catch(e){console.log(e)}finally{}}async function ot(){try{const t=await v.getPopularProducts();w.setValue(t),M(Y,w.getValue())}catch(t){console.log(t)}finally{}}async function ct(){try{const t=await v.getDiscountedProducts();k.setValue(t),R(Q,k.getValue())}catch(t){console.log(t)}finally{}}async function rt(){const t=document.querySelectorAll(".js-card-item");console.log(t)}function at(t){if(!t.target.closest(".js-add-btn"))return;const s=t.target.closest("li").dataset.id;if(nt(s))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const o=S.getValue().results,l=w.getValue(),d=k.getValue(),u=h(o,s),g=h(l,s),E=h(d,s);switch("object"){case typeof u:p.setProduct(u);break;case typeof g:p.setProduct(g);break;case typeof E:p.setProduct(E);break;default:alert("Нет таких значений")}O(p.getAllProducts()),console.log(s)}function nt(t){return p.getAllProducts().some(s=>s._id===t)}function h(t,e){return t.find(r=>r._id===e)}function O(t){let e=t.length;K.textContent=e}const lt=document.querySelector(".product-card-list");lt.addEventListener("click",dt);function dt(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const s=e.closest(".products-card-item").dataset.id;ut(s)}else return}const m=document.querySelector(".modal-prod-wrapper"),it="shop-storage";new i(it);async function ut(t){console.log(t);const s=await new $().getProductDetails(t);pt(s)}async function pt(t){try{m.classList.add("modal-active"),document.body.classList.add("stop-scroll"),m.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${c}#icon-close"></use>
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
        <use href="${c}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>addToCart(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>L()),window.addEventListener("click",C),window.addEventListener("keydown",T)}catch(e){console.error(e)}}function L(){m.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",C),window.removeEventListener("keydown",T)}function C(t){t.target===m&&L()}function T(t){t.keyCode===27&&L()}const a=document.querySelector(".custom-select-ctg"),gt=a.querySelector(".categories-btn"),mt=a.querySelectorAll(".text-options"),ft=a.querySelector(".selected-option");gt.addEventListener("click",()=>{a.classList.toggle("active")});let y=null;mt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;y&&(y.style.color="rgba(1, 1, 1, 0.5)"),ft.value=e,t.style.color="var(--text)",a.classList.remove("active"),console.log(e),y=t})});const n=document.querySelector(".custom-select-sort"),vt=n.querySelector(".sort-btn"),ht=n.querySelectorAll(".text-options-sort"),yt=n.querySelector(".selected-option");vt.addEventListener("click",()=>{n.classList.toggle("active")});let b=null;ht.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;b&&(b.style.color="rgba(1, 1, 1, 0.5)"),yt.value=e,t.style.color="var(--text)",n.classList.remove("active"),console.log(e),b=t})});document.addEventListener("click",function(t){const e=a.contains(t.target),s=n.contains(t.target);e||a.classList.remove("active"),s||n.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(a.classList.remove("active"),n.classList.remove("active"))});const bt="shop-storage";new i(bt);const f=document.querySelector(".modal-order-wrap"),St=document.querySelector(".open");St.addEventListener("click",()=>wt());function wt(t){console.log(t),f.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),f.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",P),window.addEventListener("click",q),window.addEventListener("keydown",_)}function P(){f.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",q),window.removeEventListener("keydown",_)}function q(t){t.target===f&&P()}function _(t){t.keyCode===27&&P()}
//# sourceMappingURL=commonHelpers2.js.map
