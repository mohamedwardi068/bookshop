import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApiProvider} from'./context/apiContext';
import {AuthProvider}from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ApiProvider>
      <AuthProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode></AuthProvider>
  </ApiProvider>

);


