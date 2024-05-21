import React from 'react'
import HomeCard from './cards/HomeCard'
import homeCreateImage from '../assets/homeCreateImage.png'
import HomeExistingImage from '../assets/HomeExistingImage.png'
import HomeActiveImage from '../assets/HomeActiveImage.png'
import HomeQuickMailImage from '../assets/HomeQuickMailImage.png'
import HomeAutomateImage from '../assets/HomeAutomateImage.png'
import HomeWhatsAppImage from '../assets/HomeWhatsAppImage.png'
const Home = () => {
  return (
    <div className=' mt-16'>
      <div className='flex justify-center  space-x-10'>
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={HomeQuickMailImage}
      imageTop={""}
      imageWidth={80}
      footLine={"Quick Mail"}
      link={'service.email'}
       />
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={HomeWhatsAppImage}
      imageTop={""}
      imageWidth={60}
      footLine={"Instant WhatsApp"}
      link={"service.whatsapp"}
       />
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={HomeAutomateImage}
      imageTop={""}
      imageWidth={75}
      footLine={"Automate Messaging"}
      link={'pastcampaigns'}
       />
     
     </div>
     <div className='mt-10 flex justify-center '><hr className='w-[50vw] h-2' /> </div>
      <div className='flex justify-center  space-x-10 mt-12'>
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={homeCreateImage}
      imageTop={""}
      imageWidth={60}
      footLine={"New Campaign"}
      link={'newcampaign'}
       />
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={HomeActiveImage}
      imageTop={""}
      imageWidth={60}
      footLine={"Active Campaigns"}
      link={"activecampaigns"}
       />
      <HomeCard 
      width={"w-[14vw]"}
      height={"h-[20vh]"}
      image={HomeExistingImage}
      imageTop={""}
      imageWidth={60}
      footLine={"Past Campaigns"}
      link={'pastcampaigns'}
       />
     
     </div>
    </div>
  )
}

export default Home
