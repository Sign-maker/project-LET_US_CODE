import{S as C,F as _,a as p}from"./assets/subscription-8d0b911f.js";import"./assets/vendor-bb007519.js";const n="/project-LET_US_CODE/assets/icons-b681127c.svg";function G(t){return t.map(({category:e,img:o,is10PercentOff:r,name:s,popularity:c,price:a,size:u,_id:m})=>`<li class="products-card-item js-card-item" data-id="${m}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${s}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${s}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${u}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${c}</span></p></li>
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
            </li>`).join("")}function V(t,e){t.innerHTML=G(e)}function H(t,e){t.innerHTML=N(e)}function D(t,e){t.innerHTML=U(e)}function N(t){return t.map(e=>{const{_id:o,name:r,img:s,category:c,size:a,popularity:u}=e;return`<li class="popular-item js-card-item" data-id="${o}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${s}"
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
            Category: <span class="popular-desc-span">${c}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${a}</span>
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
              href="${n}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${n}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function U(t){return t.slice(0,2).map(o=>{const{_id:r,name:s,img:c,price:a}=o;return`<li class="discount-item js-card-item" data-id="${r}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${c}"
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
      </li>`}).join("")}const z="filter-storage",W="category-storage",Y="product-storage",Q="popularity-storage",J="discount-storage",K="shop-storage",X={keyword:null,category:null,page:1,limit:9},Z=document.querySelector(".product-card-list"),tt=document.querySelector(".popular-list"),et=document.querySelector(".discount-list"),ot=document.querySelector(".content-wrapper"),st=document.querySelector(".js-header-navSpan"),h=new _,O=new p(z),ct=new p(W),w=new p(Y),k=new p(Q),L=new p(J),i=new C(K);let A;ot.addEventListener("click",mt);const rt=O.getItem??X;at(rt);async function at(t){await nt(),await dt(t),await lt(),await it(),A=ut()}q(i.getAllProducts());async function nt(){try{const t=await h.getProductCategories();ct.setValue(t)}catch(t){console.log(t)}finally{}}async function dt(t){try{const e=await h.getProducts(t);w.setValue(e),O.setValue(t),V(Z,w.getValue().results)}catch(e){console.log(e)}finally{}}async function lt(){try{const t=await h.getPopularProducts();k.setValue(t),H(tt,k.getValue())}catch(t){console.log(t)}finally{}}async function it(){try{const t=await h.getDiscountedProducts();L.setValue(t),D(et,L.getValue())}catch(t){console.log(t)}finally{}}function ut(){const t=document.querySelectorAll(".js-card-item");return pt(t),t}function pt(t){return[...t].filter(o=>i.getAllProducts().map(s=>{if(o.dataset.id===s._id){const c=document.querySelectorAll(`[data-id="${s._id}"] .js-add-btn`);typeof c=="object"?[...c].map(a=>(a.classList.contains("popular-btn")&&(a.style.backgroundColor="#6d8434"),a.classList.add("is-added"))):(c.classList.contains("popular-btn")&&(c.style.backgroundColor="#6d8434"),c.classList.add("is-added"))}}))}function mt(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if(gt(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const s=w.getValue().results,c=k.getValue(),a=L.getValue(),u=y(s,o),m=y(c,o),$=y(a,o);switch("object"){case typeof u:i.setProduct(u);break;case typeof m:i.setProduct(m);break;case typeof $:i.setProduct($);break;default:alert("Нет таких значений")}q(i.getAllProducts());function R(M,F){return[...F].forEach(x=>{x.dataset.id===M&&x.classList.add("is-added")})}R(o,A)}function gt(t){return i.getAllProducts().some(o=>o._id===t)}function y(t,e){return t.find(r=>r._id===e)}function q(t){let e=t.length;st.textContent=e}const ft=document.querySelector(".product-card-list");ft.addEventListener("click",vt);function vt(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;yt(o)}else return}const f=document.querySelector(".modal-prod-wrapper"),ht="shop-storage",g=new C(ht);async function yt(t){console.log(t);const o=await new _().getProductDetails(t);St(o),bt(o)}function bt(t){const e=document.querySelector(".modal-prod-add-text"),o=t._id;g.getAllProducts().some(s=>s._id===o)?e.textContent="Remove from":e.textContent="Add to"}async function St(t){try{f.classList.add("modal-active"),document.body.classList.add("stop-scroll"),f.innerHTML=`
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
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${n}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>wt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>P()),window.addEventListener("click",T),window.addEventListener("keydown",B)}catch(e){console.error(e)}}function wt(t){const e=t._id,r=g.getAllProducts().some(c=>c._id===e),s=document.querySelector(".modal-prod-add-text");r?(s.textContent="Add to",g.removeProduct(e)):(s.textContent="Remove from",g.setProduct(t))}function P(){f.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",T),window.removeEventListener("keydown",B)}function T(t){t.target===f&&P()}function B(t){t.keyCode===27&&P()}const d=document.querySelector(".custom-select-ctg"),kt=d.querySelector(".categories-btn"),Lt=d.querySelectorAll(".text-options"),Pt=d.querySelector(".selected-option");kt.addEventListener("click",()=>{d.classList.toggle("active")});let b=null;Lt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;b&&(b.style.color="rgba(1, 1, 1, 0.5)"),Pt.value=e,t.style.color="var(--text)",d.classList.remove("active"),console.log(e),b=t})});const l=document.querySelector(".custom-select-sort"),Et=l.querySelector(".sort-btn"),$t=l.querySelectorAll(".text-options-sort"),xt=l.querySelector(".selected-option");Et.addEventListener("click",()=>{l.classList.toggle("active")});let S=null;$t.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;S&&(S.style.color="rgba(1, 1, 1, 0.5)"),xt.value=e,t.style.color="var(--text)",l.classList.remove("active"),console.log(e),S=t})});document.addEventListener("click",function(t){const e=d.contains(t.target),o=l.contains(t.target);e||d.classList.remove("active"),o||l.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(d.classList.remove("active"),l.classList.remove("active"))});const Ct="shop-storage";new p(Ct);const v=document.querySelector(".modal-order-wrap"),_t=document.querySelector(".open");_t.addEventListener("click",()=>Ot());function Ot(t){console.log(t),v.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),v.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",E),window.addEventListener("click",I),window.addEventListener("keydown",j)}function E(){v.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",I),window.removeEventListener("keydown",j)}function I(t){t.target===v&&E()}function j(t){t.keyCode===27&&E()}
//# sourceMappingURL=commonHelpers2.js.map
