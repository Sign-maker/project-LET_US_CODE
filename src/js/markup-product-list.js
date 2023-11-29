import icons from '../img/icons.svg';

export function markupProductsList(productsObj) {
  if (productsObj.length) {
    return productsObj
      .map(
        ({
          category,
          img,
          is10PercentOff,
          name,
          popularity,
          price,
          size,
          _id,
        }) => {
          if (is10PercentOff) {
            return `<li class="products-card-item js-card-item" data-id="${_id}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${icons}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${img}" alt="${name}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${name}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${category}</span>Size:<span class="product-text-black"> ${size}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${popularity}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${price}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${icons}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${icons}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`;
          }

          return `<li class="products-card-item js-card-item" data-id="${_id}">

                <a class="products-card-link" href="#"><img class="product-image" src="${img}" alt="${name}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${name}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${category}</span>Size:<span class="product-text-black"> ${size}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${popularity}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${price}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${icons}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${icons}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`;
        }
      )
      .join('');
  }

  return `<div class="wrap-noting-found">
  <p class="title-noting-found">
    Nothing was found for the selected
    <span class="acent-noting-found"> filters...</span>
  </p>
  <p class="paragraf-noting-found">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;
}
