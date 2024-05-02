import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const CardModal = ({topHeading,bodyContent,buttonText,image,footLine,isCardClicked,setIsCardClicked,buttonLink}) => {
  const navigate = useNavigate();
  const handleModalClick = (e) => {
    e.stopPropagation(); 
  }
  const handleButtonClick=()=>{
    console.log("modal button")
    console.log(buttonLink)
    navigate(buttonLink);
  }
  return (
    <div >
      <div onClick={handleModalClick} className='w-[90vw] h-[80vh] left-20 glass-morphism fixed top-[70px] z-50 text-white bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white'>
            <div className='px-32 py-16 flex h-full justify-center bg-[#131b29] glass-morphism opacity-80 '>
              <div className='flex justify-around'>
                <div className=' flex flex-col text-4xl'>{topHeading}
                  <hr className='border-gray-500 mt-3'/>
                  <div className='mt-8 text-xl max-w-[40vw]'>{bodyContent}</div>
                  <div className='mt-8 text-xl max-w-[40vw]'>{footLine}</div>
                  <div className='flex justify-start mt-14 ml-5'>
                    <button onClick={handleButtonClick} className='border border-gray-400 text-xl bg-[#1e293b] backdrop-blur-lg backdrop-saturate-200 bg-opacity-75 shadow-2xl hover:bg-[#304263] py-2 px-3 rounded-lg'>{buttonText}</button>
                  </div>
                </div>
                <div><img src={image} alt="" /></div>
              </div>
            </div>
            <div className='text-3xl absolute right-6 top-5' onClick={() => setIsCardClicked(!isCardClicked)}><IoMdClose /></div>
          </div>
    </div>
  )
}

export default CardModal
