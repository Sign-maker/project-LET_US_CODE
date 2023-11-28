const optionMenu = document.querySelector('.custom-select-ctg');
const selectBtnCtg = optionMenu.querySelector('.categories-btn');
const options = optionMenu.querySelectorAll('.text-options');
const selectCtgInput = optionMenu.querySelector('.selected-option');

// selectBtnCtg.addEventListener('click', () => {
//   optionMenu.classList.toggle('active');
// });

// let lastSelectedOption = null;

// options.forEach(option => {
//   option.addEventListener('click', () => {
//     let selectedOption = option.innerText;

//     if (lastSelectedOption) {
//       lastSelectedOption.style.color = 'rgba(1, 1, 1, 0.5)';
//     }

//     selectCtgInput.value = selectedOption;
//     option.style.color = 'var(--text)';
//     optionMenu.classList.remove('active');
//     console.log(selectedOption);

//     lastSelectedOption = option;

//     // Здесь должен быть код для выполнения запроса к API с параметром selectedOption
//   });
// });

const sortMenu = document.querySelector('.custom-select-sort');
const selectBtnSort = sortMenu.querySelector('.sort-btn');
const optionsSort = sortMenu.querySelectorAll('.text-options-sort');
const selectInputSort = sortMenu.querySelector('.selected-option');

// selectBtnSort.addEventListener('click', () => {
//   sortMenu.classList.toggle('active');
// });

// let lastSelectedOptionSort = null;

// optionsSort.forEach(option => {
//   option.addEventListener('click', () => {
//     let selectedOptionSort = option.innerText;

//     if (lastSelectedOptionSort) {
//       lastSelectedOptionSort.style.color = 'rgba(1, 1, 1, 0.5)';
//     }

//     selectInputSort.value = selectedOptionSort;
//     option.style.color = 'var(--text)';
//     sortMenu.classList.remove('active');
//     console.log(selectedOptionSort);

//     lastSelectedOptionSort = option;

//     // Здесь должен быть код для выполнения запроса к API с параметром selectedOptionSort
//   });
// });

document.addEventListener('click', function (event) {
  const isClickInsideOptionMenu = optionMenu.contains(event.target);
  const isClickInsideSortMenu = sortMenu.contains(event.target);

  if (!isClickInsideOptionMenu) {
    optionMenu.classList.remove('active');
  }

  if (!isClickInsideSortMenu) {
    sortMenu.classList.remove('active');
  }
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape') {
    optionMenu.classList.remove('active');
    sortMenu.classList.remove('active');
  }
});

// sortMenu.addEventListener('keydown', (event) => {
//   if (event.code === 'Space') {
//     sortMenu.classList.toggle('active');
//     event.preventDefault();
//   }
// });

// optionMenu.addEventListener('keydown', (event) => {
//   if (event.code === 'Space') {
//     optionMenu.classList.toggle('active');
//     event.preventDefault();
//   }
// });
