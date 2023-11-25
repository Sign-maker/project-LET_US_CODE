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
  shopCart = [];
  constructor(storageName) {
    this.storageName = storageName;
    this.initStorage();
  }
  // add 1 obj to shop Arr and set it to LS
  initStorage() {
    if (this.getAllProducts()) {
      // console.log('LS уже создан', this.getAllProducts());
      this.shopCart = this.getAllProducts();
      return;
    }
    localStorage.setItem(this.storageName, JSON.stringify([]));
  }
  setProduct(obj) {
    if (!obj) {
      // console.log(`Пустой запрос`);
      return;
    }
    if (this.shopCart.some(item => item._id === obj._id)) {
      // console.log(`Продукт с ${obj._id} уже есть в хранилище`);
      return;
    }

    this.shopCart.push(obj);
    localStorage.setItem(this.storageName, JSON.stringify(this.shopCart));
  }

  setAllProduct(dataArr) {
    localStorage.setItem(this.storageName, JSON.stringify(dataArr));
  }

  getAllProducts() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }
  //  remove product from LS by id
  removeProduct(productId) {
    this.shopCart = this.getAllProducts().filter(
      item => item._id !== productId
    );
    this.setAllProduct(this.shopCart);
  }

  removeAllProducts() {
    this.shopCart = [];
    this.setAllProduct(this.shopCart);
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
