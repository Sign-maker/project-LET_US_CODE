// import { FoodBoutiqueAPI } from './food-api';
// const products = new FoodBoutiqueAPI();

const products = {
  page: 6,
  perPage: 9,
  totalPages: 8,
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
console.log(ulTag);
// ______змінні________
let totalPages = products.totalPages;
let page = products.page;

// ______функція________
function createPagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  // ______вставляю кнопку назад________
  if (page > 0) {
    liTag += `<li class="btn_back"><button type="button"><svg class="paginations__icon">
        <use href="../img/icons.svg#icon-caret-left"></use>
      </svg></button></li>`;
  }
  // ______вставляю перешу кнопку і крапки________
  if (page > 2) {
    liTag += `<li class="numb"><button type=button>1</button></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // ______скільки сторінок показувати перед активним li________
  if (page === totalPages) {
    beforePages;
  }
  // ______скільки сторінок показувати після активним li________
  if (page === 1) {
    afterPages;
  }
  // ______закинула активну кнопку і дві з різних боків, поставила умову щоб вони не ішли в мінус і більше сторінок________
  for (
    let pageNumber = beforePages;
    pageNumber <= afterPages;
    pageNumber += 1
  ) {
    if (pageNumber > totalPages || pageNumber < 1) {
      continue;
    }
    if (page === pageNumber) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="numb ${activeLi}"><button type="button" class="${activeLi}">${pageNumber}</button></li>`;
  }
  // ______вставляю  крапки і останню кнопку________
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb"><button type=button>${totalPages}</button></li>`;
  }
  // ______вставляю кнопку вперед________
  if (page < totalPages + 1) {
    liTag += `<li class="btn_next"><button type="button"><svg class="paginations__icon">
        <use href="../img/icons.svg#icon-caret-right"></use>
      </svg></button></li>`;
  }
  // ______закинула розмітку________
  ulTag.innerHTML = liTag;
  // ______ховаю розмітку коли 1 сторінка________
  if (totalPages === 1) {
    ulTag.style.visibility = 'hidden';
  } else {
    ulTag.style.visibility = 'visible';
  }
  // ______ганяю кнопки щоб активна бігала________
  const btnNumbs = document.querySelectorAll('.numb');

  btnNumbs.forEach(btnNumb => {
    btnNumb.addEventListener('click', () => {
      const pageNumber = parseInt(btnNumb.textContent);
      createPagination(totalPages, pageNumber);
    });
  });
  // ______пробую повязати події________

  const btnBackUpdated = document.querySelector('.btn_back');
  const btnNextUpdated = document.querySelector('.btn_next');
  if (btnBackUpdated) {
    btnBackUpdated.addEventListener('click', handlePaginationClick);
  }

  if (btnNextUpdated) {
    btnNextUpdated.addEventListener('click', handlePaginationClick);
  }
}
// ______Функція для обробки кліків на кнопки туди сюди________

function handlePaginationClick(event) {
  if (event.target.closest('.btn_back')) {
    if (page > 1) {
      page -= 1;
      createPagination(totalPages, page);
    }
  } else if (event.target.closest('.btn_next')) {
    // Обробка кліку на кнопку "вперед"
    if (page < totalPages) {
      page += 1;
      createPagination(totalPages, page);
    }
  }
}

// ______викликаю функцію________
createPagination(totalPages, page);
