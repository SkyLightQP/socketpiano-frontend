import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import Background from './components/Background';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage />
    <Background color="#f4f9fc" />
  </React.StrictMode>,
  document.getElementById('root')
);
