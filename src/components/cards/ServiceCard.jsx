import React, { useState } from 'react';
import CardModal from '../modals/CardModal';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, topHeading, bodyContent, footLine, buttonText, image, mt, width, imagepx, imagepy, buttonLink }) => {
  const [isCardClicked, setIsCardClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsCardClicked(!isCardClicked);
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const handleButtonClick = () => {
    navigate(buttonLink);
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className={`bg-white p-6 w-[25vw] h-auto bg-opacity-15 rounded-xl border border-opacity-20 border-white ${width}  hover:shadow-2xl`}
      >
        <span className={`flex justify-center text-2xl`}>{title}</span>
        <hr className="border-gray-500 mt-2" />
        <span className='flex justify-center text-lg mt-3'>{topHeading}</span>

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
        ) : null}

        <div className={`${mt} ${imagepx} ${imagepy}`}><img src={image} alt="" /></div>
        <div className='flex items-center justify-center mt-5'>
          <button onClick={handleButtonClick} className='text-md text-green-700 bg-[#f2f6ff] hover:bg-[#b9d5fd]  py-2 px-5 rounded-lg'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
