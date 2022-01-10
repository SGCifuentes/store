import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import useTemplateData from '../components/hooks/useTemplateData';
import { initialState } from '../models/State';

export const storeSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action: PayloadAction<string>) => {
      const template = useTemplateData(state, action.payload);
      if (template?.temmplateProductsState && template.templateProduct) {
        template.templateProduct.inCart = true;
        template.templateProduct.count = 1;
        template.templateProduct.total = template.templateProduct.price;
        state.cart = [...state.cart, template.templateProduct];
        state.products = [...template.temmplateProductsState];
      }
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<string>) => {
      const template = useTemplateData(state, action.payload);
      if (template?.temmplateProductsState && template.templateProduct) {
        template.templateProduct.inCart = false;
        template.templateProduct.count = 1;
        template.templateProduct.total = template.templateProduct.price;
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
        state.products = [...template.temmplateProductsState];
      }
    },
    INCREMENT_PRODUCT_QUANTITY: (state, action: PayloadAction<string>) => {
      const template = useTemplateData(state, action.payload);
      if (
        template?.temmplateProductsState &&
        template.templateProduct &&
        template.cartTemplateProduct &&
        template.temmplateCartState
      ) {
        template.templateProduct.count += 1;
        template.templateProduct.total =
          template.templateProduct.price * template.templateProduct.count;

        template.cartTemplateProduct.count += 1;
        template.cartTemplateProduct.total =
          template.cartTemplateProduct.price *
          template.cartTemplateProduct.count;

        state.cart = [...template.temmplateCartState];
        state.products = [...template.temmplateProductsState];
      }
    },
    DECREMENT_PRODUCT_QUANTITY: (state, action: PayloadAction<string>) => {
      const template = useTemplateData(state, action.payload);
      if (
        template?.temmplateProductsState &&
        template.templateProduct &&
        template.cartTemplateProduct &&
        template.temmplateCartState
      ) {
        template.templateProduct.count -= 1;
        template.templateProduct.total =
          template.templateProduct.price * template.templateProduct.count;

        template.cartTemplateProduct.count -= 1;
        template.cartTemplateProduct.total =
          template.cartTemplateProduct.price *
          template.cartTemplateProduct.count;

        state.cart = [...template.temmplateCartState];
        state.products = [...template.temmplateProductsState];
      }
    },
  },
});

export const {
  ADD_PRODUCT_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY,
} = storeSlice.actions;

export default storeSlice.reducer;
