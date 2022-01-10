import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Detail from '../containers/Detail';
import Home from '../containers/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrito' element={<Checkout />} />
          <Route path='/producto:id' element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
