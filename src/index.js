import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApiProvider} from'./context/apiContext';
import {AuthProvider}from './context/authContext'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCn4NAWBWq1aA1hqR4Polpza-ecVNOiG58",
  authDomain: "firstapp-ddb8e.firebaseapp.com",
  projectId: "firstapp-ddb8e",
  storageBucket: "firstapp-ddb8e.appspot.com",
  messagingSenderId: "211885461940",
  appId: "1:211885461940:web:650f258e5f7dfcd30822e1",
  measurementId: "G-RGJFB796EX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ApiProvider>
      <AuthProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode></AuthProvider>
  </ApiProvider>

);


