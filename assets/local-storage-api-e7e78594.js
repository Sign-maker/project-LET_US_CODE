var n=Object.defineProperty;var c=(o,t,r)=>t in o?n(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var l=(o,t,r)=>(c(o,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class h{constructor(t){this.storageName=t}setValue(t){localStorage.setItem(this.storageName,JSON.stringify(t))}getValue(){return JSON.parse(localStorage.getItem(this.storageName))}removeItem(){localStorage.removeItem(this.storageName)}}class g{constructor(t){l(this,"shopCart",[]);this.storageName=t,this.initStorage()}initStorage(){if(this.getAllProducts()){this.shopCart=this.getAllProducts();return}localStorage.setItem(this.storageName,JSON.stringify([]))}setProduct(t){t&&(this.shopCart.some(r=>r._id===t._id)||(this.shopCart.push(t),localStorage.setItem(this.storageName,JSON.stringify(this.shopCart))))}setAllProduct(t){localStorage.setItem(this.storageName,JSON.stringify(t))}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageName))}removeProduct(t){this.shopCart=this.getAllProducts().filter(r=>r._id!==t),this.setAllProduct(this.shopCart)}removeAllProducts(){this.shopCart=[],this.setAllProduct(this.shopCart)}}export{g as S,h as a};
//# sourceMappingURL=local-storage-api-e7e78594.js.map
