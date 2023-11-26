import{S as x,F as C,a as p}from"./assets/subscription-8d0b911f.js";import"./assets/vendor-bb007519.js";const a="/project-LET_US_CODE/assets/icons-b681127c.svg";function I(t){return t.map(({category:e,img:o,is10PercentOff:c,name:s,popularity:r,price:d,size:i,_id:g})=>`<li class="products-card-item" data-id="${g}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${s}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${s}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${i}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${r}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${a}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${a}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function R(t,e){t.innerHTML=I(e)}function j(t,e){t.innerHTML=G(e)}function M(t,e){t.innerHTML=F(e)}function G(t){return t.map(e=>{const{_id:o,name:c,img:s,category:r,size:d,popularity:i}=e;return`<li class="popular-item js-card-item" data-id="${o}">
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
              Size: <span class="popular-desc-span">${d}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${i}</span>
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
              href="${a}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${a}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function F(t){return t.slice(0,2).map(o=>{const{_id:c,name:s,img:r,price:d}=o;return`<li class="discount-item" data-id="${c}">
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
            <p class="discount-desc-text">$${d}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${a}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${a}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${a}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const V="filter-storage",H="category-storage",D="product-storage",N="popularity-storage",U="discount-storage",z="shop-storage",W={keyword:null,category:null,page:1,limit:9},Y=document.querySelector(".product-card-list"),Q=document.querySelector(".popular-list"),J=document.querySelector(".discount-list"),K=document.querySelector(".content-wrapper"),X=document.querySelector(".js-header-navSpan"),h=new C,_=new p(V),Z=new p(H),w=new p(D),k=new p(N),L=new p(U),u=new x(z);K.addEventListener("click",nt);const tt=_.getItem??W;et(tt);async function et(t){await ot(),await st(t),await ct(),await rt(),at()}O(u.getAllProducts());async function ot(){try{const t=await h.getProductCategories();Z.setValue(t)}catch(t){console.log(t)}finally{}}async function st(t){try{const e=await h.getProducts(t);w.setValue(e),_.setValue(t),R(Y,w.getValue().results)}catch(e){console.log(e)}finally{}}async function ct(){try{const t=await h.getPopularProducts();k.setValue(t),j(Q,k.getValue())}catch(t){console.log(t)}finally{}}async function rt(){try{const t=await h.getDiscountedProducts();L.setValue(t),M(J,L.getValue())}catch(t){console.log(t)}finally{}}async function at(){const t=document.querySelectorAll(".js-card-item");console.log(t)}function nt(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if(lt(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const s=w.getValue().results,r=k.getValue(),d=L.getValue(),i=y(s,o),g=y(r,o),$=y(d,o);switch("object"){case typeof i:u.setProduct(i);break;case typeof g:u.setProduct(g);break;case typeof $:u.setProduct($);break;default:alert("Нет таких значений")}O(u.getAllProducts()),console.log(o)}function lt(t){return u.getAllProducts().some(o=>o._id===t)}function y(t,e){return t.find(c=>c._id===e)}function O(t){let e=t.length;X.textContent=e}const dt=document.querySelector(".product-card-list");dt.addEventListener("click",it);function it(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;pt(o)}else return}const f=document.querySelector(".modal-prod-wrapper"),ut="shop-storage",m=new x(ut);async function pt(t){console.log(t);const o=await new C().getProductDetails(t);mt(o),gt(o)}function gt(t){const e=document.querySelector(".modal-prod-add-text"),o=t._id;m.getAllProducts().some(s=>s._id===o)?e.textContent="Remove from":e.textContent="Add to"}async function mt(t){try{f.classList.add("modal-active"),document.body.classList.add("stop-scroll"),f.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${a}#icon-close"></use>
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
        <use href="${a}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>ft(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>P()),window.addEventListener("click",T),window.addEventListener("keydown",q)}catch(e){console.error(e)}}function ft(t){const e=t._id,c=m.getAllProducts().some(r=>r._id===e),s=document.querySelector(".modal-prod-add-text");c?(s.textContent="Add to",m.removeProduct(e)):(s.textContent="Remove from",m.setProduct(t))}function P(){f.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",T),window.removeEventListener("keydown",q)}function T(t){t.target===f&&P()}function q(t){t.keyCode===27&&P()}const n=document.querySelector(".custom-select-ctg"),vt=n.querySelector(".categories-btn"),ht=n.querySelectorAll(".text-options"),yt=n.querySelector(".selected-option");vt.addEventListener("click",()=>{n.classList.toggle("active")});let S=null;ht.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;S&&(S.style.color="rgba(1, 1, 1, 0.5)"),yt.value=e,t.style.color="var(--text)",n.classList.remove("active"),console.log(e),S=t})});const l=document.querySelector(".custom-select-sort"),St=l.querySelector(".sort-btn"),bt=l.querySelectorAll(".text-options-sort"),wt=l.querySelector(".selected-option");St.addEventListener("click",()=>{l.classList.toggle("active")});let b=null;bt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;b&&(b.style.color="rgba(1, 1, 1, 0.5)"),wt.value=e,t.style.color="var(--text)",l.classList.remove("active"),console.log(e),b=t})});document.addEventListener("click",function(t){const e=n.contains(t.target),o=l.contains(t.target);e||n.classList.remove("active"),o||l.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(n.classList.remove("active"),l.classList.remove("active"))});const kt="shop-storage";new p(kt);const v=document.querySelector(".modal-order-wrap"),Lt=document.querySelector(".open");Lt.addEventListener("click",()=>Pt());function Pt(t){console.log(t),v.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),v.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",E),window.addEventListener("click",A),window.addEventListener("keydown",B)}function E(){v.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",A),window.removeEventListener("keydown",B)}function A(t){t.target===v&&E()}function B(t){t.keyCode===27&&E()}
//# sourceMappingURL=commonHelpers2.js.map
