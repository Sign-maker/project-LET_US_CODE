import { FoodBoutiqueAPI } from './food-api';

const products = new FoodBoutiqueAPI();
const data = await products.getProducts();
const productsObj = data.results;

const productCardList = document.querySelector('.product-card-list');
productCardList.innerHTML = createProductsList(productsObj);

export function createProductsList(productsObj) {
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
        return `<li class="products-card-item">
                <a class="products-card-link" href="#"><img class="product-image" src="${img}" alt="${name}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${name}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${category}</span>Size:<span class="product-text-black"> ${size}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${popularity}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <h3 class="price">$${price}</h3>
                    <button class="btn btn-shopping-cart js-add-btn">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="./img/icons.svg#icon-shopping-cart"></use>
                        </svg>
                    </button>
                </div>
            </li>`;
      }
    )
    .join('');
}
