import React, { useState, useEffect, useRef } from 'react';
import { DiCelluloid } from 'react-icons/di';

const InputModal = ({ setValue, title, setShowModal }) => {
  const componentRef = useRef(null);
  const [modalValue, setModalValue] = useState();
  

   const handleSubmit=(e)=>{
    setShowModal(false);
    setValue(modalValue)
   }
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling

    
    return () => {
      document.body.style.overflow = 'unset'; // Enable scrolling
     
    };
  }, [setShowModal]);

  return (
    <>
    
      <div className='fixed inset-0 flex justify-center items-center z-50'>
        <div className='absolute top-20 '>
          <div ref={componentRef} className='flex justify-center'>
            <div className='absolute h-[30vh] w-[30vw] glass-morphism z-50 bg-[#dbeafe] text-gray-500 b shadow-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white'>
              <div className='flex justify-center mt-5 text-xl text-black'><div className=''>{title}</div></div>
              <div className='flex justify-center items-center mt-10'>
                <input
                  type='text'
                  onChange={(e)=>setModalValue(e.target.value)}
                  className='bg-[#a9aaad] text-black outline-none focus:shadow-2xl focus:shadow-white  py-2 px-3 rounded-md text-sm'
                  
        
                />
              </div>
              <div onClick={handleSubmit} className='flex justify-center text-white mt-5'>
                <button  className='py-1 px-5 bg-[#a9aaad] hover:bg-[#8e8e91] rounded-lg'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    </>
  );
};

export default InputModal;
