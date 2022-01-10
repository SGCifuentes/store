import React from 'react';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from '../reducers';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Product from './Product';

export default function Products() {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.store);
  const handleDeleteProduct = (id: string) => {
    dispatch(REMOVE_FROM_CART(id));
  };
  const handleAddToCart = (id: string) => {
    dispatch(ADD_PRODUCT_TO_CART(id));
  };
  const handleIncrementProduct = (id: string) => {
    dispatch(INCREMENT_PRODUCT_QUANTITY(id));
  };
  const handleDecrementProduct = (id: string) => {
    dispatch(DECREMENT_PRODUCT_QUANTITY(id));
  };

  return (
    <div className='my-10'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleIncrementProduct={handleIncrementProduct}
            handleDecrementProduct={handleDecrementProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}
