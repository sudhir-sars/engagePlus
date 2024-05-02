import React, { useState } from 'react';
import CardModal from '../modals/CardModal';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, topHeading, bodyContent, footLine, buttonText, image, mt, width, imagepx, imagepy,buttonLink }) => {
  const [isCardClicked, setIsCardClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsCardClicked(!isCardClicked);
  }
  const handleButtonClick=()=>{
    console.log("modal button")
    console.log(buttonLink)
    navigate(buttonLink);
  }

  return (
    <div >
      <div
        onClick={handleClick}
        className={`bg-white p-6 w-[25vw] h-auto text-white bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white ${width}`}
        
      >
        <span className={`flex justify-center text-2xl`}>{title}</span>
        <hr className="border-gray-500 mt-2" />
        <span className='flex justify-center text-lg mt-3 font-bold'>{topHeading}</span>

        {isCardClicked ? (
          <CardModal
            topHeading={topHeading}
            bodyContent={bodyContent}
            footLine={footLine}
            buttonText={buttonText}
            isCardClicked={isCardClicked}
            setIsCardClicked={setIsCardClicked}
            image={image}
            buttonLink={buttonLink}
          />
        ) : ""}
          
            <div className={`${mt} ${imagepx} ${imagepy}`}><img src={image} alt="" /></div>
            <div className='flex items-center justify-center mt-5'>
              <button onClick={handleButtonClick} className='text-md bg-[#1e293b] backdrop-blur-lg backdrop-saturate-200 bg-opacity-75 shadow-2xl hover:bg-[#304263] py-1 px-3 rounded-lg'
                
              >
                {buttonText}
              </button>
            </div>
          
        
      </div>
    </div>
  )
}

export default ServiceCard;
