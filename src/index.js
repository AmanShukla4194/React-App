import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));    {/* app.js ke wale content ko yaha pe lekar jao */}
root.render(
  <React.StrictMode>
    <App />  {/*app.js wale is component ko render krenge*/}
  </React.StrictMode>   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
