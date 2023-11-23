import"./assets/styles-73380c3f.js";document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".cart-list"),d=document.querySelector(".card-ordered-sum span"),i=document.querySelector(".card-form"),l=document.getElementById("email");let o=[];function m(){s.innerHTML="";let e=0;o.forEach(t=>{const c=document.createElement("li");c.classList.add("cart-item"),c.innerHTML=`
          <div class="cart-item-img">
            <img class="cart-img" src="${t.imgSrc}" alt="${t.name}" />
          </div>
          <div class="card-description">
            <div class="card-name">
              <p class="card-name-text">${t.name}</p>
              <svg class="card-image">
                <use href="./img/icons.svg#icon-check"></use>
              </svg>
            </div>
            <div class="card-category">
              <p class="card-category-text">Category:<span>${t.category}</span></p>
              <p class="card-category-text">Size:<span>${t.size}</span></p>
            </div>
            <p class="card-name-text">$${t.price}</p>
          </div>
        `,s.appendChild(c),e+=parseFloat(t.price)}),d.textContent=`$${e.toFixed(2)}`}function u(e,t,c,a,r){const n={name:e,category:t,size:c,price:a,imgSrc:r};o.push(n),m()}document.addEventListener("click",function(e){if(e.target.classList.contains("add-to-cart-btn")){const t=e.target.closest(".product-container"),c=t.querySelector(".card-name-text").textContent,a=t.querySelector(".card-category-text span").textContent,r=t.querySelector(".card-category-text:last-child span").textContent,n=t.querySelector(".card-name-text").textContent.slice(1),p=t.querySelector(".cart-img").src;u(c,a,r,n,p)}}),i.addEventListener("submit",function(e){e.preventDefault();const t=l.value;console.log("Order submitted with email:",t)})});
//# sourceMappingURL=commonHelpers.js.map
