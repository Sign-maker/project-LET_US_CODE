import { FoodBoutiqueAPI } from './food-api';

const foodBoutiqueAPI = new FoodBoutiqueAPI();

const popularListRef = document.querySelector('.popular-list');
const discountListRef = document.querySelector('.discount-list');

async function popularProd() {
  try {
    const popularProductsData = await foodBoutiqueAPI.getPopularProducts(); 

    setToLocalStorage("popularProducts", popularProductsData)

    popularListRef.innerHTML = markupPopular(popularProductsData);
  } catch (error) {
    error => console.log('ERROR', error);
  }
}
popularProd();

async function discountedProd() {
  try {
    const discountProdData = await foodBoutiqueAPI.getDiscountedProducts();

    setToLocalStorage("discountProducts", discountProdData)

    discountListRef.innerHTML = markupDiscount(discountProdData);
  } catch (error) {
    error => console.log('ERROR', error);
  }
}

discountedProd();

popularListRef.addEventListener('click', onPopularCardClick)
function onPopularCardClick (e) {
  if (!e.target.closest('li') || e.target.closest('button')) {
    return
  }
  console.dir('THIS IS FOR MODAL CLICK');
}

discountListRef.addEventListener('click', onDiscountCardClick)
function onDiscountCardClick (e) {
  if (!e.target.closest('li') || e.target.closest('button')) {
    return
  }
  console.dir('THIS IS FOR MODAL CLICK');
}

function setToLocalStorage (name,arr) {
  localStorage.setItem(`${name}`, JSON.stringify(arr))
}

function markupPopular(obj) {
  return obj
    .map(item => {
      const { _id, name, img, category, size, popularity } = item;
      return `<li class="popular-item" data-id="${_id}">
        <div class="popular-img-wrapper">
          <img
            src="${img}"
            alt="${name}"
            class="popular-img"
          />
        </div>
        <div class="popular-desc-wrapper">
          <h3 class="popular-desc-name">${name}</h3>
          <h4 class="popular-desc-text">
            Category: <span class="popular-desc-span">${category}</span>
          </h4>
          <div class="popular-desc-inner">
            <h4 class="popular-desc-text">
              Size: <span class="popular-desc-span">${size}</span>
            </h4>
            <h4 class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${popularity}</span>
            </h4>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="./icons.svg#icon-shopping-cart"
              class="popular-desc-basket "
            ></use>
            <use
              href="./icons.svg#icon-check"
              class="popular-desc-added is-hidden"
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

      return `<li class="discount-item" data-id="${_id}">
        <div class="discount-img-wrapper">
          <img
            src="${img}"
            alt="${name}"
            class="discount-img"
          />
        </div>
        <div class="discount-desc-wrapper">
          <p class="discount-desc-text">${name}</p>
          <div class="discount-box">
            <p class="discount-desc-text">$${price}</p>
            <button
              type="button"
              class="discount-btn btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="./icons.svg#icon-shopping-cart"
                  class="discount-desc-basket is-hidden"
                ></use>
                <use
                  href="./icons.svg#icon-check"
                  class="discount-desc-added "
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="./icons.svg#icon-discount"></use>
          </svg>
        </div>
      </li>`;
    })
    .join('');
}
