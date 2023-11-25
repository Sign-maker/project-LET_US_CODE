// import { FoodBoutiqueAPI } from './food-api.js';
// import Swal from 'sweetalert2';

// const foodApi = new FoodBoutiqueAPI();

// const form = document.querySelector('form[name="email_address"]');

// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const emailInput = event.currentTarget.elements['footer-input-email'];
//   const emailValue = emailInput.value;

//   try {
//     await foodApi.subscribeToNewsletter({ email: emailValue });
//     emailInput.value = '';
  
//     Swal.fire({
//       icon: 'success',
//       title: 'Successfully subscribed!',
//       showConfirmButton: true,
//       confirmButtonColor: '#6D8434',
//       showCancelButton: false,
//       customClass: {
//         popup: 'small-popup',
//         title: 'custom-title',
//         icon: 'custom-icon',

//       },
//     });
//   } catch (error) {
//     console.error('Error:', error);

//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'There was an error subscribing. Please try again.',
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

// const foodApi = new FoodBoutiqueAPI();

// const form = document.querySelector('form[name="email_address"]');

// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const emailInput = event.currentTarget.elements['footer-input-email'];
//   const emailValue = emailInput.value;

//   try {
//     await foodApi.subscribeToNewsletter({ email: emailValue });
//     emailInput.value = '';
  
//     Swal.fire({
//       icon: 'success',
//       title: 'Successfully subscribed!',
//       showConfirmButton: true,
//       confirmButtonColor: '#6D8434',
//       showCancelButton: false,
//       customClass: {
//         popup: 'small-popup',
//         title: 'custom-title',
//         icon: 'custom-icon',
//       },
//     });
//   } catch (error) {
//     console.error('Error:', error);

//     let errorMessage = 'There was an error subscribing. Please try again.';

//     if (error.response && error.response.data && error.response.data.message) {
//       errorMessage = error.response.data.message;
//     }

//     Swal.fire({
//       icon: 'error',
//       // title: 'Error',
//       title: errorMessage,
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


import { FoodBoutiqueAPI } from './food-api.js';
import Swal from 'sweetalert2';

const foodApi = new FoodBoutiqueAPI();

const form = document.querySelector('form[name="email_address"]');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements['footer-input-email'];
  const emailValue = emailInput.value;

  try {
    const response = await foodApi.subscribeToNewsletter({ email: emailValue });
    emailInput.value = '';
    
    let successMessage = 'Successfully subscribed!';
    if (response && response.data && response.data.message) {
      successMessage = response.data.message;
    }

    Swal.fire({
      icon: 'success',
      title: successMessage,
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

    let errorMessage = 'There was an error subscribing. Please try again.';

    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
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

