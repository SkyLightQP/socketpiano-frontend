import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import Background from './components/Background';
import { SocketProvider } from './hooks/useSocket';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SocketProvider>
      <MainPage />
    </SocketProvider>
    <Background color="#f4f9fc" />
  </React.StrictMode>,
  document.getElementById('root')
);
