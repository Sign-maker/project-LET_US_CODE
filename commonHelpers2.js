import{i as r,a as u,S as K,F as Z}from"./assets/subscription-7a2bae01.js";import"./assets/vendor-bb007519.js";function dt(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:o,popularity:a,price:l,size:d,_id:y})=>n?`<li class="products-card-item js-card-item" data-id="${y}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${r}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${d}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${a}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${l}</p>
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
            </li>`:`<li class="products-card-item js-card-item" data-id="${y}">

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${d}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${a}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${l}</p>
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
</div>`}function ut(t,e){t.innerHTML=dt(e)}function pt(t,e){t.innerHTML=mt(e)}function gt(t,e){t.innerHTML=vt(e)}function mt(t){return t.map(e=>{const{_id:s,name:n,img:o,category:a,size:l,popularity:d}=e;return`<li class="popular-item js-card-item" data-id="${s}">
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
            Category: <span class="popular-desc-span">${a}</span>
          </p>
          <div class="popular-desc-inner">
            <p class="popular-desc-text">
              Size: <span class="popular-desc-span">${l}</span>
            </p>
            <p class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${d}</span>
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
      </li>`}).join("")}function vt(t){return t.slice(0,2).map(s=>{const{_id:n,name:o,img:a,price:l}=s;return`<li class="discount-item js-card-item" data-id="${n}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${a}"
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
            <p class="discount-desc-text">$${l}</p>
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
      </li>`}).join("")}function ft(){const t="product-storage";new u(t);const e="filter-storage";new u(e);const s={keyword:null,category:null,page:1,limit:9},n=document.querySelector(".js-search-form"),o=document.querySelector(".js-search-input"),a=document.querySelector(".js-category"),l=document.querySelector(".js-select-option"),d="category-storage",E=new u(d).getValue();l.innerHTML=it(E);const h=document.querySelector(".custom-select-ctg"),at=h.querySelectorAll(".text-options"),rt=h.querySelector(".selected-option");let M=null;at.forEach(g=>{g.addEventListener("click",()=>{let L=g.innerText;M&&(M.style.color="rgba(1, 1, 1, 0.5)"),rt.value=L,g.style.color="var(--text)",h.classList.remove("active"),console.log(L),s.category=L,T(s),M=g})}),n.addEventListener("submit",lt);async function lt(g){g.preventDefault();const L=o.value,V=a.value;console.log(V),s.keyword=L,s.category=V,await T(s),V==="Show all"&&(s.category=null,T({keyword:null,category:null,page:1,limit:9}))}function it(g){return g.map(L=>`<div class="text-options" tabindex="0">${L}</div>`).join("").concat('<div class="text-options" tabindex="0">Show all</div>')}}class bt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
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
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const tt="variant1",et="variant2",st="variant3",St="active-pagination-btn",W="prev-btn",X="next-btn",yt=5,ht="product-storage",Lt="filter-storage",p=new u(Lt),j=new u(ht),kt=new bt,i=document.querySelector(".buttons-list");i.addEventListener("click",k);let c=null,m=1,v=m;function Tt(){j.getValue()?(v=+j.getValue().totalPages,c=+j.getValue().page,P(m,v,c)):i.innerHTML=""}function P(t,e,s){if(e===t||!e){i.innerHTML="";return}i.innerHTML=xt(t,e,s),O(s),s===t&&C(W),s===e&&C(X)}function O(t){i.querySelector(`[data-button-id='${t}']`).classList.add(St)}function C(t){const e=i.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function wt(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function k(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(wt("filters"),e.classList.contains("num-btn")&&($t(+e.dataset.buttonId),p.setValue({...p.getValue(),page:+e.dataset.buttonId}),i.removeEventListener("click",k),await T(p.getValue()),i.addEventListener("click",k)),e.classList.contains("prev-btn")&&(Ct(),p.setValue({...p.getValue(),page:c}),i.removeEventListener("click",k),await T(p.getValue()),i.addEventListener("click",k)),e.classList.contains("next-btn")&&(At(),p.setValue({...p.getValue(),page:c}),i.removeEventListener("click",k),await T(p.getValue()),i.addEventListener("click",k)))}function $t(t){c=t,P(m,v,c),O(c),c===m&&C(W),c===v&&C(X)}function Ct(){c!==m&&(c-=1,P(m,v,c),O(c),c===m&&C(W))}function At(){c!==v&&(c+=1,P(m,v,c),O(c),c===v&&C(X))}function Et(t,e,s){return e<=yt?tt:s>=t+2&s<=e-2?et:st}function xt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:a,nextBtnCreateMarkUp:l}=kt;let d="";const y=Et(t,e,s);if(y===tt){let E="";for(let h=t;h<=e;h+=1)E+=o(h);d=n()+E+l()}return y===et&&(d=n()+o(t)+a()+o(s)+a()+o(e)+l()),y===st&&(d=n()+o(t)+o(t+1)+a()+o(e-1)+o(e)+l()),d}const It="filter-storage",_t="category-storage",Bt="product-storage",Rt="popularity-storage",Pt="discount-storage",Ot="shop-storage",qt={keyword:null,category:null,page:1,limit:9},x=document.querySelector(".product-card-list"),I=document.querySelector(".popular-list"),_=document.querySelector(".discount-list"),Mt=document.querySelector(".content-wrapper"),Vt=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const q=new Z,H=new u(It),jt=new u(_t),F=new u(Bt),z=new u(Rt),Y=new u(Pt),$=new K(Ot);Mt.addEventListener("click",Kt);H.getValue()||H.setValue(qt);const Nt=H.getValue();Ut(Nt);async function Ut(t){await Promise.allSettled([Dt(),T(t),Gt(),Ht()]),Tt(),ft(),ot()}R($.getAllProducts());async function Dt(){try{const t=await q.getProductCategories();jt.setValue(t)}catch(t){console.log(t)}finally{}}async function T(t){try{x.classList.add("js-loader");const e=await q.getProducts(t);F.setValue(e),ut(x,F.getValue().results),ot()}catch(e){console.log(e)}finally{x.classList.remove("js-loader")}}async function Gt(){try{I.classList.add("js-loader");const t=await q.getPopularProducts();z.setValue(t),pt(I,z.getValue())}catch(t){console.log(t)}finally{I.classList.remove("js-loader")}}async function Ht(){try{_.classList.add("js-loader");const t=await q.getDiscountedProducts();Y.setValue(t),gt(_,Y.getValue())}catch(t){console.log(t)}finally{_.classList.remove("js-loader")}}const Ft=[x,I,_],zt="product",Yt="popular",Wt="discount",Q=!0,A="is-added",N="js-add-btn",Xt="js-card-item";function ot(){!$||!$.getAllProducts().length||$.getAllProducts().map(({_id:t})=>B(t,Q))}function B(t,e){const s=Ft.map(n=>Qt(n,t));Jt(s,e)}function Qt(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function Jt(t,e){t.map(s=>{if(s){if(e===Q){s.classList.add(A);return}if(!e){s.classList.remove(A);return}}})}function Kt(t){const{target:e}=t;if(!(e.classList.contains(N)||e.parentNode.classList.contains(N)||e.closest(`.${N}`))||e.classList.contains(A)||e.parentNode.classList.contains(A)||e.closest(`.${A}`))return;const s=e.closest(`.${Xt}`).dataset.id,n=e.closest("ul").dataset.lsName;B(s,Q),Zt(n,s)}function U(t,e){return t.find(n=>n._id===e)}function Zt(t,e){let s={};switch(t){case zt:{s=U(F.getValue().results,e);break}case Yt:{s=U(z.getValue(),e);break}case Wt:{s=U(Y.getValue(),e);break}default:s={}}$.setProduct(s),R($.getAllProducts())}function R(t){let e=t.length;Vt.textContent=e}const te=document.querySelector(".content-wrapper");te.addEventListener("click",ee);function ee(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;ne(s)}else return}const f=document.querySelector(".modal-prod-wrapper"),se="shop-storage",w=new K(se),oe=new Z;async function ne(t){try{f.classList.add("modal-active"),f.classList.add("js-loader");const e=await oe.getProductDetails(t);f.classList.remove("js-loader"),ae(e),ce(e)}catch{}finally{}}function ce(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;w.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function ae(t){try{f.classList.add("modal-active"),document.body.classList.add("stop-scroll"),f.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>re(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>J()),window.addEventListener("click",nt),window.addEventListener("keydown",ct)}catch(e){console.error(e)}}function re(t){const e=t._id,n=w.getAllProducts().some(a=>a._id===e),o=document.querySelector(".modal-prod-add-text");n?(o.textContent="Add to",w.removeProduct(e),B(e,!1),R(w.getAllProducts())):(o.textContent="Remove from",w.setProduct(t),B(e,!0),R(w.getAllProducts()))}function J(){document.body.classList.remove("stop-scroll"),f.classList.remove("modal-active"),f.innerHTML="",window.removeEventListener("click",nt),window.removeEventListener("keydown",ct)}function nt(t){t.target===f&&J()}function ct(t){t.keyCode===27&&J()}const b=document.querySelector(".custom-select-ctg"),le=b.querySelector(".categories-btn"),ie=b.querySelectorAll(".text-options"),de=b.querySelector(".selected-option");le.addEventListener("click",()=>{b.classList.toggle("active")});let D=null;ie.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;D&&(D.style.color="rgba(1, 1, 1, 0.5)"),de.value=e,t.style.color="var(--text)",b.classList.remove("active"),console.log(e),D=t})});const S=document.querySelector(".custom-select-sort"),ue=S.querySelector(".sort-btn"),pe=S.querySelectorAll(".text-options-sort"),ge=S.querySelector(".selected-option");ue.addEventListener("click",()=>{S.classList.toggle("active")});let G=null;pe.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;G&&(G.style.color="rgba(1, 1, 1, 0.5)"),ge.value=e,t.style.color="var(--text)",S.classList.remove("active"),console.log(e),G=t})});document.addEventListener("click",function(t){const e=b.contains(t.target),s=S.contains(t.target);e||b.classList.remove("active"),s||S.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(b.classList.remove("active"),S.classList.remove("active"))});
//# sourceMappingURL=commonHelpers2.js.map
