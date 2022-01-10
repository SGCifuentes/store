import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from '../models/IProduct';

type Props = {
  product: IProduct;
  handleDeleteProduct: (id: string) => void;
  handleIncrementProduct: (id: string) => void;
  handleDecrementProduct: (id: string) => void;
};
export default function CheckoutCard({
  product,
  handleDeleteProduct,
  handleDecrementProduct,
  handleIncrementProduct,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className='relative rounded-xl overflow-auto py-2'>
      <div
        className='overflow-hidden py-5 relative mx-full bg-white shadow-md shadow-slate-700/50 ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-sky-900 dark:highlight-white/5'
        key={product.id}>
        <button
          onClick={() => {
            handleDeleteProduct(product.id);
          }}
          className='absolute right-3 top-1 text-lg font-bold hover:text-sky-600 text-red-500'>
          x
        </button>
        <img
          className='absolute -left-14 h-28 w-28 rounded-full shadow-lg dark:bg-white/60 bg-sky-900/60'
          src={product.image}
          alt={product.title}
        />
        <div className='h-28 flex flex-col justify-between'>
          <button
            onClick={() => navigate(`/producto:${product.id}`)}
            className='text-left hover:underline flex flex-col pl-20 pr-4 font-primary'>
            <p className='text-gray-900 dark:text-gray-200 font-medium '>
              {product.title}
            </p>
            <p className='text-gray-600 dark:text-gray-400 text-sm font-medium '>
              {product.description}
            </p>
          </button>
          <div className='flex pl-20 pr-4 items-center gap-3 font-secondary'>
            <button
              onClick={() => {
                if (product.count > 1) {
                  handleDecrementProduct(product.id);
                } else {
                  handleDeleteProduct(product.id);
                }
              }}
              className={[
                'w-8',
                'h-8',
                'rounded-full',
                'bg-sky-100',
                'hover:bg-sky-600',
                product.count > 1
                  ? `bg-sky-100 text-sky-900 hover:text-sky-100`
                  : `bg-red-500 text-sky-100 `,
              ].join(' ')}>
              <p className='text-2xl'>-</p>
            </button>
            <p className='text-gray-600 dark:text-gray-400'>{product.count}</p>
            <button
              className='w-8 h-8 rounded-full bg-sky-100 hover:bg-sky-600 hover:text-sky-100 text-sky-900'
              onClick={() => handleIncrementProduct(product.id)}>
              <p className='text-2xl'>+</p>
            </button>
            <div className='text-gray-900 dark:text-gray-200'>
              $ {product.total.toLocaleString('de-DE')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
