import{a}from"./assets/local-storage-api-d3a2026e.js";import{a as n,S as L}from"./assets/vendor-bb007519.js";n.defaults.baseURL="https://food-boutique.b.goit.study/api";class v{constructor(){}async getProductCategories(){const{data:e}=await n("/products/categories");return e}async getProducts(e){const{data:o}=await n("/products",{params:{...e}});return o}async getProductDetails(e){const{data:o}=await n(`/products/${e}`);return o}async getPopularProducts(){const{data:e}=await n("/products/popular");return e}async getDiscountedProducts(){const{data:e}=await n("/products/discount");return e}async subscribeToNewsletter(e){return await n.post("/subscription",e,{headers:{"Content-Type":"application/json"}})}async placeOrder(e){const{data:o}=await n.post("/orders",e,{headers:{"Content-Type":"application/json"}});return o}}const r="/project-LET_US_CODE/assets/icons-61f8b1ce.svg";function I(t){return t.map(({category:e,img:o,is10PercentOff:c,name:s,popularity:d,price:u,size:g,_id:h})=>`<li class="products-card-item" data-id="${h}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${s}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${s}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${g}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${d}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart"></use>

                            <use
                              href="${r}#icon-check"
                              class="popular-desc-added is-hidden"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function M(t,e){t.innerHTML=I(e)}const R="filter-storage",D="category-storage",G="product-storage",V="popularity-storage",F="discount-storage",H="shop-storage",j={keyword:null,category:null,page:1,limit:9},N=document.querySelector(".product-card-list"),y=new v,P=new a(R),U=new a(D),k=new a(G),z=new a(V),Y=new a(F);new a(H);const W=P.getItem??j;K(W);function K(t){J(),Q(t),X(),Z()}async function J(){try{const t=await y.getProductCategories();U.setValue(t)}catch(t){console.log(t)}finally{}}async function Q(t){try{const e=await y.getProducts(t);k.setValue(e),P.setValue(t),M(N,k.getValue().results)}catch(e){console.log(e)}finally{}}async function X(){try{const t=await y.getPopularProducts();z.setValue(t)}catch(t){console.log(t)}finally{}}async function Z(){try{const t=await y.getDiscountedProducts();Y.setValue(t)}catch(t){console.log(t)}finally{}}const p=new v;async function tt(){try{const t=await p.getProductCategories();console.log("productCategories",t);const e={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},o=await p.getProducts(e);console.log("products",o);const c="640c2dd963a319ea671e3676",s=await p.getProductDetails(c);console.log("productsDetails",s);const d=await p.getPopularProducts();console.log("popularProducts",d);const u=await p.getDiscountedProducts();console.log("discountedProducts",u);const g={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},h=await p.placeOrder(g);console.log("placeOrder",h);const q={email:"test@gmail.com"},A=await p.subscribeToNewsletter(q);console.log("subscribeToNewsletter",A)}catch(t){console.log("помилка",t.response.data.message)}finally{}}tt();const w=new a("discount-storage"),et=new a("popularity-storage"),E=new a("shop-storage"),C=document.querySelector(".popular-list"),$=document.querySelector(".discount-list");C.addEventListener("click",ct);$.addEventListener("click",at);ot(C,et.getValue());st($,w.getValue());function ot(t,e){t.innerHTML=rt(e)}function st(t,e){t.innerHTML=nt(e)}function ct(t){if(!t.target.closest("button"))return;const o=t.target.closest("li").dataset.id,c=w.getValue(),s=T(c,o);console.log(s),E.setValue(s),t.target.closest("button").classList.add("is-added"),t.target.closest("button").style.backgroundColor="#6d8434",console.dir("THIS IS FOR MODAL CLICK")}function at(t){if(!t.target.closest("button"))return;const o=t.target.closest("li").dataset.id,c=w.getValue(),s=T(c,o);console.log(s),E.setValue(s),t.target.closest("button").classList.add("is-added")}function T(t,e){return t.find(o=>o._id===e)}function rt(t){return t.map(e=>{const{_id:o,name:c,img:s,category:d,size:u,popularity:g}=e;return`<li class="popular-item" data-id="${o}">
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
            Category: <span class="popular-desc-span">${d}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${u}</span>
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
              href="${r}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${r}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function nt(t){return t.slice(0,2).map(o=>{const{_id:c,name:s,img:d,price:u}=o;return`<li class="discount-item" data-id="${c}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${d}"
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
            <p class="discount-desc-text">$${u}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${r}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${r}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const lt=document.querySelector(".product-card-list");lt.addEventListener("click",it);function it(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;ut(o)}else return}const m=document.querySelector(".modal-prod-wrapper"),dt="shop-storage";new a(dt);async function ut(t){console.log(t);const o=await new v().getProductDetails(t);pt(o)}async function pt(t){try{m.classList.add("modal-active"),document.body.classList.add("stop-scroll"),m.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-close"></use>
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
        <use href="${r}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>addToCart(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>b()),window.addEventListener("click",O),window.addEventListener("keydown",x)}catch(e){console.error(e)}}function b(){m.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",O),window.removeEventListener("keydown",x)}function O(t){t.target===m&&b()}function x(t){t.keyCode===27&&b()}const l=document.querySelector(".custom-select-ctg"),gt=l.querySelector(".categories-btn"),mt=l.querySelectorAll(".text-options"),ft=l.querySelector(".selected-option");gt.addEventListener("click",()=>{l.classList.toggle("active")});mt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;ft.value=e,l.classList.remove("active"),console.log(e)})});const i=document.querySelector(".custom-select-sort"),vt=i.querySelector(".sort-btn"),yt=i.querySelectorAll(".text-options-sort"),ht=i.querySelector(".selected-option");vt.addEventListener("click",()=>{i.classList.toggle("active")});yt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;ht.value=e,i.classList.remove("active")})});document.addEventListener("click",function(t){const e=l.contains(t.target),o=i.contains(t.target);e||l.classList.remove("active"),o||i.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(l.classList.remove("active"),i.classList.remove("active"))});const wt="shop-storage";new a(wt);const f=document.querySelector(".modal-order-wrap"),bt=document.querySelector(".open");bt.addEventListener("click",()=>St());function St(t){console.log(t),f.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),f.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",S),window.addEventListener("click",B),window.addEventListener("keydown",_)}function S(){f.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",B),window.removeEventListener("keydown",_)}function B(t){t.target===f&&S()}function _(t){t.keyCode===27&&S()}const Lt=new v,kt=document.querySelector('form[name="email_address"]');kt.addEventListener("submit",async function(t){t.preventDefault();const e=t.currentTarget.elements["footer-input-email"],o=e.value;try{await Lt.subscribeToNewsletter({email:o}),e.value="",L.fire({icon:"success",title:"Successfully subscribed!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}catch(c){console.error("Error:",c),L.fire({icon:"error",title:"Error",text:"There was an error subscribing. Please try again.",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}});
//# sourceMappingURL=commonHelpers2.js.map
