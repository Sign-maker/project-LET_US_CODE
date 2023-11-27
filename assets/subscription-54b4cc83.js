var p=Object.defineProperty;var g=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>(g(t,typeof e!="symbol"?e+"":e,o),o);import{a as c,S as d}from"./vendor-bb007519.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();class f{constructor(e){this.storageName=e}setValue(e){localStorage.setItem(this.storageName,JSON.stringify(e))}getValue(){return JSON.parse(localStorage.getItem(this.storageName))}removeItem(){localStorage.removeItem(this.storageName)}}class N{constructor(e){u(this,"shopCart",[]);this.storageName=e,this.initStorage()}initStorage(){if(this.getAllProducts()){this.shopCart=this.getAllProducts();return}localStorage.setItem(this.storageName,JSON.stringify([]))}setProduct(e){e&&(this.shopCart.some(o=>o._id===e._id)||(this.shopCart.push(e),localStorage.setItem(this.storageName,JSON.stringify(this.shopCart))))}setAllProduct(e){localStorage.setItem(this.storageName,JSON.stringify(e))}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageName))}removeProduct(e){this.shopCart=this.getAllProducts().filter(o=>o._id!==e),this.setAllProduct(this.shopCart)}removeAllProducts(){this.shopCart=[],this.setAllProduct(this.shopCart)}}c.defaults.baseURL="https://food-boutique.b.goit.study/api";class h{constructor(){}async getProductCategories(){const{data:e}=await c("/products/categories");return e}async getProducts(e){const{data:o}=await c("/products",{params:{...e}});return o}async getProductDetails(e){const{data:o}=await c(`/products/${e}`);return o}async getPopularProducts(){const{data:e}=await c("/products/popular");return e}async getDiscountedProducts(){const{data:e}=await c("/products/discount");return e}async subscribeToNewsletter(e){return await c.post("/subscription",e,{headers:{"Content-Type":"application/json"}})}async placeOrder(e){const{data:o}=await c.post("/orders",e,{headers:{"Content-Type":"application/json"}});return o}}const m="/project-LET_US_CODE/assets/icons-b681127c.svg",y="shop-storage";new f(y);let i=null;function L(){const t=document.querySelector(".modal-order-wrap");t&&(t.classList.add("modal-show-order"),document.body.classList.add("stop-scroll"),t.innerHTML=`
        <div class="modal-order-succ">
          <button type="button" class="modal-order-succ-btn">
            <svg class="modal-prod-close-icon" width='22' height='22'>
              <use href="${m}#icon-close"></use>
            </svg>
          </button>
          <div class="modal-prod-close-img-wrap">
            <svg class="modal-check" width='80' height='80'>
              <use href="${m}#icon-check"></use>
            </svg>
          </div>
          <p class="modal-success-title"></p>
          <p class="modal-success-message"></p>
        </div>
      `,i=t.querySelector(".modal-order-succ-btn"),i&&i.addEventListener("click",()=>n(t)),t.addEventListener("click",e=>S(e,t)),document.addEventListener("keydown",e=>w(e,t)))}function S(t,e){t.target===e&&n(e)}function w(t,e){t.keyCode===27&&n(e)}function n(t){i.removeEventListener("click",()=>n(t)),t.classList.remove("modal-show-order"),document.body.classList.remove("stop-scroll")}const v=new h,b=document.querySelector('form[name="email_address"]');b.addEventListener("submit",async function(t){t.preventDefault();const e=t.currentTarget.elements["footer-input-email"],o=e.value;try{const r=await v.subscribeToNewsletter({email:o});e.value="";let s="Successfully subscribed!";r&&r.data&&r.data.message&&(s=r.data.message),d.fire({icon:"success",title:s,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}catch(r){console.error("Error:",r);let s="There was an error subscribing. Please try again.";r.response&&r.response.data&&r.response.data.message&&(s=r.response.data.message),d.fire({icon:"error",title:"Error",text:s,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}});export{h as F,N as S,f as a,m as i,L as o};
//# sourceMappingURL=subscription-54b4cc83.js.map
