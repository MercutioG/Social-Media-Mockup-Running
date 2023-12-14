import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/css/main.css';

import App from './App';
import Edit from './Components/Edit';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './Pages/Error';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
)