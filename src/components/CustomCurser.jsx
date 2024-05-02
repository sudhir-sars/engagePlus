import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
      
    };
   
    document.addEventListener('mousemove', updateCursorPosition);    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    
    <>
      <div
      className="absolute w-1 h-1 bg-transparent  rounded-full pointer-events-none z-[1000]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0 0 5px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
    
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 25px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 25px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 35px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 35px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 45px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 45px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 55px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 55px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0px 0px 65px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(0px 0px 65px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '17px 12px 75px 5px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(10px 10px 75px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
      <div
      className="absolute  h-1 bg-transparent  rounded-full pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '17px 12px 75px 15px rgba(255, 255, 255, 1)', // Radial shadow
        filter: 'drop-shadow(10px 10px 75px rgba(255, 255, 255, 1))', // White drop shadow
      }}
    >
    </div>
    </>
  );
};

export default CustomCursor;
