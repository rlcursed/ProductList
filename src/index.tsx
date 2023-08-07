import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './components/store/store';
import { Provider } from 'react-redux';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
  <GlobalContainer>
      <App />
  </GlobalContainer>

    </Provider>
);


