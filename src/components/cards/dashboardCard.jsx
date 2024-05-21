// DashboardCard.js
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import InputModal from '../modals/InputModal';
import lineAreaChart from '../graphs/LineAreaChart'

const DashboardCard = ({ icon, title, editable, value, setValue ,miniCard}) => {
  
  const [showModal, setShowModal] = useState(false);
  const handleModalSubmit=(e)=>{

    setValue(e.target.value);
    setShowModal(false);
  }
  return (
    <>
    
      <div className={`w-[28vw] h-[25vh] pt-5 pb-5 px-7 rounded-xl  bg-[#f4f7fe] hover:bg-[#ebf1ff] shadow-md ${miniCard? "w-[19.9vw] h-[11vh] py-4 pl-4":""}`}>
        <div className={`flex ${miniCard? "flex-row-reverse":""}`}>
          <div className='h-full w-full font-semibold text-xl'>
            <div>
              {!miniCard && <div className='px-3'>...</div>}
              <div className={`mt-8 text-2xl ${miniCard? "text-lg mt-0 ml-5":""}`}>{value}.00 </div>
              <div
                className={`pl-2 pt-2 text-base flex items-center ${
                  title === 'Total Budget'
                    ? 'text-green-600'
                    : title === 'Total Spend'
                    ? 'text-red-400'
                    : ''
                } ${miniCard? "text-sm pt-0 ml-6":""}`}
              >
                {title}{' '}
                {editable ? (
                  <div onClick={()=>{setShowModal(true)}} className='text-2xl ml-3 hover:bg-[#b8d5fb] px-1 py-1 rounded-lg text-black'>
                    <CiEdit />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className=''>
            <img src={icon} alt={title} width={`${miniCard? "60":190}`} />
          </div>
        </div>
      </div>
      {showModal && 
      <InputModal 
        title={`Enter Updated ${title}`}
        setShowModal={setShowModal}
        handleSubmit={handleModalSubmit}
        setValue={setValue}
       />} 
    </>
  );
};

export default DashboardCard;
