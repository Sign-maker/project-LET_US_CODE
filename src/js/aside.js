import icons from '../img/icons.svg';

//EXPORT TO HOME.JS STRING --------->  66

function renderPopularProd(listenerPopularListRef, dataPopularProduct) {
  listenerPopularListRef.innerHTML = markupPopular(dataPopularProduct);
}

// EXPORT TO HOME.JS STRING --------->  79

function renderDiscountProd(listenerDiscountListRef, dataDiscountProduct) {
  listenerDiscountListRef.innerHTML = markupDiscount(dataDiscountProduct);
}

function markupPopular(obj) {
  return obj
    .map(item => {
      const { _id, name, img, category, size, popularity } = item;
      return `<li class="popular-item js-card-item" data-id="${_id}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${img}"
            alt="${name}"
            class="popular-img"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${name}</h3>
          </a>
          <p class="popular-desc-text">
            Category: <span class="popular-desc-span">${category}</span>
          </p>
          <div class="popular-desc-inner">
            <p class="popular-desc-text">
              Size: <span class="popular-desc-span">${size}</span>
            </p>
            <p class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${popularity}</span>
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
              href="${icons}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${icons}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`;
    })
    .join('');
}

function markupDiscount(obj) {
  const newArr = obj.slice(0, 2);
  return newArr
    .map(item => {
      const { _id, name, img, price } = item;

      return `<li class="discount-item js-card-item" data-id="${_id}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${img}"
            alt="${name}"
            class="discount-img"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text text-overflow">${name}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${price}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${icons}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${icons}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${icons}#icon-discount"></use>
          </svg>
        </div>
      </li>`;
    })
    .join('');
}

export { renderPopularProd, renderDiscountProd, markupPopular, markupDiscount };
