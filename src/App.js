import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  ServiceState  from './context/ServiceState';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Email from './components/email/Email';
import WhatsappMessageInput from './components/whatsapp/WhatsappMessageInput';
import EmailMessageInput from './components/email/EmailMessageInput';
import CustomCursor from './components/CustomCurser';


const App = () => {

  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <LandingPage />
          </>
      ), // Wrap components, set minHeight for footer
    },
    {
      path: "/service.email",
      element:  <Email/>,
    },
    {
      path: "/service.email/EmailMessageInput",
      element:  <EmailMessageInput/>,
      
    },
    {
      path: "/service.whatsapp",
      element: <WhatsappMessageInput/>
    },
    {
      path: "/login",
      element: <><NavBar/> <Login/></>,
    },
  ]);

  return (
    <>
      <ServiceState>
      <CustomCursor />
      <NavBar /> 
        <RouterProvider router={router} />
        <Footer />
      </ServiceState>
    </>
  );
}

export default App;
