import { getProducts } from './home';
import { Storage } from './local-storage-api';
import { markupProductsList } from './markup-product-list';

export function filterHandler() {
  const PRODUCT_STORAGE = 'product-storage';
  const productStorage = new Storage(PRODUCT_STORAGE);
  const FILTER_STORAGE = 'filter-storage';
  const filterStorage = new Storage(FILTER_STORAGE);
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

  const CATEGORY_STORAGE = 'category-storage';
  const categoryStorage = new Storage(CATEGORY_STORAGE);
  const caterories = categoryStorage.getValue();
  selectOption.innerHTML = createCategoryList(caterories);
  const optionMenu = document.querySelector('.custom-select-ctg');
  const options = optionMenu.querySelectorAll('.text-options');
  const selectCtgInput = optionMenu.querySelector('.selected-option');

  let lastSelectedOption = null;
  options.forEach(option => {
    option.addEventListener('click', () => {
      let selectedOption = option.innerText;

      if (lastSelectedOption) {
        lastSelectedOption.style.color = 'rgba(1, 1, 1, 0.5)';
      }

      selectCtgInput.value = selectedOption;
      option.style.color = 'var(--text)';
      optionMenu.classList.remove('active');
      console.log(selectedOption);

      INIT_FILTER_PARAMS.category = selectedOption;
      getProducts(INIT_FILTER_PARAMS);

      lastSelectedOption = option;
    });
  });

  searchForm.addEventListener('submit', searchProducts);

  async function searchProducts(evt) {
    evt.preventDefault();

    const keyWord = searchInput.value;
    const category = categorySelect.value;
    console.log(category);

    INIT_FILTER_PARAMS.keyword = keyWord;
    INIT_FILTER_PARAMS.category = category;

    await getProducts(INIT_FILTER_PARAMS);

    if (category === 'Show all') {
      INIT_FILTER_PARAMS.category = null;
      getProducts({
        keyword: null,
        category: null,
        page: 1,
        limit: 9,
      });
    }
  }

  function createCategoryList(categories) {
    return categories
      .map(category => {
        return `<div class="text-options" tabindex="0">${category}</div>`;
      })
      .join('')
      .concat(`<div class="text-options" tabindex="0">Show all</div>`);
  }
}
