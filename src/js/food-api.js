import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class FoodBoutiqueAPI {
  constructor() {}

  // Отримати категорії продуктів
  async getProductCategories() {
    const { data } = await axios('/products/categories');
    return data;
  }
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
