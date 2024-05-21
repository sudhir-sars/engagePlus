import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  ServiceState  from './context/UserState';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Email from './components/email/Email';
import WhatsappMessageInput from './components/whatsapp/WhatsappMessageInput';
import EmailMessageInput from './components/email/EmailMessageInput';
import CustomCursor from './components/CustomCurser';
import Home from './components/Home';
import Contribute from './components/contribute';
import Contact from './components/Contact'
import Pricing from './components/Pricing'; 
import NewCampaign from './components/campaigns/NewCampaign';
import ActiveCampaigns from './components/campaigns/ActiveCampaigns';
const App = () => {

  
  
  
  const router = createBrowserRouter([
   

    {
      path: "/",
      element: (
        <>
          <NavBar /> <LandingPage /><Footer />
          </>
      ), // Wrap components, set minHeight for footer
    },
    
    {
      path: "/home",
      element: (
        <>
          <NavBar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "home/service.email",
      element:  <><NavBar /><Email />  <Footer /></>
    },
    {
      path: "/home/service.email/EmailMessageInput",
      element:  <><NavBar /> <EmailMessageInput/></>,
      
    },
    {
      path: "/home/activecampaigns",
      element: (
        <>
          <NavBar />
          <ActiveCampaigns />
          
        </>
      ),
    },
    {
      path: "/home/newcampaign",
      element: (
        <>
          <NavBar />
          <NewCampaign />
          
        </>
      ),
    },
    
    {
      path: "/pricing",
      element:  <><NavBar /> <Pricing/><Footer /></>,
    },
    {
      path: "/contact",
      element:  <><NavBar /> <Contact/><Footer /></>,
    },
    {
      path: "/contribute",
      element:  <><NavBar /> <Contribute/><Footer /></>,
    },
    {
      path: "/service.whatsapp",
      element: <><NavBar /> <WhatsappMessageInput/><Footer /></>,
    },
    {
      path: "/login",
      element: <><NavBar /> <Login/><Footer /></>,
    },
    {
      path: "/signup",
      element: <><NavBar /> <SignUp /><Footer /></>,
    },
  ]);

  return (
    <>
      <ServiceState>
      {/* <CustomCursor /> */}
      
        <RouterProvider router={router} />
        
      </ServiceState>
    </>
  );
}

export default App;
