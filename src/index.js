// STEP 2: specify the data that will be shared
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 1. import the context
import BooksContext from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  // 2. wrap the App component with the provider and specify the value
  <BooksContext.Provider value={10}>
    <App />
  </BooksContext.Provider>
);
