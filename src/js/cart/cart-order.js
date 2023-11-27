import { ShopStorage } from '../local-storage-api';
import { FoodBoutiqueAPI } from '../food-api';
import Swal from 'sweetalert2';
import { openSuccessModal } from '../modal-success';
import { updateTotalPrice } from '../cart/cart-products';
import { changeNumberInCart } from '../cart/cart-products';
import { changeCartContentVisibillity } from './cartHandler';

// Функція для форматування повідомлення
function formatSuccessMessage(message) {
  const successText = 'Order Success! ';
  const index = message.indexOf(successText);
  if (index !== -1) {
    return message.slice(index + successText.length);
  }
  return message;
}

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
      products: cartItems.map(item => ({ productId: item._id, amount: 1 })),
    };

    try {
      const response = await foodAPI.placeOrder(orderData);

      if (response && response.message) {
        shopStorage.removeAllProducts();
        openSuccessModal();
        const modalTitle = document.querySelector('.modal-success-title');
        const modalMessage = document.querySelector('.modal-success-message');

        modalTitle.textContent = 'Order success';
        // Використовуємо функцію для форматування повідомлення
        modalMessage.textContent = formatSuccessMessage(response.message);

        // Очистити корзину на інтерфейсі після успішного замовлення
        cardListOrder.innerHTML = '';
        emailInput.value = ''; // Очищення поля вводу електронної пошти
        updateTotalPrice(0);
        changeNumberInCart(shopStorage.getAllProducts().length);
        changeCartContentVisibillity();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.message,
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
