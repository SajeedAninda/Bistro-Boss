import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import Menu from './Pages/Menu.jsx';
import { HelmetProvider } from 'react-helmet-async';
import OurShop from './Pages/OurShop.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthenticationProvider from './Components/Authentication/AuthenticationProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "shop",
        element: <OurShop></OurShop>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
)
