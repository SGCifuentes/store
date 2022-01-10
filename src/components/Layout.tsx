import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className='min-h-screen h-auto bg-sky-200 font-secondary overflow-x-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
