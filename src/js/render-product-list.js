import { markupProductsList } from './markup-product-list';

export function renderProductList(elemRef, products) {
  elemRef.innerHTML = markupProductsList(products);
}
