import{a as v,S as X,F as Q}from"./assets/subscription-99a8ffbd.js";import"./assets/vendor-bb007519.js";const b="/project-LET_US_CODE/assets/icons-b681127c.svg";function lt(t){return t.map(({category:e,img:o,is10PercentOff:d,name:n,popularity:r,price:u,size:p,_id:c})=>`<li class="products-card-item js-card-item" data-id="${c}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${n}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${n}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${r}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${b}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${b}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function dt(t,e){t.innerHTML=lt(e)}function ut(t,e){t.innerHTML=gt(e)}function pt(t,e){t.innerHTML=mt(e)}function gt(t){return t.map(e=>{const{_id:o,name:d,img:n,category:r,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${o}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${n}"
            alt="${d}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${d}</h3>
          </a>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${r}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${u}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${p}</span>
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
              href="${b}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${b}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function mt(t){return t.slice(0,2).map(o=>{const{_id:d,name:n,img:r,price:u}=o;return`<li class="discount-item js-card-item" data-id="${d}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${r}"
            alt="${n}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text">${n}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${u}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${b}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${b}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${b}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}function ft(){const t="product-storage";new v(t);const e="filter-storage";new v(e);const o={keyword:null,category:null,page:1,limit:9},d=document.querySelector(".js-search-form"),n=document.querySelector(".js-search-input"),r=document.querySelector(".js-category"),u=document.querySelector(".js-select-option"),p="category-storage",s=new v(p).getValue();u.innerHTML=y(s);const k=document.querySelector(".custom-select-ctg"),$=k.querySelectorAll(".text-options"),w=k.querySelector(".selected-option");let i=null;$.forEach(m=>{m.addEventListener("click",()=>{let f=m.innerText;i&&(i.style.color="rgba(1, 1, 1, 0.5)"),w.value=f,m.style.color="var(--text)",k.classList.remove("active"),console.log(f),o.category=f,T(o),i=m})}),d.addEventListener("submit",g);async function g(m){m.preventDefault();const f=n.value,h=r.value;console.log(h),o.keyword=f,o.category=h,await T(o),h==="Show all"&&(o.category=null,T({keyword:null,category:null,page:1,limit:9}))}function y(m){return m.map(f=>`<div class="text-options" tabindex="0">${f}</div>`).join("").concat('<div class="text-options" tabindex="0">Show all</div>')}}class vt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${b}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${b}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}function bt(){const t="variant1",e="variant2",o="variant3",d="active-pagination-btn",n="prev-btn",r="next-btn",p="product-storage",c="filter-storage",s=new v(c),k=new v(p),$=new vt,w=document.querySelector(".buttons-list");w.addEventListener("click",st);let i=null,g=1,y=g;k.getValue()&&(y=+k.getValue().totalPages,i=+k.getValue().page,m(g,y,i));function m(l,a,S){if(a===l){w.innerHTML;return}w.innerHTML=it(l,a,S),f(S),S===l&&h(n),S===a&&h(r)}function f(l){w.querySelector(`[data-button-id='${l}']`).classList.add(d)}function h(l){const a=w.querySelector(`[data-button-id='${l}']`);a.setAttribute("disabled",""),a.classList.add("disabled")}function st(l){const{target:a}=l;a.classList.contains("pagination-btn")&&(a.classList.contains("num-btn")&&(console.dir(`Запускаем обработчик нажатия на номер ${a.dataset.buttonId}`),nt(+a.dataset.buttonId),s.setValue({...s.getValue(),page:+a.dataset.buttonId}),T(s.getValue())),a.classList.contains("prev-btn")&&(console.dir(`Запускаем обработчик нажатия на ${a.dataset.buttonId}`),ct(),s.setValue({...s.getValue(),page:i}),T(s.getValue())),a.classList.contains("next-btn")&&(console.dir(`Запускаем обработчик нажатия на ${a.dataset.buttonId}`),at(),s.setValue({...s.getValue(),page:i}),T(s.getValue())))}function nt(l){i=l,m(g,y,i),f(i),i===g&&h(n),i===y&&h(r)}function ct(){i!==g&&(i-=1,m(g,y,i),f(i),i===g&&h(n))}function at(){i!==y&&(i+=1,m(g,y,i),f(i),i===y&&h(r))}function rt(l,a,S){return a<=5?t:S>=l+2&S<=a-2?e:o}function it(l,a,S=1){const{prevBtnCreateMarkUp:P,numBtnCreateMarkUp:L,intervalBtnCreateMarkUp:I,nextBtnCreateMarkUp:M}=$;let x="";const A=rt(l,a,S);if(console.log(A),A===t){let Y="";for(let j=l;j<=a;j+=1)Y+=L(j);x=P()+Y+M()}return A===e&&(x=P()+L(l)+I()+L(S)+I()+L(a)+M()),A===o&&(x=P()+L(l)+L(l+1)+I()+L(a-1)+L(a)+M()),x}}const yt="filter-storage",ht="category-storage",St="product-storage",kt="popularity-storage",wt="discount-storage",Lt="shop-storage",Bt={keyword:null,category:null,page:1,limit:9},Et=document.querySelector(".product-card-list"),Ct=document.querySelector(".popular-list"),Tt=document.querySelector(".discount-list"),$t=document.querySelector(".content-wrapper"),xt=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const O=new Q,N=new v(yt),At=new v(ht),F=new v(St),D=new v(kt),H=new v(wt),C=new X(Lt);let J;$t.addEventListener("click",jt);N.getValue()||N.setValue(Bt);const Rt=N.getValue();_t(Rt);async function _t(t){await qt(),await T(t),await Ot(),await Pt(),J=It(),ft(),bt()}K(C.getAllProducts());async function qt(){try{const t=await O.getProductCategories();At.setValue(t)}catch(t){console.log(t)}finally{}}async function T(t){try{const e=await O.getProducts(t);F.setValue(e),dt(Et,F.getValue().results)}catch(e){console.log(e)}finally{}}async function Ot(){try{const t=await O.getPopularProducts();D.setValue(t),ut(Ct,D.getValue())}catch(t){console.log(t)}finally{}}async function Pt(){try{const t=await O.getDiscountedProducts();H.setValue(t),pt(Tt,H.getValue())}catch(t){console.log(t)}finally{}}function It(){const t=document.querySelectorAll(".js-card-item");return Mt(t),t}function Mt(t){return[...t].filter(o=>C.getAllProducts().map(n=>{if(o.dataset.id===n._id){const r=document.querySelectorAll(`[data-id="${n._id}"] .js-add-btn`);typeof r=="object"?[...r].map(u=>(u.classList.contains("popular-btn")&&(u.style.backgroundColor="#6d8434"),u.classList.add("is-added"))):(r.classList.contains("popular-btn")&&(r.style.backgroundColor="#6d8434"),r.classList.add("is-added"))}}))}function jt(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if(Vt(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const n=F.getValue().results,r=D.getValue(),u=H.getValue(),p=V(n,o),c=V(r,o),s=V(u,o);switch("object"){case typeof p:C.setProduct(p);break;case typeof c:C.setProduct(c);break;case typeof s:C.setProduct(s);break;default:alert("Нет таких значений")}Ut(t,o),K(C.getAllProducts());function k($,w){return[...w].forEach(g=>{g.dataset.id===$&&g.classList.add("is-added")})}k(o,J)}function Vt(t){const e=C.getAllProducts();if(e!==null)return e.some(o=>o._id===t)}function V(t,e){return t.find(d=>d._id===e)}function K(t){let e=t.length;xt.textContent=e}function Ut(t,e){const o=document.querySelector(".product-card-list"),d=document.querySelector(".popular-list"),n=document.querySelector(".discount-list"),r=[...o.children],u=[...n.children],p=[...d.children];t.target.closest(".products-wrapper")&&(p.forEach(c=>{if(c.dataset.id===e){const s=document.querySelector(`.popular-list [data-id="${c.dataset.id}"] .js-add-btn`);s.classList.add("is-added"),s.style.backgroundColor="#6d8434"}}),u.forEach(c=>{c.dataset.id===e&&document.querySelector(`.discount-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")})),t.target.closest(".popular-list")&&(r.forEach(c=>{c.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")}),u.forEach(c=>{if(c.dataset.id===e){const s=document.querySelector(`.discount-list [data-id="${c.dataset.id}"] .js-add-btn`);console.log(s),s.classList.add("is-added")}})),t.target.closest(".discount-list")&&(p.forEach(c=>{if(c.dataset.id===e){const s=document.querySelector(`.popular-list [data-id="${c.dataset.id}"] .js-add-btn`);s.classList.add("is-added"),s.style.backgroundColor="#6d8434"}}),r.forEach(c=>{c.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")}))}const Gt=document.querySelector(".content-wrapper");Gt.addEventListener("click",Nt);function Nt(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const o=e.closest("li").dataset.id;Dt(o)}else return}const _=document.querySelector(".modal-prod-wrapper"),Ft="shop-storage",R=new X(Ft);async function Dt(t){console.log(t);const o=await new Q().getProductDetails(t);zt(o),Ht(o)}function Ht(t){const e=document.querySelector(".modal-prod-add-text"),o=t._id;R.getAllProducts().some(n=>n._id===o)?e.textContent="Remove from":e.textContent="Add to"}async function zt(t){try{_.classList.add("modal-active"),document.body.classList.add("stop-scroll"),_.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${b}#icon-close"></use>
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
        <use href="${b}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Wt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>z()),window.addEventListener("click",Z),window.addEventListener("keydown",tt)}catch(e){console.error(e)}}function Wt(t){const e=t._id,d=R.getAllProducts().some(r=>r._id===e),n=document.querySelector(".modal-prod-add-text");d?(n.textContent="Add to",R.removeProduct(e)):(n.textContent="Remove from",R.setProduct(t))}function z(){_.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",Z),window.removeEventListener("keydown",tt)}function Z(t){t.target===_&&z()}function tt(t){t.keyCode===27&&z()}const B=document.querySelector(".custom-select-ctg"),Yt=B.querySelector(".categories-btn"),Xt=B.querySelectorAll(".text-options"),Qt=B.querySelector(".selected-option");Yt.addEventListener("click",()=>{B.classList.toggle("active")});let U=null;Xt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;U&&(U.style.color="rgba(1, 1, 1, 0.5)"),Qt.value=e,t.style.color="var(--text)",B.classList.remove("active"),console.log(e),U=t})});const E=document.querySelector(".custom-select-sort"),Jt=E.querySelector(".sort-btn"),Kt=E.querySelectorAll(".text-options-sort"),Zt=E.querySelector(".selected-option");Jt.addEventListener("click",()=>{E.classList.toggle("active")});let G=null;Kt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;G&&(G.style.color="rgba(1, 1, 1, 0.5)"),Zt.value=e,t.style.color="var(--text)",E.classList.remove("active"),console.log(e),G=t})});document.addEventListener("click",function(t){const e=B.contains(t.target),o=E.contains(t.target);e||B.classList.remove("active"),o||E.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(B.classList.remove("active"),E.classList.remove("active"))});const te="shop-storage";new v(te);const q=document.querySelector(".modal-order-wrap"),ee=document.querySelector(".open");ee.addEventListener("click",()=>oe());function oe(t){console.log(t),q.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),q.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",W),window.addEventListener("click",et),window.addEventListener("keydown",ot)}function W(){q.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",et),window.removeEventListener("keydown",ot)}function et(t){t.target===q&&W()}function ot(t){t.keyCode===27&&W()}
//# sourceMappingURL=commonHelpers2.js.map
