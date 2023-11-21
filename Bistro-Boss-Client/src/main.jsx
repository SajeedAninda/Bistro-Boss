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
import AdminHome from './Components/Admin Home/Admin Homepage/AdminHome.jsx';
import AllUsers from './Components/Admin Home/All Users/AllUsers.jsx';
import AdminRoute from './Components/Authentication/AdminRoute.jsx';
import AddItems from './Components/Admin Home/Admin Add Items/AddItems.jsx';
import ManageItems from './Components/Admin Home/Admin Manage Items/ManageItems.jsx';
import UpdateItem from './Components/Admin Home/Update Item/UpdateItem.jsx';
import UserPayment from './Components/User Home/User Payment/UserPayment.jsx';
import PaymentHistory from './Components/User Home/Payment History/PaymentHistory.jsx';
import AdminMain from './Components/Admin Home/Admin Main/AdminMain.jsx';

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
    element: <PrivateRoute><UserHome></UserHome></PrivateRoute>,
    children: [
      {
        path: "/user/cart",
        element: <PrivateRoute><UserCart></UserCart></PrivateRoute>
      },
      {
        path: "/user/payment",
        element: <PrivateRoute><UserPayment></UserPayment></PrivateRoute>
      },
      {
        path: "/user/paymentHistory",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
    children: [
      {
        path: "/admin/allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "/admin/addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "/admin/manageItems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "/admin/home",
        element: <AdminRoute><AdminMain></AdminMain></AdminRoute>
      },
      {
        path: "/admin/updateItems/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`, {
          credentials: 'include'
        })
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
