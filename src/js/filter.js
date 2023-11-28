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

const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');
const categorySelect = document.querySelector('.js-category');
const selectOption = document.querySelector('.js-select-option');
const optionMenu = document.querySelector('.custom-select-ctg');
const selectBtnCtg = optionMenu.querySelector('.categories-btn');

const selectCtgInput = optionMenu.querySelector('.selected-option-ctgr');
const SHOW_ALL_OPTION = 'Show all';

selectBtnCtg.addEventListener('click', () => {
  optionMenu.classList.toggle('active');
});

let lastSelectedOption = null;

export function initCategoryInFilter() {
  if (!categoryStorage.getValue()) {
    return;
  }
  selectOption.innerHTML = createCategoryList(categoryStorage.getValue());
  const options = optionMenu.querySelectorAll('.text-options');
  options.forEach(option => {
    option.addEventListener('click', onOptionClick);
  });
}

async function onOptionClick(event) {
  let selectedOption = event.currentTarget.innerText;

  if (lastSelectedOption) {
    lastSelectedOption.style.color = 'rgba(1, 1, 1, 0.5)';
  }

  selectCtgInput.value = selectedOption;
  event.currentTarget.style.color = 'var(--text)';
  optionMenu.classList.remove('active');
  // console.log(selectedOption, typeof selectedOption);
  lastSelectedOption = event.currentTarget;

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

export function initSelectedOption() {
  if (!filterStorage.getValue().category) {
    return;
  }
  selectCtgInput.value = filterStorage.getValue().category;
  const options = optionMenu.querySelectorAll('.text-options');

  options.forEach(option => {
    option.style.color = 'rgba(1, 1, 1, 0.5)';
    if (option.innerText === filterStorage.getValue().category) {
      option.style.color = 'var(--text)';
      lastSelectedOption = option;
    }
  });
}

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

function createCategoryList(categories) {
  return categories
    .map(category => {
      return `<div class="text-options" tabindex="0">${category}</div>`;
    })
    .join('')
    .concat(`<div class="text-options" tabindex="0">${SHOW_ALL_OPTION}</div>`);
}
