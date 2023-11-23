import icons from '../img/icons.svg';

export function markupProductsList(productsObj) {
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
        return `<li class="products-card-item" data-id="${_id}">
                <a class="products-card-link" href="#"><img class="product-image" src="${img}" alt="${name}" /></a>
                <a class="products-card-link" href="#"><h4 class="product-name">${name}</h4></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${category}</span>Size:<span class="product-text-black"> ${size}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${popularity}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${price}</p>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${icons}#icon-shopping-cart"></use>

                            <use
                              href="${icons}#icon-check"
                              class="popular-desc-added is-hidden"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`;
      }
    )
    .join('');
}
