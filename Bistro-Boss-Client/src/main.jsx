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
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/Authentication/PrivateRoute.jsx';
import UserHome from './Components/User Home/User Homepage/UserHome.jsx';
import UserCart from './Components/User Home/User Cart/UserCart.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Contact from './Pages/Contact.jsx';

const queryClient = new QueryClient()

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
        element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "/user",
    element: <UserHome></UserHome>,
    children: [
      {
        path: "/user/cart",
        element: <UserCart></UserCart>
      },
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
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthenticationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
