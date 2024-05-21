import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';




const CardModal = ({topHeading,bodyContent,buttonText,image,footLine,isCardClicked,setIsCardClicked,buttonLink}) => {
  const navigate = useNavigate();
  const handleModalClick = (e) => {
    e.stopPropagation(); 
  }
  const user=JSON.parse(localStorage.getItem("user"))
  
  
  const handleButtonClick=()=>{
    // if(user && user.token && user.email){
      navigate(buttonLink);
    // }else{
    //   navigate("login")
    // }
    
  }
  return (
    <div >
      <div onClick={handleModalClick} className='w-[90vw] h-[80vh] left-20 glass-morphism fixed top-[70px] z-50 text-black bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white'>
            <div className='px-32 py-16 flex h-full justify-center bg-[#131b29] glass-morphism opacity-80 '>
              <div className='flex justify-around'>
                <div className=' flex flex-col text-4xl'>{topHeading}
                  <hr className='border-gray-500 mt-3'/>
                  <div className='mt-8 text-xl max-w-[40vw]'>{bodyContent}</div>
                  <div className='mt-8 text-xl max-w-[40vw]'>{footLine}</div>
                  <div className='flex justify-end  mt-14 mr-36'>
                    <button onClick={handleButtonClick} className='border text-xl text-green-800 bg-[#e9effc] backdrop-blur-lg backdrop-saturate-200 bg-opacity-75 shadow-2xl hover:bg-[#b9d5fd] py-2 px-3 rounded-lg'>{buttonText}</button>
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
