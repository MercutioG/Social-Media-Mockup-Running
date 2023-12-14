import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/css/main.css';

import App from './App';
import About from './Components/About';
import Edit from './Components/Edit';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={App} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/edit" Component={Edit} />
        </Routes>
      </div>
    </BrowserRouter>
);