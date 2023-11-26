// import { FoodBoutiqueAPI } from './food-api';
// const products = new FoodBoutiqueAPI();

const products = {
  page: 1,
  perPage: 9,
  totalPages: 5,
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

// Змінні
let totalPages = products.totalPages;
let currentPage = products.page;
console.log(totalPages);

//Варіант 1______________________
function createPagination(totalPages, currentPage) {
  const ulTag = document.querySelector('.pagination_list');
  let liTag = '';

  // Вставляємо кнопку "назад"
  if (currentPage > 0) {
    liTag += `<li class="btn_back"><button type="button"><svg class="paginations__icon">
    <use href="../img/icons.svg#icon-caret-left"></use>
  </svg></button></li>`;
  }

  // Вставляємо кнопки сторінок
  for (let i = 1; i <= totalPages; i++) {
    const activeLi = i === currentPage ? 'active' : '';
    liTag += `<li class="numb ${activeLi}"><button type="button" class="${activeLi}">${i}</button></li>`;
  }

  // Вставляємо кнопку "вперед"
  if (currentPage < totalPages + 1) {
    liTag += `<li class="btn_next"><button type="button"> <svg class="paginations__icon">
    <use href="../img/icons.svg#icon-caret-right"></use>
  </svg></button></li>`;
  }

  // Вставляємо розмітку
  ulTag.innerHTML = liTag;

  // Підключаємо обробник подій
  const btnBack = document.querySelector('.btn_back');
  const btnNext = document.querySelector('.btn_next');

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      if (currentPage > 1) {
        createPagination(totalPages, currentPage - 1);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentPage < totalPages) {
        createPagination(totalPages, currentPage + 1);
      }
    });
  }
  const buttons = ulTag.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Додаткова логіка для стилізації кнопок "назад" та "вперед"
      if (this === buttons[0]) {
        btnBack.style.color = 'var(--third-bg)';
        btnBack.style.backgroundColor = 'var(--second-bg)';
        btnNext.style.color = '';
        btnNext.style.backgroundColor = '';
      } else if (this === buttons[buttons.length - 1]) {
        btnNext.style.color = 'var(--third-bg)';
        btnNext.style.backgroundColor = 'var(--second-bg)';
        btnBack.style.color = '';
        btnBack.style.backgroundColor = '';
      } else {
        // Скидаємо стилі для кнопок "назад" та "вперед", якщо інші сторінки активні
        btnBack.style.color = '';
        btnBack.style.backgroundColor = '';
        btnNext.style.color = '';
        btnNext.style.backgroundColor = '';
      }
    });
  });
}

// Приклад виклику для 6 сторінок і активною першою сторінкою
createPagination(totalPages, currentPage);

// // ______функція________
// function createPagination(totalPages, page) {
//   let liTag = '';
//   let activeLi;
//   let beforePages = page - 1;
//   let afterPages = page + 1;
//   // ______вставляю кнопку назад________
//   if (page >= 1) {
//     liTag += `<li class="btn_back"><button type="button"><svg class="paginations__icon">
//         <use href="../img/icons.svg#icon-caret-left"></use>
//       </svg></button></li>`;
//   }

//   // ______вставляю перешу кнопку і крапки________
//   if (page > 2) {
//     liTag += `<li class="numb first"><button type=button>1</button></li>`;
//     if (page > 3) {
//       liTag += `<li class="numb second"><button type=button>2</button></li>`;
//     }
//     if (page > 4) {
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }
//   // ______1 варіант________
//   // if (page > 2) {
//   //   liTag += `<li class="numb first"><button type=button>1</button></li>`;
//   //   if (page > 3) {
//   //     liTag += `<li class="dots"><span>...</span></li>`;
//   //   }
//   // }

//   // ______скільки сторінок показувати перед активним li________
//   if (page === totalPages) {
//     beforePages;
//   }
//   // ______скільки сторінок показувати після активним li________
//   if (page === 1) {
//     afterPages;
//   }
//   // ______закинула активну кнопку і дві з різних боків, поставила умову щоб вони не ішли в мінус і більше сторінок________
//   for (
//     let pageNumber = beforePages;
//     pageNumber <= afterPages;
//     pageNumber += 1
//   ) {
//     if (pageNumber > totalPages || pageNumber < 1) {
//       continue;
//     }
//     if (page === pageNumber) {
//       activeLi = 'active';
//     } else {
//       activeLi = '';
//     }
//     liTag += `<li class="numb ${activeLi}"><button type="button" class="${activeLi}">${pageNumber}</button></li>`;
//   }
//   // ______вставляю  крапки і останню кнопку________
//   if (page < totalPages - 1) {
//     liTag += `<li class="dots"><span>...</span></li>`;
//     if (page < totalPages - 2) {
//       liTag += `<li class="numb penultimate"><button type=button>${
//         totalPages - 1
//       }</button></li>`;
//     }
//     liTag += `<li class="numb last"><button type=button>${totalPages}</button></li>`;
//   }
//   // ______1 варіант________
//   // if (page < totalPages - 1) {
//   //   if (page < totalPages - 2) {
//   //     liTag += `<li class="dots"><span>...</span></li>`;
//   //   }
//   //   liTag += `<li class="numb last"><button type=button>${totalPages}</button></li>`;
//   // }

//   // ______вставляю кнопку вперед________
//   if (page <= totalPages) {
//     liTag += `<li class="btn_next"><button type="button"><svg class="paginations__icon">
//         <use href="../img/icons.svg#icon-caret-right"></use>
//       </svg></button></li>`;
//   }

//   // ______закинула розмітку________
//   ulTag.innerHTML = liTag;

//   // ______ховаю розмітку коли 1 сторінка________
//   if (totalPages === 1) {
//     ulTag.style.visibility = 'hidden';
//   } else {
//     ulTag.style.visibility = 'visible';
//   }
//   // ______ганяю кнопки щоб активна бігала________
//   const btnNumbs = document.querySelectorAll('.numb');

//   btnNumbs.forEach(btnNumb => {
//     btnNumb.addEventListener('click', () => {
//       const pageNumber = parseInt(btnNumb.textContent);
//       createPagination(totalPages, pageNumber);
//     });
//   });

//   // ______пробую повязати події________

//   const btnBackUpdated = document.querySelector('.btn_back');
//   const btnNextUpdated = document.querySelector('.btn_next');
//   if (btnBackUpdated) {
//     btnBackUpdated.addEventListener('click', handlePaginationClick);
//   }

//   if (btnNextUpdated) {
//     btnNextUpdated.addEventListener('click', handlePaginationClick);
//   }
//   // ______я катя________
//   const middlePage = Math.floor(totalPages / 2);
//   // if (page === totalPages - 2) {
//   //   const first = document.querySelector('.first');
//   //   console.log(first);
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   // }

//   // if (page === 3) {
//   //   const first = document.querySelector('.first');
//   //   console.log(first);
//   //   first.style.display = 'none';
//   // }

//   // if (page === 4) {
//   //   const first = document.querySelector('.first');
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   //   const penultimate = document.querySelector('.penultimate');
//   //   penultimate.style.display = 'none';
//   //   const last = document.querySelector('.last');
//   //   last.style.display = 'none';
//   // }

//   // if (page === middlePage) {
//   //   const first = document.querySelector('.first');
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   //   const penultimate = document.querySelector('.penultimate');
//   //   penultimate.style.display = 'none';
//   //   const last = document.querySelector('.last');
//   //   last.style.display = 'none';
//   // }
//   // if (page === middlePage + 1) {
//   //   const first = document.querySelector('.first');
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   //   const penultimate = document.querySelector('.penultimate');
//   //   penultimate.style.display = 'none';
//   //   const last = document.querySelector('.last');
//   //   last.style.display = 'none';
//   // }
//   // if (page === middlePage + 2) {
//   //   const first = document.querySelector('.first');
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   //   const penultimate = document.querySelector('.penultimate');
//   //   penultimate.style.display = 'none';
//   //   const last = document.querySelector('.last');
//   //   last.style.display = 'none';
//   // }
//   // if (page === totalPages - 3) {
//   //   const first = document.querySelector('.first');
//   //   first.style.display = 'none';
//   //   const second = document.querySelector('.second');
//   //   second.style.display = 'none';
//   //   const secondDots = document.querySelector('.second_dots');
//   //   secondDots.style.display = 'none';
//   // }
// }
// // ______Функція для обробки кліків на кнопки туди сюди________

// function handlePaginationClick(event) {
//   if (event.target.closest('.btn_back')) {
//     if (page > 1) {
//       page -= 1;
//       createPagination(totalPages, page);
//     }
//   } else if (event.target.closest('.btn_next')) {
//     if (page < totalPages) {
//       page += 1;
//       createPagination(totalPages, page);
//     }
//   }
// }

// // ______викликаю функцію________
// createPagination(totalPages, page);

// function handlePaginationClick(event) {
//   if (event.target.closest('.btn_back')) {
//     if (page > 1) {
//       page -= 1;
//       createPagination(totalPages, page);
//     }
//   } else if (event.target.closest('.btn_next')) {
//     if (page < totalPages) {
//       page += 1;
//       createPagination(totalPages, page);
//     }
//   } else if (event.target.closest('.numb')) {
//     const pageNumber = parseInt(event.target.textContent);
//     scrollToTop();
//     createPagination(totalPages, pageNumber);
//   }
// }
// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
