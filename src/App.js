import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import MessageInput from './components/MessageInput'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import  ServiceState  from './context/ServiceState';

import UploadWhatsappContacts from './components/UploadWhatsappContacts';
import UploadEmailContacts from './components/UploadEmailContacts'
import LoginPage from './components/LoginPage'


const App = () => {

  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/> <LandingPage/></>,
    },
    {
      path: "/email",
      element: <><NavBar/> <MessageInput/></>,
    },
    {
      path: "/whatsapp",
      element: <><NavBar/> <MessageInput/></>,
    },
    {
      path: "/UploadEmailContacts",
      element: <><NavBar/> <UploadEmailContacts/></>,
    },
    {
      path: "/uploadWhatsappContacts",
      element: <><NavBar/> <UploadWhatsappContacts/></>,
    },
    {
      path: "/login",
      element: <><NavBar/> <LoginPage/></>,
    },
  ]);

  return (
    <>
      <ServiceState>
        <RouterProvider router={router} />
      </ServiceState>
    </>
  );
}

export default App;
