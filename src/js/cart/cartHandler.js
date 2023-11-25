import { ShopStorage } from '../local-storage-api';

const SHOP_STORAGE = 'shop-storage';
const shopStorage = new ShopStorage(SHOP_STORAGE);

// const product1 = {
//   _id: '640c2dd963a319ea671e383b',
//   name: 'Ackee',
//   desc: 'A fruit that is native to West Africa, but is also grown in the Caribbean, and is often used in traditional Jamaican dishes such as ackee and saltfish.',
//   img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//   category: 'Fresh_Produce',
//   price: 8.99,
//   size: '16 oz',
//   is10PercentOff: false,
//   popularity: 2,
// };
// const product2 = {
//   _id: '640c2dd963a319ea671e3864',
//   name: 'Black Beans',
//   img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
//   category: 'Pantry_Items',
//   price: 1.99,
//   size: '16oz',
//   is10PercentOff: false,
//   popularity: 0,
// };
// const product3 = {
//   _id: '640c2dd963a319ea671e37ad',
//   name: 'Black Olives',
//   img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
//   category: 'Fresh_Produce',
//   price: 3.99,
//   size: '1 jar (16 oz)',
//   is10PercentOff: false,
//   popularity: 0,
// };

// console.log(shopStorage.getAllProducts());
// // shopStorage.setProduct();
// shopStorage.setProduct(product1);
// shopStorage.setProduct(product2);
// shopStorage.setProduct(product3);
// console.log(shopStorage.getAllProducts());
// shopStorage.removeProduct('640c2dd963a319ea671e37ad');
// console.log(shopStorage.getAllProducts());
// shopStorage.removeAllProducts();
// console.log(shopStorage.getAllProducts());
