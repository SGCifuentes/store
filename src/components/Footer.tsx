import React from 'react';
import { MusicNoteIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/outline';

export default function Footer() {
  return (
    <div className='text-center mb-3'>
      <p className='text-sky-900'>Todos los derechos reservados &copy; 2022</p>
      <p className='text-sky-900'>
        Make with{' '}
        <MusicNoteIcon className='w-5 inline mb-1 stroke-sky-700 hover:stroke-blue-900 hover:scale-125' />{' '}
        and{' '}
        <HeartIcon className='w-5 inline mb-1 stroke-sky-700 hover:stroke-red-800 hover:scale-125' />
      </p>
      <a
        className='text-sky-900 underline'
        rel='stylesheet'
        href='https://github.com/SGCifuentes/store'>
        Github Repository
      </a>
    </div>
  );
}
