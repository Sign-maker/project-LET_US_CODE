import { markupProductsList } from './markup-product-list';
import { openModal } from './modal-markup';
import { ShopStorage } from './local-storage-api';
const listEl = document.querySelector('.product-card-list');
listEl.addEventListener('click', onClickCart);


// export function onClickCart(e) {
//   e.preventDefault();
//   if (e.target.nodeName === 'IMG' || e.target.nodeName === 'H4') {
//     openModal();
//   } else {
//     return;
//   }
// }
  export function onClickCart(e) {
  e.preventDefault();
  const clickedElement = e.target;
  if (clickedElement.nodeName === 'IMG' || clickedElement.nodeName === 'H4') {
    const Id = clickedElement.closest('.products-card-item').dataset.id;
    openModal(Id);
  } else {
    return;
  }
}


