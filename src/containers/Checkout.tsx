import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import IProduct from '../models/IProduct';
import { ArrowLeftIcon } from '@heroicons/react/outline';

import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from '../reducers';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import CheckoutCard from '../components/CheckoutCard';

export default function Checkout() {
  const { products, cart } = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();
  const total =
    cart.length > 0
      ? parseFloat(
          cart
            .map((product) => product.total)
            .reduce((a, b) => a + b)
            .toFixed(2)
        )
      : 0;

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
    <div className='sm:px-12 px-2 my-10'>
      <h3 className='font-primary mb-5 text-xl text-sky-800 font-bold'>
        {cart.length > 0 ? 'Tu carrito' : 'Tu carrito está vacío.'}
      </h3>

      {cart !== [] && cart.length > 0 ? (
        <>
          <p className='text-lg text-sky-500 font-semibold'>
            Total: $ {total.toLocaleString('de-DE')}
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {cart.map((product: IProduct) => (
              <CheckoutCard
                product={product}
                handleDecrementProduct={handleDecrementProduct}
                handleDeleteProduct={handleDeleteProduct}
                handleIncrementProduct={handleIncrementProduct}
              />
            ))}
          </div>
        </>
      ) : (
        <Link
          className='font-md flex gap-2 hover:text-sky-600 hover:underline'
          to='/'>
          <ArrowLeftIcon className='h-6' /> Volver a la tienda
        </Link>
      )}
      <div className='pt-10 '>
        <p>Productos sugeridos</p>
        <div className='relative w-full mx-auto flex gap-6 snap-x snap-mandatory overflow-x-auto py-6 px-4 sm:px-0'>
          {products
            .map((product) => (
              <div key={product.id} className='snap-center'>
                <Product
                  product={product}
                  handleAddToCart={handleAddToCart}
                  handleDeleteProduct={handleDeleteProduct}
                  handleIncrementProduct={handleIncrementProduct}
                  handleDecrementProduct={handleDecrementProduct}
                />
              </div>
            ))
            .sort((a, b) => Math.random() - 0.5)
            .slice(0, 5)}
        </div>
      </div>
    </div>
  );
}
