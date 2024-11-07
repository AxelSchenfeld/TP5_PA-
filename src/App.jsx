import React from 'react';

import '../src/App.css';

import Header from './components/Header';
import MainExchangeContainer from './components/MainExchangeContainer';
import CurrencyTable from './components/CurrencyTable';
import ProductDetail from './components/ProductDetail';
import BitcoinImage from './components/BitcoinImage';
import TableDate from './components/TableDate';

import Footer from './components/Footer';
import PlanCarousel from './components/PlanCarousel';

function App(){
  return (
    <div>
      <Header/>
      <MainExchangeContainer/>
      <CurrencyTable/>
      <TableDate/>
      <ProductDetail/>
      <BitcoinImage/>
      
      <PlanCarousel/>
      <Footer/>
    </div>
  );
}

export default App;