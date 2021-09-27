import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome/package.json';

// import Movie from './vidly/movie';
// import Country from './countries/country';


ReactDOM.render(
  <React.StrictMode>
    <App />
   
  {/* <Movie /> */}
  
  {/* <Country /> */}

  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
