import{a as b,S as W,F as X}from"./assets/subscription-f5be2e94.js";import"./assets/vendor-bb007519.js";const v="/project-LET_US_CODE/assets/icons-b681127c.svg";function at(t){return t.length?t.map(({category:e,img:s,is10PercentOff:d,name:a,popularity:r,price:u,size:p,_id:c})=>`<li class="products-card-item js-card-item" data-id="${c}">
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
                            <use href="${v}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${v}#icon-check"
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
</div>`}function ct(t,e){t.innerHTML=at(e)}function rt(t,e){t.innerHTML=lt(e)}function it(t,e){t.innerHTML=dt(e)}function lt(t){return t.map(e=>{const{_id:s,name:d,img:a,category:r,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${a}"
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
              href="${v}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${v}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function dt(t){return t.slice(0,2).map(s=>{const{_id:d,name:a,img:r,price:u}=s;return`<li class="discount-item js-card-item" data-id="${d}">
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
                  href="${v}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${v}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${v}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}function ut(){const t="product-storage";new b(t);const e="filter-storage";new b(e);const s={keyword:null,category:null,page:1,limit:9},d=document.querySelector(".js-search-form"),a=document.querySelector(".js-search-input"),r=document.querySelector(".js-category"),u=document.querySelector(".js-select-option"),p="category-storage",o=new b(p).getValue();u.innerHTML=y(o);const k=document.querySelector(".custom-select-ctg"),B=k.querySelectorAll(".text-options"),L=k.querySelector(".selected-option");let i=null;B.forEach(f=>{f.addEventListener("click",()=>{let m=f.innerText;i&&(i.style.color="rgba(1, 1, 1, 0.5)"),L.value=m,f.style.color="var(--text)",k.classList.remove("active"),console.log(m),s.category=m,E(s),i=f})}),d.addEventListener("submit",g);async function g(f){f.preventDefault();const m=a.value,S=r.value;console.log(S),s.keyword=m,s.category=S,await E(s),S==="Show all"&&(s.category=null,E({keyword:null,category:null,page:1,limit:9}))}function y(f){return f.map(m=>`<div class="text-options" tabindex="0">${m}</div>`).join("").concat('<div class="text-options" tabindex="0">Show all</div>')}}class pt{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${e}">${e}</button>
      </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${v}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${v}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}function gt(){const t="variant1",e="variant2",s="variant3",d="active-pagination-btn",a="prev-btn",r="next-btn",p="product-storage",c="filter-storage",o=new b(c),k=new b(p),B=new pt,L=document.querySelector(".buttons-list");L.addEventListener("click",Z);let i=null,g=1,y=g;k.getValue()&&(y=+k.getValue().totalPages,i=+k.getValue().page,f(g,y,i));function f(l,n,h){if(n===l||!n){L.innerHTML="";return}L.innerHTML=nt(l,n,h),m(h),h===l&&S(a),h===n&&S(r)}function m(l){L.querySelector(`[data-button-id='${l}']`).classList.add(d)}function S(l){const n=L.querySelector(`[data-button-id='${l}']`);n.setAttribute("disabled",""),n.classList.add("disabled")}function Z(l){const{target:n}=l;n.classList.contains("pagination-btn")&&(n.classList.contains("num-btn")&&(console.dir(`Запускаем обработчик нажатия на номер ${n.dataset.buttonId}`),tt(+n.dataset.buttonId),o.setValue({...o.getValue(),page:+n.dataset.buttonId}),E(o.getValue())),n.classList.contains("prev-btn")&&(console.dir(`Запускаем обработчик нажатия на ${n.dataset.buttonId}`),et(),o.setValue({...o.getValue(),page:i}),E(o.getValue())),n.classList.contains("next-btn")&&(console.dir(`Запускаем обработчик нажатия на ${n.dataset.buttonId}`),st(),o.setValue({...o.getValue(),page:i}),E(o.getValue())))}function tt(l){i=l,f(g,y,i),m(i),i===g&&S(a),i===y&&S(r)}function et(){i!==g&&(i-=1,f(g,y,i),m(i),i===g&&S(a))}function st(){i!==y&&(i+=1,f(g,y,i),m(i),i===y&&S(r))}function ot(l,n,h){return n<=5?t:h>=l+2&h<=n-2?e:s}function nt(l,n,h=1){const{prevBtnCreateMarkUp:P,numBtnCreateMarkUp:w,intervalBtnCreateMarkUp:_,nextBtnCreateMarkUp:I}=B;let A="";const R=ot(l,n,h);if(console.log(R),R===t){let z="";for(let j=l;j<=n;j+=1)z+=w(j);A=P()+z+I()}return R===e&&(A=P()+w(l)+_()+w(h)+_()+w(n)+I()),R===s&&(A=P()+w(l)+w(l+1)+_()+w(n-1)+w(n)+I()),A}}const ft="filter-storage",mt="category-storage",bt="product-storage",vt="popularity-storage",yt="discount-storage",St="shop-storage",ht={keyword:null,category:null,page:1,limit:9},kt=document.querySelector(".product-card-list"),Lt=document.querySelector(".popular-list"),wt=document.querySelector(".discount-list"),Ct=document.querySelector(".content-wrapper"),Tt=document.querySelector(".js-header-navSpan");document.querySelector(".js-category");const O=new X,U=new b(ft),$t=new b(mt),G=new b(bt),D=new b(vt),F=new b(yt),$=new W(St);let Y;Ct.addEventListener("click",Pt);U.getValue()||U.setValue(ht);const Et=U.getValue();Bt(Et);async function Bt(t){await At(),await E(t),await Rt(),await xt(),Y=qt(),ut(),gt()}Q($.getAllProducts());async function At(){try{const t=await O.getProductCategories();$t.setValue(t)}catch(t){console.log(t)}finally{}}async function E(t){try{const e=await O.getProducts(t);G.setValue(e),ct(kt,G.getValue().results)}catch(e){console.log(e)}finally{}}async function Rt(){try{const t=await O.getPopularProducts();D.setValue(t),rt(Lt,D.getValue())}catch(t){console.log(t)}finally{}}async function xt(){try{const t=await O.getDiscountedProducts();F.setValue(t),it(wt,F.getValue())}catch(t){console.log(t)}finally{}}function qt(){const t=document.querySelectorAll(".js-card-item");return Ot(t),t}function Ot(t){return[...t].filter(s=>$.getAllProducts().map(a=>{if(s.dataset.id===a._id){const r=document.querySelectorAll(`[data-id="${a._id}"] .js-add-btn`);typeof r=="object"?[...r].map(u=>(u.classList.contains("popular-btn")&&(u.style.backgroundColor="#6d8434"),u.classList.add("is-added"))):(r.classList.contains("popular-btn")&&(r.style.backgroundColor="#6d8434"),r.classList.add("is-added"))}}))}function Pt(t){if(!t.target.closest(".js-add-btn"))return;const s=t.target.closest("li").dataset.id;if(_t(s))return;t.target.closest("button").classList.add("is-added"),t.target.closest(".popular-btn")&&(t.target.closest(".popular-btn").style.backgroundColor="#6d8434");const a=G.getValue().results,r=D.getValue(),u=F.getValue(),p=M(a,s),c=M(r,s),o=M(u,s);switch("object"){case typeof p:$.setProduct(p);break;case typeof c:$.setProduct(c);break;case typeof o:$.setProduct(o);break;default:alert("Нет таких значений")}It(t,s),Q($.getAllProducts());function k(B,L){return[...L].forEach(g=>{g.dataset.id===B&&g.classList.add("is-added")})}k(s,Y)}function _t(t){const e=$.getAllProducts();if(e!==null)return e.some(s=>s._id===t)}function M(t,e){return t.find(d=>d._id===e)}function Q(t){let e=t.length;Tt.textContent=e}function It(t,e){const s=document.querySelector(".product-card-list"),d=document.querySelector(".popular-list"),a=document.querySelector(".discount-list"),r=[...s.children],u=[...a.children],p=[...d.children];t.target.closest(".products-wrapper")&&(p.forEach(c=>{if(c.dataset.id===e){const o=document.querySelector(`.popular-list [data-id="${c.dataset.id}"] .js-add-btn`);o.classList.add("is-added"),o.style.backgroundColor="#6d8434"}}),u.forEach(c=>{c.dataset.id===e&&document.querySelector(`.discount-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")})),t.target.closest(".popular-list")&&(r.forEach(c=>{c.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")}),u.forEach(c=>{if(c.dataset.id===e){const o=document.querySelector(`.discount-list [data-id="${c.dataset.id}"] .js-add-btn`);console.log(o),o.classList.add("is-added")}})),t.target.closest(".discount-list")&&(p.forEach(c=>{if(c.dataset.id===e){const o=document.querySelector(`.popular-list [data-id="${c.dataset.id}"] .js-add-btn`);o.classList.add("is-added"),o.style.backgroundColor="#6d8434"}}),r.forEach(c=>{c.dataset.id===e&&document.querySelector(`.product-card-list [data-id="${c.dataset.id}"] .js-add-btn`).classList.add("is-added")}))}const jt=document.querySelector(".content-wrapper");jt.addEventListener("click",Mt);function Mt(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;Nt(s)}else return}const q=document.querySelector(".modal-prod-wrapper"),Vt="shop-storage",x=new W(Vt);async function Nt(t){console.log(t);const s=await new X().getProductDetails(t);Gt(s),Ut(s)}function Ut(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;x.getAllProducts().some(a=>a._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Gt(t){try{q.classList.add("modal-active"),document.body.classList.add("stop-scroll"),q.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${v}#icon-close"></use>
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
        <use href="${v}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Dt(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>H()),window.addEventListener("click",J),window.addEventListener("keydown",K)}catch(e){console.error(e)}}function Dt(t){const e=t._id,d=x.getAllProducts().some(r=>r._id===e),a=document.querySelector(".modal-prod-add-text");d?(a.textContent="Add to",x.removeProduct(e)):(a.textContent="Remove from",x.setProduct(t))}function H(){q.classList.remove("modal-active"),document.body.classList.remove("stop-scroll"),window.removeEventListener("click",J),window.removeEventListener("keydown",K)}function J(t){t.target===q&&H()}function K(t){t.keyCode===27&&H()}const C=document.querySelector(".custom-select-ctg"),Ft=C.querySelector(".categories-btn"),Ht=C.querySelectorAll(".text-options"),zt=C.querySelector(".selected-option");Ft.addEventListener("click",()=>{C.classList.toggle("active")});let V=null;Ht.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;V&&(V.style.color="rgba(1, 1, 1, 0.5)"),zt.value=e,t.style.color="var(--text)",C.classList.remove("active"),console.log(e),V=t})});const T=document.querySelector(".custom-select-sort"),Wt=T.querySelector(".sort-btn"),Xt=T.querySelectorAll(".text-options-sort"),Yt=T.querySelector(".selected-option");Wt.addEventListener("click",()=>{T.classList.toggle("active")});let N=null;Xt.forEach(t=>{t.addEventListener("click",()=>{let e=t.innerText;N&&(N.style.color="rgba(1, 1, 1, 0.5)"),Yt.value=e,t.style.color="var(--text)",T.classList.remove("active"),console.log(e),N=t})});document.addEventListener("click",function(t){const e=C.contains(t.target),s=T.contains(t.target);e||C.classList.remove("active"),s||T.classList.remove("active")});document.addEventListener("keyup",function(t){t.code==="Escape"&&(C.classList.remove("active"),T.classList.remove("active"))});const Qt="shop-storage";new b(Qt);
//# sourceMappingURL=commonHelpers2.js.map
