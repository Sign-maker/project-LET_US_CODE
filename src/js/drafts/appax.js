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

  async getProducts(requestParams) {
    // використовуємо URLSearchParams
    const params = new URLSearchParams({
      ...requestParams,
    });

    const { data } = await axios(`/products?${params}`);
    return data;
  }

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

  // async getProducts(requestParams) {
  //   // використовуємо axios params

  //   const { data } = await axios(`/products?${params}`, {
  //     params: {
  //       ...requestParams,
  //     },
  //   });
  //   return data;
  // }

  // Отримати деталі продукту
  async getProductDetails(productID) {
    const { data } = await axios.get(`/products/${productID}`);
    return data;
  }

  // Отримати популярні продукти
  async getPopularProducts() {
    const { data } = await axios.get('/products/popular');
    return data;
  }

  // Отримати продукти зі знижкою
  async getDiscountedProducts() {
    const { data } = await axios.get('/products/discount');
    return data;
  }

  // Підписатися на розсилку новин
  async subscribeToNewsletter(data) {
    const response = await axios.post('/subscription', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  }

  // Зробити замовлення продуктів
  async placeOrder(data) {
    const response = await axios.post('/orders', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  }
}
