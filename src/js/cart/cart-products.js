import { markupCartProduct } from './markup-cart-product';
import { ShopStorage } from '../local-storage-api';

let arrCarts = [];
const navSpanForCartRef = document.querySelector('.number-of-product');
const headerNavSpanRef = document.querySelector('.nav-span');
const totalAmountRef = document.querySelector('.total-amount');
const cardListOrder = document.querySelector('.cart-list');
const shopStorage = new ShopStorage('shop-storage');

cardListOrder.addEventListener('click', onRemoveOrderFromCartClick);

const deleteAllBtn = document.querySelector('.js-delete-all-btn');
deleteAllBtn.addEventListener('click', () => {
  cardListOrder.innerHTML = '';
  shopStorage.removeAllProducts();
  changeNumberInCart(0);
  updateTotalPrice(0); // Оновлюємо загальну вартість після видалення всіх товарів
});

function checkedShopStorage() {
  const getLocalCart = shopStorage.getAllProducts() ?? [];
  arrCarts = getLocalCart;
  cardListOrder.innerHTML = markupCartProduct(arrCarts);
  changeNumberInCart(arrCarts.length);
  updateTotalPrice(arrCarts.reduce((acc, item) => acc + item.price, 0)); // Оновлюємо загальну вартість при завантаженні сторінки
}

checkedShopStorage();

export function changeNumberInCart(number) {
  navSpanForCartRef.textContent = number;
  headerNavSpanRef.textContent = number;
}

export function updateTotalPrice(total) {
  totalAmountRef.textContent = total.toFixed(2); // Оновлюємо загальну вартість
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
  updateTotalPrice(findElementFromShopStorage.reduce((acc, item) => acc + item.price, 0)); // Оновлюємо загальну вартість при видаленні товарів
}
