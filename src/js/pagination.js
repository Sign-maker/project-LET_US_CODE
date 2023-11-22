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
const element = document.querySelector('.pagination ul');

let totalPages = 20;
let page = 10;

function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page > 1) {
    // Show the previous button if the page value is greater than 1
    liTag += `<li class="btn prev"><span><i class="fas fa-angle-left"></i>Prev</span></li>`;
  }

  if (page > 2) {
    // If page value is less than 2, then add 1 after the previous button
    liTag += `<li class="first numb"><span>1</span></li>`;
    if (page > 3) {
      // If page value is greater than 3, then add "..." after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // How many pages or li to show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }

  // How many pages or li to show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      // If plength is greater than totalPages, then continue
      continue;
    }
    if (plength == 0) {
      // If plength is 0, then add +1 to plength value
      plength = plength + 1;
    }
    if (page == plength) {
      // If page is equal to plength, then assign "active" string to the active variable
      active = 'active';
    } else {
      // Else leave empty to the active variable
      active = '';
    }
    liTag += `<li class="numb ${active}"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) {
    // If page value is less than totalPages value by -1, then show the last li or page
    if (page < totalPages - 2) {
      // If page value is less than totalPages value by -2, then add "..." before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    // Show the next button if the page value is less than totalPages (20)
    liTag += `<li class="btn next"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  element.innerHTML = liTag; // Add li tags inside ul tag
  return liTag; // Return the li tags
}

function updatePagination() {
  element.innerHTML = createPagination(totalPages, page);
}

updatePagination();

element.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    const pageNumber = event.target.textContent;
    if (pageNumber) {
      page = parseInt(pageNumber);
      updatePagination();
    }
  }
});
// export const resetCurrentPage = () => {
//   page = 1;
// };

// export const clearPagination = () => {
//   pagination.innerHTML = '';
// };

// function paginate(totalPages, page) {
//   const groupSize = perPage;
//   const numGroups = Math.ceil(totalPages / groupSize);

//   const currentGroup = Math.ceil(page / groupSize);
//   console.log(currentGroup);
//   const startPage = (currentGroup - 1) * groupSize + 1;
//   const endPage = Math.min(startPage + groupSize - 1, totalPages);
//   const pages = Array.from(
//     { length: endPage - startPage + 1 },
//     (_, i) => startPage + i
//   );

//   const hasPrevGroup = currentGroup > 1;
//   const hasNextGroup = currentGroup < numGroups;
//   return {
//     pages,
//     hasPrevGroup,
//     hasNextGroup,
//   };
// }

// paginate(totalPages, page);

// const paginationMarkup = () => {
//   if (totalPages <= 1) return;
//   const { pages, hasPrevGroup, hasNextGroup } = paginate(
//     state.totalPages,
//     state.currentPage
//   );
//   const firstPage = `<button type="button" class="start-btn page-btn">1</button>`;
//   const secondPage = `<button type="button" class="start-btn page-btn">2</button>`;
//   const lastPage = `<button type="button" class="end-btn page-btn">${totalPages}</button>`;
//   const prev = `<button type="button" class="prev-btn page-btn"><svg class="paginations__icon" width="24" height="24">
//       <use href="../img/icons.svg#icon-caret-left"></use>
//     </svg></button>`;
//   const next = `<button type="button" class="next-btn page-btn"><<svg class="paginations__icon" width="24" height="24">
//       <use href="../img/icons.svg#icon-caret-right"></use>
//     </svg></button>`;
//   const dotsBtnPrev = `<button class="page-btn prev-dots">...</button>`;
//   const dotsBtnNext = `<button class="page-btn next-dots">...</button>`;
//   const btnPages = pages
//     .map(num => {
//       const isActive = num === state.currentPage ? 'active-page' : '';
//       return `<button type="button" class="page-btn ${isActive}
//         ">${num}</button>`;
//     })
//     .join('');

//   const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : '';
//   const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : '';
//   return leftGroup + btnPages + rightGroup;
// };

// export const renderPaginationMarkup = () => {
//   pagination.insertAdjacentHTML('beforeend', paginationMarkup());
// };

// const updateCurrentPage = newPage => {
//   state.currentPage = newPage;
//   clearPagination();

//   renderPaginationMarkup();
// };

// const goToNextPage = () => {
//   updateCurrentPage(state.currentPage + 1);
// };
// const goToPrevPage = () => {
//   updateCurrentPage(state.currentPage - 1);
// };
// const goToNextGroupBtn = () => {
//   const { pages } = paginate(state.totalPages, state.currentPage);
//   const lastPageOfCurrentGroup = pages[pages.length - 1];
//   const newPage = Math.min(lastPageOfCurrentGroup + 1, state.totalPages);
//   state.currentPage = pages[pages.length - 1] + 1;
//   updateCurrentPage(newPage);
// };
// const goToPrevGroupBtn = () => {
//   const { pages } = paginate(state.totalPages, state.currentPage);
//   const firstPageOfCurrentGroup = pages[0];
//   const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
//   updateCurrentPage(newPage);
// };
// const changePageByClick = evt => {
//   const activeBtn = document.querySelector('.active-page');
//   const selectedPage = Number(evt.target.textContent) || state.currentPage;
//   if (selectedPage === state.currentPage) return;

//   updateCurrentPage(selectedPage);
//   activeBtn.classList.remove('active-page');
//   evt.target.classList.add('active-page');
// };

// export const onBtnPageClick = async evt => {
//   if (evt.target.nodeName !== 'BUTTON') return;
//   if (Number(evt.target.textContent) === state.currentPage) return;
//   if (evt.target.classList.contains('next-btn')) goToNextPage();
//   if (evt.target.classList.contains('prev-btn')) goToPrevPage();
//   if (evt.target.classList.contains('next-dots')) goToNextGroupBtn();
//   if (evt.target.classList.contains('prev-dots')) goToPrevGroupBtn();
//   changePageByClick(evt);
//   window.scrollTo({
//     top: 0,
//   });
//   moviesEl.innerHTML = '';
//   whatPaginated(state.whatPaginated);
// };
