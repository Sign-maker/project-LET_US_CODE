import{S as i,F as S}from"./assets/subscription-bf7a7a86.js";import{S as m}from"./assets/vendor-bb007519.js";const C="shop-storage";new i(C);function h(e){return e.map(({category:o,img:r,name:c,price:t,size:l,_id:f})=>`<li class="cart-item" data-id="${f}">
      <img class="cart-img-product" src="${r}" alt="${c}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${c}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${o}</span>  Size: <span class="cart-text-black">${l}</span></p>
          <p class="cart-product-price">$${t}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`).join("")}let s=[];const v=document.querySelector(".number-of-product"),y=document.querySelector(".nav-span"),b=document.querySelector(".total-amount"),d=document.querySelector(".cart-list"),n=new i("shop-storage");d.addEventListener("click",A);const P=document.querySelector(".js-delete-all-btn");P.addEventListener("click",()=>{d.innerHTML="",n.removeAllProducts(),p(0),a(0)});function g(){s=n.getAllProducts()??[],d.innerHTML=h(s),p(s.length),a(s.reduce((o,r)=>o+r.price,0))}g();function p(e){v.textContent=e,y.textContent=e}function a(e){b.textContent=e.toFixed(2)}function A(e){if(!e.target.closest(".cart-product-close-btn"))return;const r=e.target.closest("li").dataset.id,c=n.getAllProducts().filter(t=>t._id!==r);n.setAllProduct(c),g(),a(c.reduce((t,l)=>t+l.price,0))}const u=new i("shop-storage"),L=new S,B=document.getElementById("subscription-form"),E=document.querySelector(".cart-list"),I=document.getElementById("email");B.addEventListener("submit",async e=>{e.preventDefault();const o=u.getAllProducts(),r=document.getElementById("email").value;if(o&&o.length>0){const c={email:r,products:o.map(t=>({productId:t._id,amount:1}))};try{const t=await L.placeOrder(c);t&&t.message&&(u.removeAllProducts(),u.removeAllProducts(),p(0),E.innerHTML="",I.value="",a(0),m.fire({icon:"success",title:"ORDER SUCCESS",text:t.message,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}}))}catch(t){console.error("Помилка при оформленні замовлення:",t)}}else m.fire({icon:"error",title:"Error",text:"The cart is empty. Please add products to the cart!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})});
//# sourceMappingURL=commonHelpers.js.map
