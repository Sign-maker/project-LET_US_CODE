// import { FoodBoutiqueAPI } from './food-api';
// const productList = new FoodBoutiqueAPI();
// // console.dir(productList);
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

function createPagination(totalPages, page) {
  let liTag = '';
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="btn_back"><button> <svg class="paginations__icon" width="24" height="24">
      <use href="../img/icons.svg#icon-caret-left"></use>
    </svg></button></li>`;
  }
  for (
    let pageLength = beforePages;
    pageLength <= afterPages;
    pageLength += 1
  ) {
    liTag += `<li class="numb active"><button>1</button></li>`;
  }
  if (page < totalPages) {
    liTag += `<li class="btn_next"><button> <svg class="paginations__icon" width="24" height="24">
      <use href="../img/icons.svg#icon-caret-right"></use>
    </svg></button></li>`;
  }

  ulTag.innerHTML = liTag;
}
createPagination(20, 5);
