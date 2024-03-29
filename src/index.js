import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "../src/redux/store/store"
import Toast from './Common/Tosti/Toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <Toast />
     <App />
  </Provider>
</React.StrictMode>
);

