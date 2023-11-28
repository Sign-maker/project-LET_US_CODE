import{i as r,a as u,S as J,F as Z}from"./assets/subscription-9ebcef2c.js";import"./assets/vendor-bb007519.js";function it(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:o,popularity:i,price:d,size:p,_id:S})=>n?`<li class="products-card-item js-card-item" data-id="${S}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${r}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`:`<li class="products-card-item js-card-item" data-id="${S}">

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join(""):`<div class="wrap-noting-found">
  <p class="title-noting-found">
    Nothing was found for the selected
    <span class="acent-noting-found"> filters...</span>
  </p>
  <p class="paragraf-noting-found">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`}function lt(t,e){t.innerHTML=it(e)}function dt(t,e){t.innerHTML=pt(e)}function ut(t,e){t.innerHTML=gt(e)}function pt(t){return t.map(e=>{const{_id:s,name:n,img:o,category:i,size:d,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${n}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${n}</h3>
          </a>
          <p class="popular-desc-text">
            Category: <span class="popular-desc-span">${i}</span>
          </p>
          <div class="popular-desc-inner">
            <p class="popular-desc-text">
              Size: <span class="popular-desc-span">${d}</span>
            </p>
            <p class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${p}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn js-add-btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="${r}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${r}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function gt(t){return t.slice(0,2).map(s=>{const{_id:n,name:o,img:i,price:d}=s;return`<li class="discount-item js-card-item" data-id="${n}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${i}"
            alt="${o}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text text-overflow">${o}</p> 
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
                  href="${r}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${r}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}class mt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${r}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${r}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const tt="variant1",et="variant2",st="variant3",ft="active-pagination-btn",F="prev-btn",z="next-btn",vt=5,bt="product-storage",yt="filter-storage",g=new u(yt),M=new u(bt),St=new mt,l=document.querySelector(".buttons-list");l.addEventListener("click",b);let c=null,m=1,f=m;function B(){M.getValue()?(f=+M.getValue().totalPages,c=+M.getValue().page,P(m,f,c)):l.innerHTML=""}function P(t,e,s){if(e===t||!e){l.innerHTML="";return}l.innerHTML=Tt(t,e,s),R(s),s===t&&k(F),s===e&&k(z)}function R(t){l.querySelector(`[data-button-id='${t}']`).classList.add(ft)}function k(t){const e=l.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function ht(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function b(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(ht("filters"),e.classList.contains("num-btn")&&(Lt(+e.dataset.buttonId),g.setValue({...g.getValue(),page:+e.dataset.buttonId}),l.removeEventListener("click",b),await y(g.getValue()),l.addEventListener("click",b)),e.classList.contains("prev-btn")&&(kt(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",b),await y(g.getValue()),l.addEventListener("click",b)),e.classList.contains("next-btn")&&(wt(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",b),await y(g.getValue()),l.addEventListener("click",b)))}function Lt(t){c=t,P(m,f,c),R(c),c===m&&k(F),c===f&&k(z)}function kt(){c!==m&&(c-=1,P(m,f,c),R(c),c===m&&k(F))}function wt(){c!==f&&(c+=1,P(m,f,c),R(c),c===f&&k(z))}function $t(t,e,s){return e<=vt?tt:s>=t+2&s<=e-2?et:st}function Tt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:i,nextBtnCreateMarkUp:d}=St;let p="";const S=$t(t,e,s);if(S===tt){let W="";for(let q=t;q<=e;q+=1)W+=o(q);p=n()+W+d()}return S===et&&(p=n()+o(t)+i()+o(s)+i()+o(e)+d()),S===st&&(p=n()+o(t)+o(t+1)+i()+o(e-1)+o(e)+d()),p}const Ct="filter-storage",At="category-storage",Et="product-storage",a=new u(Ct),X=new u(At);new u(Et);const xt=document.querySelector(".js-search-form"),Q=document.querySelector(".js-search-input");document.querySelector(".js-category");const Vt=document.querySelector(".js-select-option"),T=document.querySelector(".custom-select-ctg"),_t=T.querySelector(".categories-btn"),ot=T.querySelector(".selected-option-ctgr"),nt="Show all";_t.addEventListener("click",()=>{T.classList.toggle("active")});let A=null;function It(){if(!X.getValue())return;Vt.innerHTML=Mt(X.getValue()),T.querySelectorAll(".text-options").forEach(e=>{e.addEventListener("click",Bt)})}async function Bt(t){let e=t.currentTarget.innerText;A&&(A.style.color="rgba(1, 1, 1, 0.5)"),ot.value=e,t.currentTarget.style.color="var(--text)",T.classList.remove("active"),A=t.currentTarget,e===nt?a.setValue({...a.getValue(),category:null,page:1}):a.setValue({...a.getValue(),category:e,page:1}),await y(a.getValue()),B()}function Pt(){if(!a.getValue().category)return;ot.value=a.getValue().category,T.querySelectorAll(".text-options").forEach(e=>{e.style.color="rgba(1, 1, 1, 0.5)",e.innerText===a.getValue().category&&(e.style.color="var(--text)",A=e)})}function Rt(){a.getValue()&&(Q.addEventListener("input",Ot),xt.addEventListener("submit",qt),Q.value=a.getValue().keyword)}async function Ot(t){if(a.getValue()){if(!t.target.value){a.setValue({...a.getValue(),keyword:null}),await y(a.getValue()),B();return}a.setValue({...a.getValue(),keyword:t.target.value})}}async function qt(t){t.preventDefault(),a.setValue({...a.getValue(),keyword:t.currentTarget.elements.search.value,page:1}),await y(a.getValue()),B()}function Mt(t){return t.map(e=>`<div class="text-options" tabindex="0">${e}</div>`).join("").concat(`<div class="text-options" tabindex="0">${nt}</div>`)}const jt="filter-storage",Nt="category-storage",Ut="product-storage",Dt="popularity-storage",Gt="discount-storage",Ht="shop-storage",Ft={keyword:null,category:null,page:1,limit:9},E=document.querySelector(".product-card-list"),x=document.querySelector(".popular-list"),V=document.querySelector(".discount-list"),zt=document.querySelector(".content-wrapper"),Yt=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const O=new Z,U=new u(jt),Kt=new u(Nt),D=new u(Ut),G=new u(Dt),H=new u(Gt),L=new J(Ht);zt.addEventListener("click",re);U.getValue()||U.setValue(Ft);const Wt=U.getValue();Xt(Wt);async function Xt(t){await Promise.allSettled([Qt(),y(t),Jt(),Zt()]),Rt(),It(),Pt(),B(),at()}I(L.getAllProducts());async function Qt(){try{const t=await O.getProductCategories();Kt.setValue(t)}catch(t){console.log(t)}finally{}}async function y(t){try{E.classList.add("js-loader");const e=await O.getProducts(t);D.setValue(e),lt(E,D.getValue().results),at()}catch(e){console.log(e)}finally{E.classList.remove("js-loader")}}async function Jt(){try{x.classList.add("js-loader");const t=await O.getPopularProducts();G.setValue(t),dt(x,G.getValue())}catch(t){console.log(t)}finally{x.classList.remove("js-loader")}}async function Zt(){try{V.classList.add("js-loader");const t=await O.getDiscountedProducts();H.setValue(t),ut(V,H.getValue())}catch(t){console.log(t)}finally{V.classList.remove("js-loader")}}const te=[E,x,V],ee="product",se="popular",oe="discount",Y=!0,C="is-added",j="js-add-btn",ne="js-card-item";function at(){!L||!L.getAllProducts().length||L.getAllProducts().map(({_id:t})=>_(t,Y))}function _(t,e){const s=te.map(n=>ae(n,t));ce(s,e)}function ae(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function ce(t,e){t.map(s=>{if(s){if(e===Y){s.classList.add(C);return}if(!e){s.classList.remove(C);return}}})}function re(t){const{target:e}=t;if(!(e.classList.contains(j)||e.parentNode.classList.contains(j)||e.closest(`.${j}`))||e.classList.contains(C)||e.parentNode.classList.contains(C)||e.closest(`.${C}`))return;const s=e.closest(`.${ne}`).dataset.id,n=e.closest("ul").dataset.lsName;_(s,Y),ie(n,s)}function N(t,e){return t.find(n=>n._id===e)}function ie(t,e){let s={};switch(t){case ee:{s=N(D.getValue().results,e);break}case se:{s=N(G.getValue(),e);break}case oe:{s=N(H.getValue(),e);break}default:s={}}L.setProduct(s),I(L.getAllProducts())}function I(t){let e=t.length;Yt.textContent=e}const le=document.querySelector(".content-wrapper");le.addEventListener("click",de);function de(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;ge(s)}else return}const v=document.querySelector(".modal-prod-wrapper"),ue="shop-storage",h=new J(ue),pe=new Z;async function ge(t){try{v.classList.add("modal-active"),v.classList.add("js-loader");const e=await pe.getProductDetails(t);v.classList.remove("js-loader"),fe(e),me(e)}catch{}finally{}}function me(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;h.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function fe(t){try{v.classList.add("modal-active"),document.body.classList.add("stop-scroll"),v.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${t.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${t.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${t.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${t.popularity}</span></p>
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
        <use href="${r}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>ve(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>K()),window.addEventListener("click",ct),window.addEventListener("keydown",rt)}catch(e){console.error(e)}}function ve(t){const e=t._id,n=h.getAllProducts().some(i=>i._id===e),o=document.querySelector(".modal-prod-add-text");n?(o.textContent="Add to",h.removeProduct(e),_(e,!1),I(h.getAllProducts())):(o.textContent="Remove from",h.setProduct(t),_(e,!0),I(h.getAllProducts()))}function K(){document.body.classList.remove("stop-scroll"),v.classList.remove("modal-active"),v.innerHTML="",window.removeEventListener("click",ct),window.removeEventListener("keydown",rt)}function ct(t){t.target===v&&K()}function rt(t){t.keyCode===27&&K()}const w=document.querySelector(".custom-select-ctg");w.querySelector(".categories-btn");w.querySelectorAll(".text-options");w.querySelector(".selected-option");const $=document.querySelector(".custom-select-sort");$.querySelector(".sort-btn");$.querySelectorAll(".text-options-sort");$.querySelector(".selected-option");document.addEventListener("click",function(t){const e=w.contains(t.target),s=$.contains(t.target);e||w.classList.remove("active"),s||$.classList.remove("active")});document.addEventListener("keydown",function(t){t.code==="Escape"&&(w.classList.remove("active"),$.classList.remove("active"))});
//# sourceMappingURL=commonHelpers2.js.map
