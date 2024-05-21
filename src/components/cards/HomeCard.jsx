import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({ height, width, image, footLine, imageWidth, imageTop ,link}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate=useNavigate();

  return (
    <div onClick={()=>{navigate(link)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${width} ${height} p-6  bg-opacity-15 border bg-[#bfd2fd] border-opacity-20 border-white rounded-lg ${
        isHovered
          ? 'shadow-2xl shadow-blue-300 rotate shake' // Apply shadow and shake effect on hover
          : ''
      }`}
    >
      <div className={`flex justify-center ${imageTop}`}>
        <img width={imageWidth} src={image} alt="" />
      </div>
      <hr className="border-gray-500 mt-2" />
      <div className="flex items-center justify-center mt-2 text-md">
        <div>{footLine}</div>
      </div>
    </div>
  );
};

export default HomeCard;
