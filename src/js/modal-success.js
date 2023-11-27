import { Storage } from './local-storage-api';
import icons from '../img/icons.svg';

const SHOP_STORAGE = 'shop-storage';
const shopStorage = new Storage(SHOP_STORAGE);
let closeBtn = null;

export function openSuccessModal() {
  const modalSuccesEl = document.querySelector('.modal-order-wrap');

  if (modalSuccesEl) {
    modalSuccesEl.classList.add('modal-show-order');
    document.body.classList.add('stop-scroll');

    modalSuccesEl.innerHTML = `
        <div class="modal-order-succ">
          <button type="button" class="modal-order-succ-btn">
            <svg class="modal-prod-close-icon" width='22' height='22'>
              <use href="${icons}#icon-close"></use>
            </svg>
          </button>
          <div class="modal-prod-close-img-wrap">
            <svg class="modal-check" width='80' height='80'>
              <use href="${icons}#icon-check"></use>
            </svg>
          </div>
          <p class="modal-success-title"></p>
          <p class="modal-success-message"></p>
        </div>
      `;

    closeBtn = modalSuccesEl.querySelector('.modal-order-succ-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () =>
        closeSuccessModal(modalSuccesEl)
      );
    }

    modalSuccesEl.addEventListener('click', e =>
      closeModalSuccess(e, modalSuccesEl)
    );
    document.addEventListener('keydown', e =>
      closeModalSuccessEsc(e, modalSuccesEl)
    );
  }
}

function closeModalSuccess(e, modalSuccesEl) {
  if (e.target === modalSuccesEl) {
    closeSuccessModal(modalSuccesEl);
  }
}

function closeModalSuccessEsc(e, modalSuccesEl) {
  if (e.keyCode === 27) {
    closeSuccessModal(modalSuccesEl);
  }
}

export function closeSuccessModal(modalSuccesEl) {
  closeBtn.removeEventListener('click', () => closeSuccessModal(modalSuccesEl));
  modalSuccesEl.classList.remove('modal-show-order');
  document.body.classList.remove('stop-scroll');
  // Видалення слухачів подій тут...
}
