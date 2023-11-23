export class Storage {
  constructor(storageName) {
    this.storageName = storageName;
  }
  setValue(data) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }
  getValue() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }
  removeItem() {
    localStorage.removeItem(this.storageName);
  }
}

// how to use
// check your from path!
// import{Storage} from './local-storage-api'

// const FILTER_STORAGE = 'filter-storage';
// const CATEGORY_STORAGE = 'category-storage';
// const PRODUCT_STORAGE = 'product-storage';
// const POPULARITY_STORAGE = 'popularity-storage';
// const DISCOUNT_STORAGE = 'discount-storage';
// const SHOP_STORAGE = 'shop-storage';

// const filterStorage = new Storage(FILTER_STORAGE);
// const categoryStorage = new Storage(CATEGORY_STORAGE);
// const productStorage = new Storage(PRODUCT_STORAGE);
// const popularityStorage = new Storage(POPULARITY_STORAGE);
// const discountStorage = new Storage(DISCOUNT_STORAGE);
// const shopStorage = new Storage(SHOP_STORAGE);

// work with it!
// filterStorage.setValue(data);
// filterStorage.getValue();
// filterStorage.removeItem();
