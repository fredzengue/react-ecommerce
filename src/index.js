import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/cart/Index'
// import i18n (translation library))
import './i18n';

import Profile from './components/Dashboard/Profile';
import { Dashboard } from '@mui/icons-material';

ReactDOM.render(

  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="expenses" element={<Cart />} />
      <Route path="products" element={<Index />} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="Contact" element={<Profile/>} />
      <Route path="dashbord" element={<Dashboard/>} />
      
      
      
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
