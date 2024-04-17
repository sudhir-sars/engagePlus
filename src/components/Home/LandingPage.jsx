import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to adjust textarea height based on content
  const adjustTextareaHeight = () => {
    
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const currentHeight = textAreaRef.current.clientHeight;
      const maxHeight = window.innerHeight * 0.4; // Adjust max height (80% of viewport)
      

      // Dynamically adjust height only if it needs to grow
      if (scrollHeight > currentHeight && scrollHeight <= maxHeight) {
        textAreaRef.current.style.height = `${scrollHeight}px`;
      } else if (scrollHeight > maxHeight) {
        // Stop growing at the defined max height
        textAreaRef.current.style.height = `${maxHeight}px`;
      }
    }
  };

  // Use useEffect to handle height adjustment on initial render and updates
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]); // Trigger on input value change

  return (
    <div className="bg-[#e5e7eb] h-screen">
      
    </div>
  );
};

export default LandingPage;
