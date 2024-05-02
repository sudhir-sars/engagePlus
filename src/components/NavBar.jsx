import React, { useState, useEffect, useRef } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const inputRef = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY > 100);
  };
  const handleKeyPress = (event) => {
    if (event.key === '/' && event.metaKey ) {
      event.preventDefault();
      inputRef.current.focus();
      
    }
  };
  

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className={`sticky top-0 py-4 z-50 text-white bg-[#131b29]  ${scroll ? "glass-morphism opacity-" : ""}`}>
        <div className=' flex items-center justify-center relative '>
        <ul className='navbar flex justify-center items-center'>
          <li className='px-6 hover:bg-[#1e293b] hover:text-white py-2 rounded-xl'>Home</li>
          <li className='px-6 hover:bg-[#1e293b] hover:text-white py-2 rounded-xl'>Pricing</li>
          <li className='px-6 hover:bg-[#1e293b] hover:text-white py-2 rounded-xl'>Contact</li>
          <li className='px-6 hover:bg-[#1e293b] hover:text-white py-2 rounded-xl'>Contribute</li>
        </ul>
          <span className='flex justify-center items-center  absolute right-0 top-0 h-full'>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            ref={inputRef}
            className={`hover:bg-[#304263] mr-9 rounded-lg pb-4 font-mono text-sm h-8 outline-none px-3 py-4 bg-[#1e293b] backdrop-blur-lg backdrop-saturate-200 bg-opacity-75 shadow-2xl ${
              scroll ? "opacity-95" : ""
            }`}
            placeholder="press /"
            type="text"
          />
            <div className='text-xl mr-6 ml-4'><FaRegUserCircle /></div>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
