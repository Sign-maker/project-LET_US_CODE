import{S as I,a as p}from"./assets/local-storage-api-545a95e4.js";import{a as i,S as C}from"./assets/vendor-bb007519.js";i.defaults.baseURL="https://food-boutique.b.goit.study/api";class w{constructor(){}async getProductCategories(){const{data:e}=await i("/products/categories");return e}async getProducts(e){const{data:o}=await i("/products",{params:{...e}});return o}async getProductDetails(e){const{data:o}=await i(`/products/${e}`);return o}async getPopularProducts(){const{data:e}=await i("/products/popular");return e}async getDiscountedProducts(){const{data:e}=await i("/products/discount");return e}async subscribeToNewsletter(e){return await i.post("/subscription",e,{headers:{"Content-Type":"application/json"}})}async placeOrder(e){const{data:o}=await i.post("/orders",e,{headers:{"Content-Type":"application/json"}});return o}}const n="/project-LET_US_CODE/assets/icons-b681127c.svg";function M(t){return t.map(({category:e,img:o,is10PercentOff:s,name:c,popularity:r,price:a,size:l,_id:m})=>`<li class="products-card-item" data-id="${m}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${c}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${c}</h4></a>
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
            </li>`).join("")}function R(t,e){t.innerHTML=M(e)}function j(t,e){t.innerHTML=G(e)}function D(t,e){t.innerHTML=F(e)}function G(t){return t.map(e=>{const{_id:o,name:s,img:c,category:r,size:a,popularity:l}=e;return`<li class="popular-item" data-id="${o}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${c}"
            alt="${s}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${s}</h3>
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
      </li>`}).join("")}function F(t){return t.slice(0,2).map(o=>{const{_id:s,name:c,img:r,price:a}=o;return`<li class="discount-item" data-id="${s}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${r}"
            alt="${c}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text">${c}</p> 
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
      </li>`}).join("")}const N="filter-storage",V="category-storage",H="product-storage",U="popularity-storage",z="discount-storage",T="shop-storage",W={keyword:null,category:null,page:1,limit:9},Y=document.querySelector(".product-card-list"),J=document.querySelector(".popular-list"),K=document.querySelector(".discount-list"),b=new w,x=new p(N),Q=new p(V),P=new p(H),k=new p(U),L=new p(z);new p(T);const X=x.getItem??W;Z(X);function Z(t){tt(),et(t),ot(),st()}async function tt(){try{const t=await b.getProductCategories();Q.setValue(t)}catch(t){console.log(t)}finally{}}async function et(t){try{const e=await b.getProducts(t);P.setValue(e),x.setValue(t),R(Y,P.getValue().results)}catch(e){console.log(e)}finally{}}async function ot(){try{const t=await b.getPopularProducts();k.setValue(t),j(J,k.getValue())}catch(t){console.log(t)}finally{}}async function st(){try{const t=await b.getDiscountedProducts();L.setValue(t),D(K,L.getValue())}catch(t){console.log(t)}finally{}}const v=new I(T),ct=document.querySelector(".content-wrapper");ct.addEventListener("click",rt);function rt(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if(at(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const c=P.getValue().results,r=k.getValue(),a=L.getValue(),l=S(c,o),m=S(r,o),f=S(a,o);switch("object"){case typeof l:v.setProduct(l);break;case typeof m:v.setProduct(m);break;case typeof f:v.setProduct(f);break;default:alert("Нет таких значений")}}function at(t){return v.getAllProducts().some(o=>o._id===t)}function S(t,e){return t.find(s=>s._id===e)}const g=new w;async function nt(){try{const t=await g.getProductCategories();console.log("productCategories",t);const e={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},o=await g.getProducts(e);console.log("products",o);const s="640c2dd963a319ea671e3676",c=await g.getProductDetails(s);console.log("productsDetails",c);const r=await g.getPopularProducts();console.log("popularProducts",r);const a=await g.getDiscountedProducts();console.log("discountedProducts",a);const l={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},m=await g.placeOrder(l);console.log("placeOrder",m);const f={email:"test@gmail.com"},A=await g.subscribeToNewsletter(f);console.log("subscribeToNewsletter",A)}catch(t){console.log("помилка",t.response.data.message)}finally{}}nt();const lt=document.querySelector(".product-card-list");lt.addEventListener("click",it);function it(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;ut(o)}else return}const y=document.querySelector(".modal-prod-wrapper"),dt="shop-storage";new p(dt);async function ut(t){console.log(t);const o=await new w().getProductDetails(t);pt(o)}async function pt(t){try{y.classList.add("modal-active"),document.body.classList.add("stop-scroll"),y.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>addToCart(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>E()),window.addEventListener("click",B),window.addEventListener("keydown",O)}catch(e){console.error(e)}}function E(){y.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",B),window.removeEventListener("keydown",O)}function B(t){t.target===y&&E()}function O(t){t.keyCode===27&&E()}const d=document.querySelector(".custom-select-ctg"),gt=d.querySelector(".categories-btn"),mt=d.querySelectorAll(".text-options"),ft=d.querySelector(".selected-option");gt.addEventListener("click",()=>{d.classList.toggle("active")});mt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;ft.value=e,d.classList.remove("active"),console.log(e)})});const u=document.querySelector(".custom-select-sort"),vt=u.querySelector(".sort-btn"),yt=u.querySelectorAll(".text-options-sort"),ht=u.querySelector(".selected-option");vt.addEventListener("click",()=>{u.classList.toggle("active")});yt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;ht.value=e,u.classList.remove("active")})});document.addEventListener("click",function(t){const e=d.contains(t.target),o=u.contains(t.target);e||d.classList.remove("active"),o||u.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(d.classList.remove("active"),u.classList.remove("active"))});const wt="shop-storage";new p(wt);const h=document.querySelector(".modal-order-wrap"),bt=document.querySelector(".open");bt.addEventListener("click",()=>St());function St(t){console.log(t),h.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),h.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",$),window.addEventListener("click",_),window.addEventListener("keydown",q)}function $(){h.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",_),window.removeEventListener("keydown",q)}function _(t){t.target===h&&$()}function q(t){t.keyCode===27&&$()}const Pt=new w,kt=document.querySelector('form[name="email_address"]');kt.addEventListener("submit",async function(t){t.preventDefault();const e=t.currentTarget.elements["footer-input-email"],o=e.value;try{await Pt.subscribeToNewsletter({email:o}),e.value="",C.fire({icon:"success",title:"Successfully subscribed!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}catch(s){console.error("Error:",s),C.fire({icon:"error",title:"Error",text:"There was an error subscribing. Please try again.",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}});
//# sourceMappingURL=commonHelpers2.js.map
