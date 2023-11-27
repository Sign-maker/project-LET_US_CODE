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

export class ShopStorage {
  constructor(storageName) {
    this.storageName = storageName;
    this.initStorage();
  }

  initStorage() {
    if (this.getAllProducts()) {
      return;
    }
    localStorage.setItem(this.storageName, JSON.stringify([]));
  }

  setProduct(obj) {
    if (!obj) {
      return;
    }

    if (this.getAllProducts().some(item => item._id === obj._id)) {
      return;
    }

    localStorage.setItem(
      this.storageName,
      JSON.stringify([...this.getAllProducts(), obj])
    );
  }

  setAllProduct(dataArr) {
    localStorage.setItem(this.storageName, JSON.stringify(dataArr));
  }

  getAllProducts() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  removeProduct(productId) {
    this.setAllProduct(
      this.getAllProducts().filter(item => item._id !== productId)
    );
  }

  removeAllProducts() {
    this.setAllProduct([]);
  }
}

// how to use Storage==========================================================================
// check your from path!
// import{Storage} from './local-storage-api'

// const FILTER_STORAGE = 'filter-storage';
// const CATEGORY_STORAGE = 'category-storage';
// const PRODUCT_STORAGE = 'product-storage';
// const POPULARITY_STORAGE = 'popularity-storage';
// const DISCOUNT_STORAGE = 'discount-storage';

// const filterStorage = new Storage(FILTER_STORAGE);
// const categoryStorage = new Storage(CATEGORY_STORAGE);
// const productStorage = new Storage(PRODUCT_STORAGE);
// const popularityStorage = new Storage(POPULARITY_STORAGE);
// const discountStorage = new Storage(DISCOUNT_STORAGE);

// work with it!
// filterStorage.setValue(data);
// filterStorage.getValue();
// filterStorage.removeItem();

// how to use ShopStorage=========================================================================
// check your from path!
// import{ShopStorage} from './local-storage-api'

// const SHOP_STORAGE = 'shop-storage';

// инициализация;
// const shopStorage = new ShopStorage(SHOP_STORAGE);

// добавляем продукт
// shopStorage.setProduct(productObj);

// считываем все продукты
// const shopStorageProducts = shopStorage.getAllProducts();

// уделяем отдельный продукт все продукты
// shopStorage.removeProduct('640c2dd963a319ea671e37ad');

// удаляем все продукты
//shopStorage.removeAllProducts();
