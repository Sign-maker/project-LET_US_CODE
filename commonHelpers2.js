import{i as c,a as d,S as nt,F as rt}from"./assets/subscription-7ef116ac.js";import{d as bt}from"./assets/vendor-5ef907e7.js";function St(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:o,popularity:i,price:u,size:p,_id:h})=>n?`<li class="products-card-item js-card-item" data-id="${h}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${c}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
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

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${o}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn">
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
</div>`}function ht(t,e){t.innerHTML=St(e)}function Lt(t,e){t.innerHTML=kt(e)}function wt(t,e){t.innerHTML=Tt(e)}function kt(t){return t.map(e=>{const{_id:s,name:n,img:o,category:i,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
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
              Size: <span class="popular-desc-span">${u}</span>
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
              class="popular-desc-basket"
            ></use>
            <use
              href="${c}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function Tt(t){return t.slice(0,2).map(s=>{const{_id:n,name:o,img:i,price:u}=s;return`<li class="discount-item js-card-item" data-id="${n}">
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
            <p class="discount-desc-text">$${u}</p>
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
      </li>`}).join("")}class xt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${c}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${c}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const ct="variant1",it="variant2",lt="variant3",Ct="active-pagination-btn",Z="prev-btn",Q="next-btn",$t=5,Vt="product-storage",At="filter-storage",g=new d(At),F=new d(Vt),Et=new xt,l=document.querySelector(".buttons-list");l.addEventListener("click",S);let r=null,f=1,v=f;function C(){F.getValue()?(v=+F.getValue().totalPages,r=+F.getValue().page,q(f,v,r)):l.innerHTML=""}function q(t,e,s){if(e===t||!e){l.innerHTML="";return}l.innerHTML=Rt(t,e,s),N(s),s===t&&k(Z),s===e&&k(Q)}function N(t){l.querySelector(`[data-button-id='${t}']`).classList.add(Ct)}function k(t){const e=l.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Pt(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function S(t){const{target:e}=t;e.classList.contains("pagination-btn")&&(Pt("filters"),e.classList.contains("num-btn")&&(Ot(+e.dataset.buttonId),g.setValue({...g.getValue(),page:+e.dataset.buttonId}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("prev-btn")&&(_t(),g.setValue({...g.getValue(),page:r}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("next-btn")&&(Bt(),g.setValue({...g.getValue(),page:r}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)))}function Ot(t){r=t,q(f,v,r),N(r),r===f&&k(Z),r===v&&k(Q)}function _t(){r!==f&&(r-=1,q(f,v,r),N(r),r===f&&k(Z))}function Bt(){r!==v&&(r+=1,q(f,v,r),N(r),r===v&&k(Q))}function It(t,e,s){return e<=$t?ct:s>=t+2&s<=e-2?it:lt}function Rt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:i,nextBtnCreateMarkUp:u}=Et;let p="";const h=It(t,e,s);if(h===ct){let st="";for(let U=t;U<=e;U+=1)st+=o(U);p=n()+st+u()}return h===it&&(p=n()+o(t)+i()+o(s)+i()+o(e)+u()),h===lt&&(p=n()+o(t)+o(t+1)+i()+o(e-1)+o(e)+u()),p}const qt="filter-storage",Nt="category-storage",Mt="product-storage",a=new d(qt),at=new d(Nt);new d(Mt);const H="byABC",Y="byPrice",z="byPopularity",ut=[H,Y,z],J=[{textName:"A to Z",paramName:H,paramValue:!0},{textName:"Z to A",paramName:H,paramValue:!1},{textName:"Cheap",paramName:Y,paramValue:!0},{textName:"Expensive",paramName:Y,paramValue:!1},{textName:"Popular",paramName:z,paramValue:!1},{textName:"Not popular",paramName:z,paramValue:!0}],jt=document.querySelector(".js-search-form"),ot=document.querySelector(".js-search-input");document.querySelector(".js-category");const $=document.querySelector(".custom-select-ctg"),Ut=document.querySelector(".js-ctg-select-options"),Ft=$.querySelector(".categories-btn"),dt=$.querySelector(".selected-option-ctgr"),V=document.querySelector(".custom-select-sort"),Gt=V.querySelector(".sort-btn"),pt=V.querySelector(".selected-option-sort"),Dt=document.querySelector(".js-sort-select-options"),gt="Show all";Ft.addEventListener("click",()=>{$.classList.toggle("active")});Gt.addEventListener("click",()=>{V.classList.toggle("active")});let E=null,P=null;function Ht(){a.getValue()&&(ot.addEventListener("input",Yt),jt.addEventListener("submit",zt),ot.value=a.getValue().keyword)}async function Yt(t){if(a.getValue()){if(!t.target.value){a.setValue({...a.getValue(),keyword:null}),await m(a.getValue()),C();return}a.setValue({...a.getValue(),keyword:t.target.value})}}async function zt(t){t.preventDefault(),a.setValue({...a.getValue(),keyword:t.currentTarget.elements.search.value,page:1}),await m(a.getValue()),C()}function Wt(){if(!at.getValue())return;Ut.innerHTML=Zt(at.getValue()),$.querySelectorAll(".text-options").forEach(e=>{e.addEventListener("click",Kt)})}async function Kt(t){let e=t.currentTarget.innerText;E&&(E.style.color="rgba(1, 1, 1, 0.5)"),dt.value=e,t.currentTarget.style.color="var(--text)",$.classList.remove("active"),E=t.currentTarget,e===gt?a.setValue({...a.getValue(),category:null,page:1}):a.setValue({...a.getValue(),category:e,page:1}),await m(a.getValue()),C()}function Xt(){if(!a.getValue().category)return;dt.value=a.getValue().category,$.querySelectorAll(".text-options").forEach(e=>{e.style.color="rgba(1, 1, 1, 0.5)",e.innerText===a.getValue().category&&(e.style.color="var(--text)",E=e)})}function Zt(t){return t.map(e=>`<div class="text-options" tabindex="0">${e}</div>`).join("").concat(`<div class="text-options" tabindex="0">${gt}</div>`)}function Qt(){Dt.innerHTML=ae(J),V.querySelectorAll(".text-options-sort").forEach(e=>{e.addEventListener("click",te)})}function Jt(){if(!ut.some(s=>a.getValue().hasOwnProperty(s)))return;const t=J.find(s=>a.getValue().hasOwnProperty(s.paramName)?a.getValue()[s.paramName]===s.paramValue:!1);pt.value=t.textName,V.querySelectorAll(".text-options-sort").forEach(s=>{s.style.color="rgba(1, 1, 1, 0.5)",s.innerText===t.textName&&(s.style.color="var(--text)",P=s)})}async function te(t){let e=t.currentTarget.innerText;P&&(P.style.color="rgba(1, 1, 1, 0.5)"),pt.value=e,t.currentTarget.style.color="var(--text)",V.classList.remove("active"),P=t.currentTarget,ee(),se(e),await m(a.getValue()),C()}function ee(){const t=a.getValue();ut.forEach(e=>{t.hasOwnProperty(e)&&delete t[e]}),a.setValue(t)}function se(t){const e=J.find(s=>s.textName===t);a.setValue({...a.getValue(),[e.paramName]:e.paramValue,page:1})}function ae(t){return t.map(e=>`<div class="text-options-sort" tabindex="0">${e.textName}</div>`).join("")}const oe="filter-storage",ne="category-storage",re="product-storage",ce="popularity-storage",ie="discount-storage",le="shop-storage",ue={keyword:null,category:null,byABC:!0,page:1,limit:j()},O=document.querySelector(".product-card-list"),_=document.querySelector(".popular-list"),B=document.querySelector(".discount-list"),de=document.querySelector(".content-wrapper"),pe=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const M=new rt,y=new d(oe),ge=new d(ne),W=new d(re),K=new d(ce),X=new d(ie),w=new nt(le);de.addEventListener("click",$e);window.addEventListener("resize",bt(fe,250));y.getValue()?y.getValue().limit!==j()&&mt():y.setValue(ue);const me=y.getValue();ve(me);async function fe(){y.getValue().limit!==j()&&(mt(),await m(y.getValue()),C())}function j(){if(window.matchMedia("(max-width: 767px)").matches)return 6;if(window.matchMedia("(max-width: 1439px)").matches)return 8;if(window.matchMedia("(min-width: 1440px)").matches)return 9}function mt(){y.setValue({...y.getValue(),page:1,limit:j()})}async function ve(t){await Promise.allSettled([ye(),m(t),be(),Se()]),Ht(),Wt(),Xt(),Qt(),Jt(),C(),ft()}R(w.getAllProducts());async function ye(){try{const t=await M.getProductCategories();ge.setValue(t)}catch(t){console.log(t)}finally{}}async function m(t){try{O.classList.add("js-loader");const e=await M.getProducts(t);W.setValue(e),ht(O,W.getValue().results),ft()}catch(e){console.log(e)}finally{O.classList.remove("js-loader")}}async function be(){try{_.classList.add("js-loader");const t=await M.getPopularProducts();K.setValue(t),Lt(_,K.getValue())}catch(t){console.log(t)}finally{_.classList.remove("js-loader")}}async function Se(){try{B.classList.add("js-loader");const t=await M.getDiscountedProducts();X.setValue(t),wt(B,X.getValue())}catch(t){console.log(t)}finally{B.classList.remove("js-loader")}}const he=[O,_,B],Le="product",we="popular",ke="discount",tt=!0,A="is-added",G="js-add-btn",Te="js-card-item";function ft(){!w||!w.getAllProducts().length||w.getAllProducts().map(({_id:t})=>I(t,tt))}function I(t,e){const s=he.map(n=>xe(n,t));Ce(s,e)}function xe(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function Ce(t,e){t.map(s=>{if(s){if(e===tt){s.classList.add(A);return}if(!e){s.classList.remove(A);return}}})}function $e(t){const{target:e}=t;if(!(e.classList.contains(G)||e.parentNode.classList.contains(G)||e.closest(`.${G}`))||e.classList.contains(A)||e.parentNode.classList.contains(A)||e.closest(`.${A}`))return;const s=e.closest(`.${Te}`).dataset.id,n=e.closest("ul").dataset.lsName;I(s,tt),Ve(n,s)}function D(t,e){return t.find(n=>n._id===e)}function Ve(t,e){let s={};switch(t){case Le:{s=D(W.getValue().results,e);break}case we:{s=D(K.getValue(),e);break}case ke:{s=D(X.getValue(),e);break}default:s={}}w.setProduct(s),R(w.getAllProducts())}function R(t){let e=t.length;pe.textContent=e}const Ae=document.querySelector(".content-wrapper");Ae.addEventListener("click",Ee);function Ee(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;_e(s)}else return}const b=document.querySelector(".modal-prod-wrapper"),Pe="shop-storage",L=new nt(Pe),Oe=new rt;async function _e(t){try{b.classList.add("modal-active"),b.classList.add("js-loader");const e=await Oe.getProductDetails(t);b.classList.remove("js-loader"),Ie(e),Be(e)}catch{}finally{}}function Be(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;L.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Ie(t){try{b.classList.add("modal-active"),document.body.classList.add("stop-scroll"),b.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Re(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>et()),window.addEventListener("click",vt),window.addEventListener("keydown",yt)}catch(e){console.error(e)}}function Re(t){const e=t._id,n=L.getAllProducts().some(i=>i._id===e),o=document.querySelector(".modal-prod-add-text");n?(o.textContent="Add to",L.removeProduct(e),I(e,!1),R(L.getAllProducts())):(o.textContent="Remove from",L.setProduct(t),I(e,!0),R(L.getAllProducts()))}function et(){document.body.classList.remove("stop-scroll"),b.classList.remove("modal-active"),b.innerHTML="",window.removeEventListener("click",vt),window.removeEventListener("keydown",yt)}function vt(t){t.target===b&&et()}function yt(t){t.keyCode===27&&et()}const T=document.querySelector(".custom-select-ctg");T.querySelector(".categories-btn");T.querySelectorAll(".text-options");T.querySelector(".selected-option");const x=document.querySelector(".custom-select-sort");x.querySelector(".sort-btn");x.querySelectorAll(".text-options-sort");x.querySelector(".selected-option");document.addEventListener("click",function(t){const e=T.contains(t.target),s=x.contains(t.target);e||T.classList.remove("active"),s||x.classList.remove("active")});document.addEventListener("keydown",function(t){t.code==="Escape"&&(T.classList.remove("active"),x.classList.remove("active"))});
//# sourceMappingURL=commonHelpers2.js.map
