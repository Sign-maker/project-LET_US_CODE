// const localStorageCartProduct = [
//   {
//     _id: '640c2dd963a319ea671e383b',
//     name: 'Ackee',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//     category: 'Fresh_Produce',
//     price: 8.99,
//     size: '16 oz',
//     is10PercentOff: false,
//     popularity: 8,
//   },
//   {
//     _id: '640c2dd963a319ea671e3860',
//     name: 'Allspice',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png',
//     category: 'Pantry_Items',
//     price: 2.99,
//     size: '1.5oz',
//     is10PercentOff: false,
//     popularity: 8,
//   },
//   {
//     _id: '640c2dd963a319ea671e3660',
//     name: 'Apple Cider Vinegar',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png',
//     price: 6.99,
//     size: '500 ml',
//     category: 'Pantry_Items',
//     is10PercentOff: false,
//     popularity: 0,
//   },
//   {
//     _id: '640c2dd963a319ea671e3861',
//     name: 'Almond Extract',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
//     category: 'Pantry_Items',
//     price: 4.99,
//     size: '2oz',
//     is10PercentOff: false,
//     popularity: 0,
//   },
// ];

export function markupCartProduct(arr) {
  return arr
    .map(({ category, img, is10PercentOff, name, price, size, _id }) => {
      return `<li class="cart-item" data-id="${_id}">
      <img class="cart-img-product" src="${img}" alt="${name}" />
      <div class="cart-product-description">
          <p class="cart-product-name">${name}</p>
          <p class="cart-product-text">Category: <span class="cart-text-black gap">${category}</span>  Size: <span class="cart-text-black">${size}</span></p>
          <p class="cart-product-price">$${price}</p>
      </div>
      <button type="button" class="cart-product-close-btn">
          <svg class="cart-icon-close">
              <use href="./icons.svg#icon-close"></use>
          </svg>
      </button>
  </li>`;
    })
    .join('');
}

// const cartList = document.querySelector('.cart-list');
// cartList.innerHTML = markupCartProduct(localStorageCartProduct);

// console.log(localStorageCartProduct.length > 3);
// function addScrollProductInCart(localStorageCartProduct) {
//   if (localStorageCartProduct.length > 3) {
//     cartList.style.oveflow = 'overlay';
//   }
//   return;
// }
// addScrollProductInCart(localStorageCartProduct);
