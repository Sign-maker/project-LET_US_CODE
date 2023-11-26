import{S as j,F as N,a as b}from"./assets/subscription-7881ce38.js";import"./assets/vendor-bb007519.js";const l="/project-LET_US_CODE/assets/icons-b681127c.svg";function K(t){return t.map(({category:e,img:o,is10PercentOff:r,name:s,popularity:n,price:a,size:i,_id:d})=>`<li class="products-card-item js-card-item" data-id="${d}">
                <a class="products-card-link" href="#"><img class="product-image" src="${o}" alt="${s}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${s}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${i}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${n}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${a}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${l}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${l}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join("")}function Z(t,e){t.innerHTML=K(e)}function tt(t,e){t.innerHTML=ot(e)}function et(t,e){t.innerHTML=st(e)}function ot(t){return t.map(e=>{const{_id:o,name:r,img:s,category:n,size:a,popularity:i}=e;return`<li class="popular-item js-card-item" data-id="${o}">
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
            Category: <span class="popular-desc-span">${n}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${a}</span>
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
              href="${l}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${l}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function st(t){return t.slice(0,2).map(o=>{const{_id:r,name:s,img:n,price:a}=o;return`<li class="discount-item js-card-item" data-id="${r}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${n}"
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
      </li>`}).join("")}const nt="filter-storage",ct="category-storage",rt="product-storage",at="popularity-storage",it="discount-storage",lt="shop-storage",dt={keyword:null,category:null,page:1,limit:9},ut=document.querySelector(".product-card-list"),pt=document.querySelector(".popular-list"),mt=document.querySelector(".discount-list"),gt=document.querySelector(".content-wrapper"),ft=document.querySelector(".js-header-navSpan"),B=new N,V=new b(nt),vt=new b(ct),A=new b(rt),I=new b(at),_=new b(it),m=new j(lt);let U;gt.addEventListener("click",Ct);const bt=V.getItem??dt;ht(bt);async function ht(t){await yt(),await St(t),await kt(),await wt(),U=Lt()}F(m.getAllProducts());async function yt(){try{const t=await B.getProductCategories();vt.setValue(t)}catch(t){console.log(t)}finally{}}async function St(t){try{const e=await B.getProducts(t);A.setValue(e),V.setValue(t),Z(ut,A.getValue().results)}catch(e){console.log(e)}finally{}}async function kt(){try{const t=await B.getPopularProducts();I.setValue(t),tt(pt,I.getValue())}catch(t){console.log(t)}finally{}}async function wt(){try{const t=await B.getDiscountedProducts();_.setValue(t),et(mt,_.getValue())}catch(t){console.log(t)}finally{}}function Lt(){const t=document.querySelectorAll(".js-card-item");return Bt(t),t}function Bt(t){return[...t].filter(o=>m.getAllProducts().map(s=>{if(o.dataset.id===s._id){const n=document.querySelectorAll(`[data-id="${s._id}"] .js-add-btn`);typeof n=="object"?[...n].map(a=>(a.classList.contains("popular-btn")&&(a.style.backgroundColor="#6d8434"),a.classList.add("is-added"))):(n.classList.contains("popular-btn")&&(n.style.backgroundColor="#6d8434"),n.classList.add("is-added"))}}))}function Ct(t){if(!t.target.closest(".js-add-btn"))return;const o=t.target.closest("li").dataset.id;if($t(o))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const s=A.getValue().results,n=I.getValue(),a=_.getValue(),i=x(s,o),d=x(n,o),h=x(a,o);switch("object"){case typeof i:m.setProduct(i);break;case typeof d:m.setProduct(d);break;case typeof h:m.setProduct(h);break;default:alert("Нет таких значений")}F(m.getAllProducts());function y(Q,J){return[...J].forEach(R=>{R.dataset.id===Q&&R.classList.add("is-added")})}y(o,U)}function $t(t){return m.getAllProducts().some(o=>o._id===t)}function x(t,e){return t.find(r=>r._id===e)}function F(t){let e=t.length;ft.textContent=e}const xt=document.querySelector(".product-card-list");xt.addEventListener("click",Et);function Et(t){t.preventDefault();const e=t.target;if(e.nodeName==="IMG"||e.nodeName==="H4"){const o=e.closest(".products-card-item").dataset.id;At(o)}else return}const w=document.querySelector(".modal-prod-wrapper"),Tt="shop-storage",k=new j(Tt);async function At(t){console.log(t);const o=await new N().getProductDetails(t);_t(o),It(o)}function It(t){const e=document.querySelector(".modal-prod-add-text"),o=t._id;k.getAllProducts().some(s=>s._id===o)?e.textContent="Remove from":e.textContent="Add to"}async function _t(t){try{w.classList.add("modal-active"),document.body.classList.add("stop-scroll"),w.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${l}#icon-close"></use>
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
        <use href="${l}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Pt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>P()),window.addEventListener("click",G),window.addEventListener("keydown",H)}catch(e){console.error(e)}}function Pt(t){const e=t._id,r=k.getAllProducts().some(n=>n._id===e),s=document.querySelector(".modal-prod-add-text");r?(s.textContent="Add to",k.removeProduct(e)):(s.textContent="Remove from",k.setProduct(t))}function P(){w.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",G),window.removeEventListener("keydown",H)}function G(t){t.target===w&&P()}function H(t){t.keyCode===27&&P()}const u=document.querySelector(".custom-select-ctg"),Mt=u.querySelector(".categories-btn"),Ot=u.querySelectorAll(".text-options"),qt=u.querySelector(".selected-option");Mt.addEventListener("click",()=>{u.classList.toggle("active")});let E=null;Ot.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;E&&(E.style.color="rgba(1, 1, 1, 0.5)"),qt.value=e,t.style.color="var(--text)",u.classList.remove("active"),console.log(e),E=t})});const p=document.querySelector(".custom-select-sort"),Rt=p.querySelector(".sort-btn"),jt=p.querySelectorAll(".text-options-sort"),Nt=p.querySelector(".selected-option");Rt.addEventListener("click",()=>{p.classList.toggle("active")});let T=null;jt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;T&&(T.style.color="rgba(1, 1, 1, 0.5)"),Nt.value=e,t.style.color="var(--text)",p.classList.remove("active"),console.log(e),T=t})});document.addEventListener("click",function(t){const e=u.contains(t.target),o=p.contains(t.target);e||u.classList.remove("active"),o||p.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(u.classList.remove("active"),p.classList.remove("active"))});const Vt="shop-storage";new b(Vt);const L=document.querySelector(".modal-order-wrap"),Ut=document.querySelector(".open");Ut.addEventListener("click",()=>Ft());function Ft(t){console.log(t),L.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),L.innerHTML=`
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
  `,document.querySelector(".modal-order-succ-btn").addEventListener("click",M),window.addEventListener("click",D),window.addEventListener("keydown",z)}function M(){L.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",D),window.removeEventListener("keydown",z)}function D(t){t.target===L&&M()}function z(t){t.keyCode===27&&M()}class Gt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${l}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${l}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const W="variant1",Y="variant2",X="variant3",Ht="active-pagination-btn",O="prev-btn",q="next-btn",Dt=5,zt=new Gt,S=document.querySelector(".buttons-list");S.addEventListener("click",Wt);let c=null,g=1,f=10;c=1;C(g,f,c);function C(t,e,o){if(e===t){S.innerHTML;return}S.innerHTML=Kt(t,e,o),$(o),o===t&&v(O),o===e&&v(q)}function $(t){S.querySelector(`[data-button-id='${t}']`).classList.add(Ht)}function v(t){const e=S.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Wt(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(e.classList.contains("num-btn")&&(console.dir(`Запускаем обработчик нажатия на номер ${e.dataset.buttonId}`),Yt(+e.dataset.buttonId)),e.classList.contains("prev-btn")&&(console.dir(`Запускаем обработчик нажатия на ${e.dataset.buttonId}`),Xt()),e.classList.contains("next-btn")&&(console.dir(`Запускаем обработчик нажатия на ${e.dataset.buttonId}`),Qt()))}function Yt(t){c=t,C(g,f,c),$(c),c===g&&v(O),c===f&&v(q)}function Xt(){c!==g&&(c-=1,C(g,f,c),$(c),c===g&&v(O))}function Qt(){c!==f&&(c+=1,C(g,f,c),$(c),c===f&&v(q))}function Jt(t,e,o){return e<=Dt?W:o>=t+2&o<=e-2?Y:X}function Kt(t,e,o=1){const{prevBtnCreateMarkUp:r,numBtnCreateMarkUp:s,intervalBtnCreateMarkUp:n,nextBtnCreateMarkUp:a}=zt;let i="";const d=Jt(t,e,o);if(console.log(d),d===W){let h="";for(let y=t;y<=e;y+=1)h+=s(y);i=r()+h+a()}return d===Y&&(i=r()+s(t)+n()+s(o)+n()+s(e)+a()),d===X&&(i=r()+s(t)+s(t+1)+n()+s(e-1)+s(e)+a()),i}
//# sourceMappingURL=commonHelpers2.js.map
