import{S as n}from"./assets/local-storage-api-3d6fd6cf.js";import{a as i,S as b}from"./assets/vendor-bb007519.js";i.defaults.baseURL="https://food-boutique.b.goit.study/api";class f{constructor(){}async getProductCategories(){const{data:e}=await i("/products/categories");return e}async getProducts(e){const{data:s}=await i("/products",{params:{...e}});return s}async getProductDetails(e){const{data:s}=await i(`/products/${e}`);return s}async getPopularProducts(){const{data:e}=await i("/products/popular");return e}async getDiscountedProducts(){const{data:e}=await i("/products/discount");return e}async subscribeToNewsletter(e){return await i.post("/subscription",e,{headers:{"Content-Type":"application/json"}})}async placeOrder(e){const{data:s}=await i.post("/orders",e,{headers:{"Content-Type":"application/json"}});return s}}const $=new f,A=document.querySelector('form[name="email_address"]');A.addEventListener("submit",async function(t){t.preventDefault();const e=t.currentTarget.elements["footer-input-email"],s=e.value;try{await $.subscribeToNewsletter({email:s}),e.value="",b.fire({icon:"success",title:"Successfully subscribed!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}catch(o){console.error("Error:",o),b.fire({icon:"error",title:"Error",text:"There was an error subscribing. Please try again.",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}});const l="/project-LET_US_CODE/assets/icons-9e2cefcb.svg";function x(t){return t.map(({category:e,img:s,is10PercentOff:o,name:a,popularity:c,price:r,size:u,_id:m})=>`<li class="products-card-item" data-id="${m}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${a}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${a}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${u}</span></p></li>
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
            </li>`).join("")}function T(t,e){t.innerHTML=x(e)}const O="filter-storage",D="category-storage",q="product-storage",I="popularity-storage",R="discount-storage",_="shop-storage",B={keyword:null,category:null,page:1,limit:9},M=document.querySelector(".product-card-list"),g=new f,w=new n(O),V=new n(D),y=new n(q),N=new n(I),G=new n(R);new n(_);const j=w.getItem??B;H(j);function H(t){F(),U(t),z(),Y()}async function F(){try{const t=await g.getProductCategories();V.setValue(t)}catch(t){console.log(t)}finally{}}async function U(t){try{const e=await g.getProducts(t);y.setValue(e),w.setValue(t),T(M,y.getValue().results)}catch(e){console.log(e)}finally{}}async function z(){try{const t=await g.getPopularProducts();N.setValue(t)}catch(t){console.log(t)}finally{}}async function Y(){try{const t=await g.getDiscountedProducts();G.setValue(t)}catch(t){console.log(t)}finally{}}const d=new f;async function K(){try{const t=await d.getProductCategories();console.log("productCategories",t);const e={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},s=await d.getProducts(e);console.log("products",s);const o="640c2dd963a319ea671e3676",a=await d.getProductDetails(o);console.log("productsDetails",a);const c=await d.getPopularProducts();console.log("popularProducts",c);const r=await d.getDiscountedProducts();console.log("discountedProducts",r);const u={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},m=await d.placeOrder(u);console.log("placeOrder",m);const L={email:"test@gmail.com"},E=await d.subscribeToNewsletter(L);console.log("subscribeToNewsletter",E)}catch(t){console.log("помилка",t.response.data.message)}finally{}}K();const v=new n("discount-storage"),W=new n("popularity-storage"),J=new n("shop-storage"),P=document.querySelector(".popular-list"),k=document.querySelector(".discount-list");P.addEventListener("click",Z);k.addEventListener("click",tt);Q(P,W.getValue());X(k,v.getValue());function Q(t,e){t.innerHTML=st(e)}function X(t,e){t.innerHTML=ot(e)}function Z(t){!t.target.closest("a")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}function tt(t){if(!t.target.closest("button"))return;const s=t.target.closest("li").dataset.id,o=v.getValue(),a=et(o,s);console.log(a),J.setValue(a),t.target.closest("button").classList.add("is-added")}function et(t,e){return t.find(s=>s._id===e)}function st(t){return t.map(e=>{const{_id:s,name:o,img:a,category:c,size:r,popularity:u}=e;return`<li class="popular-item" data-id="${s}">
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
      </li>`}).join("")}function ot(t){return t.slice(0,2).map(s=>{const{_id:o,name:a,img:c,price:r}=s;return`<li class="discount-item" data-id="${o}">
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
      </li>`}).join("")}const p=document.querySelector(".modal-prod-wrapper");function at(t){console.log(t),p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
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
`,document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",S),window.addEventListener("keydown",C)}function h(){p.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",S),window.removeEventListener("keydown",C)}function S(t){t.target===p&&h()}function C(t){t.keyCode===27&&h()}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".custom-select").forEach(e=>{const s=e.querySelector(".selected-option"),o=e.querySelector(".select-options"),a=o.querySelectorAll("li");s.addEventListener("click",function(){const c=this.getAttribute("aria-expanded")==="true"||!1;this.setAttribute("aria-expanded",!c),o.setAttribute("aria-hidden",c)}),a.forEach(c=>{c.addEventListener("click",function(){s.textContent=this.textContent,s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")}),c.addEventListener("keydown",function(r){(r.key==="Enter"||r.key===" ")&&(s.textContent=this.textContent,s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"))})}),e.addEventListener("blur",function(){s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")})})});document.querySelector(".modal-order-wrap");const ct=document.querySelector(".product-card-list");ct.addEventListener("click",rt);function rt(t){if(t.preventDefault(),t.target.nodeName==="IMG"||t.target.nodeName==="H4")at();else return}
//# sourceMappingURL=commonHelpers2.js.map
