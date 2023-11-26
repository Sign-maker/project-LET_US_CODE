import { markupProductsList } from './markup-product-list';
import { openModal } from './modal-markup';
import { ShopStorage } from './local-storage-api';
const listEl = document.querySelector('.content-wrapper');
listEl.addEventListener('click', onClickCart);


//   export function onClickCart(e) {
//   e.preventDefault();
//   const clickedElement = e.target;
//   if (clickedElement.nodeName === 'IMG' || clickedElement.nodeName === 'H4') {
//     const Id = clickedElement.closest('.products-card-item').dataset.id;
//     openModal(Id);
//   } else {
//     return;
//   }
// }

export function onClickCart(e) {
  e.preventDefault();
  const clickedElement = e.target;
  if (clickedElement.closest('a') && clickedElement.closest('.products-card-link')) {
    const Id = clickedElement.closest('li').dataset.id;
    openModal(Id);
  } else {
    return;
  }
}


