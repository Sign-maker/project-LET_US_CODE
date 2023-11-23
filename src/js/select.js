document.addEventListener('DOMContentLoaded', function () {
    // Ваш исправленный код здесь
    const optionMenu = document.querySelector('.custom-select');
    const selectBtn = optionMenu.querySelector('.categories-btn');
    const options = optionMenu.querySelectorAll('.text-options');
    const sBtn_text = optionMenu.querySelector('.selected-option');
    selectBtn.addEventListener('click', () =>optionMenu.classList.toggle('active'));
    options.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption = option.innerText;
            
            sBtn_text.value = selectedOption;
            optionMenu.classList.remove('active');
        });
    });
});

const optionMenuSort = document.querySelector('.custom-select-sort');
const selectBtnSort = optionMenuSort.querySelector('.sort-btn');
const optionsSort = optionMenuSort.querySelectorAll('.text-options-sort');
const sBtn_textSort = optionMenuSort.querySelector('.selected-option');

selectBtnSort.addEventListener('click', () =>
  optionMenuSort.classList.toggle('active'));

optionsSort.forEach(optionSort => {
  optionSort.addEventListener('click', () => {
    let selectedOptionSort = optionSort.innerText;
    sBtn_textSort.value = selectedOptionSort;
    optionMenuSort.classList.remove('active');
  });
});


