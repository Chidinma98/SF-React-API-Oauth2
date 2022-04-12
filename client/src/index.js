import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import { BrowserRouter, Routes, Route, Switch, Redirect} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import Leads from './Leads.js'
import Info from './info.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
     <BrowserRouter>
     <Routes> 
      
{/* <Route path = '/' element={<App />}/> */}
<Route path = '/' element={<Leads />}/>
<Route path = '/info' element={<Info />}/>
  

     </Routes>
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
