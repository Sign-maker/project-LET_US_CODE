// import { FoodBoutiqueAPI } from './food-api';
// const productList = new FoodBoutiqueAPI();

const products = {
  page: 1,
  perPage: 9,
  totalPages: 60,
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
let totalPages = 20;
let page = 5;
function createPagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="btn_back"><span><svg class="paginations__icon" width="24" height="24">
      <use href="../img/icons.svg#icon-caret-left"></use>
    </svg></span></li>`;
  }

  if (page > 2) {
    liTag += `<li class="numb"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  for (
    let pageLength = beforePages;
    pageLength <= afterPages;
    pageLength += 1
  ) {
    if (page === pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
  }
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn_next"><span> <svg class="paginations__icon" width="24" height="24">
      <use href="../img/icons.svg#icon-caret-right"></use>
    </svg></span></li>`;
  }

  ulTag.innerHTML = liTag;

  const btnBack = document.querySelector('.btn_back');
  //   console.log(btnBack);
  if (btnBack) {
    btnBack.addEventListener('click', function () {
      createPagination(totalPages, page - 1);
    });
  }
  const btnNext = document.querySelector('.btn_next');
  //   console.log(btnNext);
  if (btnNext) {
    btnNext.addEventListener('click', function () {
      createPagination(totalPages, page + 1);
    });
  }
}
createPagination(totalPages, page);
