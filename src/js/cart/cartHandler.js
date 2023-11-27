import { ShopStorage } from '../local-storage-api';

const SHOP_STORAGE = 'shop-storage';
const shopStorage = new ShopStorage(SHOP_STORAGE);
const cartContentWrapper = document.querySelector('.cart-content-container');
const emptyCard = document.querySelector('.empty-cart');

changeCartContentVisibillity();

export function changeCartContentVisibillity() {
  if (shopStorage.getAllProducts().length) {
    cartContentWrapper.classList.remove('is-hidden');
    emptyCard.classList.add('is-hidden');
  } else {
    cartContentWrapper.classList.add('is-hidden');
    emptyCard.classList.remove('is-hidden');
  }
}
