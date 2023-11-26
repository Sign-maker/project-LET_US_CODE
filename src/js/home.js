import { FoodBoutiqueAPI } from './food-api';
import { Storage, ShopStorage } from './local-storage-api';
import { renderProductList } from './render-product-list';
import { renderPopularProd, renderDiscountProd} from './aside';

const FILTER_STORAGE = 'filter-storage';
const CATEGORY_STORAGE = 'category-storage';
const PRODUCT_STORAGE = 'product-storage';
const POPULARITY_STORAGE = 'popularity-storage';
const DISCOUNT_STORAGE = 'discount-storage';
const SHOP_STORAGE = 'shop-storage';

const INIT_FILTER_PARAMS = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
};
const productListRef = document.querySelector('.product-card-list');
const popularProductListRef = document.querySelector('.popular-list');
const discountProductListRef = document.querySelector('.discount-list');
const contentWrapperRef = document.querySelector('.content-wrapper');
const spanCartRef = document.querySelector('.js-header-navSpan');

const foodBoutique = new FoodBoutiqueAPI();
const filterStorage = new Storage(FILTER_STORAGE);
const categoryStorage = new Storage(CATEGORY_STORAGE);
const productStorage = new Storage(PRODUCT_STORAGE);
const popularityStorage = new Storage(POPULARITY_STORAGE);
const discountStorage = new Storage(DISCOUNT_STORAGE);
const shopStorage = new Storage(SHOP_STORAGE);
const newShopStorage = new ShopStorage(SHOP_STORAGE);

contentWrapperRef.addEventListener('click', onButtonCartClick);

const filterParams = filterStorage.getItem ?? INIT_FILTER_PARAMS;
initLoad(filterParams);

function initLoad(filterParams) {
  getCategories();
  getProducts(filterParams);
  getPopularProducts();
  getDiscountedProducts();
}

changeQuantityOrderedInBasket(newShopStorage.getAllProducts())

async function getCategories() {
  try {
    // loader show
    const productCategories = await foodBoutique.getProductCategories();
    categoryStorage.setValue(productCategories);
    // fillCategoryList (categoryListRef, categoryStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    //  loader hide
  }
}

async function getProducts(filterParams) {
  try {
    // loader show
    const products = await foodBoutique.getProducts(filterParams);
    productStorage.setValue(products);
    filterStorage.setValue(filterParams);
    renderProductList(productListRef, productStorage.getValue().results);
  } catch (error) {
    console.log(error);
  } finally {
    // loader hide
  }
}

async function getPopularProducts() {
  try {
    // loader show
    const popularProducts = await foodBoutique.getPopularProducts();
    popularityStorage.setValue(popularProducts);
    renderPopularProd (popularProductListRef, popularityStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    //  loader hide
  }
}

async function getDiscountedProducts() {
  try {
    // loader show
    const discountedProducts = await foodBoutique.getDiscountedProducts();
    discountStorage.setValue(discountedProducts);
    renderDiscountProd (discountProductListRef, discountStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    //  loader hide
  }
}

async function addListenerToAllCard () {
  //////////////////////////////////////////////////////////////////////////////
const li = document.getElementsByClassName('js-card-item');
console.log(li);

}

addListenerToAllCard()

function onButtonCartClick(e) {
  if (!e.target.closest('.js-add-btn')) return;

  const li = e.target.closest('li');
  const idCard = li.dataset.id;
  const isNewIDinBasket = checkNewIDinBasket(idCard);

  if (isNewIDinBasket) return;

  e.target.closest('button').classList.add('is-added');

  if (e.target.closest('.popular-btn')) {
    e.target.closest('.popular-btn').style.backgroundColor = '#6d8434';
  }

  const arrProdStor = productStorage.getValue().results;
  const arrPopStor = popularityStorage.getValue();
  const arrDiscStor = discountStorage.getValue();

  const objFromProdStor = objFromLocStor(arrProdStor, idCard);
  const objFromPopStor = objFromLocStor(arrPopStor, idCard);
  const objFromDiscStor = objFromLocStor(arrDiscStor, idCard);

  switch ("object") {
    case typeof objFromProdStor:
      newShopStorage.setProduct(objFromProdStor);
      break;
    case typeof objFromPopStor:
      newShopStorage.setProduct(objFromPopStor);
      break;
    case typeof objFromDiscStor:
      newShopStorage.setProduct(objFromDiscStor);
      break;
    default:
      alert('Нет таких значений');
  }

  changeQuantityOrderedInBasket(newShopStorage.getAllProducts())
  console.log(idCard);

}

function checkNewIDinBasket(id) {
  const shopStorageProducts = newShopStorage.getAllProducts();
  return shopStorageProducts.some(el => el._id === id);
}

function objFromLocStor(arrDataLocalStorage, idCard) {
  const obj = arrDataLocalStorage.find(el => el._id === idCard);
  return obj;
}

function changeQuantityOrderedInBasket (arrFromLocStor) {
  let quantityOrdered = arrFromLocStor.length
  spanCartRef.textContent = quantityOrdered
}

