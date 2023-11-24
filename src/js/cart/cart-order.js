import { markupCartProduct } from './markup-cart-product';
import { Storage } from '../local-storage-api';

let countInCart = 0;
let arrCarts = [];

const navSpanForCartRef = document.querySelector('.nav-span');
const cardListOrder = document.querySelector('.cart-list');

const shopStorage = new Storage('shop-storage');

cardListOrder.addEventListener('click', onRemoveOrderFromCartClick);
// clearListOrder.addEventListener('click', onClearListBtnClick);

function checkedLocalStorage() {
  const getLocalCart =
    // JSON.parse(localStorage.getItem('popularity-storage')) ?? [];
  JSON.parse(localStorage.getItem('shop-storage')) ?? [];

  const getLocalCartArray = [];
  getLocalCartArray.push(shopStorage.getValue());
  // console.log(shopStorage.getValue());
  // console.log(getLocalCartArray);

  // const countCart = getLocalCart.length;
  arrCarts = getLocalCartArray;

  cardListOrder.innerHTML = markupCartProduct(arrCarts);

  //   const cartList = document.querySelector('.cart-list');
  // cartList.innerHTML = markupCartProduct(localStorageCartProduct);

  totalPrice(arrCarts);
  console.log('Total price:', totalPrice(arrCarts) ?? 0);
  changeNumberInCart(arrCarts.length);
}

checkedLocalStorage();

// console.log(checkedLocalStorage());

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
  //   if (
  //     e.target.nodeName !== 'BUTTON' ||
  //     e.target.classList.contains('cart-product-close-btn')
  //   )

  if (!e.target.closest('.cart-product-close-btn')) return;

  const objFromLi = e.target.closest('li');
  const dataIdItem = objFromLi.dataset.id;

  const getLocalCart =
    // JSON.parse(localStorage.getItem('shop-storage')) ?? [];
    shopStorage.getValue() ?? []

  const findElementFromLocalStorage = getLocalCart.filter(
    item => item._id !== dataIdItem
  );

  localStorage.setItem(
    'popularProducts',
    JSON.stringify(findElementFromLocalStorage)
  );

  checkedLocalStorage();
}

function onClearListBtnClick(e) {
  console.log(e.target);
}
