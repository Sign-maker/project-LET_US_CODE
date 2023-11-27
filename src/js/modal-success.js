// *--------КОД РУСЛАНА-------------*

// import { Storage } from "./local-storage-api";

// const SHOP_STORAGE = 'shop-storage';
// const shopStorage = new Storage(SHOP_STORAGE);

// export async function openSuccessModal() {
//   console.log('Function openSuccessModal called');
//   const modalSuccesEl = document.querySelector('.modal-order-wrap');
//   const opnBtn = document.querySelector('.open');

//   if (opnBtn && modalSuccesEl) {
//     opnBtn.addEventListener('click', () => {
//       modalSuccesEl.classList.add('modal-show-order');
//       document.body.classList.add('stop-scroll');

//       modalSuccesEl.innerHTML = `
//         <div class="modal-order-succ">
//           <button type="button" class="modal-order-succ-btn">
//             <svg class="modal-prod-close-icon">
//               <use href="./img/icons.svg#icon-close"></use>
//             </svg>
//           </button>
//           <div class="modal-prod-close-img-wrap">
//             <img class="modal-prod-close-img" src="" alt="product picture" />
//           </div>
//         </div>
//       `;

//       const closeBtn = modalSuccesEl.querySelector('.modal-order-succ-btn');
//       if (closeBtn) {
//         closeBtn.addEventListener('click', () => closeSuccessModal(modalSuccesEl));
//       }

//       modalSuccesEl.addEventListener('click', (e) => closeModalSuccess(e, modalSuccesEl));
//       document.addEventListener('keydown', (e) => closeModalSuccessEsc(e, modalSuccesEl));
//     });
//   }
// }

// function closeModalSuccess(e, modalSuccesEl) {
//   if (e.target === modalSuccesEl) {
//     closeSuccessModal(modalSuccesEl);
//   }
// }

// function closeModalSuccessEsc(e, modalSuccesEl) {
//   if (e.keyCode === 27) {
//     closeSuccessModal(modalSuccesEl);
//   }
// }

// export function closeSuccessModal(modalSuccesEl) {
//   modalSuccesEl.classList.remove('modal-show-order');
//   document.body.classList.remove('stop-scroll');
//   // Видалення слухачів подій тут...
// }



// *-------МІЙ КОД ДЛЯ МОДАЛКИ----------*
import { Storage } from "./local-storage-api";
import { FoodBoutiqueAPI } from '../js/food-api';

const SHOP_STORAGE = 'shop-storage';
const shopStorage = new Storage(SHOP_STORAGE);
const foodAPI = new FoodBoutiqueAPI();

export async function openSuccessModal() {
  const opnBtn = document.querySelector('.order-btn');

  if (opnBtn) {
    opnBtn.addEventListener('click', async () => {
      try {
        const response = await foodAPI.getResponseFromServer();

        if (response && response.message) {
          const modalSuccesEl = document.querySelector('.modal-order-wrap');
          if (modalSuccesEl) {
            modalSuccesEl.innerHTML = `
              <div class="modal-order-succ">
                <button type="button" class="modal-order-succ-btn">
                  <svg class="modal-prod-close-icon">
                    <use href="./img/icons.svg#icon-close"></use>
                  </svg>
                </button>
                <div class="modal-prod-close-img-wrap">
                  <img class="modal-prod-close-img" src="" alt="product picture" />
                </div>
                <p>${response.message}</p>
              </div>
            `;
            modalSuccesEl.classList.add('modal-show-order');
            document.body.classList.add('stop-scroll');
          }
        }
      } catch (error) {
        console.error('Помилка при отриманні відповіді з сервера:', error);
      }
    });
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
  modalSuccesEl.classList.remove('modal-show-order');
  document.body.classList.remove('stop-scroll');

}