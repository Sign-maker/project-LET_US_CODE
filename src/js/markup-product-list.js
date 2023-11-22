import { FoodBoutiqueAPI } from './food-api';

const products = new FoodBoutiqueAPI();
const data = await products.getProducts();
const productsObj = data.results;

const ProductCardList = document.querySelector('.product-card-list');
ProductCardList.innerHTML = createProductsList(productsObj);

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
                <img class="product-image" src="${img}" alt="${name}" />
                <h3 class="product-name">${name}</h3>
                <div class="wrap-procuct-text">
                    <p class="procuct-text">Category:<b> ${category}</b></p>
                    <p class="procuct-text">Size:<b> ${size}</b></p>
                    <p class="procuct-text">Popularity:<b> ${popularity}</b></p>
                </div>
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
