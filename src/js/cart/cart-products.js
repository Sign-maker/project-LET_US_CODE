import { markupCartProduct } from './markup-cart-product';
import { ShopStorage } from '../local-storage-api';

let countInCart = 0;
let arrCarts = [];

const navSpanForCartRef = document.querySelector('.nav-span');
const cardListOrder = document.querySelector('.cart-list');

const shopStorage = new ShopStorage('shop-storage');

cardListOrder.addEventListener('click', onRemoveOrderFromCartClick);

// Видалення всіх товарів з корзини та з ShopStorage
const deleteAllBtn = document.querySelector('.js-delete-all-btn');

deleteAllBtn.addEventListener('click', () => {
  // Очищення корзини (UI)
  cardListOrder.innerHTML = '';

  // Очищення корзини (ShopStorage)
  shopStorage.removeAllProducts();

  // Оновлення кількості товарів в корзині в інтерфейсі
  changeNumberInCart(0);
});


function checkedShopStorage() {
  const getLocalCart = shopStorage.getAllProducts() ?? [];
  arrCarts = getLocalCart;

  cardListOrder.innerHTML = markupCartProduct(arrCarts);

  totalPrice(arrCarts);
  changeNumberInCart(arrCarts.length);
}

checkedShopStorage();

function changeNumberInCart(number) {
  navSpanForCartRef.textContent = number;
}

function totalPrice(arr) {
  if (!arr.length) return;

  return arr.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
}

function onRemoveOrderFromCartClick(e) {
  if (!e.target.closest('.cart-product-close-btn')) return;

  const objFromLi = e.target.closest('li');
  const dataIdItem = objFromLi.dataset.id;

  const findElementFromShopStorage = shopStorage.getAllProducts().filter(
    item => item._id !== dataIdItem
  );

  shopStorage.setAllProduct(findElementFromShopStorage);
  checkedShopStorage();
}
