import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class FoodBoutiqueAPI {
  constructor() {}

  // Отримати категорії продуктів
  async getProductCategories() {
    const { data } = await axios('/products/categories');
    return data;
  }

  // Отримати продукти з фільтрами by Anna
  // async getProducts({
  //   keyword,
  //   category,
  //   sortBy = 'byABC',
  //   page = 1,
  //   limit = 6,
  // }) {
  //   const params = new URLSearchParams({
  //     keyword,
  //     category,
  //     page,
  //     limit,
  //     sort_by: sortBy,
  //   });

  //   const { data } = await axios.get(`/products?${params}`);
  //   return data;
  // }

  // Отримати продукти з фільтрами by Dima ver 1

  // Приклад параметрів
  // requestParams = {
  //   keyword: 'apple',
  //   category: 'Fresh_Produce',
  //   byABC: true,
  //   byPrice: true,
  //   byPopularity: true,
  //   page: 1,
  //   limit: 6,
  // };

  // async getProducts(requestParams) {
  //   // використовуємо URLSearchParams
  //   const params = new URLSearchParams({
  //     ...requestParams,
  //   });

  //   const { data } = await axios(`/products?${params}`);
  //   return data;
  // }

  // Отримати продукти з фільтрами by Dima ver 2
  // Приклад параметрів
  // requestParams = {
  //   keyword: 'apple',
  //   category: 'Fresh_Produce',
  //   byABC: true,
  //   byPrice: true,
  //   byPopularity: true,
  //   page: 1,
  //   limit: 6,
  // };

  async getProducts(requestParams) {
    // використовуємо axios params

    const { data } = await axios(`/products`, {
      params: {
        ...requestParams,
      },
    });
    return data;
  }

  // Отримати деталі продукту
  async getProductDetails(productId) {
    const { data } = await axios(`/products/${productId}`);
    return data;
  }

  // Отримати популярні продукти
  async getPopularProducts() {
    const { data } = await axios('/products/popular');
    return data;
  }

  // Отримати продукти зі знижкою
  async getDiscountedProducts() {
    const { data } = await axios('/products/discount');
    return data;
  }

  // Підписатися на розсилку новин
  async subscribeToNewsletter(userData) {
    const data = await axios.post('/subscription', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }

  // Зробити замовлення продуктів
  async placeOrder(orderData) {
    const { data } = await axios.post('/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }
}
