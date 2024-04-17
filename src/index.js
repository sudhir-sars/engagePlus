import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './components/login/LoginPage';
import LandingPage from './components/home/LandingPage';
import Email from './components/email/Email';
import EmailInput from './components/email/EmailInput';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/Navbar/NavBar';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/email",
    element: <Email/>,
  },
  {
    path: "/emailinput",
    element: <EmailInput/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

