import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);
