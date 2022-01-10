import State from '../../models/State';

export default function useTemplateData(state: State, id: string) {
  const temmplateProductsState = [...state.products];
  const temmplateCartState = [...state.cart];
  const cartProductSearch = temmplateCartState.find(
    (product) => product.id === id
  );

  const productSearch = temmplateProductsState.find(
    (product) => product.id === id
  );
  if (productSearch) {
    const productIndex = temmplateProductsState.indexOf(productSearch);
    const templateProduct = temmplateProductsState[productIndex];

    if (cartProductSearch) {
      const cartProductIndex = temmplateCartState.indexOf(cartProductSearch);
      const cartTemplateProduct = temmplateCartState[cartProductIndex];
      return {
        templateProduct,
        temmplateProductsState,
        cartTemplateProduct,
        temmplateCartState,
      };
    } else {
      return { templateProduct, temmplateProductsState };
    }
  }
}
