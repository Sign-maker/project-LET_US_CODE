document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach((select) => {
        const selectedOption = select.querySelector('.selected-option');
        const selectOptions = select.querySelector('.select-options');
        const optionsList = selectOptions.querySelectorAll('li');

        selectedOption.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            selectOptions.setAttribute('aria-hidden', expanded);
        });

        optionsList.forEach((option) => {
            option.addEventListener('click', function () {
                selectedOption.textContent = this.textContent;
                selectedOption.setAttribute('aria-expanded', 'false');
                selectOptions.setAttribute('aria-hidden', 'true');
            });

            option.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    selectedOption.textContent = this.textContent;
                    selectedOption.setAttribute('aria-expanded', 'false');
                    selectOptions.setAttribute('aria-hidden', 'true');
                }
            });
        });

        select.addEventListener('blur', function () {
            selectedOption.setAttribute('aria-expanded', 'false');
            selectOptions.setAttribute('aria-hidden', 'true');
        });
    });
});
