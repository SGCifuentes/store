import { XIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export default function Header() {
  const [query, setQuery] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  const { products, cart } = useAppSelector((state) => state.store);
  const total =
    cart.length === 0
      ? 0
      : cart.map((product) => product.count).reduce((a, b) => a + b);
  const navigate = useNavigate();
  return (
    <div className='bg-sky-900 sm:px-12 px-2 py-3 flex justify-between shadow-md rounded-b-lg shadow-slate-700'>
      <h1
        onClick={() => navigate('/')}
        className='font-primary cursor-pointer hover:text-sky-200 text-center text-sky-100 font-medium text-4xl'>
        Geek Store
      </h1>
      <div
        id='searchbar'
        className={[
          openSearch ? 'visible' : 'hidden',
          'md:block',
          'relative',
          'w-2/4',
        ].join(' ')}>
        <div className=' relative mx-auto text-gray-600 w-full'>
          <input
            className='w-full bg-sky-50 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
            placeholder='Buscar...'
            onBlur={() => setQuery('')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className='absolute right-0 top-0 mt-3 mr-4 text-sky-900 hover:text-sky-600'>
            <SearchIcon className=' h-4 w-4' />
          </button>
        </div>
        {query !== '' && (
          <ul className='absolute z-50 shadow-lg divide-y divide-solid divide-sky-400 bg-sky-100 w-full rounded-b-lg'>
            {products
              .filter((product) => {
                if (query === '') {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return product;
                }
                return undefined;
              })
              .slice(0, 3)
              .map((product) => (
                <li
                  onClick={() => {
                    setQuery('');
                    navigate(`/producto:${product.id}`);
                  }}
                  className='flex cursor-pointer items-center py-3 px-3 gap-3 hover:bg-sky-300'
                  key={product.id}>
                  <img
                    className='h-10 aspect-square '
                    src={product.image}
                    alt={product.title}
                  />
                  <p>{product.title}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className='flex gap-3 sm:gap-6'>
        <button
          onClick={() => setOpenSearch(!openSearch)}
          className='flex md:hidden bg-sky-500 p-1 min-w-max min-h-max w-10 h-10 justify-center items-center gap-1 rounded-full  hover:bg-sky-700'>
          {openSearch ? (
            <XIcon className='w-4 h-4 stroke-sky-100 stroke-2' />
          ) : (
            <SearchIcon className='w-4 h-4 stroke-sky-100 stroke-2' />
          )}
        </button>
        <button
          onClick={() => navigate('/carrito')}
          className='flex bg-sky-500 p-1 min-w-max min-h-max w-10 h-10 justify-center items-center gap-1 rounded-full  hover:bg-sky-700'>
          <ShoppingCartIcon className='w-4 h-4 stroke-sky-100 stroke-2' />
          {cart.length !== 0 && (
            <p className='text-xs text-sky-100'> {total} </p>
          )}
        </button>
      </div>
    </div>
  );
}
