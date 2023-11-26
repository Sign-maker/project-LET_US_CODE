import{S as j,F as V,a as h}from"./assets/subscription-7881ce38.js";import"./assets/vendor-bb007519.js";const u="/project-LET_US_CODE/assets/icons-b681127c.svg";function K(t){return t.map(({category:e,img:s,is10PercentOff:a,name:o,popularity:c,price:r,size:l,_id:n})=>`<li class="products-card-item js-card-item" data-id="${n}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${l}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${c}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${r}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${u}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${u}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function Z(t,e){t.innerHTML=K(e)}function tt(t,e){t.innerHTML=st(e)}function et(t,e){t.innerHTML=ot(e)}function st(t){return t.map(e=>{const{_id:s,name:a,img:o,category:c,size:r,popularity:l}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${a}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${a}</h3>
          </a>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${c}</span>
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
          class="popular-btn btn js-add-btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="${u}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${u}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function ot(t){return t.slice(0,2).map(s=>{const{_id:a,name:o,img:c,price:r}=s;return`<li class="discount-item js-card-item" data-id="${a}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${c}"
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
            <p class="discount-desc-text">$${r}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${u}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${u}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${u}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}const nt="filter-storage",ct="category-storage",at="product-storage",rt="popularity-storage",it="discount-storage",dt="shop-storage",lt={keyword:null,category:null,page:1,limit:9},ut=document.querySelector(".product-card-list"),pt=document.querySelector(".popular-list"),mt=document.querySelector(".discount-list"),ft=document.querySelector(".content-wrapper"),gt=document.querySelector(".js-header-navSpan"),B=new V,N=new h(nt),bt=new h(ct),A=new h(at),_=new h(rt),q=new h(it),f=new j(dt);let U;ft.addEventListener("click",Ct);const vt=N.getItem??lt;ht(vt);async function ht(t){await yt(),await St(t),await kt(),await wt(),U=Lt()}G(f.getAllProducts());async function yt(){try{const t=await B.getProductCategories();bt.setValue(t)}catch(t){console.log(t)}finally{}}async function St(t){try{const e=await B.getProducts(t);A.setValue(e),N.setValue(t),Z(ut,A.getValue().results)}catch(e){console.log(e)}finally{}}async function kt(){try{const t=await B.getPopularProducts();_.setValue(t),tt(pt,_.getValue())}catch(t){console.log(t)}finally{}}async function wt(){try{const t=await B.getDiscountedProducts();q.setValue(t),et(mt,q.getValue())}catch(t){console.log(t)}finally{}}function Lt(){const t=document.querySelectorAll(".js-card-item");return Bt(t),t}function Bt(t){const e=[...t],s=f.getAllProducts();return e.map(a=>s.filter(o=>{if(a.dataset.id===o._id){const c=document.querySelectorAll(`[data-id="${o._id}"] .js-add-btn`);if(typeof c=="object")[...c].map(r=>(r.classList.contains("popular-btn")&&(r.style.backgroundColor="#6d8434"),r.classList.add("is-added")));else return c.classList.contains("popular-btn")&&(c.style.backgroundColor="#6d8434"),console.log(c),c.classList.add("is-added")}}))}function Ct(t){if(!t.target.closest(".js-add-btn"))return;const s=t.target.closest("li").dataset.id;if($t(s))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const o=A.getValue().results,c=_.getValue(),r=q.getValue(),l=E(o,s),n=E(c,s),i=E(r,s);switch("object"){case typeof l:f.setProduct(l);break;case typeof n:f.setProduct(n);break;case typeof i:f.setProduct(i);break;default:alert("Нет таких значений")}Et(t,s),G(f.getAllProducts());function y(Q,J){return[...J].forEach(M=>{M.dataset.id===Q&&M.classList.add("is-added")})}y(s,U)}function $t(t){const e=f.getAllProducts();if(e!==null)return e.some(s=>s._id===t)}function E(t,e){return t.find(a=>a._id===e)}function G(t){let e=t.length;gt.textContent=e}function Et(t,e){const s=document.querySelector(".product-card-list"),a=document.querySelector(".popular-list"),o=document.querySelector(".discount-list"),c=[...s.children],r=[...o.children],l=[...a.children];t.target.closest(".products-wrapper")&&(l.forEach(n=>{if(n.dataset.id===e){const i=document.querySelector(`.popular-list [data-id="${n.dataset.id}"] .js-add-btn`);i.classList.add("is-added"),i.style.backgroundColor="#6d8434"}}),r.forEach(n=>{n.dataset.id===e&&document.querySelector(`.discount-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")})),t.target.closest(".popular-list")&&(c.forEach(n=>{n.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")}),r.forEach(n=>{if(n.dataset.id===e){const i=document.querySelector(`.discount-list [data-id="${n.dataset.id}"] .js-add-btn`);console.log(i),i.classList.add("is-added")}})),t.target.closest(".discount-list")&&(l.forEach(n=>{if(n.dataset.id===e){const i=document.querySelector(`.popular-list [data-id="${n.dataset.id}"] .js-add-btn`);i.classList.add("is-added"),i.style.backgroundColor="#6d8434"}}),c.forEach(n=>{n.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")}))}const xt=document.querySelector(".content-wrapper");xt.addEventListener("click",Tt);function Tt(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;_t(s)}else return}const w=document.querySelector(".modal-prod-wrapper"),At="shop-storage",k=new j(At);async function _t(t){console.log(t);const s=await new V().getProductDetails(t);Pt(s),qt(s)}function qt(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;k.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Pt(t){try{w.classList.add("modal-active"),document.body.classList.add("stop-scroll"),w.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${u}#icon-close"></use>
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
        <use href="${u}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Rt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>P()),window.addEventListener("click",D),window.addEventListener("keydown",F)}catch(e){console.error(e)}}function Rt(t){const e=t._id,a=k.getAllProducts().some(c=>c._id===e),o=document.querySelector(".modal-prod-add-text");a?(o.textContent="Add to",k.removeProduct(e)):(o.textContent="Remove from",k.setProduct(t))}function P(){w.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",D),window.removeEventListener("keydown",F)}function D(t){t.target===w&&P()}function F(t){t.keyCode===27&&P()}const p=document.querySelector(".custom-select-ctg"),It=p.querySelector(".categories-btn"),Ot=p.querySelectorAll(".text-options"),Mt=p.querySelector(".selected-option");It.addEventListener("click",()=>{p.classList.toggle("active")});let x=null;Ot.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;x&&(x.style.color="rgba(1, 1, 1, 0.5)"),Mt.value=e,t.style.color="var(--text)",p.classList.remove("active"),console.log(e),x=t})});const m=document.querySelector(".custom-select-sort"),jt=m.querySelector(".sort-btn"),Vt=m.querySelectorAll(".text-options-sort"),Nt=m.querySelector(".selected-option");jt.addEventListener("click",()=>{m.classList.toggle("active")});let T=null;Vt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;T&&(T.style.color="rgba(1, 1, 1, 0.5)"),Nt.value=e,t.style.color="var(--text)",m.classList.remove("active"),console.log(e),T=t})});document.addEventListener("click",function(t){const e=p.contains(t.target),s=m.contains(t.target);e||p.classList.remove("active"),s||m.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(p.classList.remove("active"),m.classList.remove("active"))});const Ut="shop-storage";new h(Ut);const L=document.querySelector(".modal-order-wrap"),Gt=document.querySelector(".open");Gt.addEventListener("click",()=>Dt());function Dt(t){console.log(t),L.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),L.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",R),window.addEventListener("click",H),window.addEventListener("keydown",z)}function R(){L.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",H),window.removeEventListener("keydown",z)}function H(t){t.target===L&&R()}function z(t){t.keyCode===27&&R()}class Ft{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${u}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${u}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const W="variant1",Y="variant2",X="variant3",Ht="active-pagination-btn",I="prev-btn",O="next-btn",zt=5,Wt=new Ft,S=document.querySelector(".buttons-list");S.addEventListener("click",Yt);let d=null,g=1,b=10;d=1;C(g,b,d);function C(t,e,s){if(e===t){S.innerHTML;return}S.innerHTML=Zt(t,e,s),$(s),s===t&&v(I),s===e&&v(O)}function $(t){S.querySelector(`[data-button-id='${t}']`).classList.add(Ht)}function v(t){const e=S.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Yt(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(e.classList.contains("num-btn")&&(console.dir(`Запускаем обработчик нажатия на номер ${e.dataset.buttonId}`),Xt(+e.dataset.buttonId)),e.classList.contains("prev-btn")&&(console.dir(`Запускаем обработчик нажатия на ${e.dataset.buttonId}`),Qt()),e.classList.contains("next-btn")&&(console.dir(`Запускаем обработчик нажатия на ${e.dataset.buttonId}`),Jt()))}function Xt(t){d=t,C(g,b,d),$(d),d===g&&v(I),d===b&&v(O)}function Qt(){d!==g&&(d-=1,C(g,b,d),$(d),d===g&&v(I))}function Jt(){d!==b&&(d+=1,C(g,b,d),$(d),d===b&&v(O))}function Kt(t,e,s){return e<=zt?W:s>=t+2&s<=e-2?Y:X}function Zt(t,e,s=1){const{prevBtnCreateMarkUp:a,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:c,nextBtnCreateMarkUp:r}=Wt;let l="";const n=Kt(t,e,s);if(console.log(n),n===W){let i="";for(let y=t;y<=e;y+=1)i+=o(y);l=a()+i+r()}return n===Y&&(l=a()+o(t)+c()+o(s)+c()+o(e)+r()),n===X&&(l=a()+o(t)+o(t+1)+c()+o(e-1)+o(e)+r()),l}
//# sourceMappingURL=commonHelpers2.js.map
