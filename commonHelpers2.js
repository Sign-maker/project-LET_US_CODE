import{S as d}from"./assets/local-storage-api-9908c72e.js";import{a as i}from"./assets/vendor-a61d8330.js";i.defaults.baseURL="https://food-boutique.b.goit.study/api";class m{constructor(){}async getProductCategories(){const{data:e}=await i("/products/categories");return e}async getProducts(e){const{data:s}=await i("/products",{params:{...e}});return s}async getProductDetails(e){const{data:s}=await i(`/products/${e}`);return s}async getPopularProducts(){const{data:e}=await i("/products/popular");return e}async getDiscountedProducts(){const{data:e}=await i("/products/discount");return e}async subscribeToNewsletter(e){return await i.post("/subscription",e,{headers:{"Content-Type":"application/json"}})}async placeOrder(e){const{data:s}=await i.post("/orders",e,{headers:{"Content-Type":"application/json"}});return s}}const n=new m;async function L(){try{const t=await n.getProductCategories();console.log("productCategories",t);const e={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},s=await n.getProducts(e);console.log("products",s);const o="640c2dd963a319ea671e3676",c=await n.getProductDetails(o);console.log("productsDetails",c);const a=await n.getPopularProducts();console.log("popularProducts",a);const r=await n.getDiscountedProducts();console.log("discountedProducts",r);const l={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},g=await n.placeOrder(l);console.log("placeOrder",g);const S={email:"test@gmail.com"},A=await n.subscribeToNewsletter(S);console.log("subscribeToNewsletter",A)}catch(t){console.log("помилка",t.response.data.message)}finally{}}L();const f=new m,h=document.querySelector(".popular-list"),b=document.querySelector(".discount-list");async function C(){try{const t=await f.getPopularProducts();P("popularProducts",t),h.innerHTML=_(t)}catch{}}C();async function O(){try{const t=await f.getDiscountedProducts();P("discountProducts",t),b.innerHTML=T(t)}catch{}}O();h.addEventListener("click",x);function x(t){!t.target.closest("li")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}b.addEventListener("click",E);function E(t){!t.target.closest("li")||t.target.closest("button")||console.dir("THIS IS FOR MODAL CLICK")}function P(t,e){localStorage.setItem(`${t}`,JSON.stringify(e))}function _(t){return t.map(e=>{const{_id:s,name:o,img:c,category:a,size:r,popularity:l}=e;return`<li class="popular-item" data-id="${s}">
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
      </li>`}).join("")}function T(t){return t.slice(0,2).map(s=>{const{_id:o,name:c,img:a,price:r}=s;return`<li class="discount-item" data-id="${o}">
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
      </li>`}).join("")}const u=document.querySelector(".modal-prod-wrapper");function I(t){console.log(t),u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
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
`,document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>y()),window.addEventListener("click",v),window.addEventListener("keydown",w)}function y(){u.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",v),window.removeEventListener("keydown",w)}function v(t){t.target===u&&y()}function w(t){t.keyCode===27&&y()}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".custom-select").forEach(e=>{const s=e.querySelector(".selected-option"),o=e.querySelector(".select-options"),c=o.querySelectorAll("li");s.addEventListener("click",function(){const a=this.getAttribute("aria-expanded")==="true"||!1;this.setAttribute("aria-expanded",!a),o.setAttribute("aria-hidden",a)}),c.forEach(a=>{a.addEventListener("click",function(){s.textContent=this.textContent,s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")}),a.addEventListener("keydown",function(r){(r.key==="Enter"||r.key===" ")&&(s.textContent=this.textContent,s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"))})}),e.addEventListener("blur",function(){s.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true")})})});document.querySelector(".modal-order-wrap");const $={page:1,perPage:9,totalPages:60,results:[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385f",name:"Almond Milk",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png",category:"Beverages",price:3.99,size:"1L",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3865",name:"Anchovy Fillet",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png",category:"Meat_&_Seafood",price:3.49,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3825",name:"Apples",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png",category:"Fresh_Produce",price:1.5,size:"1 lb",is10PercentOff:!0,popularity:0}]},D=$.results,q=document.querySelector(".product-card-list");q.innerHTML=M(D);const z=document.querySelector(".product-card-list");z.addEventListener("click",R);function R(t){if(t.target.nodeName==="IMG"||t.target.nodeName==="H4")I();else return}function M(t){return t.map(({category:e,img:s,is10PercentOff:o,name:c,popularity:a,price:r,size:l,_id:g})=>`<li class="products-card-item" data-id="${g}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${c}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${c}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${l}</span></p></li>
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
            </li>`).join("")}const F="filter-storage",N="category-storage",B="product-storage",G="popularity-storage",H="discount-storage",j="shop-storage",V={keyword:null,category:null,page:1,limit:6};document.querySelector(".product-card-list");const p=new m,k=new d(F),U=new d(N),K=new d(B),Y=new d(G),J=new d(H);new d(j);const W=k.getItem??V;Q(W);function Q(t){X(),Z(t),tt(),et()}async function X(){try{const t=await p.getProductCategories();U.setValue(t)}catch(t){console.log(t)}finally{}}async function Z(t){try{const e=await p.getProducts(t);K.setValue(e),k.setValue(t)}catch(e){console.log(e)}finally{}}async function tt(){try{const t=await p.getPopularProducts();Y.setValue(t)}catch(t){console.log(t)}finally{}}async function et(){try{const t=await p.getDiscountedProducts();J.setValue(t)}catch(t){console.log(t)}finally{}}
//# sourceMappingURL=commonHelpers2.js.map
