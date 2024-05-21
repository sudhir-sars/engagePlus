import React, { useState, useEffect, useRef } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === '/' && event.metaKey ) {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 10);
  };

  return (
    <>
      <div className={`sticky top-0 py-4 z-50 text-black ${scrolled ? 'glass-morphism ' : 'bg-[#ecf1fe]'}  `}>
        <div className=' flex items-center justify-center relative '>
          <ul className='navbar flex justify-center items-center'>
            <li onClick={() => navigate('/home')} className='px-6 hover:bg-[#b9d5fd]  py-2 rounded-xl'>Home</li>
            <li onClick={() => navigate('/pricing')} className='px-6 hover:bg-[#b9d5fd]  py-2 rounded-xl'>Pricing</li>
            <li onClick={() => navigate('/contact')} className='px-6 hover:bg-[#b9d5fd]  py-2 rounded-xl'>Contact</li>
            <li onClick={() => navigate('/contribute')} className='px-6 hover:bg-[#b9d5fd]  py-2 rounded-xl'>Contribute</li>
          </ul>
          <span className='flex justify-center items-center  absolute right-0 top-0 h-full'>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              ref={inputRef}
              className={`hover:bg-[#e3e5e7] mr-9 rounded-lg pb-4 font-mono text-sm h-8 outline-none px-3 py-4 bg-[#edeff1]`}
              placeholder="press /"
              type="text"
            />
            <div className='text-3xl mr-6 ml-4'><FaRegUserCircle /></div>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
