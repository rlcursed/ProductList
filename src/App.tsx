import React from 'react';

import ProductListContainer from './components/ProductListContainer';

import { GlobalContainer } from './components/Styles';

function App() {
  return (
    <GlobalContainer>
      <ProductListContainer />
    </GlobalContainer>
  );
}

export default App;
