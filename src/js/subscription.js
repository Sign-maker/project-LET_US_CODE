import { FoodBoutiqueAPI } from './food-api.js';
import Swal from 'sweetalert2';

const foodApi = new FoodBoutiqueAPI();

const form = document.querySelector('form[name="email_address"]');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements['footer-input-email'];
  const emailValue = emailInput.value;

  try {
    await foodApi.subscribeToNewsletter({ email: emailValue });
    emailInput.value = '';

    Swal.fire({
      icon: 'success',
      title: 'Successfully subscribed!',
      showConfirmButton: true,
      confirmButtonColor: '#6D8434',
      showCancelButton: false,
      customClass: {
        popup: 'small-popup',
        title: 'custom-title',
        icon: 'custom-icon',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    error;

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error subscribing. Please try again.',
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
