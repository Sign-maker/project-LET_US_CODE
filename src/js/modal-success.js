import { Storage } from './local-storage-api';
const SHOP_STORAGE = 'shop-storage';
const shopStorage = new Storage(SHOP_STORAGE);

const modalSuccesEl = document.querySelector('.modal-order-wrap');
const opnBtn = document.querySelector('.open');
opnBtn.addEventListener('click', () => openSuccessModal());

export function openSuccessModal(id) {
  console.log(id);
  modalSuccesEl.classList.add('modal-show-order');
  document.body.classList.add('stop-scroll');

  modalSuccesEl.innerHTML = `
    <div class="modal-order-succ">
    <button type="button" class="modal-order-succ-btn">
      <svg class="modal-prod-close-icon">
        <use href="./img/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-prod-close-img-wrap">
      <img class="modal-prod-close-img" srcset="../img/order-success/image 2@1x-min.png 1x, ../img/order-success/image 2@2x-min.png 2x" 
      src='../img/order-success/image 2@1x-min.png'
      alt="product picture" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="68"
        viewBox="0 0 185 68"
        fill="none"
        class="modal-prod-close-shadow"
      >
        <g filter="url(#filter0_f_185_1243)">
          <ellipse
            cx="92.5"
            cy="34"
            rx="72.5"
            ry="14"
            fill="#010101"
            fill-opacity="0.1"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_185_1243"
            x="0"
            y="0"
            width="185"
            height="68"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_185_1243"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <h2 class="modal-order-succ-title">Order success</h2>
    <p class="modal-order-succ-text">
      Thank you for shopping at Food Boutique. Your order has been received and
      is now being freshly prepared just for you! Get ready to indulge in
      nourishing goodness, delivered right to your doorstep. We're thrilled to
      be part of your journey to better health and happiness.
    </p>
  </div>
  `;
  const closeBtn = document.querySelector('.modal-order-succ-btn');
  closeBtn.addEventListener('click', closeSuccessModal);

  // Додаю слухачі подій
  window.addEventListener('click', closeModalSuccess);
  window.addEventListener('keydown', closeModalSuccessEsc);
}

//! Функція закриття модалки при кліку на хрестик

function closeSuccessModal() {
  modalSuccesEl.classList.remove('modal-show-order');
  document.body.classList.remove('stop-scroll');

  // Видаляю слухачі подій
  window.removeEventListener('click', closeModalSuccess);
  window.removeEventListener('keydown', closeModalSuccessEsc);
}

//! Закриття модалки при кліку по бекдропу
function closeModalSuccess(e) {
  if (e.target === modalSuccesEl) {
    closeSuccessModal();
  }
}

//! Закриття модалки при кліку на кнопку ESC

function closeModalSuccessEsc(e) {
  if (e.keyCode === 27) {
    closeSuccessModal();
  }
}
