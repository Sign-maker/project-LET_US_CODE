import{i as c,a as u,S as nt,F as rt}from"./assets/subscription-51934f21.js";import{d as yt}from"./assets/vendor-5ef907e7.js";function St(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:a,popularity:i,price:d,size:p,_id:h})=>n?`<li class="products-card-item js-card-item" data-id="${h}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${c}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${a}" loading="lazy"/></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${a}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${c}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${c}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`:`<li class="products-card-item js-card-item" data-id="${h}">

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${a}" loading="lazy" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${a}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${d}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${c}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${c}#icon-check"
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
</div>`}function ht(t,e){t.innerHTML=St(e)}function wt(t,e){t.innerHTML=Tt(e)}function Lt(t,e){t.innerHTML=kt(e)}function Tt(t){return t.map(e=>{const{_id:s,name:n,img:a,category:i,size:d,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${a}"
            alt="${n}"
            class="popular-img"
            loading="lazy"
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
              href="${c}#icon-shopping-cart"
              class="popular-desc-basket" aria-label="Add to Cart"
            ></use>
            <use
              href="${c}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function kt(t){return t.slice(0,2).map(s=>{const{_id:n,name:a,img:i,price:d}=s;return`<li class="discount-item js-card-item" data-id="${n}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${i}"
            alt="${a}"
            class="discount-img"
            loading="lazy"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text text-overflow">${a}</p> 
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
                  href="${c}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${c}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${c}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}class Ct{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn" aria-label="Previous">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${c}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn" aria-label="Next">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${c}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const ct="variant1",it="variant2",lt="variant3",xt="active-pagination-btn",Z="prev-btn",Q="next-btn",$t=5,At="product-storage",Vt="filter-storage",g=new u(Vt),F=new u(At),Et=new Ct,l=document.querySelector(".buttons-list");l.addEventListener("click",S);let r=null,f=1,v=f;function x(){F.getValue()?(v=+F.getValue().totalPages,r=+F.getValue().page,q(f,v,r)):l.innerHTML=""}function q(t,e,s){if(e===t||!e){l.innerHTML="";return}l.innerHTML=Rt(t,e,s),N(s),s===t&&T(Z),s===e&&T(Q)}function N(t){l.querySelector(`[data-button-id='${t}']`).classList.add(xt)}function T(t){const e=l.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Pt(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function S(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(Pt("filters"),e.classList.contains("num-btn")&&(Ot(+e.dataset.buttonId),g.setValue({...g.getValue(),page:+e.dataset.buttonId}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("prev-btn")&&(Bt(),g.setValue({...g.getValue(),page:r}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("next-btn")&&(_t(),g.setValue({...g.getValue(),page:r}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)))}function Ot(t){r=t,q(f,v,r),N(r),r===f&&T(Z),r===v&&T(Q)}function Bt(){r!==f&&(r-=1,q(f,v,r),N(r),r===f&&T(Z))}function _t(){r!==v&&(r+=1,q(f,v,r),N(r),r===v&&T(Q))}function It(t,e,s){return e<=$t?ct:s>=t+2&s<=e-2?it:lt}function Rt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:a,intervalBtnCreateMarkUp:i,nextBtnCreateMarkUp:d}=Et;let p="";const h=It(t,e,s);if(h===ct){let st="";for(let U=t;U<=e;U+=1)st+=a(U);p=n()+st+d()}return h===it&&(p=n()+a(t)+i()+a(s)+i()+a(e)+d()),h===lt&&(p=n()+a(t)+a(t+1)+i()+a(e-1)+a(e)+d()),p}const qt="filter-storage",Nt="category-storage",Mt="product-storage",o=new u(qt),ot=new u(Nt);new u(Mt);const D="byABC",z="byPrice",Y="byPopularity",dt=[D,z,Y],J=[{textName:"A to Z",paramName:D,paramValue:!0},{textName:"Z to A",paramName:D,paramValue:!1},{textName:"Cheap",paramName:z,paramValue:!0},{textName:"Expensive",paramName:z,paramValue:!1},{textName:"Popular",paramName:Y,paramValue:!1},{textName:"Not popular",paramName:Y,paramValue:!0}],jt=document.querySelector(".js-search-form"),at=document.querySelector(".js-search-input");document.querySelector(".js-category");const $=document.querySelector(".custom-select-ctg"),Ut=document.querySelector(".js-ctg-select-options"),Ft=$.querySelector(".categories-btn"),ut=$.querySelector(".selected-option-ctgr"),A=document.querySelector(".custom-select-sort"),Gt=A.querySelector(".sort-btn"),pt=A.querySelector(".selected-option-sort"),Ht=document.querySelector(".js-sort-select-options"),gt="Show all";Ft.addEventListener("click",()=>{$.classList.toggle("active")});Gt.addEventListener("click",()=>{A.classList.toggle("active")});let E=null,P=null;function Dt(){o.getValue()&&(at.addEventListener("input",zt),jt.addEventListener("submit",Yt),at.value=o.getValue().keyword)}async function zt(t){if(o.getValue()){if(!t.target.value){o.setValue({...o.getValue(),keyword:null}),await m(o.getValue()),x();return}o.setValue({...o.getValue(),keyword:t.target.value})}}async function Yt(t){t.preventDefault(),o.setValue({...o.getValue(),keyword:t.currentTarget.elements.search.value,page:1}),await m(o.getValue()),x()}function Wt(){if(!ot.getValue())return;Ut.innerHTML=Zt(ot.getValue()),$.querySelectorAll(".text-options").forEach(e=>{e.addEventListener("click",Kt)})}async function Kt(t){let e=t.currentTarget.innerText;E&&(E.style.color="rgba(1, 1, 1, 0.5)"),ut.value=e,t.currentTarget.style.color="var(--text)",$.classList.remove("active"),E=t.currentTarget,e===gt?o.setValue({...o.getValue(),category:null,page:1}):o.setValue({...o.getValue(),category:e,page:1}),await m(o.getValue()),x()}function Xt(){if(!o.getValue().category)return;ut.value=o.getValue().category,$.querySelectorAll(".text-options").forEach(e=>{e.style.color="rgba(1, 1, 1, 0.5)",e.innerText===o.getValue().category&&(e.style.color="var(--text)",E=e)})}function Zt(t){return t.map(e=>`<div class="text-options" tabindex="0">${e}</div>`).join("").concat(`<div class="text-options" tabindex="0">${gt}</div>`)}function Qt(){Ht.innerHTML=oe(J),A.querySelectorAll(".text-options-sort").forEach(e=>{e.addEventListener("click",te)})}function Jt(){if(!dt.some(s=>o.getValue().hasOwnProperty(s)))return;const t=J.find(s=>o.getValue().hasOwnProperty(s.paramName)?o.getValue()[s.paramName]===s.paramValue:!1);pt.value=t.textName,A.querySelectorAll(".text-options-sort").forEach(s=>{s.style.color="rgba(1, 1, 1, 0.5)",s.innerText===t.textName&&(s.style.color="var(--text)",P=s)})}async function te(t){let e=t.currentTarget.innerText;P&&(P.style.color="rgba(1, 1, 1, 0.5)"),pt.value=e,t.currentTarget.style.color="var(--text)",A.classList.remove("active"),P=t.currentTarget,ee(),se(e),await m(o.getValue()),x()}function ee(){const t=o.getValue();dt.forEach(e=>{t.hasOwnProperty(e)&&delete t[e]}),o.setValue(t)}function se(t){const e=J.find(s=>s.textName===t);o.setValue({...o.getValue(),[e.paramName]:e.paramValue,page:1})}function oe(t){return t.map(e=>`<div class="text-options-sort" tabindex="0">${e.textName}</div>`).join("")}const ae="filter-storage",ne="category-storage",re="product-storage",ce="popularity-storage",ie="discount-storage",le="shop-storage",de={keyword:null,category:null,byABC:!0,page:1,limit:j()},O=document.querySelector(".product-card-list"),B=document.querySelector(".popular-list"),_=document.querySelector(".discount-list"),ue=document.querySelector(".content-wrapper"),pe=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const M=new rt,b=new u(ae),ge=new u(ne),W=new u(re),K=new u(ce),X=new u(ie),L=new nt(le);ue.addEventListener("click",$e);window.addEventListener("resize",yt(fe,250));b.getValue()?b.getValue().limit!==j()&&mt():b.setValue(de);const me=b.getValue();ve(me);async function fe(){b.getValue().limit!==j()&&(mt(),await m(b.getValue()),x())}function j(){if(window.matchMedia("(max-width: 767px)").matches)return 6;if(window.matchMedia("(max-width: 1439px)").matches)return 8;if(window.matchMedia("(min-width: 1440px)").matches)return 9}function mt(){b.setValue({...b.getValue(),page:1,limit:j()})}async function ve(t){await Promise.allSettled([be(),m(t),ye(),Se()]),Dt(),Wt(),Xt(),Qt(),Jt(),x(),ft()}R(L.getAllProducts());async function be(){try{const t=await M.getProductCategories();ge.setValue(t)}catch(t){console.log(t)}finally{}}async function m(t){try{O.classList.add("js-loader");const e=await M.getProducts(t);W.setValue(e),ht(O,W.getValue().results),ft()}catch(e){console.log(e)}finally{O.classList.remove("js-loader")}}async function ye(){try{B.classList.add("js-loader");const t=await M.getPopularProducts();K.setValue(t),wt(B,K.getValue())}catch(t){console.log(t)}finally{B.classList.remove("js-loader")}}async function Se(){try{_.classList.add("js-loader");const t=await M.getDiscountedProducts();X.setValue(t),Lt(_,X.getValue())}catch(t){console.log(t)}finally{_.classList.remove("js-loader")}}const he=[O,B,_],we="product",Le="popular",Te="discount",tt=!0,V="is-added",G="js-add-btn",ke="js-card-item";function ft(){!L||!L.getAllProducts().length||L.getAllProducts().map(({_id:t})=>I(t,tt))}function I(t,e){const s=he.map(n=>Ce(n,t));xe(s,e)}function Ce(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function xe(t,e){t.map(s=>{if(s){if(e===tt){s.classList.add(V);return}if(!e){s.classList.remove(V);return}}})}function $e(t){const{target:e}=t;if(!(e.classList.contains(G)||e.parentNode.classList.contains(G)||e.closest(`.${G}`))||e.classList.contains(V)||e.parentNode.classList.contains(V)||e.closest(`.${V}`))return;const s=e.closest(`.${ke}`).dataset.id,n=e.closest("ul").dataset.lsName;I(s,tt),Ae(n,s)}function H(t,e){return t.find(n=>n._id===e)}function Ae(t,e){let s={};switch(t){case we:{s=H(W.getValue().results,e);break}case Le:{s=H(K.getValue(),e);break}case Te:{s=H(X.getValue(),e);break}default:s={}}L.setProduct(s),R(L.getAllProducts())}function R(t){let e=t.length;pe.textContent=e}const Ve=document.querySelector(".content-wrapper");Ve.addEventListener("click",Ee);function Ee(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;Be(s)}else return}const y=document.querySelector(".modal-prod-wrapper"),Pe="shop-storage",w=new nt(Pe),Oe=new rt;async function Be(t){try{y.classList.add("modal-active"),y.classList.add("js-loader");const e=await Oe.getProductDetails(t);y.classList.remove("js-loader"),Ie(e),_e(e)}catch{}finally{}}function _e(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;w.getAllProducts().some(a=>a._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Ie(t){try{y.classList.add("modal-active"),document.body.classList.add("stop-scroll"),y.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${c}#icon-close"></use>
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
        <use href="${c}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Re(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>et()),window.addEventListener("click",vt),window.addEventListener("keydown",bt)}catch(e){console.error(e)}}function Re(t){const e=t._id,n=w.getAllProducts().some(i=>i._id===e),a=document.querySelector(".modal-prod-add-text");n?(a.textContent="Add to",w.removeProduct(e),I(e,!1),R(w.getAllProducts())):(a.textContent="Remove from",w.setProduct(t),I(e,!0),R(w.getAllProducts()))}function et(){document.body.classList.remove("stop-scroll"),y.classList.remove("modal-active"),y.innerHTML="",window.removeEventListener("click",vt),window.removeEventListener("keydown",bt)}function vt(t){t.target===y&&et()}function bt(t){t.keyCode===27&&et()}const k=document.querySelector(".custom-select-ctg");k.querySelector(".categories-btn");k.querySelectorAll(".text-options");k.querySelector(".selected-option");const C=document.querySelector(".custom-select-sort");C.querySelector(".sort-btn");C.querySelectorAll(".text-options-sort");C.querySelector(".selected-option");document.addEventListener("click",function(t){const e=k.contains(t.target),s=C.contains(t.target);e||k.classList.remove("active"),s||C.classList.remove("active")});document.addEventListener("keydown",function(t){t.code==="Escape"&&(k.classList.remove("active"),C.classList.remove("active"))});function qe(){const t=document.querySelector(".back-to-top");window.addEventListener("scroll",e),t.addEventListener("click",s);function e(){const n=window.scrollY,a=document.documentElement.clientHeight;n>a?t.classList.add("show"):t.classList.remove("show")}function s(){window.scroll({top:0,behavior:"smooth"})}}qe();
//# sourceMappingURL=commonHelpers2.js.map
