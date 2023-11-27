import{i as l,a as u,S as X,F as Q}from"./assets/subscription-c6c6f697.js";import"./assets/vendor-bb007519.js";function dt(t){return t.length?t.map(({category:e,img:s,is10PercentOff:o,name:n,popularity:a,price:i,size:d,_id:k})=>`<li class="products-card-item js-card-item" data-id="${k}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${n}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${n}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${d}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${a}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${i}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${l}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${l}#icon-check"
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
</div>`}function ut(t,e){t.innerHTML=dt(e)}function pt(t,e){t.innerHTML=mt(e)}function gt(t,e){t.innerHTML=vt(e)}function mt(t){return t.map(e=>{const{_id:s,name:o,img:n,category:a,size:i,popularity:d}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${n}"
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
            Category: <span class="popular-desc-span">${a}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${i}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${d}</span>
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
      </li>`}).join("")}function vt(t){return t.slice(0,2).map(s=>{const{_id:o,name:n,img:a,price:i}=s;return`<li class="discount-item js-card-item" data-id="${o}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${a}"
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
            <p class="discount-desc-text">$${i}</p>
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
      </li>`}).join("")}function ft(){const t="product-storage";new u(t);const e="filter-storage";new u(e);const s={keyword:null,category:null,page:1,limit:9},o=document.querySelector(".js-search-form"),n=document.querySelector(".js-search-input"),a=document.querySelector(".js-category"),i=document.querySelector(".js-select-option"),d="category-storage",E=new u(d).getValue();i.innerHTML=lt(E);const y=document.querySelector(".custom-select-ctg"),at=y.querySelectorAll(".text-options"),rt=y.querySelector(".selected-option");let P=null;at.forEach(g=>{g.addEventListener("click",()=>{let b=g.innerText;P&&(P.style.color="rgba(1, 1, 1, 0.5)"),rt.value=b,g.style.color="var(--text)",y.classList.remove("active"),console.log(b),s.category=b,L(s),P=g})}),o.addEventListener("submit",it);async function it(g){g.preventDefault();const b=n.value,O=a.value;console.log(O),s.keyword=b,s.category=O,await L(s),O==="Show all"&&(s.category=null,L({keyword:null,category:null,page:1,limit:9}))}function lt(g){return g.map(b=>`<div class="text-options" tabindex="0">${b}</div>`).join("").concat('<div class="text-options" tabindex="0">Show all</div>')}}class St{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
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
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const J="variant1",K="variant2",Z="variant3",yt="active-pagination-btn",F="prev-btn",z="next-btn",bt=5,ht="product-storage",Lt="filter-storage",p=new u(Lt),q=new u(ht),kt=new St,r=document.querySelector(".buttons-list");r.addEventListener("click",h);let c=null,m=1,v=m;function Tt(){q.getValue()?(v=+q.getValue().totalPages,c=+q.getValue().page,x(m,v,c)):r.innerHTML=""}function x(t,e,s){if(e===t||!e){r.innerHTML="";return}r.innerHTML=_t(t,e,s),B(s),s===t&&C(F),s===e&&C(z)}function B(t){r.querySelector(`[data-button-id='${t}']`).classList.add(yt)}function C(t){const e=r.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function wt(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function h(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(wt("filters"),e.classList.contains("num-btn")&&(Ct(+e.dataset.buttonId),p.setValue({...p.getValue(),page:+e.dataset.buttonId}),r.removeEventListener("click",h),await L(p.getValue()),r.addEventListener("click",h)),e.classList.contains("prev-btn")&&(At(),p.setValue({...p.getValue(),page:c}),r.removeEventListener("click",h),await L(p.getValue()),r.addEventListener("click",h)),e.classList.contains("next-btn")&&(Et(),p.setValue({...p.getValue(),page:c}),r.removeEventListener("click",h),await L(p.getValue()),r.addEventListener("click",h)))}function Ct(t){c=t,x(m,v,c),B(c),c===m&&C(F),c===v&&C(z)}function At(){c!==m&&(c-=1,x(m,v,c),B(c),c===m&&C(F))}function Et(){c!==v&&(c+=1,x(m,v,c),B(c),c===v&&C(z))}function $t(t,e,s){return e<=bt?J:s>=t+2&s<=e-2?K:Z}function _t(t,e,s=1){const{prevBtnCreateMarkUp:o,numBtnCreateMarkUp:n,intervalBtnCreateMarkUp:a,nextBtnCreateMarkUp:i}=kt;let d="";const k=$t(t,e,s);if(k===J){let E="";for(let y=t;y<=e;y+=1)E+=n(y);d=o()+E+i()}return k===K&&(d=o()+n(t)+a()+n(s)+a()+n(e)+i()),k===Z&&(d=o()+n(t)+n(t+1)+a()+n(e-1)+n(e)+i()),d}const It="filter-storage",xt="category-storage",Bt="product-storage",Rt="popularity-storage",Pt="discount-storage",Ot="shop-storage",qt={keyword:null,category:null,page:1,limit:9},tt=document.querySelector(".product-card-list"),et=document.querySelector(".popular-list"),st=document.querySelector(".discount-list"),Vt=document.querySelector(".content-wrapper"),Mt=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const R=new Q,U=new u(It),Nt=new u(xt),D=new u(Bt),G=new u(Rt),H=new u(Pt),w=new X(Ot);Vt.addEventListener("click",Kt);U.getValue()||U.setValue(qt);const jt=U.getValue();Ut(jt);async function Ut(t){await Dt(),await L(t),await Gt(),await Ht(),Tt(),ft(),nt()}_(w.getAllProducts());async function Dt(){try{const t=await R.getProductCategories();Nt.setValue(t)}catch(t){console.log(t)}finally{}}async function L(t){try{const e=await R.getProducts(t);D.setValue(e),ut(tt,D.getValue().results),nt()}catch(e){console.log(e)}finally{}}async function Gt(){try{const t=await R.getPopularProducts();G.setValue(t),pt(et,G.getValue())}catch(t){console.log(t)}finally{}}async function Ht(){try{const t=await R.getDiscountedProducts();H.setValue(t),gt(st,H.getValue())}catch(t){console.log(t)}finally{}}const Ft=[tt,et,st],zt="product",Yt="popular",Wt="discount",Y=!0,A="is-added",V="js-add-btn",Xt="js-card-item";function nt(){!w||!w.getAllProducts().length||w.getAllProducts().map(({_id:t})=>$(t,Y))}function $(t,e){const s=Ft.map(o=>Qt(o,t));Jt(s,e)}function Qt(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function Jt(t,e){t.map(s=>{if(s){if(e===Y){s.classList.add(A);return}if(!e){s.classList.remove(A);return}}})}function Kt(t){const{target:e}=t;if(!(e.classList.contains(V)||e.parentNode.classList.contains(V)||e.closest(`.${V}`))||e.classList.contains(A)||e.parentNode.classList.contains(A)||e.closest(`.${A}`))return;const s=e.closest(`.${Xt}`).dataset.id,o=e.closest("ul").dataset.lsName;$(s,Y),Zt(o,s)}function M(t,e){return t.find(o=>o._id===e)}function Zt(t,e){let s={};switch(t){case zt:{s=M(D.getValue().results,e);break}case Yt:{s=M(G.getValue(),e);break}case Wt:{s=M(H.getValue(),e);break}default:s={}}w.setProduct(s),_(w.getAllProducts())}function _(t){let e=t.length;Mt.textContent=e}const te=document.querySelector(".content-wrapper");te.addEventListener("click",ee);function ee(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;ne(s)}else return}const I=document.querySelector(".modal-prod-wrapper"),se="shop-storage",T=new X(se);async function ne(t){const s=await new Q().getProductDetails(t);ce(s),oe(s)}function oe(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;T.getAllProducts().some(n=>n._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function ce(t){try{I.classList.add("modal-active"),document.body.classList.add("stop-scroll"),I.innerHTML=`
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
      <h3 class="modal-prod-text">Category: <span>${t.category}</span></h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Size: <span>${t.size}</span></h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Popularity: <span>${t.popularity}</span></h3>
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>ae(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>W()),window.addEventListener("click",ot),window.addEventListener("keydown",ct)}catch(e){console.error(e)}}function ae(t){const e=t._id,o=T.getAllProducts().some(a=>a._id===e),n=document.querySelector(".modal-prod-add-text");o?(n.textContent="Add to",T.removeProduct(e),$(e,!1),_(T.getAllProducts())):(n.textContent="Remove from",T.setProduct(t),$(e,!0),_(T.getAllProducts()))}function W(){I.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",ot),window.removeEventListener("keydown",ct)}function ot(t){t.target===I&&W()}function ct(t){t.keyCode===27&&W()}const f=document.querySelector(".custom-select-ctg"),re=f.querySelector(".categories-btn"),ie=f.querySelectorAll(".text-options"),le=f.querySelector(".selected-option");re.addEventListener("click",()=>{f.classList.toggle("active")});let N=null;ie.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;N&&(N.style.color="rgba(1, 1, 1, 0.5)"),le.value=e,t.style.color="var(--text)",f.classList.remove("active"),console.log(e),N=t})});const S=document.querySelector(".custom-select-sort"),de=S.querySelector(".sort-btn"),ue=S.querySelectorAll(".text-options-sort"),pe=S.querySelector(".selected-option");de.addEventListener("click",()=>{S.classList.toggle("active")});let j=null;ue.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;j&&(j.style.color="rgba(1, 1, 1, 0.5)"),pe.value=e,t.style.color="var(--text)",S.classList.remove("active"),console.log(e),j=t})});document.addEventListener("click",function(t){const e=f.contains(t.target),s=S.contains(t.target);e||f.classList.remove("active"),s||S.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(f.classList.remove("active"),S.classList.remove("active"))});
//# sourceMappingURL=commonHelpers2.js.map
