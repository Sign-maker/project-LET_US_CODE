import"./assets/styles-ec22b5f1.js";import{a as i}from"./assets/vendor-a61d8330.js";i.defaults.baseURL="https://food-boutique.b.goit.study/api";class p{constructor(){}async getProductCategories(){const{data:t}=await i("/products/categories");return t}async getProducts(t){const{data:e}=await i("/products",{params:{...t}});return e}async getProductDetails(t){const{data:e}=await i(`/products/${t}`);return e}async getPopularProducts(){const{data:t}=await i("/products/popular");return t}async getDiscountedProducts(){const{data:t}=await i("/products/discount");return t}async subscribeToNewsletter(t){return await i.post("/subscription",t,{headers:{"Content-Type":"application/json"}})}async placeOrder(t){const{data:e}=await i.post("/orders",t,{headers:{"Content-Type":"application/json"}});return e}}const n=new p;async function y(){try{const s=await n.getProductCategories();console.log("productCategories",s);const t={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},e=await n.getProducts(t);console.log("products",e);const a="640c2dd963a319ea671e3676",o=await n.getProductDetails(a);console.log("productsDetails",o);const c=await n.getPopularProducts();console.log("popularProducts",c);const r=await n.getDiscountedProducts();console.log("discountedProducts",r);const d={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},u=await n.placeOrder(d);console.log("placeOrder",u);const g={email:"test@gmail.com"},m=await n.subscribeToNewsletter(g);console.log("subscribeToNewsletter",m)}catch{}finally{}}y();const l=new p,f=document.querySelector(".popular-list"),h=document.querySelector(".discount-list");async function b(){try{const s=await l.getPopularProducts();f.innerHTML=v(s)}catch{}}b();async function P(){try{const s=await l.getDiscountedProducts();h.innerHTML=w(s)}catch{}}P();function v(s){return s.map(t=>{const{_id:e,name:a,img:o,category:c,size:r,popularity:d}=t;return`<li class="popular-item" id="${e}">
        <div class="popular-img-wrapper">
          <img
            src="${o}"
            alt="${a}"
            class="popular-img"
          />
        </div>
        <div class="popular-desc-wrapper">
          <h3 class="popular-desc-name">${a}</h3>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${c}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${r}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${d}</span>
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
      </li>`}).join("")}function w(s){return s.slice(0,2).map(e=>{const{_id:a,name:o,img:c,price:r}=e;return`<li class="discount-item" id="${a}">
        <div class="discount-img-wrapper">
          <img
            src="${c}"
            alt="${o}"
            class="discount-img"
          />
        </div>
        <div class="discount-desc-wrapper">
          <p class="discount-desc-text">${o}</p>
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
                  class="discount-desc-added"
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
      </li>`}).join("")}document.querySelector(".modal-prod-wrapper");document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".custom-select").forEach(t=>{const e=t.querySelector(".selected-option"),a=t.querySelector(".select-options"),o=a.querySelectorAll("li");e.addEventListener("click",function(){const c=this.getAttribute("aria-expanded")==="true"||!1;this.setAttribute("aria-expanded",!c),a.setAttribute("aria-hidden",c)}),o.forEach(c=>{c.addEventListener("click",function(){e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),a.setAttribute("aria-hidden","true")}),c.addEventListener("keydown",function(r){(r.key==="Enter"||r.key===" ")&&(e.textContent=this.textContent,e.setAttribute("aria-expanded","false"),a.setAttribute("aria-hidden","true"))})}),t.addEventListener("blur",function(){e.setAttribute("aria-expanded","false"),a.setAttribute("aria-hidden","true")})})});const A={page:1,perPage:9,totalPages:60,results:[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385f",name:"Almond Milk",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png",category:"Beverages",price:3.99,size:"1L",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3865",name:"Anchovy Fillet",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png",category:"Meat_&_Seafood",price:3.49,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3825",name:"Apples",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png",category:"Fresh_Produce",price:1.5,size:"1 lb",is10PercentOff:!0,popularity:0}]},x=A.results,_=document.querySelector(".product-card-list");_.innerHTML=$(x);function $(s){return s.map(({category:t,img:e,is10PercentOff:a,name:o,popularity:c,price:r,size:d,_id:u})=>`<li class="products-card-item">
                <a class="products-card-link" href="#"><img class="product-image" src="${e}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${o}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${t}</span>Size:<span class="product-text-black"> ${d}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${c}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <h3 class="price">$${r}</h3>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="./icons.svg#icon-shopping-cart"></use>
                        </svg>
                    </button>
                </div>
            </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
