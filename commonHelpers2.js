import"./assets/styles-2a1a55e5.js";import{a as c}from"./assets/vendor-a61d8330.js";c.defaults.baseURL="https://food-boutique.b.goit.study/api";class u{constructor(){}async getProductCategories(){const{data:t}=await c("/products/categories");return t}async getProducts(t){const{data:e}=await c("/products",{params:{...t}});return e}async getProductDetails(t){const{data:e}=await c(`/products/${t}`);return e}async getPopularProducts(){const{data:t}=await c("/products/popular");return t}async getDiscountedProducts(){const{data:t}=await c("/products/discount");return t}async subscribeToNewsletter(t){return await c.post("/subscription",t,{headers:{"Content-Type":"application/json"}})}async placeOrder(t){const{data:e}=await c.post("/orders",t,{headers:{"Content-Type":"application/json"}});return e}}const d=new u;async function y(){try{const s=await d.getProductCategories();console.log("productCategories",s);const t={keyword:"apple",category:"Fresh_Produce",byABC:!0,byPrice:!0,byPopularity:!0,page:1,limit:6},e=await d.getProducts(t);console.log("products",e);const o="640c2dd963a319ea671e3676",a=await d.getProductDetails(o);console.log("productsDetails",a);const r=await d.getPopularProducts();console.log("popularProducts",r);const i=await d.getDiscountedProducts();console.log("discountedProducts",i);const n={email:"test@gmail.com",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]},p=await d.placeOrder(n);console.log("placeOrder",p);const g={email:"test@gmail.com"},m=await d.subscribeToNewsletter(g);console.log("subscribeToNewsletter",m)}catch{}finally{}}y();const f={page:1,perPage:9,totalPages:60,results:[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3860",name:"Allspice",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",category:"Pantry_Items",price:2.99,size:"1.5oz",is10PercentOff:!1,popularity:8},{_id:"640c2dd963a319ea671e3861",name:"Almond Extract",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",category:"Pantry_Items",price:4.99,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385f",name:"Almond Milk",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png",category:"Beverages",price:3.99,size:"1L",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3865",name:"Anchovy Fillet",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png",category:"Meat_&_Seafood",price:3.49,size:"2oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3660",name:"Apple Cider Vinegar",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png",price:6.99,size:"500 ml",category:"Pantry_Items",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3825",name:"Apples",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png",category:"Fresh_Produce",price:1.5,size:"1 lb",is10PercentOff:!0,popularity:0}]},h=f.results,P=document.querySelector(".product-card-list");P.innerHTML=b(h);function b(s){return s.map(({category:t,img:e,is10PercentOff:o,name:a,popularity:r,price:i,size:n,_id:p})=>`<li class="products-card-item">
                <a class="products-card-link" href="#"><img class="product-image" src="${e}" alt="${a}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${a}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${t}</span>Size:<span class="product-text-black"> ${n}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${r}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <h3 class="price">$${i}</h3>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="./icons.svg#icon-shopping-cart"></use>
                        </svg>
                    </button>
                </div>
            </li>`).join("")}const l=new u,v=document.querySelector(".popular-list"),w=document.querySelector(".discount-list");async function _(){try{const s=await l.getPopularProducts();v.innerHTML=z(s)}catch{}}_();async function $(){try{const s=await l.getDiscountedProducts();w.innerHTML=k(s)}catch{}}$();function z(s){return s.map(t=>{const{_id:e,name:o,img:a,category:r,size:i,popularity:n}=t;return`<li class="popular-item" id="${e}">
        <div class="popular-img-wrapper">
          <img
            src="${a}"
            alt="${o}"
            class="popular-img"
          />
        </div>
        <div class="popular-desc-wrapper">
          <h3 class="popular-desc-name">${o}</h3>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${r}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${i}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${n}</span>
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
      </li>`}).join("")}function k(s){return s.slice(0,2).map(e=>{const{_id:o,name:a,img:r,price:i}=e;return`<li class="discount-item" id="${o}">
        <div class="discount-img-wrapper">
          <img
            src="${r}"
            alt="${a}"
            class="discount-img"
          />
        </div>
        <div class="discount-desc-wrapper">
          <p class="discount-desc-text">${a}</p>
          <div class="discount-box">
            <p class="discount-desc-text">$${i}</p>
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
      </li>`}).join("")}
//# sourceMappingURL=commonHelpers2.js.map
