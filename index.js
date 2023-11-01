import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './components/SearchForm'
import { AppProvider } from './context';
// import CocktailList from './components/CocktailList';
// import Navbar from './components/Navbar';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <App/>
    </AppProvider>
  </React.StrictMode>
);
