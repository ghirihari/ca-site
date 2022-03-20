import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/common/scrollToTop'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
