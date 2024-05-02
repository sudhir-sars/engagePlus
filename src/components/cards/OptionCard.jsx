import React from 'react'
import { useNavigate } from 'react-router-dom';

const OptionCard = ({title,image,imageHeight,imageWidth,footLine,link,cardWidth,imageTop}) => {
  const navigate=useNavigate();
  const handleCardCick=()=>{
    navigate(link)
  }
  return (
    <div style={{ transition: 'transform 0.4s' }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div
        onClick={handleCardCick}
        className={`bg-white p-6 w-[25vw] h-auto min-h-[50vh] text-white bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white ${cardWidth} `}
        
      >
        <span className={`flex justify-center text-2xl`}>{title}</span>
        <hr className="border-gray-500 mt-2" />
        
          
            <div className={`flex justify-center items-center ${imageTop}`}><img height={imageHeight} width={imageWidth} src={image} alt="" /></div>
            <div className='flex items-center justify-center mt-5'>
            <div>{footLine}</div>
              
            </div>
          
        
      </div>
    </div>
  )
}

export default OptionCard
