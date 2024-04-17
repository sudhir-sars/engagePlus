import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Update state based on scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add event listener

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className={`px-6 py-6 bg-[#e5e7eb] sticky top-0 z-100 ${isSticky ? 'py-0 transition-all duration-300' : 'opacity-100 transition-all duration-500'}`}>
      <div className="bg-white rounded-xl px-6 h-16 flex items-center justify-center">
        <ul className="flex items-center justify-center">
          <li className="px-6 hover:bg-[#e5e7eb] hover:rounded-lg py-1 font-mono text-lg">Home</li>
          <li className="px-6 hover:bg-[#e5e7eb] hover:rounded-lg py-1 font-mono text-lg">About</li>
          <li className="px-6 hover:bg-[#e5e7eb] hover:rounded-lg py-1 font-mono text-lg">Pricing</li>
          <li className="px-6 hover:bg-[#e5e7eb] hover:rounded-lg py-1 font-mono text-lg">Contact</li>
        </ul>
        button
      </div>
    </div>
  );
};

export default NavBar;
