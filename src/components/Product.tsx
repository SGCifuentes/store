import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from '../models/IProduct';

type Props = {
  details?: boolean;
  product: IProduct;
  handleAddToCart: (id: string) => void;
  handleDeleteProduct: (id: string) => void;
  handleIncrementProduct: (id: string) => void;
  handleDecrementProduct: (id: string) => void;
};

export default function Product({
  product,
  handleAddToCart,
  handleIncrementProduct,
  handleDeleteProduct,
  handleDecrementProduct,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className='bg-sky-100 flex flex-col justify-between min-w-max w-auto rounded-xl p-3 lg:h-96 h-80 relative drop-shadow-xl'>
      <img
        className='drop-shadow-xl mx-auto lg:h-56 h-2/3 aspect-square hover:scale-110'
        src={product.image}
        alt={product.title}
      />

      <button
        onClick={() => navigate(`/producto:${product.id}`)}
        className='w-full hover:text-sky-600 text-slate-900 hover:underline'>
        <h1 className='font-primary font-lg capitalize'>{product.title}</h1>
        <h3 className='font-secondary text-xl font-semibold'>
          $ {product.price.toLocaleString('de-DE')}
        </h3>
      </button>

      <div className='flex justify-end self-end items-center gap-3'>
        {product.inCart ? (
          <>
            <button
              onClick={() => {
                if (product.count > 1) {
                  handleDecrementProduct(product.id);
                } else {
                  handleDeleteProduct(product.id);
                }
              }}
              className='rounded-full bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white w-10 h-10'>
              -
            </button>
            <p>{product.count}</p>
            <button
              className='rounded-full bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white w-10 h-10'
              onClick={() => handleIncrementProduct(product.id)}>
              +
            </button>
          </>
        ) : (
          <button
            className='rounded-full bg-sky-900 hover:bg-transparent hover:border-2 hover:border-sky-900 hover:text-sky-900 text-white w-10 h-10'
            onClick={() => handleAddToCart(product.id)}>
            +
          </button>
        )}
      </div>
    </div>
  );
}
