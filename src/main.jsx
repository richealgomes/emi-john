import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Products from './copmponents/Products/Products.jsx';
import Home from './copmponents/Layout/Home.jsx';
import Orders from './copmponents/Orders/Orders.jsx';
import Inventory from './copmponents/Inventory/Inventory.jsx';
import Login from './copmponents/Login/Login.jsx';
import CartProductsLoader from './Loaders/CartProductsLoader.js';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element:<Products></Products>,
      },
      {
        path:'/Orders',
        element:<Orders></Orders>,
        loader: CartProductsLoader
      },
      {
        path:'/Inventory',
        element:<Inventory></Inventory>,
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
