import { FoodBoutiqueAPI } from './food-api';
import icons from '../img/icons.svg';
import { onClickCart } from './product-list-click';
import { Storage } from './local-storage-api';
const modalEl = document.querySelector('.modal-prod-wrapper');
const SHOP_STORAGE = 'shop-storage';
const shopStorage = new Storage(SHOP_STORAGE);

export async function openModal(Id) {
  console.log(Id);
  const api = new FoodBoutiqueAPI();
  const productDetails = await api.getProductDetails(Id);
  renderModal(productDetails);
}

//! Функція рендеру розмітки
async function renderModal(productDetails) {
  try {
    modalEl.classList.add('modal-active');
    document.body.classList.add('stop-scroll');

    modalEl.innerHTML = `
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${icons}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${productDetails.img}" alt="${productDetails.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <h2 class="modal-prod-name">${productDetails.name}</h2>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Category:<span class='modal-prod-info'> ${productDetails.category}</span></h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Size:<span class='modal-prod-info'> ${productDetails.size}</span></h3>
    </li>
    <li class="modal-prod-item">
      <h3 class="modal-prod-text">Popularity:<span class='modal-prod-info'> ${productDetails.popularity}</span></h3>
    </li>
  </ul>
  <p class="modal-prod-desc">${productDetails.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${productDetails.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text" data-ation = ''>Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${icons}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `;

    const addBtn = document.querySelector('.modal-prod-add-btn');
    addBtn.addEventListener('click', () => addToCart(productDetails));

    const closeBtn = document.querySelector('.modal-prod-close-btn');
    closeBtn.addEventListener('click', () => closeModal());

    // Додаю слухачі подій
    window.addEventListener('click', closeModalOnWindowClick);
    window.addEventListener('keydown', closeModalOnEsc);
  } catch (error) {
    console.error(error);
  }
}

//! Функція закриття модалки при кліку на хрестик

function closeModal() {
  modalEl.classList.remove('modal-active');
  document.body.classList.remove('stop-scroll');

  // Видаляю слухачі подій
  window.removeEventListener('click', closeModalOnWindowClick);
  window.removeEventListener('keydown', closeModalOnEsc);
}

//! Закриття модалки при кліку по бекдропу

function closeModalOnWindowClick(e) {
  if (e.target === modalEl) {
    closeModal();
  }
}

//! Закриття модалки при кліку на кнопку ESC

function closeModalOnEsc(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}
