import React, { useState, useEffect, useRef } from 'react';
import { FaSearchengin } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Email from './MessageInput';



const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [userIconClick, setUserIconClick] = useState(false);
  const [searchIconClick, setSearchIconClick] = useState(false);
  const [navbarAnimationClass, setnavbarAnimationClass] = useState("bg-white rounded-xl px-6 h-16 flex justify-center");
  
  const [userName, setuserName] = useState("Sudhir");
  const [userEmail, setuserEmail] = useState("sudhir.sars@gmail.com");
  const dropdownRef = useRef(null); // Create a ref for the dropdown menu
  const searchRef = useRef(null); // Create a ref for the dropdown menu
  const [navbarClass, setNavbarClass] = useState("bg-white rounded-xl px-6 h-16 flex justify-center");
 
  

  
  useEffect(() => {
    setNavbarClass(searchIconClick ? "bg-[#f3f4f6] rounded-xl px-6 h-16 flex  " : "bg-[#f3f4f6] rounded-xl px-6 h-16 flex justify-center ");
    
    const handleClickOutsideUserIcon = (event) => {
      if (!event.target.closest('.dropdown-menu')) {
        if (userIconClick) {
          setUserIconClick(false);
        }
        
      }
    }
  
    const handleClickOutsideSearchIcon = (event) => {
      if (!event.target.closest('.search-icon')) {
        if (searchIconClick) {
          setSearchIconClick(false);
        }
       
      }
    }
  
    const handleSearchLeave = () => {
      setTimeout(() => {
        setSearchIconClick(false); 
      }, 1700);
    };
  
    const handleDropdownLeave = () => {
      setTimeout(() => {
        setUserIconClick(false); 
      }, 2700);
    };
  
    const handleScroll = () => {
      
      setIsSticky(window.scrollY > 10);
      
    };
  
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutsideUserIcon);
    document.addEventListener('click', handleClickOutsideSearchIcon);
  
    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      dropdownElement.addEventListener('mouseleave', handleDropdownLeave);
    }
  
    
    const searchElement = searchRef.current;
    if (searchElement) {
      searchElement.addEventListener('mouseleave', handleSearchLeave);
    }

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutsideUserIcon);
      document.removeEventListener('click', handleClickOutsideSearchIcon);
      if (dropdownElement) {
        dropdownElement.removeEventListener('mouseleave', handleDropdownLeave);
      }
      if (searchElement) {
        searchElement.removeEventListener('mouseleave', handleSearchLeave);
      }
    };
  }, [userIconClick, searchIconClick]);
  
  const handleUserIconClick = () => {
    setUserIconClick(!userIconClick);
  }
  const handleSearchIconClick=()=>{
    setSearchIconClick(!searchIconClick);
  }

  
  return (
    <>
   
    <div ref={searchRef} className={`px-6 py-6 bg-[#ffffff] sticky top-0 z-50  search-icon ${isSticky ? 'py-1   transition-all duration-300' : 'opacity-100 transition-all duration-200'}`}>
      <div className={`${navbarClass}`}>
      
      <ul className="flex items-center justify-center">
   
    
      <li><Link to={'/'} className="px-6 hover:bg-[#ffffff] hover:rounded-lg py-1 font-mono text-lg">Home</Link></li>
      <li><Link to={'/about'} className="px-6 hover:bg-[#ffffff] hover:rounded-lg py-1 font-mono text-lg">About</Link></li>
      <li><Link to={'/pricing'} className="px-6 hover:bg-[#ffffff] hover:rounded-lg py-1 font-mono text-lg">Pricing</Link></li>
      <li><Link to={'/contact'} className="px-6 hover:bg-[#ffffff] hover:rounded-lg py-1 font-mono text-lg">Contact</Link></li>

    </ul>
  
        {searchIconClick&& <div className=' flex items-center'>
          <input type="text" className='bg-[#ffffff]  outline-none w-[30vw] h-10 rounded-xl ml-9 px-4 font-mono' />
        </div>}
        <div>
        <div className='absolute right-12 top-10   '>
          <div className='flex items-center justify-center'>
          <button onClick={handleSearchIconClick} >
            <FaSearchengin  className='text-3xl  mr-5 search-icon  ' ref={searchRef} />
          </button>
          
          <button onClick={handleUserIconClick}>
            <FaRegUserCircle className='text-2xl dropdown-menu' ref={dropdownRef} />
          </button>
          </div>
          {userIconClick && <>
            <div className=' absolute flex-col bg-[#f3f4f6] mt-6 px-2 right-2 py-3 rounded-xl'>
              <ul className='dropdown-menu' ref={dropdownRef}>
                <li className='px-6 rounded-2xl py-1'>
                  <div>{userName}</div>
                  <div className='text-slate-400 mb-2'>{userEmail}</div>
                  <hr />
                </li>
                <li className='hover:bg-[#ffffff] px-6 rounded-2xl py-1'>Dashboard</li>
                <li className='hover:bg-[#ffffff] px-6 rounded-2xl py-1 whitespace-nowrap'>My Account</li>
                <li className='hover:bg-[#ffffff] px-6 rounded-2xl py-1'>Settings</li>
                <li className='hover:bg-[#ffffff] px-6 rounded-2xl py-1'>Sign Out</li>
              </ul>
            </div>
          </>}
          </div>
        </div>
      </div>
    </div>
    {searchIconClick && <div  className='flex items-center justify-center'>
      <div className='bg-[#f3f4f6]  bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-lg border border-opacity-80 border-[#f3f4f6] rounded-lg p-6 w-[40vw] h-[50vh]'>c</div>
    </div>}
  
    </>
  );
};

export default NavBar;

