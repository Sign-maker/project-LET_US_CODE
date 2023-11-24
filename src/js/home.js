import './test-api';
import './aside';
import './modal-markup';
import './aside';
import './select';
import './modal-success';
import './markup-product-list';
import './aside';
import './subscription';

import { FoodBoutiqueAPI } from './food-api';
import { Storage } from './local-storage-api';
import { renderProductList } from './product-list/render-product-list';

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
  limit: 6,
};
const productListRef = document.querySelector('.product-card-list');

const foodBoutique = new FoodBoutiqueAPI();

const filterStorage = new Storage(FILTER_STORAGE);
const categoryStorage = new Storage(CATEGORY_STORAGE);
const productStorage = new Storage(PRODUCT_STORAGE);
const popularityStorage = new Storage(POPULARITY_STORAGE);
const discountStorage = new Storage(DISCOUNT_STORAGE);
const shopStorage = new Storage(SHOP_STORAGE);

const filterParams = filterStorage.getItem ?? INIT_FILTER_PARAMS;
initLoad(filterParams);

function initLoad(filterParams) {
  getCategories();
  getProducts(filterParams);
  getPopularProducts();
  getDiscountedProducts();
}

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
    // renderProductList(productListRef, productStorage.getValue().results);
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
    // fillPopularProductList (popularProductListRef, popularityStorage.getValue());
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
    // fillDiscountProductList (popularProductListRef, discountStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    //  loader hide
  }
}
