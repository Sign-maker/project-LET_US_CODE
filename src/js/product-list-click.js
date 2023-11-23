import { openModal } from './modal-markup';
const listEl = document.querySelector('.product-card-list');
listEl.addEventListener('click', onClickCart);

function onClickCart(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'H4') {
    openModal();
  } else {
    return;
  }
}
