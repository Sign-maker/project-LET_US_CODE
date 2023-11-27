// *---------Відкриття повідомлення через MODAL----------*

// import { ShopStorage } from '../local-storage-api';
// import { FoodBoutiqueAPI } from '../food-api';
// import Swal from 'sweetalert2';
// import { openSuccessModal } from '../modal-success';
// import {updateTotalPrice} from '../cart/cart-products'

// const shopStorage = new ShopStorage('shop-storage');
// const foodAPI = new FoodBoutiqueAPI();

// const orderForm = document.getElementById('subscription-form');
// const cardListOrder = document.querySelector('.cart-list');
// const emailInput = document.getElementById('email');

// orderForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const cartItems = shopStorage.getAllProducts();
//   const email = document.getElementById('email').value;

//   if (cartItems && cartItems.length > 0) {
//     const orderData = {
//       email: email,
//       products: cartItems.map(item => ({ productId: item._id, amount: 1 }))
//     };

//     try {
//       const response = await foodAPI.placeOrder(orderData);

//       if (response && response.message) {
//         shopStorage.removeAllProducts();
//         await openSuccessModal();
          
//         // Очистити корзину на інтерфейсі після успішного замовлення
//         cardListOrder.innerHTML = '';
//         emailInput.value = ''; // Очищення поля вводу електронної пошти
//           updateTotalPrice(0);
//       }

//     } catch (error) {
//       console.error('Помилка при оформленні замовлення:', error);
//     }
//   } else {
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'The cart is empty. Please add products to the cart!',
//       showConfirmButton: true,
//       confirmButtonColor: '#6D8434',
//       showCancelButton: false,
//       customClass: {
//         popup: 'small-popup',
//         title: 'custom-title',
//         icon: 'custom-icon',
//       },
//     });
//   }
// });


// *---------Відкриття повідомлення через SweetAlert2----------*

import { ShopStorage } from "../local-storage-api";
import { FoodBoutiqueAPI } from '../food-api';
import Swal from 'sweetalert2';
import {updateTotalPrice} from '../cart/cart-products'
import { changeNumberInCart } from '../cart/cart-products'


const shopStorage = new ShopStorage('shop-storage');
const foodAPI = new FoodBoutiqueAPI();

const orderForm = document.getElementById('subscription-form');
const cardListOrder = document.querySelector('.cart-list');
const emailInput = document.getElementById('email');

orderForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cartItems = shopStorage.getAllProducts();
  const email = document.getElementById('email').value;

  if (cartItems && cartItems.length > 0) {
    const orderData = {
      email: email,
      products: cartItems.map(item => ({ productId: item._id, amount: 1 }))
    };

    try {
      const response = await foodAPI.placeOrder(orderData);

      if (response && response.message) {
          shopStorage.removeAllProducts();
          // Очистити корзину на інтерфейсі після успішного замовлення
          shopStorage.removeAllProducts();
          changeNumberInCart(0);
          cardListOrder.innerHTML = '';
          emailInput.value = ''; // Очищення поля вводу електронної пошти
          updateTotalPrice(0);

        // Додати повідомлення про успішне замовлення
        Swal.fire({
          icon: 'success',
          title: 'ORDER SUCCESS',
          text: response.message,
          showConfirmButton: true,
          confirmButtonColor: '#6D8434',
          showCancelButton: false,
          customClass: {
            popup: 'small-popup',
            title: 'custom-title',
            icon: 'custom-icon',
          },
        });
      }

    } catch (error) {
      console.error('Помилка при оформленні замовлення:', error);
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'The cart is empty. Please add products to the cart!',
      showConfirmButton: true,
      confirmButtonColor: '#6D8434',
      showCancelButton: false,
      customClass: {
        popup: 'small-popup',
        title: 'custom-title',
        icon: 'custom-icon',
      },
    });
  }
});



