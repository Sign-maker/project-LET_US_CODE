let countInCart = 0;
let arrCarts = [];

const navSpanForCartRef = document.querySelector('.nav-span');
//change selector to BTN for remove card from list
//delete preventDefault() after change selector btn in
//fn onRemoveOrderFromCartClick
const cardListOrder = document.querySelector('.cart-list');
//change class from button in HTML
const clearListOrder = document.querySelector('.removeOllOrders');
//For examples
const divRef = document.querySelector('.cart-list');

// cardListOrder.addEventListener('click', onRemoveOrderFromCartClick);
// clearListOrder.addEventListener('click', onClearListBtnClick);

function checkedLocalStorage() {
  const getLocalCart =
    JSON.parse(localStorage.getItem('popularProducts')) ?? [];

  // const countCart = getLocalCart.length;
  arrCarts = getLocalCart;

  const change = 'CHANGE'
  // divRef.innerHTML = markupEXAMPLES(arrCarts);
  totalPrice(arrCarts);
  console.log(totalPrice(arrCarts));
  changeNumberInCart(arrCarts.length);
}

checkedLocalStorage();

// console.log(checkedLocalStorage());



function changeNumberInCart(number) {
  navSpanForCartRef.textContent = number;
}

function totalPrice(arr) {
  if (!arr.length) return;

  return arr.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
}

function onRemoveOrderFromCartClick(e) {
  //change in classList.contains CLASS
  if (
    e.target.nodeName !== 'BUTTON' ||
    e.target.classList.contains('removeOllOrders')
  )
    return;

  const objFromLi = e.target.closest('li');
  const dataIdItem = objFromLi.dataset.id;

  const getLocalCart =
    JSON.parse(localStorage.getItem('popularProducts')) ?? [];

  // console.log(getLocalCart);
  const findElementFromLocalStorage = getLocalCart.filter(item => item._id !== dataIdItem);

  localStorage.setItem('popularProducts', JSON.stringify(findElementFromLocalStorage));

  checkedLocalStorage()
}



function markupEXAMPLES(arr) {
  const markup = arr
    .map(({ _id, name }) => {
      return `
    <li data-id="${_id}">
      <p>${name}</p>
      <button class="btn-example">X</button>
    </li>`;
    })
    .join('');

  return markup;
}

// markupEXAMPLES(arrCarts);

// divRef.innerHTML = markupEXAMPLES(arrCarts);

function onClearListBtnClick(e) {
  console.log(e.target);
}
