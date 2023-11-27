import { FoodBoutiqueAPI } from './food-api';
const foodBoutique = new FoodBoutiqueAPI();

async function testApi() {
  try {
    const productCategories = await foodBoutique.getProductCategories();
    console.log('productCategories', productCategories);

    // ==========================================
    const requestParams = {
      keyword: 'apple',
      category: 'Fresh_Produce',
      byABC: true,
      byPrice: true,
      byPopularity: true,
      page: 1,
      limit: 6,
    };
    const products = await foodBoutique.getProducts(requestParams);
    console.log('products', products);

    //   ======================================
    const productId = '640c2dd963a319ea671e3676';
    const productsDetails = await foodBoutique.getProductDetails(productId);
    console.log('productsDetails', productsDetails);

    //  ============================================
    const popularProducts = await foodBoutique.getPopularProducts();
    console.log('popularProducts', popularProducts);

    // ==========================================

    const discountedProducts = await foodBoutique.getDiscountedProducts();
    console.log('discountedProducts', discountedProducts);

    // ==========================================
    const orderData = {
      email: 'test@gmail.com',
      products: [
        {
          productId: '640c2dd963a319ea671e383b',
          amount: 2,
        },
      ],
    };
    const placeOrder = await foodBoutique.placeOrder(orderData);
    console.log('placeOrder', placeOrder);

    // ==========================================

    //   const userData = {
    //     email: 'test@gmail.com',
    //   };
    //   const subscribeToNewsletter = await foodBoutique.subscribeToNewsletter(
    //     userData
    //   );
    //   console.log('subscribeToNewsletter', subscribeToNewsletter);

    //   // ==========================================
    // } catch (error) {
    //   console.log('помилка', error.response.data.message);
    // } finally {
    // }
    // ==========================================

    const userData = {
      email: '12345@cdfbgdfgbhdfgh.com',
    };
    const subscribeToNewsletter = await foodBoutique.subscribeToNewsletter(
      userData
    );
    console.log('subscribeToNewsletter', subscribeToNewsletter);

    // ==========================================
  } catch (error) {
    console.log('помилка', error.response.data.message);
  } finally {
  }
}

// testApi();
