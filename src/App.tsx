import React from 'react';

import ProductCard from './components/ProductCard';

import { productListData } from './data/ProductData';

import { GlobalContainer } from './components/Styles';

function App() {
  return (
    <GlobalContainer>
      <ProductCard {...productListData[0]} />
    </GlobalContainer>
  );
}

export default App;
