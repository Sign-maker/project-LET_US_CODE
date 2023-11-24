// cart.js

document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.querySelector('.cart-list');
    const orderTotalSum = document.querySelector('.card-ordered-sum span');
    const checkoutForm = document.querySelector('.card-form');
    const emailInput = document.getElementById('email');
  
    let cartItems = [];
  
    // Функция для рендеринга корзины
    function renderCart() {
      cartList.innerHTML = '';
      let totalSum = 0;
  
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
          <div class="cart-item-img">
            <img class="cart-img" src="${item.imgSrc}" alt="${item.name}" />
          </div>
          <div class="card-description">
            <div class="card-name">
              <p class="card-name-text">${item.name}</p>
              <svg class="card-image">
                <use href="./img/icons.svg#icon-check"></use>
              </svg>
            </div>
            <div class="card-category">
              <p class="card-category-text">Category:<span>${item.category}</span></p>
              <p class="card-category-text">Size:<span>${item.size}</span></p>
            </div>
            <p class="card-name-text">$${item.price}</p>
          </div>
        `;
        cartList.appendChild(li);
        totalSum += parseFloat(item.price);
      });
  
      orderTotalSum.textContent = `$${totalSum.toFixed(2)}`;
    }
  
    // Функция для добавления товара в корзину
    function addToCart(name, category, size, price, imgSrc) {
      const item = { name, category, size, price, imgSrc };
      cartItems.push(item);
      renderCart();
    }
  
    // Событие клика на кнопку "Добавить в корзину"
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('add-to-cart-btn')) {
        const productContainer = event.target.closest('.product-container');
        const name = productContainer.querySelector('.card-name-text').textContent;
        const category = productContainer.querySelector('.card-category-text span').textContent;
        const size = productContainer.querySelector('.card-category-text:last-child span').textContent;
        const price = productContainer.querySelector('.card-name-text').textContent.slice(1); // Убираем знак доллара
        const imgSrc = productContainer.querySelector('.cart-img').src;
  
        addToCart(name, category, size, price, imgSrc);
      }
    });
  
    // Событие отправки формы (оформление заказа)
    checkoutForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userEmail = emailInput.value;
      // Добавьте свою логику для отправки заказа на сервер или обработки данных заказа
      console.log('Order submitted with email:', userEmail);
    });
  });
  