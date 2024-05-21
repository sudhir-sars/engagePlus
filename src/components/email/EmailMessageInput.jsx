import React, { useState } from 'react';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import aiAssistIcon from '../../assets/aiAssitIcon.png';
import UploadEmailContacts from './UploadEmailContacts';


const EmailMessageInput = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [aiAssist, setAiAssist] = useState(false);
  const [message, setMessage] = useState("");
  const [nextButtonClick, setNextButtonClick] = useState(false);
  

  
  const handleAiAssitClick=()=>{
    setAiAssist(!aiAssist);
  }
  const handleNextButton=()=>{
    setNextButtonClick(true);
  }

  return (
    <>
      {!nextButtonClick ? <div className='flex flex-col items-center justify-center h-[80vh] w-[100vw] relative'>
        <textarea
          onChange={(e)=>{setMessage(e.target.value)}}
          value={message}
          className="h-[55vh] w-[50vw] px-5 py-5 pb-10 outline-none font-mono bg-[#ffffff] text-black shadow-lg rounded-t-2xl text-sm break-before-auto"
          placeholder={!aiAssist ? "Please enter your message" : "Please enter your prompt to generate messages using Ai"}

        />
        <div className='w-[50vw] h-[7vh] bg-white py-2 rounded-b-xl text-xl relative'>
          <button
            onClick={handleAiAssitClick}
            className={`absolute right-32 bg-[#ecf1fe] rounded-xl px-3 py-2 ${aiAssist ? "shadow-xl shadow-blue-300   " : ""}`}

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={aiAssistIcon} alt="AI assist icon" width={20} />
          </button>
          {isHovered && (
            <div className="absolute right-28 top-[-20px] bg-[#ecf1fe]  text-black text-xs rounded py-1 px-2">
              AI assist
            </div>
          )}
          <button 
            onClick={handleNextButton}
            className='absolute right-3 flex flex-row items-center bg-[#ecf1fe] py-1 rounded-xl px-3 hover:bg-[#b9d5fd]'>
            <div className='pl-3 pr-2'>Next</div>
            <TbPlayerTrackNextFilled className='mt-1 text-sm' />
          </button>
        </div>
      </div>:<>
      <UploadEmailContacts message/>
      </>}
    </>
  );
};

export default EmailMessageInput;
