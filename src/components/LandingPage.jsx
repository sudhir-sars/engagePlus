import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router,Link} from 'react-router-dom'
import CustomCursor from './CustomCurser';
import ServiceCard from './cards/ServiceCard';
import serviceCardButton from './buttons/serviceCardButton';
import emailCardImage from '../assets/emailCardImage.png'
import { IoMdClose } from "react-icons/io";
import whatsAppCardImage from '../assets/whatsAppCardImage.png'
import automateCardImage from '../assets/automateCardImage.png'
import landingPageImage from '../assets/landingPageImage.png'
import dataAnalyticsCardImage from '../assets/dataAnlyticsCardImage.png'
import urlShortnerCardImage from '../assets/urlShortnerCardImage.png'
import newFeaturesCardImage from '../assets/newFeaturesCardImage.png'
import Footer from './Footer';

const LandingPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
  


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to adjust textarea height based on content
  const adjustTextareaHeight = () => {
    
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const currentHeight = textAreaRef.current.clientHeight;
      const maxHeight = window.innerHeight * 0.4; // Adjust max height (80% of viewport)
      

      // Dynamically adjust height only if it needs to grow
      if (scrollHeight > currentHeight && scrollHeight <= maxHeight) {
        textAreaRef.current.style.height = `${scrollHeight}px`;
      } else if (scrollHeight > maxHeight) {
        // Stop growing at the defined max height
        textAreaRef.current.style.height = `${maxHeight}px`;
      }
    }
  };

  

  return (
    <div className='h-[250vh]'>
    <CustomCursor />
    
    <div className="bg-[#131b29] h-screen z-0 ">
        <div className='flex items-center justify-center mt-24 flex-col'>
          <div className='text-4xl px-5 py-2 font-mono rounded-lg text-white border-2 border-gray-400'>"Empower Your Outreach, Amplify Your Impact..."</div>
          <div className='flex justify-around px-36'>
            <div className='text-xl text-white w-[80vw]'>
            <div className=' mt-32 text-3xl'>Why EngagePlus???</div>
            <span className='border-b border-gray-400 flex w-96 mt-2'></span>
            <div className='mt-5 w-[40vw]'>EngagePlus is your ultimate solution for effortless and effective communication with your audience. Whether it's sending emails or WhatsApp messages to hundreds or thousands of recipients, we've got you covered. Our platform provides powerful analytics, AI-assisted message writing, URL shortening, scheduling capabilities, and much more.</div>
            </div>
            <div>
              <img src={landingPageImage} alt="" />
            </div>
          </div>
        </div>
        <div className=''>
        <div className='cards mt-16 '>
          <div className='flex justify-center items-center space-x-20'>
            <ServiceCard 
            title={"Email Services"} 
            topHeading={"Unlock Personlized Email Campaigns"}
            bodyContent={"Tailor your emails for maximum impact. Our platform offers segmentation, automation, and detailed analytics to drive engagement and conversions. With responsive design and seamless integration, it's easy to create and send compelling emails that resonate with your audience. "}
            footLine={"Get started today and elevate your Email Marketing Strategy!!!"}
            buttonText={"Experience Now >>"}
            image={emailCardImage}
            buttonLink={"service.email"} />

            <ServiceCard 
            mt={"mt-8"}
            title={"WhatsApp Messaging "} 
            topHeading={"Reach Customers Where They Are"}
            bodyContent={"Connect with your audience instantly through WhatsApp messaging. Engage in personalized conversations, send updates, and provide customer support directly on their favorite messaging platform. Our intuitive interface and automation tools streamline communication, helping you build stronger relationships and drive business growth."}
            footLine={"Start engaging with your customers on WhatsApp today!!!"}
            buttonText={"Discover Now >>"}
            image={whatsAppCardImage}
            buttonLink={"service.whatsapp"} />

            <ServiceCard 
            title={"Automation Services"} 
            mt={"mt-8"}
            topHeading={"Simplify Tasks, Amplify Your Results"}
            bodyContent={"Take the hassle out of repetitive tasks and boost productivity with our automation features. From scheduling messages to analyzing performance, our platform automates essential processes, saving you time and effort. Unlock the power of automation to streamline your workflow and focus on what matters most – growing your business."}
            footLine={"Let automation be your ally in efficiency and success . . ."}
            buttonText={"Explore Now >>"}
            image={automateCardImage}
            buttonLink={"service.automation"} />
            
          </div>
        </div>
        <div className='cards mt-36'>
          <div className='flex justify-center items-center space-x-20'>
            <ServiceCard 
            imagepx={"px-6"}
            imagepy={""}
            title={"Url Shortner"} 
            topHeading={"Optimize Links, Maximize Engagement"}
            bodyContent={"Tailor your emails for maximum impact. Our platform offers segmentation, automation, and detailed analytics to drive engagement and conversions. With responsive design and seamless integration, it's easy to create and send compelling emails that resonate with your audience. "}
            footLine={"Get started today and elevate your Email Marketing Strategy!!!"}
            buttonText={"Experience Now >>"}
            image={urlShortnerCardImage}
            buttonLink={"service.urlshorten"} />

            <ServiceCard 
            mt={"mt-7"}
            title={"AI Driven Insights "} 
            topHeading={"Elevate Strategy with Data Insights"}
            bodyContent={"Harness the power of data to supercharge your messaging strategy with EngagePlus analytics dashboard. Gain deep insights into your audience's behavior, preferences, and engagement patterns. Identify high-performing campaigns, understand what resonates with your audience, and refine your messaging for better results."}
            footLine={"Stay ahead of the competition and unlock the full potential of your messaging campaigns with EngagePlus analytics."}
            buttonText={"Discover Now >>"}
            image={dataAnalyticsCardImage}
            buttonLink={"service.aidriveninsights"} />

            <ServiceCard 
            imagepx={"px-5"}
            title={"Upcomming Features"} 
            mt={"mt-8"}
            topHeading={"New Features Incommmming"}
            bodyContent={`Our upcoming features promise to elevate your experience with EngagePlus to new heights. With enhanced AI assistance, you'll receive personalized recommendations and streamlined interactions. Dive deep into your data with advanced analytics and interactive reporting, gaining valuable insights effortlessly. Customize your templates and schedule messages intelligently for optimal engagement. Our integrated URL shortener ensures concise and effective communication.
            `}
            footLine={"Help shape the future of EngagePlus with your valuable insights and suggestions."}
            buttonText={"Explore Now >>"}
            image={newFeaturesCardImage}
            buttonLink={"service.upcommingfeatures"} />
            
          </div>
        </div>
        </div>
        
        <div className='mt-14'>
        
        </div>
    </div>
    
    
    </div>
        

  
  );
};

export default LandingPage;

