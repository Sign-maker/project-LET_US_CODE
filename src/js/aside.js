import { FoodBoutiqueAPI } from './food-api';
import icons from '../img/icons.svg';
import { Storage } from './local-storage-api';

const foodBoutiqueAPI = new FoodBoutiqueAPI();

const discountStorage = new Storage('discount-storage');
const popularStorage = new Storage('popularity-storage');
const shopStorage = new Storage('shop-storage');


const popularListRef = document.querySelector('.popular-list');
const discountListRef = document.querySelector('.discount-list');

popularListRef.addEventListener('click', onPopularCardClick);
discountListRef.addEventListener('click', onDiscountCardClick);



renderPopularProd(popularListRef,popularStorage.getValue())
renderDiscountProd(discountListRef,discountStorage.getValue())
// popularProd();
// discountedProd();

// async function popularProd() {
//   try {
//     const popularProductsData = await foodBoutiqueAPI.getPopularProducts();

//     popularListRef.innerHTML = markupPopular(popularProductsData);
//   } catch (error) {
//     error => console.log('ERROR', error);
//   }
// }

// async function discountedProd() {
//   try {
//     const discountProdData = await foodBoutiqueAPI.getDiscountedProducts();

//     discountListRef.innerHTML = markupDiscount(discountProdData);
//   } catch (error) {
//     error => console.log('ERROR', error);
//   }
// }

//EXPORT TO HOME.JS STRING --------->  66

 function renderPopularProd(listenerPopularListRef, dataPopularProduct) {
  listenerPopularListRef.innerHTML = markupPopular(dataPopularProduct);
}

// EXPORT TO HOME.JS STRING --------->  79

 function renderDiscountProd(listenerDiscountListRef, dataDiscountProduct) {
    listenerDiscountListRef.innerHTML = markupDiscount(dataDiscountProduct);
}

function onPopularCardClick(e) {
  if (!e.target.closest('button')) return;

  const li = e.target.closest('li');
  const idCard = li.dataset.id;

  const getArrFromDiscountStorage = discountStorage.getValue();

  const newOrderToCart = findElInDiscountStorage(getArrFromDiscountStorage, idCard);
  console.log(newOrderToCart);

  shopStorage.setValue(newOrderToCart)

  e.target.closest('button').classList.add('is-added');
  e.target.closest('button').style.backgroundColor = "#6d8434"
  console.dir('THIS IS FOR MODAL CLICK');
}

function onDiscountCardClick(e) {
  if (!e.target.closest('button')) return;

  const li = e.target.closest('li');
  const idCard = li.dataset.id;

  const getArrFromDiscountStorage = discountStorage.getValue();

  const newOrderToCart = findElInDiscountStorage(getArrFromDiscountStorage, idCard);
  console.log(newOrderToCart);

  shopStorage.setValue(newOrderToCart)

  e.target.closest('button').classList.add('is-added');
}

function findElInDiscountStorage(arr, idCard) {
  return arr.find(el => el._id === idCard);
}

function markupPopular(obj) {
  return obj
    .map(item => {
      const { _id, name, img, category, size, popularity } = item;
      return `<li class="popular-item" data-id="${_id}">
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

      return `<li class="discount-item" data-id="${_id}">
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
            <p class="discount-desc-text">${name}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${price}</p>
            <button
              type="button"
              class="discount-btn btn"
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

// export {renderPopularProd, renderDiscountProd, markupPopular, markupDiscount}
