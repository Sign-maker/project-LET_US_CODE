import{a as h,S as Y,F as Q}from"./assets/subscription-99a8ffbd.js";import"./assets/vendor-bb007519.js";const m="/project-LET_US_CODE/assets/icons-b681127c.svg";function dt(t){return t.map(({category:e,img:s,is10PercentOff:l,name:a,popularity:r,price:u,size:p,_id:n})=>`<li class="products-card-item js-card-item" data-id="${n}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${a}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${a}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${r}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${m}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${m}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function lt(t,e){t.innerHTML=dt(e)}function ut(t,e){t.innerHTML=gt(e)}function pt(t,e){t.innerHTML=mt(e)}function gt(t){return t.map(e=>{const{_id:s,name:l,img:a,category:r,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${a}"
            alt="${l}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${l}</h3>
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
              href="${m}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${m}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function mt(t){return t.slice(0,2).map(s=>{const{_id:l,name:a,img:r,price:u}=s;return`<li class="discount-item js-card-item" data-id="${l}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${r}"
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
            <p class="discount-desc-text">$${u}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${m}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${m}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${m}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}class ft{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${m}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${m}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}function bt(){const t="variant1",e="variant2",s="variant3",l="active-pagination-btn",a="prev-btn",r="next-btn",p="product-storage",n="filter-storage",c=new h(n),B=new h(p),q=new ft,k=document.querySelector(".buttons-list");k.addEventListener("click",ot);let i=null,g=1,b=g;B.getValue()&&(b=+B.getValue().totalPages,i=+B.getValue().page,C(g,b,i));function C(d,o,f){if(o===d){k.innerHTML;return}k.innerHTML=it(d,o,f),$(f),f===d&&L(a),f===o&&L(r)}function $(d){k.querySelector(`[data-button-id='${d}']`).classList.add(l)}function L(d){const o=k.querySelector(`[data-button-id='${d}']`);o.setAttribute("disabled",""),o.classList.add("disabled")}function ot(d){const{target:o}=d;o.classList.contains("pagination-btn")&&(o.classList.contains("num-btn")&&(console.dir(`Запускаем обработчик нажатия на номер ${o.dataset.buttonId}`),nt(+o.dataset.buttonId),c.setValue({...c.getValue(),page:+o.dataset.buttonId}),x(c.getValue())),o.classList.contains("prev-btn")&&(console.dir(`Запускаем обработчик нажатия на ${o.dataset.buttonId}`),ct(),c.setValue({...c.getValue(),page:i}),x(c.getValue())),o.classList.contains("next-btn")&&(console.dir(`Запускаем обработчик нажатия на ${o.dataset.buttonId}`),at(),c.setValue({...c.getValue(),page:i}),x(c.getValue())))}function nt(d){i=d,C(g,b,i),$(i),i===g&&L(a),i===b&&L(r)}function ct(){i!==g&&(i-=1,C(g,b,i),$(i),i===g&&L(a))}function at(){i!==b&&(i+=1,C(g,b,i),$(i),i===b&&L(r))}function rt(d,o,f){return o<=5?t:f>=d+2&f<=o-2?e:s}function it(d,o,f=1){const{prevBtnCreateMarkUp:O,numBtnCreateMarkUp:v,intervalBtnCreateMarkUp:I,nextBtnCreateMarkUp:M}=q;let E="";const T=rt(d,o,f);if(console.log(T),T===t){let X="";for(let V=d;V<=o;V+=1)X+=v(V);E=O()+X+M()}return T===e&&(E=O()+v(d)+I()+v(f)+I()+v(o)+M()),T===s&&(E=O()+v(d)+v(d+1)+I()+v(o-1)+v(o)+M()),E}}const vt="filter-storage",ht="category-storage",yt="product-storage",St="popularity-storage",kt="discount-storage",wt="shop-storage",Lt={keyword:null,category:null,page:1,limit:9},Bt=document.querySelector(".product-card-list"),Ct=document.querySelector(".popular-list"),$t=document.querySelector(".discount-list"),Et=document.querySelector(".content-wrapper"),Tt=document.querySelector(".js-header-navSpan"),P=new Q,G=new h(vt),xt=new h(ht),F=new h(yt),D=new h(St),H=new h(kt),w=new Y(wt);let J;Et.addEventListener("click",Mt);G.getValue()||G.setValue(Lt);const At=G.getValue();_t(At);async function _t(t){await Rt(),await x(t),await Pt(),await qt(),J=Ot(),bt()}K(w.getAllProducts());async function Rt(){try{const t=await P.getProductCategories();xt.setValue(t)}catch(t){console.log(t)}finally{}}async function x(t){try{const e=await P.getProducts(t);F.setValue(e),lt(Bt,F.getValue().results)}catch(e){console.log(e)}finally{}}async function Pt(){try{const t=await P.getPopularProducts();D.setValue(t),ut(Ct,D.getValue())}catch(t){console.log(t)}finally{}}async function qt(){try{const t=await P.getDiscountedProducts();H.setValue(t),pt($t,H.getValue())}catch(t){console.log(t)}finally{}}function Ot(){const t=document.querySelectorAll(".js-card-item");return It(t),t}function It(t){return[...t].filter(s=>w.getAllProducts().map(a=>{if(s.dataset.id===a._id){const r=document.querySelectorAll(`[data-id="${a._id}"] .js-add-btn`);typeof r=="object"?[...r].map(u=>(u.classList.contains("popular-btn")&&(u.style.backgroundColor="#6d8434"),u.classList.add("is-added"))):(r.classList.contains("popular-btn")&&(r.style.backgroundColor="#6d8434"),r.classList.add("is-added"))}}))}function Mt(t){if(!t.target.closest(".js-add-btn"))return;const s=t.target.closest("li").dataset.id;if(Vt(s))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const a=F.getValue().results,r=D.getValue(),u=H.getValue(),p=j(a,s),n=j(r,s),c=j(u,s);switch("object"){case typeof p:w.setProduct(p);break;case typeof n:w.setProduct(n);break;case typeof c:w.setProduct(c);break;default:alert("Нет таких значений")}jt(t,s),K(w.getAllProducts());function B(q,k){return[...k].forEach(g=>{g.dataset.id===q&&g.classList.add("is-added")})}B(s,J)}function Vt(t){const e=w.getAllProducts();if(e!==null)return e.some(s=>s._id===t)}function j(t,e){return t.find(l=>l._id===e)}function K(t){let e=t.length;Tt.textContent=e}function jt(t,e){const s=document.querySelector(".product-card-list"),l=document.querySelector(".popular-list"),a=document.querySelector(".discount-list"),r=[...s.children],u=[...a.children],p=[...l.children];t.target.closest(".products-wrapper")&&(p.forEach(n=>{if(n.dataset.id===e){const c=document.querySelector(`.popular-list [data-id="${n.dataset.id}"] .js-add-btn`);c.classList.add("is-added"),c.style.backgroundColor="#6d8434"}}),u.forEach(n=>{n.dataset.id===e&&document.querySelector(`.discount-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")})),t.target.closest(".popular-list")&&(r.forEach(n=>{n.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")}),u.forEach(n=>{if(n.dataset.id===e){const c=document.querySelector(`.discount-list [data-id="${n.dataset.id}"] .js-add-btn`);console.log(c),c.classList.add("is-added")}})),t.target.closest(".discount-list")&&(p.forEach(n=>{if(n.dataset.id===e){const c=document.querySelector(`.popular-list [data-id="${n.dataset.id}"] .js-add-btn`);c.classList.add("is-added"),c.style.backgroundColor="#6d8434"}}),r.forEach(n=>{n.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${n.dataset.id}"] .js-add-btn`).classList.add("is-added")}))}const Ut=document.querySelector(".content-wrapper");Ut.addEventListener("click",Nt);function Nt(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;Ft(s)}else return}const _=document.querySelector(".modal-prod-wrapper"),Gt="shop-storage",A=new Y(Gt);async function Ft(t){console.log(t);const s=await new Q().getProductDetails(t);Ht(s),Dt(s)}function Dt(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;A.getAllProducts().some(a=>a._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Ht(t){try{_.classList.add("modal-active"),document.body.classList.add("stop-scroll"),_.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${m}#icon-close"></use>
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
        <use href="${m}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>zt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>z()),window.addEventListener("click",Z),window.addEventListener("keydown",tt)}catch(e){console.error(e)}}function zt(t){const e=t._id,l=A.getAllProducts().some(r=>r._id===e),a=document.querySelector(".modal-prod-add-text");l?(a.textContent="Add to",A.removeProduct(e)):(a.textContent="Remove from",A.setProduct(t))}function z(){_.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",Z),window.removeEventListener("keydown",tt)}function Z(t){t.target===_&&z()}function tt(t){t.keyCode===27&&z()}const y=document.querySelector(".custom-select-ctg"),Wt=y.querySelector(".categories-btn"),Xt=y.querySelectorAll(".text-options"),Yt=y.querySelector(".selected-option");Wt.addEventListener("click",()=>{y.classList.toggle("active")});let U=null;Xt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;U&&(U.style.color="rgba(1, 1, 1, 0.5)"),Yt.value=e,t.style.color="var(--text)",y.classList.remove("active"),console.log(e),U=t})});const S=document.querySelector(".custom-select-sort"),Qt=S.querySelector(".sort-btn"),Jt=S.querySelectorAll(".text-options-sort"),Kt=S.querySelector(".selected-option");Qt.addEventListener("click",()=>{S.classList.toggle("active")});let N=null;Jt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;N&&(N.style.color="rgba(1, 1, 1, 0.5)"),Kt.value=e,t.style.color="var(--text)",S.classList.remove("active"),console.log(e),N=t})});document.addEventListener("click",function(t){const e=y.contains(t.target),s=S.contains(t.target);e||y.classList.remove("active"),s||S.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(y.classList.remove("active"),S.classList.remove("active"))});const Zt="shop-storage";new h(Zt);const R=document.querySelector(".modal-order-wrap"),te=document.querySelector(".open");te.addEventListener("click",()=>ee());function ee(t){console.log(t),R.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),R.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",W),window.addEventListener("click",et),window.addEventListener("keydown",st)}function W(){R.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",et),window.removeEventListener("keydown",st)}function et(t){t.target===R&&W()}function st(t){t.keyCode===27&&W()}
//# sourceMappingURL=commonHelpers2.js.map
