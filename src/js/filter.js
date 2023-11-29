import { getProducts } from './home';
import { Storage } from './local-storage-api';
import { markupProductsList } from './markup-product-list';
import { initPagination } from './pagination/pagination-handler';

const FILTER_STORAGE = 'filter-storage';
const CATEGORY_STORAGE = 'category-storage';
const PRODUCT_STORAGE = 'product-storage';

const filterStorage = new Storage(FILTER_STORAGE);
const categoryStorage = new Storage(CATEGORY_STORAGE);
const productStorage = new Storage(PRODUCT_STORAGE);

const INIT_FILTER_PARAMS = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
};
// byABC=true&byPrice=true&byPopularity=true4
const BY_ABS = 'byABC';
const BY_PRICE = 'byPrice';
const BY_POPULARITY = 'byPopularity';
const SORT_PARAMS = [BY_ABS, BY_PRICE, BY_POPULARITY];
const SORT_CONFIGS = [
  { textName: 'A to Z', paramName: BY_ABS, paramValue: true },
  { textName: 'Z to A', paramName: BY_ABS, paramValue: false },
  { textName: 'Cheap', paramName: BY_PRICE, paramValue: true },
  { textName: 'Expensive', paramName: BY_PRICE, paramValue: false },
  { textName: 'Popular', paramName: BY_POPULARITY, paramValue: false },
  { textName: 'Not popular', paramName: BY_POPULARITY, paramValue: true },
];

const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');

const categorySelect = document.querySelector('.js-category');
const ctgMenu = document.querySelector('.custom-select-ctg');
const selectOptionCtg = document.querySelector('.js-ctg-select-options');
const selectBtnCtg = ctgMenu.querySelector('.categories-btn');
const selectCtgInput = ctgMenu.querySelector('.selected-option-ctgr');

const sortMenu = document.querySelector('.custom-select-sort');
// const optionsSort = sortMenu.querySelectorAll('.text-options-sort');
const sortBtn = sortMenu.querySelector('.sort-btn');
const sortInput = sortMenu.querySelector('.selected-option-sort');
const sortOptionsContainer = document.querySelector('.js-sort-select-options');

const SHOW_ALL_OPTION = 'Show all';

selectBtnCtg.addEventListener('click', () => {
  ctgMenu.classList.toggle('active');
});
sortBtn.addEventListener('click', () => {
  sortMenu.classList.toggle('active');
});

let lastSelectedCtgOption = null;
let lastSelectedSortOption = null;

// keyword==============================================================

export function initKeywordInFilter() {
  if (!filterStorage.getValue()) {
    return;
  }

  searchInput.addEventListener('input', onKeywordChange);
  searchForm.addEventListener('submit', onKeywordSubmit);

  searchInput.value = filterStorage.getValue().keyword;
}

async function onKeywordChange(event) {
  if (!filterStorage.getValue()) {
    return;
  }

  if (!event.target.value) {
    filterStorage.setValue({
      ...filterStorage.getValue(),
      keyword: null,
    });
    await getProducts(filterStorage.getValue());
    initPagination();
    return;
  }

  filterStorage.setValue({
    ...filterStorage.getValue(),
    keyword: event.target.value,
  });
}

async function onKeywordSubmit(event) {
  event.preventDefault();

  filterStorage.setValue({
    ...filterStorage.getValue(),
    keyword: event.currentTarget.elements.search.value,
    page: 1,
  });

  await getProducts(filterStorage.getValue());
  initPagination();
}

// caterory============================================================
export function initCategoryInFilter() {
  if (!categoryStorage.getValue()) {
    return;
  }
  selectOptionCtg.innerHTML = createCategoryList(categoryStorage.getValue());
  const options = ctgMenu.querySelectorAll('.text-options');
  options.forEach(option => {
    option.addEventListener('click', onCtgOptionClick);
  });
}

async function onCtgOptionClick(event) {
  let selectedOption = event.currentTarget.innerText;

  if (lastSelectedCtgOption) {
    lastSelectedCtgOption.style.color = 'rgba(1, 1, 1, 0.5)';
  }

  selectCtgInput.value = selectedOption;
  event.currentTarget.style.color = 'var(--text)';
  ctgMenu.classList.remove('active');
  // console.log(selectedOption, typeof selectedOption);
  lastSelectedCtgOption = event.currentTarget;

  if (selectedOption === SHOW_ALL_OPTION) {
    filterStorage.setValue({
      ...filterStorage.getValue(),
      category: null,
      page: 1,
    });
  } else {
    filterStorage.setValue({
      ...filterStorage.getValue(),
      category: selectedOption,
      page: 1,
    });
  }

  await getProducts(filterStorage.getValue());
  initPagination();
}

export function initSelectedCtgOption() {
  if (!filterStorage.getValue().category) {
    return;
  }
  selectCtgInput.value = filterStorage.getValue().category;
  const options = ctgMenu.querySelectorAll('.text-options');

  options.forEach(option => {
    option.style.color = 'rgba(1, 1, 1, 0.5)';
    if (option.innerText === filterStorage.getValue().category) {
      option.style.color = 'var(--text)';
      lastSelectedCtgOption = option;
    }
  });
}

function createCategoryList(categories) {
  return categories
    .map(category => {
      return `<div class="text-options" tabindex="0">${category}</div>`;
    })
    .join('')
    .concat(`<div class="text-options" tabindex="0">${SHOW_ALL_OPTION}</div>`);
}
// sort==============================================================

export function initSortInFilter() {
  sortOptionsContainer.innerHTML = createSortList(SORT_CONFIGS);
  const options = sortMenu.querySelectorAll('.text-options-sort');
  options.forEach(option => {
    option.addEventListener('click', onSortOptionClick);
  });
}

export function initSelectedSortOption() {
  if (
    !SORT_PARAMS.some(sortParam =>
      filterStorage.getValue().hasOwnProperty(sortParam)
    )
  ) {
    return;
  }

  const currentSortConfig = SORT_CONFIGS.find(sortCongig => {
    if (!filterStorage.getValue().hasOwnProperty(sortCongig.paramName)) {
      return false;
    }
    return (
      filterStorage.getValue()[sortCongig.paramName] === sortCongig.paramValue
    );
  });

  // console.log(currentSortConfig);

  sortInput.value = currentSortConfig.textName;

  const options = sortMenu.querySelectorAll('.text-options-sort');

  options.forEach(option => {
    option.style.color = 'rgba(1, 1, 1, 0.5)';
    if (option.innerText === currentSortConfig.textName) {
      option.style.color = 'var(--text)';
      lastSelectedSortOption = option;
    }
  });
}

async function onSortOptionClick(event) {
  let selectedOption = event.currentTarget.innerText;
  if (lastSelectedSortOption) {
    lastSelectedSortOption.style.color = 'rgba(1, 1, 1, 0.5)';
  }
  sortInput.value = selectedOption;
  event.currentTarget.style.color = 'var(--text)';
  sortMenu.classList.remove('active');
  // console.log(selectedOption, typeof selectedOption);
  lastSelectedSortOption = event.currentTarget;

  deleteSortParamsFromFilterStorage();
  setSortParamToFilterStorage(selectedOption);
  await getProducts(filterStorage.getValue());
  initPagination();
}

function deleteSortParamsFromFilterStorage() {
  const fsParamsObj = filterStorage.getValue();

  SORT_PARAMS.forEach(sortParam => {
    if (fsParamsObj.hasOwnProperty(sortParam)) {
      delete fsParamsObj[sortParam];
    }
  });

  filterStorage.setValue(fsParamsObj);
}

function setSortParamToFilterStorage(param) {
  const paramObj = SORT_CONFIGS.find(
    sortPraram => sortPraram.textName === param
  );

  filterStorage.setValue({
    ...filterStorage.getValue(),
    [paramObj.paramName]: paramObj.paramValue,
    page: 1,
  });
}

function createSortList(sortParams) {
  return sortParams
    .map(sortParam => {
      return `<div class="text-options-sort" tabindex="0">${sortParam.textName}</div>`;
    })
    .join('');
  // .concat(
  //   `<div class="text-options-sort" tabindex="0">${SHOW_ALL_OPTION}</div>`
  // );
}
