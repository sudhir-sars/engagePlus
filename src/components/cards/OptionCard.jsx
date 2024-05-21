import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OptionCard = ({ title, image, imageHeight, imageWidth, footLine, link, cardWidth, cardHeight, imageTop }) => {
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`${onHover ? 'rotate shake shadow-2xl shadow-blue-300' : ''}`}
    >
      <div
        onClick={handleCardClick}
        className={`bg-white p-6 w-[25vw] text-white bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white ${cardWidth} ${cardHeight}`}
      >
        <span className="flex justify-center text-2xl text-black">{title}</span>
        <hr className="border-gray-500 mt-2" />
        <div className={`flex justify-center items-center ${imageTop}`}>
          <img height={imageHeight} width={imageWidth} src={image} alt="" />
        </div>
        <div className="flex items-center justify-center mt-5">
          <div>{footLine}</div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
