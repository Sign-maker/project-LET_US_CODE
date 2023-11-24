import { FoodBoutiqueAPI } from './food-api.js';

const foodApi = new FoodBoutiqueAPI();

const form = document.querySelector('form[name="email_address"]');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements['footer-input-email'];
  const emailValue = emailInput.value;

  try {
    await foodApi.subscribeToNewsletter({ email: emailValue });

    alert('Successfully subscribed!');
  } catch (error) {
    console.error('Error:', error);

    alert('There was an error subscribing. Please try again.');
  }
});


