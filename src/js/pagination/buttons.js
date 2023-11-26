import icons from '../../img/icons.svg';
export class PaginationButtons {
  constructor() {}
  numBtnCreateMarkUp(num) {
    return `<li class="buttons-item">
        <button class="pagination-btn num-btn" type="button" data-button-id="${num}">${num}</button>
      </li>`;
  }
  numBtnSetActive(num) {}
  numBtnSetInactive(num) {}
  numBtnChangeNum() {}

  intervalBtnCreateMarkUp() {
    return `<li class="buttons-item">
        <button class="pagination-btn interval-btn" type="button" data-button-id="interval">...</button>
      </li>`;
  }
  intervalBtnShow() {}
  intervalBtnHide() {}

  prevBtnCreateMarkUp() {
    return `<li class="buttons-item">
        <button class="pagination-btn prev-btn" type="button" data-button-id="prev-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${icons}#icon-caret-left" class="pagination-arrows" />
          </svg>
        </button>
      </li>`;
  }
  nextBtnCreateMarkUp() {
    return `<li class="buttons-item">
        <button class="pagination-btn next-btn" type="button" data-button-id="next-btn">
          <svg class="icon-shopping-cart" width="24" height="24">
            <use href="${icons}#icon-caret-right" class="pagination-arrows" />
          </svg>
        </button>
      </li>`;
  }
  prevBtnSetActive(num) {}
  prevBtnSetInactive(num) {}
  nextBtnSetActive(num) {}
  nextBtnSetInactive(num) {}
}
