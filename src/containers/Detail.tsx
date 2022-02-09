import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from '../reducers';
import { useAppDispatch, useAppSelector } from '../store/hooks';
export default function Detail() {
  const { products } = useAppSelector((state) => state.store);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const selectedProduct = products.find((product) => {
    return product.id === id?.slice(1);
  });

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
  if (selectedProduct) {
    return (
      <div className='sm:px-12 px-2 py-10 max-w-full flex flex-col sm:flex-row gap-5 sm:gap-10 lg:mx-auto'>
        <div className='bg-sky-100 rounded-xl drop-shadow-xl md:mx-0 w-5/6 md:w-2/3 mx-auto aspect-square flex items-center'>
          <img
            className='drop-shadow-xl mx-auto aspect-square h-2/3 '
            src={selectedProduct.image}
            alt={selectedProduct.title}
          />
        </div>
        <div className='flex flex-col justify-center md:mx-0 w-5/6 mx-auto'>
          <h1 className='font-primary text-xl capitalize py-1 text-slate-900'>
            {selectedProduct.title}
          </h1>
          <h2 className='font-secondary text-2xl py-3 font-semibold'>
            $ {selectedProduct.price.toLocaleString('de-DE')}
          </h2>
          <h3 className='font-primary py-1 text-slate-900'>
            {selectedProduct.description}
          </h3>

          <div className='flex gap-3 pt-5 items-center'>
            {selectedProduct.inCart ? (
              <>
                <button
                  onClick={() => {
                    if (selectedProduct.count > 1) {
                      handleDecrementProduct(selectedProduct.id);
                    } else {
                      handleDeleteProduct(selectedProduct.id);
                    }
                  }}
                  className='rounded-full bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white w-10 h-10'>
                  -
                </button>
                <p>{selectedProduct.count}</p>
                <button
                  className='rounded-full bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white w-10 h-10'
                  onClick={() => handleIncrementProduct(selectedProduct.id)}>
                  +
                </button>
              </>
            ) : (
              <button
                className='rounded-full px-5 bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white h-10'
                onClick={() => handleAddToCart(selectedProduct.id)}>
                <p>Agregar al carrito</p>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
