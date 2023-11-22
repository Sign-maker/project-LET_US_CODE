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
        return `<li class="products-list-card">
                <img class="product-image" src="${img}" alt="${name}" />
                <h3 class="product-name">${name}</h3>
                <p>Category:<b>${category}</b></p>
                <p>Size:<b>${size}</b></p>
                <p>Popularity:<b>${popularity}</b></p>
                <h3 class="price">$${price}</h3>
                <button class="btn-shopping-cart js-add-btn">
                    <svg class="icon-shopping-cart">
                        <use href="./img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                </button>
            </li>`;
      }
    )
    .join('');
}
