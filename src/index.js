import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './components/login/LoginPage';
import LandingPage from './components/Home/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <LandingPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

