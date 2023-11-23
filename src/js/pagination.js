// import { FoodBoutiqueAPI } from './food-api';
// const products = new FoodBoutiqueAPI();

const products = {
  page: 1,
  perPage: 9,
  totalPages: 7,
  results: [
    {
      _id: '640c2dd963a319ea671e383b',
      name: 'Ackee',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
      category: 'Fresh_Produce',
      price: 8.99,
      size: '16 oz',
      is10PercentOff: false,
      popularity: 8,
    },
    {
      _id: '640c2dd963a319ea671e3860',
      name: 'Allspice',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png',
      category: 'Pantry_Items',
      price: 2.99,
      size: '1.5oz',
      is10PercentOff: false,
      popularity: 3,
    },
    {
      _id: '640c2dd963a319ea671e3861',
      name: 'Almond Extract',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
      category: 'Pantry_Items',
      price: 4.99,
      size: '2oz',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e385f',
      name: 'Almond Milk',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png',
      category: 'Beverages',
      price: 3.99,
      size: '1L',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e3814',
      name: 'Almonds',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png',
      category: 'Pantry_Items',
      price: 8.99,
      size: '16 oz bag',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e385e',
      name: 'Ancho Chillies',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
      category: 'Pantry_Items',
      price: 4.99,
      size: '100g',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e3865',
      name: 'Anchovy Fillet',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png',
      category: 'Meat_&_Seafood',
      price: 3.49,
      size: '2oz',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e3660',
      name: 'Apple Cider Vinegar',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png',
      price: 6.99,
      size: '500 ml',
      category: 'Pantry_Items',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e3825',
      name: 'Apples',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png',
      category: 'Fresh_Produce',
      price: 1.5,
      size: '1 lb',
      is10PercentOff: true,
      popularity: 0,
    },
  ],
};
// ______ref________
const pagination = document.querySelector('.pagination');
const ulTag = document.querySelector('.pagination_list');
const btnBack = document.querySelector('.btn_back');
const btnNext = document.querySelector('.btn_next');
console.log(ulTag);
// ______змінні________
let totalPages = products.totalPages;
let page = products.page;

// ______слухачі________

const backBtn = btnBack.addEventListener('click', () =>
  createPagination(totalPages, page - 1)
);
console.log(backBtn);
const forwarBtn = btnNext.addEventListener('click', () =>
  createPagination(totalPages, page + 1)
);

function createPagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;

  if (page > 1) {
    backBtn;
  }
  if (page < totalPages) {
    forwarBtn;
  }
}
// ______функція________
// function createPagination(totalPages, page) {
//   let liTag = '';
//   let activeLi;
//   let beforePages = page - 1;
//   let afterPages = page + 1;
//   // ______назад________
//   if (page > 1) {
//     // liTag += `<button class="btn_back" type=button><svg class="paginations__icon">
//     //   <use href="../img/icons.svg#icon-caret-left"></use>
//     // </svg></button>`;
//   }
//   // ______умови як працюють не так як я думаю________
//   if (page > 2) {
//     liTag += `<li class="numb"><button type=button>1</button></li>`;
//     if (page > 3) {
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }
//   //   //   скільки сторінок показувати перед активним li
//   //   if (page === totalPages) {
//   //     beforePages;

//   //     //   } else if (page === totalPages - 1) {
//   //     //     beforePages = beforePages - 1;
//   //   }
//   //   if (page === 1) {
//   //     afterPages;
//   //     //   } else if (page === 2) {
//   //     //     afterPages = afterPages + 1;
//   //   }
//   if (totalPages === 1) {
//     ulTag.innerHTML = '';
//   }
//   for (
//     let pageLength = beforePages;
//     pageLength <= afterPages;
//     pageLength += 1
//   ) {
//     if (pageLength > totalPages) {
//       continue;
//     }
//     if (pageLength === 0) {
//       pageLength = pageLength + 1;
//     }
//     if (page === pageLength) {
//       activeLi = 'active';
//     } else {
//       activeLi = '';
//     }
//     liTag += `<li class="numb"><button type=button class="${activeLi}">${pageLength}</button></li>`;
//   }

//   //   if (page < totalPages - 1) {
//   //     if (page < totalPages - 2) {
//   //       liTag += `<li class="dots"><span>...</span></li>`;
//   //     }
//   //     liTag += `<li class="numb"><button type=button>${totalPages}</button></li>`;
//   //   }

//   if (page < totalPages - 2) {
//     liTag += `<li class="dots"><span>...</span></li>`;
//     if (page < totalPages - 1) {
//       liTag += `<li class="numb"><button type=button>${
//         totalPages - 1
//       }</button></li>`;
//     }
//     liTag += `<li class="numb"><button type=button>${totalPages}</button></li>`;
//   }

//   //   if (page < totalPages) {
//   //     liTag += `<button class="btn_next" type=button> <svg class="paginations__icon">
//   //       <use href="../img/icons.svg#icon-caret-right"></use>
//   //     </svg></button>`;
//   //   }

//   //  розмітку закинула
//   ulTag.innerHTML = liTag;

//   // слухачі вішаю

//
//   //   const btnNumbs = document.querySelectorAll('.numb');

//   btnNumbs.forEach(function (btnNumb) {
//     btnNumb.addEventListener('click', function () {
//       const pageLength = parseInt(btnNumb.textContent);
//       createPagination(totalPages, pageLength);
//     });
//   });
//   // -------------------------------------------
//   //   const activeEl = document.querySelector('.active');
//   //   console.log(activeEl);

//   //   activeEl.addEventListener('click', function (event) {
//   //     const currentNumber = Number(event.target.textContent);
//   //     console.log(currentNumber);
//   //   });

//   // -------------------------------------------
// }
// createPagination(totalPages, page);
