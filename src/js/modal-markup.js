const modalEl = document.querySelector('.modal-prod-wrapper');

export function openModal(id) {
  console.log(id);
  modalEl.classList.add('modal-active');
  document.body.classList.add('stop-scroll');
  
  modalEl.innerHTML = `
<div class="modal-prod-card">
<button type="button" class="modal-prod-close-btn">
  <svg class="modal-prod-close-icon" width="22" height="22">
    <use href="./img/icons.svg#icon-close"></use>
  </svg>
</button>
<div class="modal-prod-information-wrap">
<div class="modal-prod-img-wrap">   
    <img class="modal-prod-img" src="" alt="product picture" />
</div> 
<div class="modal-prod-name-wrap">
<h2 class="modal-prod-name">Pumpkin</h2>
<ul class="modal-prod-list">
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Category:</h3>
  </li>
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Size:</h3>
  </li>
  <li class="modal-prod-item">
    <h3 class="modal-prod-text">Popularity</h3>
  </li>
</ul>
<p class="modal-prod-desc">A round, orange vegetable with a thick shell and seeds inside. It is often used in cooking and baking for its sweet and earthy flavor.</p>
</div>
</div>
<div class="modal-prod-price-elem">
<p class="modal-prod-price">&#36;2.99</p>
<button class="modal-prod-add-btn">
    <p class="modal-prod-add-text">Add to </p>
    <svg class="modal-prod-basket-icon" >
      <use href="./img/icons.svg#icon-shopping-cart"></use>
    </svg>
</button>
</div>
</div>
`;

  const closeBtn = document.querySelector('.modal-prod-close-btn');
  closeBtn.addEventListener('click', () => closeModal());

  // Додаю слухачі подій
  window.addEventListener('click', closeModalOnWindowClick);
  window.addEventListener('keydown', closeModalOnEsc);
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

