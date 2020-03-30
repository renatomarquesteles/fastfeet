import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';
import './config/ReactotronConfig';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
