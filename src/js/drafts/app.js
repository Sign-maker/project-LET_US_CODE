class FoodBoutiqueAPI {
    constructor() {
      this.baseURL = "https://food-boutique.b.goit.study/api";
    }
  
    // Отримати категорії продуктів
    async getProductCategories() {
      const response = await fetch(`${this.baseURL}/products/categories`);
      return await response.json();
    }
  
    // Отримати продукти з фільтрами
    async getProducts({ keyword, category, sortBy = "byABC", page = 1, limit = 6,  }) {
      const params = new URLSearchParams({
        keyword,
        category,
        page,
        limit,
        sort_by: sortBy
      });
  
      const response = await fetch(`${this.baseURL}/products?${params}`);
      return await response.json();
    }
  
    // Отримати деталі продукту
    async getProductDetails(productID) {
      const response = await fetch(`${this.baseURL}/products/${productID}`);
      return await response.json();
    }
  
    // Отримати популярні продукти
    async getPopularProducts() {
      const response = await fetch(`${this.baseURL}/products/popular`);
      return await response.json();
    }
  
    // Отримати продукти зі знижкою
    async getDiscountedProducts() {
      const response = await fetch(`${this.baseURL}/products/discount`);
      return await response.json();
    }
  
    // Підписатися на розсилку новин
    async subscribeToNewsletter(data) {
      const response = await fetch(`${this.baseURL}/subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      return await response.json();
    }
  
    // Зробити замовлення продуктів
    async placeOrder(data) {
      const response = await fetch(`${this.baseURL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      return await response.json();
    }
  }
  
